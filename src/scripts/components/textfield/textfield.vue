<template>
  <!-- Container -->
  <div ref="textfield" :class="className.outer" @click="handleClick">
    <div v-if="!isOutlined" class="mdc-text-field__ripple"></div>

    <!-- Leading icon (optional) -->
    <slot
      name="before"
      :iconClass="[
        UI_TEXTFIELD_ICON.cssClasses.icon,
        UI_TEXTFIELD_ICON.cssClasses.leadingIcon
      ]"
    >
      <i
        v-if="materialIcon"
        :class="
          UI_GLOBAL.getMaterialIconClass([
            UI_TEXTFIELD_ICON.cssClasses.icon,
            UI_TEXTFIELD_ICON.cssClasses.leadingIcon
          ])
        "
        v-text="materialIcon"
      ></i>
    </slot>

    <!-- Textarea -->
    <span v-if="isTextarea" class="mdc-text-field__resizer">
      <textarea
        :id="inputId"
        v-model="inputValue"
        :class="className.input"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :minlength="minlength"
        :maxlength="maxlength"
        :rows="rows"
        :cols="cols"
        :aria-controls="helperTextId"
        :aria-describedby="helperTextId"
        v-bind="attrs"
        @focus="handleFocus"
        @keydown="handleKeydown"
        @input="handleInput"
        @keyup="handleKeyup"
        @change="handleChange"
        @keyup.enter="handleEnter"
        @blur="handleBlur"
      ></textarea>
      <!-- Character counter (optional) -->
      <mdc-textfield-counter v-if="withCounter"></mdc-textfield-counter>
    </span>
    <!-- Input text -->
    <template v-else>
      <span
        v-if="prefixText"
        class="mdc-text-field__affix mdc-text-field__affix--prefix"
        v-text="prefixText"
      ></span>
      <input
        :id="inputId"
        v-model="inputValue"
        :type="inputType"
        :class="className.input"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :pattern="pattern"
        :minlength="minlength"
        :maxlength="maxlength"
        :min="min"
        :max="max"
        :step="step"
        :aria-controls="helperTextId"
        :aria-describedby="helperTextId"
        v-bind="attrs"
        @focus="handleFocus"
        @keydown="handleKeydown"
        @input="handleInput"
        @keyup="handleKeyup"
        @change="handleChange"
        @keyup.enter="handleEnter"
        @blur="handleBlur"
      />
      <span
        v-if="suffixText"
        class="mdc-text-field__affix mdc-text-field__affix--suffix"
        v-text="suffixText"
      ></span>
      <!-- Character counter (optional) -->
      <mdc-textfield-counter v-if="withCounter"></mdc-textfield-counter>
    </template>

    <!-- Trailing icon (optional) -->
    <slot
      name="after"
      :iconClass="[
        UI_TEXTFIELD_ICON.cssClasses.icon,
        UI_TEXTFIELD_ICON.cssClasses.trailingIcon
      ]"
    ></slot>

    <!-- Label text -->
    <mdc-floating-label v-if="!noLabel && !isOutlined" :for="inputId">
      <slot>{{ label }}</slot>
    </mdc-floating-label>

    <!-- Activation indicator -->
    <mdc-notched-outline v-if="isOutlined" :has-label="!noLabel">
      <mdc-floating-label :for="inputId">
        <slot>{{ label }}</slot>
      </mdc-floating-label>
    </mdc-notched-outline>
    <mdc-line-ripple v-else></mdc-line-ripple>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';
import { UI_TEXTFIELD_ICON } from './constants';

// Define textfield constants
const UI_TEXTFIELD = {
  TYPES: {
    filled: 0,
    outlined: 1
  },
  EVENTS: {
    FOCUS: 'focus',
    KEYDOWN: 'keydown',
    INPUT: 'update:modelValue',
    KEYUP: 'keyup',
    CHANGE: 'change',
    ENTER: 'enter',
    BLUR: 'blur'
  },
  PLUS_COMPONENTS: ['UiAutocomplete', 'UiDatepicker']
};

export default {
  name: 'UiTextfield',
  customOptions: {
    UI_GLOBAL,
    UI_TEXTFIELD,
    UI_TEXTFIELD_ICON
  }
};
</script>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  computed,
  watch,
  onMounted,
  useSlots,
  getCurrentInstance
} from 'vue';
import { MDCTextField } from '../../../material-components-web/textfield';
import MdcFloatingLabel from '../floating-label/mdc-floating-label.vue';
import MdcLineRipple from '../floating-label/mdc-line-ripple.vue';
import MdcNotchedOutline from '../floating-label/mdc-notched-outline.vue';
import MdcTextfieldCounter from './mdc-textfield-counter.vue';
import { useGlobal } from '../../config/constants';
import { textfieldProps } from '../../mixins/textfield';
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';
import checkType from '../../mixins/type';
import { inputProps } from '../../mixins/input';
import { helperProps, instanceMap } from '../../mixins/helper-text';

