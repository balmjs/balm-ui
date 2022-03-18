<template>
  <div ref="dialog" :class="className">
    <!-- Container -->
    <div class="mdc-dialog__container">
      <div
        ref="dialogSurface"
        class="mdc-dialog__surface"
        role="alertdialog"
        aria-modal="true"
      >
        <slot></slot>
      </div>
    </div>
    <!-- Scrim -->
    <template v-if="!noScrim">
      <div
        v-if="maskClosable"
        class="mdc-dialog__scrim"
        @click="handleClose"
      ></div>
      <div v-else class="mdc-dialog__scrim" @click.stop></div>
    </template>
  </div>
</template>

<script>
import { UI_DIALOG } from './constants';

const name = 'UiDialog';

export default {
  name,
  customOptions: {
    name,
    UI_DIALOG
  }
};
</script>

<script setup>
import {
  ref,
  reactive,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick
} from 'vue';
import { MDCDialog } from '../../../material-components-web/dialog';
import {
  strings,
  cssClasses
} from '../../../material-components-web/dialog/constants';

const props = defineProps({
  // States
  modelValue: {
    type: Boolean,
    default: false
  },
  // UI attributes
  escapeKey: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: true
  },
  maskClosable: {
    type: Boolean,
    default: false
  },
  noScrim: {
    type: Boolean,
    default: false
  },
  resetScroll: {
    type: Boolean,
    default: false
  },
  fullscreen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([
  UI_DIALOG.EVENTS.CHANGE,
  UI_DIALOG.EVENTS.CLOSE,
  UI_DIALOG.EVENTS.CONFIRM
]);

const dialog = ref(null);
const dialogSurface = ref(null);
const state = reactive({
  $dialog: null,
  dialogBody: null
});

const className = computed(() => ({
  'mdc-dialog': true,
  'mdc-dialog--fullscreen': props.fullscreen
}));

onMounted(() => {
  const el = dialog.value;
  state.$dialog = new MDCDialog(el);

  nextTick(() => {
    state.dialogBody = dialogSurface.value.querySelector(
      `.${UI_DIALOG.cssClasses.content}`
    );

    // Accessibility: Using `aria-hidden` as a fallback for `aria-modal`
    state.$dialog.listen(strings.OPENED_EVENT, () => {
      state.dialogBody.setAttribute('aria-hidden', 'true');
    });
    state.$dialog.listen(strings.CLOSING_EVENT, ({ detail }) => {
      state.dialogBody.removeAttribute('aria-hidden');

      // fix: the escape key
      if (state.$dialog.escapeKeyAction) {
        handleClose();
      }
    });

    if (
      !(el.querySelector('.mdc-button') || el.querySelector('.mdc-icon-button'))
    ) {
      console.warn(
        `[${name}]: At least one <ui-button> or <ui-icon-button> needs to be added to the <ui-dialog>`
      );
    }

    if (!(props.escapeKey && props.closable)) {
      state.$dialog.escapeKeyAction = '';
    }
  });

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        state.$dialog.open();
      } else {
        state.$dialog.close();
        if (props.resetScroll) {
          state.dialogBody.scrollTop = 0;
        }
      }
    }
  );
});

onBeforeUnmount(() =>
  document.querySelector('body').classList.remove(cssClasses.SCROLL_LOCK)
); // NOTE: for conditional rendering

function handleClose(forceQuit = false) {
  if (forceQuit || props.closable) {
    emit(UI_DIALOG.EVENTS.CHANGE, false);
  }
  emit(UI_DIALOG.EVENTS.CLOSE);
}

function handleAccept() {
  emit(UI_DIALOG.EVENTS.CONFIRM, true);
  handleClose();
}

function handleCancel() {
  emit(UI_DIALOG.EVENTS.CONFIRM, false);
  handleClose();
}
</script>
