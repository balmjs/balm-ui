<template>
  <div ref="select" :class="className">
    <div
      class="mdc-select__anchor"
      role="button"
      aria-haspopup="listbox"
      :aria-required="required"
      :aria-disabled="disabled"
      :aria-controls="helperTextId"
      :aria-describedby="helperTextId"
    >
      <!-- Label -->
      <mdc-notched-outline v-if="isOutlined" :has-label="!noLabel">
        <mdc-floating-label>
          <slot>{{ label }}</slot>
        </mdc-floating-label>
      </mdc-notched-outline>
      <template v-else>
        <span class="mdc-select__ripple"></span>
        <mdc-floating-label v-if="!noLabel">
          <slot>{{ label }}</slot>
        </mdc-floating-label>
      </template>
      <!-- Leading Icon -->
      <slot name="icon" :iconClass="UI_SELECT.cssClasses.icon">
        <i
          v-if="materialIcon"
          :class="UI_GLOBAL.getMaterialIconClass(UI_SELECT.cssClasses.icon)"
          v-text="materialIcon"
        ></i>
      </slot>
      <!-- Enhanced Select -->
      <span class="mdc-select__selected-text-container">
        <span class="mdc-select__selected-text"></span>
      </span>
      <span class="mdc-select__dropdown-icon">
        <slot name="dropdown-icon">
          <svg
            class="mdc-select__dropdown-icon-graphic"
            viewBox="7 10 10 5"
            focusable="false"
          >
            <polygon
              class="mdc-select__dropdown-icon-inactive"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"
            />
            <polygon
              class="mdc-select__dropdown-icon-active"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"
            />
          </svg>
        </slot>
      </span>
      <mdc-line-ripple v-if="!isOutlined"></mdc-line-ripple>
    </div>
    <!-- Options -->
    <div :class="menuClassName" @click="off">
      <ul :class="deprecatedListClassNameMap['mdc-list']" role="listbox">
        <li
          v-for="(option, index) in currentOptions"
          :key="index"
          :class="[
            deprecatedListClassNameMap['mdc-list-item'],
            ...getDeprecatedItemClasses({
              selected: option[optionFormat.value] === selectedValue,
              disabled: option.disabled
            })
          ]"
          :data-value="option[optionFormat.value]"
          :aria-selected="option[optionFormat.value] === selectedValue"
          :aria-disabled="option.disabled"
          role="option"
        >
          <span
            :class="deprecatedListClassNameMap['mdc-list-item__ripple']"
          ></span>
          <span
            v-if="option[optionFormat.label]"
            :class="deprecatedListClassNameMap['mdc-list-item__text']"
            v-text="option[optionFormat.label]"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';
import { deprecatedListClassNameMap } from '../list/constants';

// Define select constants
const UI_SELECT = {
  TYPES: {
    filled: 0,
    outlined: 1
  },
  cssClasses: {
    icon: 'mdc-select__icon'
  },
  EVENTS: {
    CHANGE: 'update:modelValue',
    SELECTED: 'selected'
  },
  DEFAULT_SELECTED_INDEX: -1
};

export default {
  name: 'UiSelect',
  customOptions: {
    UI_GLOBAL,
    UI_SELECT,
    deprecatedListClassNameMap
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
  onBeforeMount,
  onMounted,
  nextTick,
  useSlots,
  getCurrentInstance
} from 'vue';
import { MDCSelect } from '../../../material-components-web/select';
import { strings } from '../../../material-components-web/select/constants';
import MdcFloatingLabel from '../floating-label/mdc-floating-label.vue';
import MdcLineRipple from '../floating-label/mdc-line-ripple.vue';
import MdcNotchedOutline from '../floating-label/mdc-notched-outline.vue';
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';
import { helperProps, instanceMap } from '../../mixins/helper-text';
import { getDeprecatedItemClasses } from '../../mixins/deprecated-list';
import checkType from '../../mixins/type';
import {
  optionFormatDefaultValue,
  checkOptionFormat
} from '../../utils/option-format';
import { isOverflowInsideComponent } from '../dialog/constants';

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
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array,
    default: () => []
  },
  optionFormat: {
    type: Object,
    default: () => optionFormatDefaultValue
  },
  defaultLabel: {
    type: String,
    default: ''
  },
  defaultValue: {
    type: [String, Number],
    default: ''
  },
  // UI attributes
  ...iconProps,
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  required: {
    type: Boolean,
    default: false
  },
  fullwidth: {
    type: Boolean,
    default: false
  },
  withLeadingIcon: {
    type: Boolean,
    default: false
  },
  ...helperProps
});

