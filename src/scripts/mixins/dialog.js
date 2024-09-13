import { reactive, toRefs, onMounted, onBeforeUnmount, nextTick } from 'vue';
import { removeModel } from '../utils/modal';
import { unlockScroll } from './scroll-lock';

const alertDialogId = 'balmui-alert-dialog';

function useDialog({ app, el, constants, options, done, callback }) {
  const state = reactive({
    open: false,
    options
  });

  onMounted(() => nextTick(() => (state.open = true)));

  onBeforeUnmount(() => removeModel(el));

  function handleClose() {
    state.open = false;
    unlockScroll();

    app.unmount(`#${constants.id}`);
  }

  function handleClick(result) {
    handleClose();

    if (typeof state.options.callback === 'function') {
      state.options.callback(result);
    } else {
      constants.id === alertDialogId ? done() : callback(result);
    }
  }

  return {
    ...toRefs(state),
    handleClick
  };
}

export { alertDialogId, useDialog };