const props = defineProps({
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  outlined: {
    type: Boolean,
    default: false
  },
  // States
  modelValue: {
    type: [String, Number, Array], // NOTE: Array for `<ui-datepicker>`
    default: ''
  },
  // common attributes
  ...inputProps,
  minlength: {
    type: [String, Number, null],
    default: null
  },
  maxlength: {
    type: [String, Number, null],
    default: null
  },
  // <input> attributes
  inputType: {
    type: String,
    default: 'text'
  },
  pattern: {
    type: [String, null],
    default: null
  },
  min: {
    type: [String, Number, null],
    default: null
  },
  max: {
    type: [String, Number, null],
    default: null
  },
  step: {
    type: [String, Number, null],
    default: null
  },
  // <textarea> attributes
  rows: {
    type: [Number, String],
    default: 1
  },
  cols: {
    type: [Number, String],
    default: 20
  },
  // UI attributes
  ...textfieldProps,
  ...iconProps,
  prefixText: {
    type: String,
    default: ''
  },
  suffixText: {
    type: String,
    default: ''
  },
  withCounter: {
    type: Boolean,
    default: false
  },
  ...helperProps
});

const emit = defineEmits([
  UI_GLOBAL.EVENTS.CLICK,
  UI_TEXTFIELD.EVENTS.FOCUS,
  UI_TEXTFIELD.EVENTS.KEYDOWN,
  UI_TEXTFIELD.EVENTS.INPUT,
  UI_TEXTFIELD.EVENTS.KEYUP,
  UI_TEXTFIELD.EVENTS.CHANGE,
  UI_TEXTFIELD.EVENTS.ENTER,
  UI_TEXTFIELD.EVENTS.BLUR
]);
const slots = useSlots();

const { handleClick } = useGlobal({ emit });
const { materialIcon } = useMaterialIcon(props);

const isOutlined = computed(() =>
  checkType(props, UI_TEXTFIELD.TYPES, 'outlined')
);
const isTextarea = computed(() => props.inputType === 'textarea');
const isTextfieldPlus = computed(() =>
  UI_TEXTFIELD.PLUS_COMPONENTS.includes(parent.type.name)
);
const hasLeadingIcon = computed(
  () => !!(materialIcon.value || props.withLeadingIcon || hasBeforeSlot())
);
const hasTrailingIcon = computed(
  () => !!(props.withTrailingIcon || hasAfterSlot())
);
const noLabel = computed(() => {
  const hasLabel = props.label || slots.default;
  return !!(props.placeholder || !hasLabel);
});
const className = computed(() => ({
  outer: {
    'mdc-text-field': true,
    'mdc-text-field--filled': !isOutlined.value,
    'mdc-text-field--outlined': isOutlined.value,
    'mdc-text-field--fullwidth': props.fullwidth,
    'mdc-text-field--textarea': isTextarea.value,
    'mdc-text-field--disabled': props.disabled,
    'mdc-text-field--with-leading-icon': hasLeadingIcon.value,
    'mdc-text-field--with-trailing-icon': hasTrailingIcon.value,
    'mdc-text-field--no-label': noLabel.value,
    'mdc-text-field--end-aligned': props.endAligned,
    'mdc-text-field--with-internal-counter': props.withCounter
  },
  input: 'mdc-text-field__input'
}));

const instance = getCurrentInstance();
const parent = instance.parent;
const textfield = ref(null);
const state = reactive({
  $textField: null,
  inputValue: props.modelValue
});
const { $textField, inputValue } = toRefs(state);

onMounted(() => {
  state.$textField = new MDCTextField(textfield.value);

  if (props.helperTextId) {
    instanceMap.set(`${props.helperTextId}-previous`, state.$textField);
  }

  watch(
    () => props.modelValue,
    (val, oldVal) => {
      state.inputValue = val;

      // fix(ui): dynamic assignment bug
      if (!oldVal && val) {
        state.$textField.value = val;
      }

      // fix(ui): focus bug
      if (oldVal && !val) {
        try {
          // fix(@material-components): sync counter bug
          props.maxlength &&
            state.$textField.characterCounter_.foundation.setCounterValue(
              0,
              props.maxlength
            );
        } catch (e) {}

        setTimeout(() => {
          state.$textField.foundation.deactivateFocus();
        }, 1);
      }
    }
  );
  watch(
    () => props.disabled,
    (val) => (state.$textField.disabled = val)
  );
});

const hasBeforeSlot = () =>
  isTextfieldPlus.value ? parent?.exposed?.hasLeadingIcon.value : slots.before;
const hasAfterSlot = () =>
  isTextfieldPlus.value ? parent?.exposed?.hasTrailingIcon.value : slots.after;

function handleFocus(event) {
  emit(UI_TEXTFIELD.EVENTS.FOCUS, event);
}
function handleKeydown(event) {
  emit(UI_TEXTFIELD.EVENTS.KEYDOWN, event);
}
function handleInput(event) {
  emit(UI_TEXTFIELD.EVENTS.INPUT, event.target.value);
}
function handleKeyup(event) {
  emit(UI_TEXTFIELD.EVENTS.KEYUP, event);
}
function handleChange(event) {
  emit(UI_TEXTFIELD.EVENTS.CHANGE, event);
}
function handleEnter(event) {
  emit(UI_TEXTFIELD.EVENTS.ENTER, event.target.value);
}
function handleBlur(event) {
  // fix(@material-components): valid bug on blur
  setTimeout(() => {
    const helperTextChangeHandler = instanceMap.get(
      `${props.helperTextId}-next`
    );
    helperTextChangeHandler && helperTextChangeHandler();
  }, 1);

  emit(UI_TEXTFIELD.EVENTS.BLUR, event);
}

defineExpose({
  textfield,
  $textField
});
</script>
