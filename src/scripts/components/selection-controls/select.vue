<template>
  <div :class="className">
    <div
      class="mdc-select__anchor"
      role="button"
      aria-haspopup="listbox"
      :aria-required="required"
      :aria-disabled="disabled"
    >
      <!-- Leading Icon -->
      <slot name="icon">
        <i
          v-if="materialIcon"
          :class="[UI_GLOBAL.cssClasses.icon, UI_SELECT.cssClasses.icon]"
          >{{ materialIcon }}</i
        >
      </slot>
      <!-- Enhanced Select -->
      <span class="mdc-select__ripple"></span>
      <input type="text" class="mdc-select__selected-text" disabled readonly />
      <i class="mdc-select__dropdown-icon"></i>
      <ui-notched-outline v-if="isOutlined" :hasLabel="!noLabel">
        <ui-floating-label>
          <slot>{{ label }}</slot>
        </ui-floating-label>
      </ui-notched-outline>
      <template v-else>
        <ui-floating-label v-if="!noLabel">
          <slot>{{ label }}</slot>
        </ui-floating-label>
        <span class="mdc-line-ripple"></span>
      </template>
    </div>
    <!-- Options -->
    <div
      :class="[
        'mdc-select__menu mdc-menu mdc-menu-surface',
        { 'mdc-menu-surface--fullwidth': this.fullwidth }
      ]"
      role="listbox"
    >
      <ul class="mdc-list">
        <template v-if="currentOptions.length">
          <li
            v-for="(option, index) in currentOptions"
            :key="index"
            :class="[
              'mdc-list-item',
              {
                'mdc-list-item--selected':
                  option[optionValue] === currentSelectedValue,
                'mdc-list-item--disabled': option.disabled
              }
            ]"
            :data-value="option[optionValue]"
            :aria-selected="option[optionValue] === currentSelectedValue"
            :aria-disabled="option.disabled"
            role="option"
          >
            <span v-if="option[optionLabel]" class="mdc-list-item__text">{{
              option[optionLabel]
            }}</span>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
import { MDCSelect } from '../../../material-components-web/select';
import UiFloatingLabel from '../form-controls/floating-label';
import UiNotchedOutline from '../form-controls/notched-outline';
import typeMixin from '../../mixins/type';
import materialIconMixin from '../../mixins/material-icon';
import UI_GLOBAL from '../../config/constants';

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
  name: 'ui-select',
  components: {
    UiFloatingLabel,
    UiNotchedOutline
  },
  mixins: [typeMixin, materialIconMixin],
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
    model: [String, Number],
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
    defaultLabel: String,
    defaultValue: {
      type: [String, Number],
      default: ''
    },
    // UI attributes
    label: String,
    fullwidth: {
      type: Boolean,
      default: false
    },
    withLeadingIcon: {
      type: Boolean,
      default: false
    },
    noLabel: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // For helper text
    helperTextId: String
  },
  data() {
    return {
      UI_GLOBAL,
      UI_SELECT,
      $select: null,
      currentOptions: [],
      currentSelectedValue: this.model,
      currentSelectedIndex: UI_SELECT.DEFAULT_SELECTED_INDEX
    };
  },
  computed: {
    isOutlined() {
      return this.checkType(UI_SELECT.TYPES, 'outlined');
    },
    hasLeadingIcon() {
      return this.materialIcon || this.withLeadingIcon || this.$slots.icon;
    },
    className() {
      return {
        'mdc-select': true,
        'mdc-select--outlined': this.isOutlined,
        'mdc-select--fullwidth': this.fullwidth && !this.isOutlined,
        'mdc-select--with-leading-icon': this.hasLeadingIcon,
        'mdc-select--no-label': this.noLabel,
        'mdc-select--required': this.required,
        'mdc-select--disabled': this.disabled
      };
    }
  },
  watch: {
    model(val) {
      this.currentSelectedValue = val;

      this.setCurrentOption();
    },
    options(val) {
      this.init(val);
    }
  },
  mounted() {
    this.$select = new MDCSelect(this.$el);

    this.$select.listen(`MDCSelect:${UI_SELECT.EVENT.CHANGE}`, ({ detail }) => {
      // NOTE: for dynamic options
      this.$nextTick(() => {
        let hasOptions = this.defaultLabel
          ? this.currentOptions.length > 1
          : this.currentOptions.length;

        if (hasOptions) {
          const selected = this.getSelected(detail.index);
          // NOTE: for twice trigger bugfix
          if (this.currentSelectedValue !== selected.value) {
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
        defaultOption[this.optionValue] = this.defaultValue;
        currentOptions.unshift(defaultOption);
      }
      this.currentOptions = currentOptions;

      // Set current option
      this.$nextTick(() => {
        this.setCurrentOption();
      });
    },
    setCurrentOption() {
      let index = UI_SELECT.DEFAULT_SELECTED_INDEX + 1;

      for (let i = 0, len = this.currentOptions.length; i < len; i++) {
        let currentOption = this.currentOptions[i];
        if (currentOption[this.optionValue] == this.currentSelectedValue) {
          index = i;
          break;
        }
      }

      // Set selected index
      this.currentSelectedIndex = index;

      if (this.currentSelectedIndex > UI_SELECT.DEFAULT_SELECTED_INDEX) {
        this.$select.selectedIndex = this.currentSelectedIndex;
      }
    },
    getSelected(index) {
      let selected = this.options[index];
      if (this.defaultLabel) {
        let defaultOption = {};
        defaultOption[this.optionValue] = this.defaultValue;
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
