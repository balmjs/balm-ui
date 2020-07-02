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
      <!-- Leading Icon -->
      <slot name="icon">
        <i
          v-if="materialIcon"
          :class="[UI_GLOBAL.cssClasses.icon, UI_SELECT.cssClasses.icon]"
          v-text="materialIcon"
        ></i>
      </slot>
      <!-- Enhanced Select -->
      <span class="mdc-select__ripple"></span>
      <span class="mdc-select__selected-text"></span>
      <span class="mdc-select__dropdown-icon">
        <slot name="dropdown-icon">
          <svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5">
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
      <ui-notched-outline v-if="isOutlined" :has-label="!noLabel">
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
        { 'mdc-menu-surface--fullwidth': fullwidth }
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
                  option[optionValue] === selectedValue,
                'mdc-list-item--disabled': option.disabled
              }
            ]"
            :data-value="option[optionValue]"
            :aria-selected="option[optionValue] === selectedValue"
            :aria-disabled="option.disabled"
            role="option"
          >
            <span
              v-if="option[optionLabel]"
              class="mdc-list-item__text"
              v-text="option[optionLabel]"
            ></span>
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
  name: 'UiSelect',
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
    noLabel: {
      type: Boolean,
      default: false
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
    }
  },
  data() {
    return {
      UI_GLOBAL,
      UI_SELECT,
      $select: null,
      currentOptions: [],
      selectedValue: this.model,
      selectedIndex: UI_SELECT.DEFAULT_SELECTED_INDEX
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
    model(val) {
      this.selectedValue = val;

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
        defaultOption[this.optionValue] = this.defaultValue || ' '; // NOTE: fix floating label bug when the value is empty
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
        if (currentOption[this.optionValue] == this.selectedValue) {
          index = i;
          break;
        }
      }

      // Set selected index
      this.selectedIndex = index;

      if (this.selectedIndex > UI_SELECT.DEFAULT_SELECTED_INDEX) {
        this.$select.selectedIndex = this.selectedIndex;
      }
    },
    getSelected(index) {
      let selected = this.options[index];
      if (this.defaultLabel) {
        let defaultOption = {};
        defaultOption[this.optionValue] =
          this.defaultValue === ' ' ? '' : this.defaultValue; // NOTE: fix floating label bug when the value is empty
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
