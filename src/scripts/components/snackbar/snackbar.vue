<template>
  <!-- Container -->
  <div ref="snackbar" :class="className">
    <div class="mdc-snackbar__surface" role="status" aria-relevant="additions">
      <!-- Text label -->
      <div class="mdc-snackbar__label" aria-atomic="false">
        <slot>{{ message }}</slot>
      </div>
      <!-- Action (optional) -->
      <div class="mdc-snackbar__actions" aria-atomic="true">
        <slot name="action" :actionClass="actionButtonClassName">
          <mdc-icon-button v-if="canDismiss" :class="actionButtonClassName">
            close
          </mdc-icon-button>
          <template v-else>
            <mdc-button v-if="actionButtonText" :class="actionButtonClassName">
              {{ actionButtonText }}
            </mdc-button>
          </template>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
// Define snackbar constants
const name = 'UiSnackbar';

const UI_SNACKBAR = {
  ACTION_TYPE: {
    ACTION_BUTTON: 0,
    DISMISS_ICON: 1
  },
  timeoutMs: {
    MIN: 4000,
    MAX: 10000,
    DEFAULTS: 5000
  },
  position: {
    TOP: 'top',
    BOTTOM: 'bottom',
    CENTER: 'center'
  },
  EVENTS: {
    CHANGE: 'update:modelValue',
    CLOSED: 'closed'
  }
};

export default {
  name,
  customOptions: {
    name,
    UI_SNACKBAR
  }
};
</script>

<script setup>
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { MDCSnackbar } from '../../../material-components-web/snackbar';
import { strings } from '../../../material-components-web/snackbar/constants';
import MdcButton from '../button/mdc-button.vue';
import MdcIconButton from '../icon-button/mdc-icon-button.vue';

const props = defineProps({
  actionType: {
    type: Number,
    default: UI_SNACKBAR.ACTION_TYPE.ACTION_BUTTON
  },
  // States
  modelValue: {
    type: Boolean,
    default: false
  },
  timeoutMs: {
    type: [Number, String],
    default: UI_SNACKBAR.timeoutMs.DEFAULTS
  },
  message: {
    type: String,
    default: ''
  },
  actionButtonText: {
    type: String,
    default: ''
  },
  // UI attributes
  stacked: {
    type: Boolean,
    default: false
  },
  leading: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: UI_SNACKBAR.position.BOTTOM
  }
});

const emit = defineEmits([
  UI_SNACKBAR.EVENTS.CHANGE,
  UI_SNACKBAR.EVENTS.CLOSED
]);

const snackbar = ref(null);
const state = reactive({
  $snackbar: null
});

const positionClassName = computed(() =>
  ['top', 'center'].includes(props.position)
    ? `mdc-snackbar--${props.position}`
    : ''
);
const isOpen = computed(
  () =>
    snackbar.value && snackbar.value.classList.contains('mdc-snackbar--open')
); // fix(@ui): for `position`
const className = computed(() => {
  return [
    {
      'mdc-snackbar': true,
      'mdc-snackbar--stacked': props.stacked,
      'mdc-snackbar--leading': props.leading, // tablet and desktop only
      'mdc-snackbar--open': isOpen.value
    },
    positionClassName.value
  ];
});
const canDismiss = computed(
  () => props.actionType === UI_SNACKBAR.ACTION_TYPE.DISMISS_ICON
);
const actionButtonClassName = computed(() =>
  canDismiss.value ? 'mdc-snackbar__dismiss' : 'mdc-snackbar__action'
);

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      state.$snackbar.open();
    }
  }
);
watch(
  () => props.timeoutMs,
  (val) => {
    setTimeoutMs(+val);
  }
);
watch(
  () => props.message,
  (val) => {
    state.$snackbar.labelText = val;
  }
);

onMounted(() => {
  state.$snackbar = new MDCSnackbar(snackbar.value);

  if (props.timeoutMs !== UI_SNACKBAR.timeoutMs.DEFAULTS) {
    setTimeoutMs(+props.timeoutMs);
  }
  if (props.message) {
    state.$snackbar.labelText = props.message;
  }

  state.$snackbar.listen(strings.CLOSED_EVENT, () => {
    emit(UI_SNACKBAR.EVENTS.CHANGE, false);
    emit(UI_SNACKBAR.EVENTS.CLOSED);
  });
});

function setTimeoutMs(val) {
  if (val >= UI_SNACKBAR.timeoutMs.MIN && val <= UI_SNACKBAR.timeoutMs.MAX) {
    state.$snackbar.timeoutMs = val;
  } else {
    console.warn(
      `[${name}]: The 'timeoutMs' prop must be between ${UI_SNACKBAR.timeoutMs.MIN} and ${UI_SNACKBAR.timeoutMs.MAX}`
    );
  }
}
</script>
