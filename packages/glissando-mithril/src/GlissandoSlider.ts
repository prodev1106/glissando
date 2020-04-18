import { getSliderStyle } from 'glissando';
// eslint-disable-next-line import/no-unresolved
import m from 'mithril';

import { GlissandoSlider as TGlissandoSlider } from '../index';

export const GlissandoSlider: TGlissandoSlider = initialVnode => {
  const { model } = initialVnode.attrs;
  const { getState, finalize, setCount, getViewIndices } = model;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onTransitionEnd = (evt: Event) => {
    finalize(getState().targetIndex);
  };

  // Subscribe to changes
  getState.map(m.redraw);

  return {
    onupdate: ({ children }) => {
      const count = (children as m.ChildArray).length;
      if (count > getState().count) {
        setCount(count);
      }
    },
    view: ({ children }) => {
      if (!children) {
        return null;
      }
      const state = getState();
      const { className, style } = getSliderStyle(state);

      return m(
        '.glissando',
        m(
          '.glissando-slider',
          {
            oncreate: (vnode: m.VnodeDOM) => {
              vnode.dom.addEventListener('transitionend', onTransitionEnd);
            },
            onremove: (vnode: m.VnodeDOM) => {
              vnode.dom.removeEventListener('transitionend', onTransitionEnd);
            },
            className,
            style,
          },
          getViewIndices().map(viewIndex =>
            m('.glissando-page', (children as m.ChildArray)[viewIndex]),
          ),
        ),
      );
    },
  };
};
