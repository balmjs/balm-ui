import { reactive, computed, watch, onMounted } from 'vue';
import createVueApp from '../config/ssr';
import { getOptions, createModal } from '../utils/modal';

// Define toast constants
const UI_TOAST = {
  id: 'balmui-toast',
  timeoutMs: {
    MIN: 2000,
    MAX: 3500,
    DEFAULTS: 2750
  },
  position: {
    TOP: 'top',
    BOTTOM: 'bottom',
    CENTER: 'center'
  }
};

const DEFAULT_OPTIONS = {
  className: '',
  timeoutMs: UI_TOAST.timeoutMs.DEFAULTS,
  message: '',
  position: UI_TOAST.position.BOTTOM
};

let globalOptions = DEFAULT_OPTIONS;
let toastApp;
let toastTimer;
let toastElTimer;

const template = `<div :class="className">
  <div class="mdc-snackbar__surface">
    <div class="mdc-snackbar__label" v-text="message"></div>
  </div>
</div>`;

function createToast(options) {
  createModal(UI_TOAST.id);

  return createVueApp({
    name: 'Toast',
    expose: ['render'],
    setup() {
      const state = reactive({
        open: false,
        opening: true,
        opened: false,
        options
      });

      const positionClassName = computed(() =>
        ['top', 'center'].includes(state.options.position)
          ? `mdc-toast--${state.options.position}`
          : ''
      );
      const className = computed(() => [
        'mdc-snackbar',
        'mdc-toast',
        positionClassName.value,
        state.options.className,
        {
          'mdc-snackbar--opening': state.opening,
          'mdc-snackbar--open': state.opened
        }
      ]);
      const message = computed(() => state.options.message);

      watch(
        () => state.open,
        (val) => {
          if (val) {
            // animation
            setTimeout(() => {
              state.opened = true;
              setTimeout(() => {
                state.opening = false;
              }, 150);
            }, 150);
          } else {
            // reset
            state.opening = true;
            state.opened = false;
          }
        }
      );

      function hide() {
        state.open = false;
      }
      function show() {
        state.open = true;
        // hide toast
        toastTimer = setTimeout(() => hide(), state.options.timeoutMs);
      }
      function render(newOptions) {
        if (
          newOptions.timeoutMs <= UI_TOAST.timeoutMs.MAX &&
          newOptions.timeoutMs >= UI_TOAST.timeoutMs.MIN
        ) {
          state.options = newOptions;

          show();
        } else {
          throw new Error(
            `[$toast]: The timeoutMs of the toast must be between ${UI_TOAST.timeoutMs.MIN} and ${UI_TOAST.timeoutMs.MAX}`
          );
        }
      }

      onMounted(() => render(options));

      return {
        className,
        message,
        render
      };
    },
    template
  });
}

function toast(customOptions = {}) {
  const options = getOptions(globalOptions, customOptions);

  if (toastApp) {
    clearTimeout(toastTimer);
    clearTimeout(toastElTimer);

    toastApp.render(options);
  } else {
    toastApp = createToast(options).mount(`#${UI_TOAST.id}`);
  }
}

function install(app, options = {}) {
  globalOptions = Object.assign({}, DEFAULT_OPTIONS, options);

  app.config.globalProperties.$toast = toast;
  app.provide('toast', toast);
}

const $toast = {
  install
};

const useToast = () => toast;

export default $toast;
export { install, useToast };
