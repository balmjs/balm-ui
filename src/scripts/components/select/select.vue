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
      :style="style"
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
          :class="getMaterialIconClass(UI_SELECT.cssClasses.icon)"
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
    <div :class="menuClassName" :style="style">
      <ul :class="deprecatedClassNameMap['mdc-list']" role="listbox">
        <li
          v-for="(option, index) in currentOptions"
          :key="index"
          :class="[
            deprecatedClassNameMap['mdc-list-item'],
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
          <span :class="deprecatedClassNameMap['mdc-list-item__ripple']"></span>
          <span
            v-if="option[optionFormat.label]"
            :class="deprecatedClassNameMap['mdc-list-item__text']"
            v-text="option[optionFormat.label]"
          ></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { deprecatedClassNameMap } from '../../../material-components-web/list/constants';
import { getMaterialIconClass } from '../../mixins/material-icon';

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
  inheritAttrs: false,
  customOptions: {
    UI_SELECT,
    getMaterialIconClass,
    deprecatedClassNameMap
  }
};
</script>

<script setup>
import {
  ref,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  nextTick,
  useSlots
} from 'vue';
import { MDCSelect } from '../../../material-components-web/select';
import { strings } from '../../../material-components-web/select/constants';
import MdcFloatingLabel from '../floating-label/mdc-floating-label.vue';
import MdcLineRipple from '../floating-label/mdc-line-ripple.vue';
import MdcNotchedOutline from '../floating-label/mdc-notched-outline.vue';
import { icon, useMaterialIcon } from '../../mixins/material-icon';
import { helperTextId, instanceMap } from '../../mixins/helper-text';
import checkType from '../../mixins/type';
import {
  optionFormatDefaultValue,
  checkOptionFormat
} from '../../utils/option-format';

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
  icon,
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
  helperTextId,
  fixed: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_SELECT.EVENTS.CHANGE, UI_SELECT.EVENTS.SELECTED]);

const select = ref(null);
let $select = null;
let currentOptions = [];
const selectedValue = ref(props.modelValue);

const { materialIcon } = useMaterialIcon(props);

const isOutlined = computed(() =>
  checkType(props, UI_SELECT.TYPES, 'outlined')
).value;
const hasLeadingIcon = computed(() => {
  const slots = useSlots();
  return !!(materialIcon || props.withLeadingIcon || slots.icon);
}).value;
const noLabel = computed(() => {
  const slots = useSlots();
  return !(props.label || slots.default);
}).value;

const className = computed(() => ({
  'mdc-select': true,
  'mdc-select--filled': !isOutlined,
  'mdc-select--outlined': isOutlined,
  'mdc-select--fullwidth': props.fullwidth,
  'mdc-select--with-leading-icon': hasLeadingIcon,
  'mdc-select--no-label': noLabel,
  'mdc-select--required': props.required,
  'mdc-select--disabled': props.disabled
}));
const menuClassName = computed(() => [
  'mdc-select__menu',
  'mdc-menu',
  'mdc-menu-surface',
  {
    'mdc-menu-surface--fullwidth': props.fullwidth
  }
]);
const style = computed(() => {
  const el = select.value;
  return el && props.fixed ? { width: el.dataset.width || 'auto' } : {};
});

onBeforeMount(() => checkOptionFormat('<ui-select>', props.optionFormat));

onMounted(() => {
  $select = new MDCSelect(select.value);

  if (props.helperTextId) {
    instanceMap.set(`${props.helperTextId}-previous`, $select);
  }

  $select.listen(strings.CHANGE_EVENT, ({ detail }) => {
    // NOTE: for dynamic options
    nextTick(() => {
      let hasOptions = props.defaultLabel
        ? currentOptions.length > 1
        : currentOptions.length;

      if (hasOptions) {
        const selected = getSelected(detail.index);
        // fix(ui): twice trigger
        if (selectedValue.value !== selected.value) {
          emit(UI_SELECT.EVENTS.CHANGE, selected.value);
          emit(UI_SELECT.EVENTS.SELECTED, selected);
        }
      }
    });
  });

  // fix(@material-components): overflow inside of the component
  if (props.fixed) {
    $select.menu.setFixedPosition(true);
  }

  init();

  watch(
    () => props.modelValue,
    (val) => {
      selectedValue.value = val;

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
      if ($select) {
        $select.disabled = val;
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
  currentOptions = newOptions;

  // Set current option
  nextTick(() => {
    $select.layoutOptions();
    setCurrentOption();
  });
}

function setCurrentOption() {
  let currentIndex = UI_SELECT.DEFAULT_SELECTED_INDEX + 1;

  for (
    let index = 0, itemCount = currentOptions.length;
    index < itemCount;
    index++
  ) {
    let currentOption = currentOptions[index];
    if (currentOption[props.optionFormat.value] === selectedValue.value) {
      currentIndex = index;
      break;
    }
  }

  if (currentIndex > UI_SELECT.DEFAULT_SELECTED_INDEX) {
    $select.selectedIndex = currentIndex;
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
</script>
