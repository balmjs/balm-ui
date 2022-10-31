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
      <slot name="icon" :iconClass="UI_SELECT.cssClasses.icon">
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
    <div :class="menuClassName">
      <div class="mdc-drawer-scrim" @click="off"></div>
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
import { MDCSelect } from '../../../material-components-web/select';
import { strings } from '../../../material-components-web/select/constants';
import MdcFloatingLabel from '../floating-label/mdc-floating-label';
import MdcLineRipple from '../floating-label/mdc-line-ripple';
import MdcNotchedOutline from '../floating-label/mdc-notched-outline';
import typeMixin from '../../mixins/type';
import materialIconMixin from '../../mixins/material-icon';
import deprecatedListMixin from '../../mixins/deprecated-list';
import {
  optionFormatDefaultValue,
  checkOptionFormat
} from '../../utils/option-format';

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
    CHANGE: 'change',
    SELECTED: 'selected'
  },
  DEFAULT_SELECTED_INDEX: -1
};

export default {
  name: 'UiSelect',
  components: {
    MdcFloatingLabel,
    MdcLineRipple,
    MdcNotchedOutline
  },
  mixins: [typeMixin, materialIconMixin, deprecatedListMixin],
  model: {
    prop: 'model',
    event: UI_SELECT.EVENT.CHANGE
  },
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
    model: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    optionFormat: {
      type: Object,
      default() {
        return optionFormatDefaultValue;
      }
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
    },
    // For helper text
    helperTextId: {
      type: [String, null],
      default: null
    },
    inside: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_SELECT,
      $select: null,
      currentOptions: [],
      selectedValue: this.model
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
        'mdc-select--disabled': this.disabled,
        'mdc-select--in-dialog': this.inside
      };
    },
    menuClassName() {
      return [
        'mdc-select__menu',
        'mdc-menu',
        'mdc-menu-surface',
        {
          'mdc-menu-surface--fullwidth': this.fullwidth
        }
      ];
    }
  },
  watch: {
    model(val) {
      this.selectedValue = val;

      this.setCurrentOption();
    },
    options(val) {
      this.init(val);
    },
    disabled(val) {
      if (this.$select) {
        this.$select.disabled = val;
      }
    }
  },
  beforeMount() {
    checkOptionFormat('<ui-select>', this.optionFormat);
  },
  mounted() {
    this.$select = new MDCSelect(this.$el);

    this.$select.listen(strings.CHANGE_EVENT, ({ detail }) => {
      // NOTE: for dynamic options
      this.$nextTick(() => {
        let hasOptions = this.defaultLabel
          ? this.currentOptions.length > 1
          : this.currentOptions.length;

        if (hasOptions) {
          const selected = this.getSelected(detail.index);
          this.$emit(UI_SELECT.EVENT.CHANGE, selected.value);
          this.$emit(UI_SELECT.EVENT.SELECTED, selected);
        }
      });
    });

    if (this.inside) {
      this.$select.menu.quickOpen = true;
    }

    this.init();
  },
  methods: {
    init(options = this.options) {
      // Set default option
      let currentOptions = [...options];
      if (this.defaultLabel) {
        let defaultOption = {};
        defaultOption[this.optionFormat.label] = this.defaultLabel;
        defaultOption[this.optionFormat.value] = this.defaultValue || ' '; // fix(ui): floating label bug when the value is empty
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
        if (currentOption[this.optionFormat.value] === this.selectedValue) {
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
        defaultOption[this.optionFormat.value] =
          this.defaultValue === ' ' ? '' : this.defaultValue; // fix(ui): floating label bug when the value is empty
        defaultOption[this.optionFormat.label] = this.defaultLabel;

        selected = index === 0 ? defaultOption : this.options[index - 1];
      }

      return {
        index,
        value: selected[this.optionFormat.value],
        label: selected[this.optionFormat.label]
      };
    },
    off() {
      if (this.inside && this.$select.menu.open) {
        this.$select.menu.open = false;
      }
    }
  }
};
</script>