const emit = defineEmits([UI_SELECT.EVENTS.CHANGE, UI_SELECT.EVENTS.SELECTED]);
const slots = useSlots();

const instance = getCurrentInstance();
const parent = instance.parent;
const select = ref(null);
const state = reactive({
  $select: null,
  currentOptions: [],
  selectedValue: props.modelValue
});
const { currentOptions, selectedValue } = toRefs(state);

const { materialIcon } = useMaterialIcon(props);

const isOutlined = computed(() =>
  checkType(props, UI_SELECT.TYPES, 'outlined')
);
const hasLeadingIcon = computed(
  () => !!(materialIcon.value || props.withLeadingIcon || slots.icon)
);
const noLabel = computed(() => !(props.label || slots.default));
const inDialog = computed(() => {
  // fix(@material-components): overflow inside of the dialog
  if (state.$select) {
    state.$select.menu.quickOpen = true;
  }
  return isOverflowInsideComponent(parent);
});
const className = computed(() => ({
  'mdc-select': true,
  'mdc-select--filled': !isOutlined.value,
  'mdc-select--outlined': isOutlined.value,
  'mdc-select--fullwidth': props.fullwidth,
  'mdc-select--with-leading-icon': hasLeadingIcon.value,
  'mdc-select--no-label': noLabel.value,
  'mdc-select--required': props.required,
  'mdc-select--disabled': props.disabled,
  'mdc-select--in-dialog': inDialog.value
}));
const menuClassName = computed(() => [
  'mdc-select__menu',
  'mdc-menu',
  'mdc-menu-surface',
  {
    'mdc-menu-surface--fullwidth': props.fullwidth
  }
]);

onBeforeMount(() => checkOptionFormat('<ui-select>', props.optionFormat));

onMounted(() => {
  state.$select = new MDCSelect(select.value);

  if (props.helperTextId) {
    instanceMap.set(`${props.helperTextId}-previous`, state.$select);
  }

  state.$select.listen(strings.CHANGE_EVENT, ({ detail }) => {
    // NOTE: for dynamic options
    nextTick(() => {
      const hasOptions = props.defaultLabel
        ? state.currentOptions.length > 1
        : state.currentOptions.length;

      if (hasOptions) {
        const selected = getSelected(detail.index);
        // fix(ui): twice trigger
        if (state.selectedValue !== selected.value) {
          emit(UI_SELECT.EVENTS.CHANGE, selected.value);
          emit(UI_SELECT.EVENTS.SELECTED, selected);
        }
      }
    });
  });

  init();

  watch(
    () => props.modelValue,
    (val) => {
      state.selectedValue = val;

      setCurrentOption();
    }
  );
  watch(
    () => props.options,
    (val) => init(val),
    { deep: true }
  );
  watch(
    () => props.disabled,
    (val) => {
      if (state.$select) {
        state.$select.disabled = val;
      }
    }
  );
});

function init(options = props.options) {
  // Set default option
  let newOptions = [...options];
  if (props.defaultLabel) {
    let defaultOption = {};
    defaultOption[props.optionFormat.label] = props.defaultLabel;
    defaultOption[props.optionFormat.value] = props.defaultValue || ' '; // fix(ui): floating label bug when the value is empty
    newOptions.unshift(defaultOption);
  }
  state.currentOptions = newOptions;

  // Set current option
  nextTick(() => {
    state.$select.layoutOptions();
    setCurrentOption();
  });
}

function setCurrentOption() {
  let currentIndex = UI_SELECT.DEFAULT_SELECTED_INDEX + 1;

  for (
    let index = 0, itemCount = state.currentOptions.length;
    index < itemCount;
    index++
  ) {
    let currentOption = state.currentOptions[index];
    if (currentOption[props.optionFormat.value] === state.selectedValue) {
      currentIndex = index;
      break;
    }
  }

  if (currentIndex > UI_SELECT.DEFAULT_SELECTED_INDEX) {
    state.$select.selectedIndex = currentIndex;
  }
}

function getSelected(index) {
  let selected = props.options[index];
  if (props.defaultLabel) {
    let defaultOption = {};
    defaultOption[props.optionFormat.value] =
      props.defaultValue === ' ' ? '' : props.defaultValue; // fix(ui): floating label bug when the value is empty
    defaultOption[props.optionFormat.label] = props.defaultLabel;

    selected = index === 0 ? defaultOption : props.options[index - 1];
  }

  return {
    index,
    value: selected[props.optionFormat.value],
    label: selected[props.optionFormat.label]
  };
}

function off() {
  if (inDialog.value && state.$select.menu.open) {
    state.$select.menu.open = false;
  }
}
</script>
