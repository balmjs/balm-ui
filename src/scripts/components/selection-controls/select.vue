<template>
  <div :class="className">
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
      <slot name="icon">
        <i
          v-if="materialIcon"
          :class="getIconClassName(UI_SELECT.cssClasses.icon)"
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
    <div
      :class="[
        'mdc-select__menu mdc-menu mdc-menu-surface',
        { 'mdc-menu-surface--fullwidth': fullwidth }
      ]"
    >
      <ul class="mdc-list" role="listbox">
        <li
          v-for="(option, index) in currentOptions"
          :key="index"
          :class="[
            'mdc-list-item',
            {
              'mdc-list-item--selected': option[optionValue] === selectedValue,
              'mdc-list-item--disabled': option.disabled
            }
          ]"
          :data-value="option[optionValue]"
          :aria-selected="option[optionValue] === selectedValue"
          :aria-disabled="option.disabled"
          role="option"
        >
          <span class="mdc-list-item__ripple"></span>
          <span
            v-if="option[optionLabel]"
            class="mdc-list-item__text"
            v-text="option[optionLabel]"
          ></span>
        </li>
      </ul>
    </div>
  </div>

  <mdc-select-helper
    v-if="helperTextId"
    :id="helperTextId"
    :visible="helperTextVisible"
    :valid-msg="hasValidMsg"
  >
    <slot name="helper-text"></slot>
  </mdc-select-helper>
</template>

<script>
import { MDCSelect } from '../../../material-components-web/select';
import { strings } from '../../../material-components-web/select/constants';
import MdcFloatingLabel from '../form-controls/mdc-floating-label';
import MdcLineRipple from '../form-controls/mdc-line-ripple';
import MdcNotchedOutline from '../form-controls/mdc-notched-outline';
import MdcSelectHelper from './mdc-select-helper';
import domMixin from '../../mixins/dom';
import typeMixin from '../../mixins/type';
import materialIconMixin from '../../mixins/material-icon';
import { componentHelperTextMixin } from '../../mixins/helper-text';

// Define select constants
const UI_SELECT = {
  TYPES: {
    filled: 0,
    outlined: 1
  },
  cssClasses: {
    icon: 'mdc-select__icon'
  },
  EVENT: {
    CHANGE: 'update:modelValue',
    SELECTED: 'selected'
  },
  DEFAULT_SELECTED_INDEX: -1
};

export default {
  name: 'UiSelect',
  components: {
    MdcFloatingLabel,
    MdcLineRipple,
    MdcNotchedOutline,
    MdcSelectHelper
  },
  mixins: [domMixin, typeMixin, materialIconMixin, componentHelperTextMixin],
  props: {
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
      default() {
        return [];
      }
    },
    optionLabel: {
      type: String,
      default: 'label'
    },
    optionValue: {
      type: String,
      default: 'value'
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
    }
  },
  emits: [UI_SELECT.EVENT.CHANGE, UI_SELECT.EVENT.SELECTED],
  data() {
    return {
      UI_SELECT,
      $select: null,
      currentOptions: [],
      selectedValue: this.modelValue
    };
  },
  computed: {
    isOutlined() {
      return this.checkType(UI_SELECT.TYPES, 'outlined');
    },
    hasLeadingIcon() {
      return this.materialIcon || this.withLeadingIcon || this.$slots.icon;
    },
    noLabel() {
      return !(this.label || this.$slots.default);
    },
    className() {
      return {
        'mdc-select': true,
        'mdc-select--filled': !this.isOutlined,
        'mdc-select--outlined': this.isOutlined,
        'mdc-select--fullwidth': this.fullwidth,
        'mdc-select--with-leading-icon': this.hasLeadingIcon,
        'mdc-select--no-label': this.noLabel,
        'mdc-select--required': this.required,
        'mdc-select--disabled': this.disabled
      };
    }
  },
  watch: {
    modelValue(val) {
      this.selectedValue = val;

      this.setCurrentOption();
    },
    options(val) {
      this.init(val);
    },
    validMsg(val) {
      this.$select.valid = !this.hasValidMsg;
    }
  },
  beforeMount() {
    const needHelperTextId = this.helperTextVisible || this.validMsg;

    if (!this.helperTextId && needHelperTextId) {
      console.warn(
        `'helperTextId' is required for '<ui-select>' with outer counter`
      );
    }
  },
  mounted() {
    this.$select = new MDCSelect(this.el);

    this.$select.listen(strings.CHANGE_EVENT, ({ detail }) => {
      // NOTE: for dynamic options
      this.$nextTick(() => {
        let hasOptions = this.defaultLabel
          ? this.currentOptions.length > 1
          : this.currentOptions.length;

        if (hasOptions) {
          const selected = this.getSelected(detail.index);
          // fix(ui): twice trigger
          if (this.selectedValue !== selected.value) {
            this.$emit(UI_SELECT.EVENT.CHANGE, selected.value);
            this.$emit(UI_SELECT.EVENT.SELECTED, selected);
          }
        }
      });
    });

    this.init();
  },
  methods: {
    init(options = this.options) {
      // Set default option
      let currentOptions = [...options];
      if (this.defaultLabel) {
        let defaultOption = {};
        defaultOption[this.optionLabel] = this.defaultLabel;
        defaultOption[this.optionValue] = this.defaultValue || ' '; // fix(ui): floating label bug when the value is empty
        currentOptions.unshift(defaultOption);
      }
      this.currentOptions = currentOptions;

      // Set current option
      this.$nextTick(() => {
        this.$select.layoutOptions();
        this.setCurrentOption();
      });
    },
    setCurrentOption() {
      let currentIndex = UI_SELECT.DEFAULT_SELECTED_INDEX + 1;

      for (
        let index = 0, itemCount = this.currentOptions.length;
        index < itemCount;
        index++
      ) {
        let currentOption = this.currentOptions[index];
        if (currentOption[this.optionValue] === this.selectedValue) {
          currentIndex = index;
          break;
        }
      }

      if (currentIndex > UI_SELECT.DEFAULT_SELECTED_INDEX) {
        this.$select.selectedIndex = currentIndex;
      }
    },
    getSelected(index) {
      let selected = this.options[index];
      if (this.defaultLabel) {
        let defaultOption = {};
        defaultOption[this.optionValue] =
          this.defaultValue === ' ' ? '' : this.defaultValue; // fix(ui): floating label bug when the value is empty
        defaultOption[this.optionLabel] = this.defaultLabel;

        selected = index === 0 ? defaultOption : this.options[index - 1];
      }

      return {
        index,
        value: selected[this.optionValue],
        label: selected[this.optionLabel]
      };
    }
  }
};
</script>
