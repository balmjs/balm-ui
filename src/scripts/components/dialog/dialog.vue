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
// Define dialog constants
const UI_DIALOG = {
  cssClasses: {
    content: 'mdc-dialog__content'
  },
  EVENTS: {
    CHANGE: 'update:modelValue',
    CLOSE: 'close',
    CONFIRM: 'confirm'
  }
};

export default {
  name: 'UiDialog',
  customOptions: {
    UI_DIALOG
  }
};
</script>

<script setup>
import {
  ref,
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
  scrollable: {
    type: Boolean,
    default: false
  },
  stacked: {
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
let $dialog = null;
let dialogBody = null;

const className = computed(() => ({
  'mdc-dialog': true,
  'mdc-dialog--scrollable': props.scrollable,
  'mdc-dialog--stacked': props.stacked,
  'mdc-dialog--fullscreen': props.fullscreen
}));

onMounted(() => {
  const el = dialog.value;
  $dialog = new MDCDialog(el);

  nextTick(() => {
    dialogBody = dialogSurface.value.querySelector(
      `.${UI_DIALOG.cssClasses.content}`
    );

    // Accessibility: Using `aria-hidden` as a fallback for `aria-modal`
    $dialog.listen(strings.OPENED_EVENT, () => {
      dialogBody.setAttribute('aria-hidden', 'true');
    });
    $dialog.listen(strings.CLOSING_EVENT, ({ detail }) => {
      dialogBody.removeAttribute('aria-hidden');

      // fix: the escape key
      if ($dialog.escapeKeyAction) {
        handleClose();
      }
    });

    if (
      !(el.querySelector('.mdc-button') || el.querySelector('.mdc-icon-button'))
    ) {
      console.warn(
        '[UiDialog]',
        `At least one <ui-button> or <ui-icon-button> needs to be added to the <ui-dialog>`
      );
    }

    if (!(props.escapeKey && props.closable)) {
      $dialog.escapeKeyAction = '';
    }
  });

  watch(
    () => props.modelValue,
    (val) => {
      if (val) {
        $dialog.open();
      } else {
        $dialog.close();
        if (props.resetScroll) {
          dialogBody.scrollTop = 0;
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
