import Stream from 'mithril/stream';
export { default as Stream } from 'mithril/stream';

// eslint-disable-next-line import/no-unresolved
const calculateNewIndex = (state, index) => {
    if (index === undefined || Number.isNaN(index)) {
        return {
            newIndex: state.index,
            shouldUpdate: false,
        };
    }
    const newIndex = Math.min(index, state.count - 1);
    const isValid = newIndex >= 0 && newIndex < state.count;
    const shouldUpdate = isValid && newIndex !== state.index;
    return {
        newIndex,
        shouldUpdate,
    };
};
const setIndex = (state) => (change) => {
    const { newIndex, shouldUpdate } = calculateNewIndex(state, change.index);
    return shouldUpdate
        ? {
            ...state,
            ...(change.animate ? undefined : { index: newIndex }),
            targetIndex: newIndex,
            isAnimating: !!change.animate,
        }
        : state;
};
const setLocation = (state) => (change) => {
    if (!state.locations || state.locations.length === 0) {
        return state;
    }
    let locationStr = change.location.toString();
    let index = state.locations.indexOf(locationStr);
    if (index === -1) {
        // Location does not exist; default to first index
        index = 0;
        locationStr = state.locations[index];
    }
    const shouldAnimate = state.location === undefined
        ? false // don't animate if we are setting the first location
        : change.animate !== false;
    const newState = {
        ...state,
        location: locationStr,
    };
    const indexChange = {
        index,
        animate: shouldAnimate,
    };
    return setIndex(newState)(indexChange);
};
const lookupLocation = (state) => (changeFn) => {
    if (!state.locations || !state.location) {
        return undefined;
    }
    const index = state.locations.indexOf(state.location);
    if (index === -1) {
        return undefined;
    }
    return state.locations[changeFn(index)];
};
const GlissandoModel = (props = {}) => {
    const sideViews = props.sideViews || 1;
    const slots = [...Array(1 + sideViews * 2)].map((_, i) => i - sideViews);
    const initialState = {
        index: props.index || 0,
        targetIndex: props.index || 0,
        isAnimating: false,
        count: 0,
        direction: 'ltr',
        slots,
        sideViews,
    };
    const glissandoState = {
        initialState,
        actions: (update) => {
            return {
                previous: ({ animate } = { animate: true }) => {
                    update((state) => {
                        return setIndex(state)({
                            index: state.index - 1,
                            animate: animate !== false,
                        });
                    });
                },
                next: ({ animate } = { animate: true }) => {
                    update((state) => {
                        return setIndex(state)({
                            index: state.index + 1,
                            animate: animate !== false,
                        });
                    });
                },
                goTo: ({ index, location, animate, }) => {
                    update((state) => {
                        if (location) {
                            const change = {
                                location,
                                animate,
                            };
                            return setLocation(state)(change);
                        }
                        if (index === undefined) {
                            return state;
                        }
                        const change = {
                            index,
                            animate,
                        };
                        return setIndex(state)(change);
                    });
                },
                finalize: (index) => {
                    update((state) => {
                        return setIndex(state)({
                            index,
                            animate: false,
                        });
                    });
                },
                setCount: (count) => {
                    update((state) => {
                        return setIndex({
                            ...state,
                            count,
                        })({ index: state.index });
                    });
                },
                setDirection: (direction) => {
                    update((state) => {
                        return {
                            ...state,
                            direction,
                        };
                    });
                },
                setLocations: (locations) => {
                    update((state) => {
                        return {
                            ...state,
                            locations,
                        };
                    });
                },
            };
        },
        selectors: (states) => {
            return {
                hasNext: () => {
                    const state = states();
                    return state.index < state.count - 1;
                },
                hasPrevious: () => {
                    const state = states();
                    return state.index > 0;
                },
                isAnimating: () => {
                    const state = states();
                    return state.isAnimating;
                },
                getViewIndices: () => {
                    const state = states();
                    return slots.map(slotIndex => {
                        let index = slotIndex + state.index + 0;
                        if (slotIndex < 0 && state.targetIndex < state.index) {
                            index = slotIndex + state.targetIndex + 1;
                        }
                        else if (slotIndex > 0 && state.targetIndex > state.index) {
                            index = slotIndex + state.targetIndex - 1;
                        }
                        return index;
                    });
                },
                getLocation: () => {
                    const state = states();
                    return lookupLocation(state)(index => index);
                },
                getNextLocation: () => {
                    const state = states();
                    return lookupLocation(state)(index => index + 1);
                },
                getPreviousLocation: () => {
                    const state = states();
                    return lookupLocation(state)(index => index - 1);
                },
            };
        },
    };
    const update = Stream();
    const states = Stream.scan((state, patch) => patch(state), {
        ...glissandoState.initialState,
    }, update);
    const actions = {
        ...glissandoState.actions(update),
    };
    const selectors = {
        ...glissandoState.selectors(states),
    };
    const changedStates = Stream.scan((state, value) => JSON.stringify(state, null, 2) === JSON.stringify(value, null, 2)
        ? Stream.SKIP
        : value, Stream.SKIP, states);
    const getChanges = Stream.lift(value => value, changedStates);
    return {
        getState: states,
        getChanges,
        ...actions,
        ...selectors,
    };
};

const getSliderStyle = (state) => {
    const slotCount = 2 * state.sideViews + 1;
    const slotWidth = 100 / slotCount;
    const direction = state.direction === 'rtl' ? 1 : -1;
    let sliderTranslateX = direction * slotWidth * (state.sideViews + 0);
    if (state.targetIndex > state.index) {
        sliderTranslateX = direction * slotWidth * (state.sideViews + 1);
    }
    else if (state.targetIndex < state.index) {
        sliderTranslateX = direction * slotWidth * (state.sideViews - 1);
    }
    const style = {
        width: `${slotCount * 100}%`,
        transform: `translateX(${sliderTranslateX}%)`,
        ...(!state.isAnimating
            ? {
                transitionDuration: '0ms',
            }
            : undefined),
    };
    const className = state.isAnimating ? 'glissando-animating' : '';
    return { style, className };
};

export { GlissandoModel, getSliderStyle };
