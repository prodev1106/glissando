// eslint-disable-next-line import/no-unresolved
import Stream from 'mithril/stream';

export type TAppState = {
  isVisible: boolean;
  isAnimated: boolean;
  isRtl: boolean;
  count: number;
  selectIndices: number[];
};

type PatchFn = (state: TAppState) => TAppState;

type TChangedAppState = TAppState | typeof Stream.SKIP;
export type TChangedAppStates = Stream<TChangedAppState>;

export type TAppStates = Stream<TAppState>;

export type TAppModel = {
  getState: TAppStates;
  getChanges: TChangedAppStates;
  setIsVisible: (value: boolean) => void;
  setIsAnimated: (value: boolean) => void;
  setIsRtl: (value: boolean) => void;
  setCount: (value: number) => void;
};

const createSelectIndices = (count: number) =>
  [...Array(count)].map((_, i) => i);

export const AppModel = (props: Partial<TAppState> = {}) => {
  const initialState: TAppState = {
    isVisible: props.isVisible,
    isAnimated: props.isAnimated,
    isRtl: props.isRtl,
    count: props.count,
    selectIndices: createSelectIndices(props.count),
  };

  const appState = {
    initialState,
    actions: (update: Stream<PatchFn>) => {
      return {
        setIsVisible: (isVisible: boolean) => {
          update((state: TAppState) => {
            return {
              ...state,
              isVisible,
            };
          });
        },
        setIsAnimated: (isAnimated: boolean) => {
          update((state: TAppState) => {
            return {
              ...state,
              isAnimated,
            };
          });
        },
        setIsRtl: (isRtl: boolean) => {
          update((state: TAppState) => {
            return {
              ...state,
              isRtl,
            };
          });
        },
        setCount: (count: number) => {
          update((state: TAppState) => {
            return {
              ...state,
              count,
              selectIndices: createSelectIndices(count),
            };
          });
        },
      };
    },
  };

  const update: Stream<PatchFn> = Stream<PatchFn>();

  const states: TAppStates = Stream.scan(
    (state: TAppState, patch: PatchFn) => patch(state),
    {
      ...appState.initialState,
    },
    update,
  );

  const actions = {
    ...appState.actions(update),
  };

  const changedStates: TChangedAppStates = Stream.scan(
    (state: TChangedAppState, value) =>
      JSON.stringify(state, null, 2) === JSON.stringify(value, null, 2)
        ? Stream.SKIP
        : value,
    {
      ...appState.initialState,
    },
    states,
  );

  return {
    getState: states,
    getChanges: changedStates,
    ...actions,
  };
};
