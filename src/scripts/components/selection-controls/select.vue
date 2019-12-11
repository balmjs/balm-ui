<template>
  <!-- Enhanced Select -->
  <div :class="className">
    <div class="mdc-select__anchor">
      <slot name="icon">
        <i
          v-if="materialIcon"
          :class="[UI_GLOBAL.cssClasses.icon, UI_SELECT.cssClasses.icon]"
          >{{ materialIcon }}</i
        >
      </slot>
      <i class="mdc-select__dropdown-icon"></i>
      <div
        class="mdc-select__selected-text"
        :aria-required="required"
        :aria-disabled="disabled"
        :aria-controls="helperTextId"
        :aria-describedby="helperTextId"
        role="button"
      >
        {{ selectedIndex === -1 ? '' : currentOption[optionLabel] }}
      </div>
      <div v-if="isOutlined" class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
          <ui-floating-label v-if="!noLabel">
            <slot>{{ label }}</slot>
          </ui-floating-label>
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>
      <template v-else>
        <ui-floating-label v-if="!noLabel">
          <slot>{{ label }}</slot>
        </ui-floating-label>
        <div class="mdc-line-ripple"></div>
      </template>
    </div>

    <div class="mdc-select__menu mdc-menu mdc-menu-surface" role="listbox">
      <ul class="mdc-list">
        <li
          v-if="defaultLabel"
          :class="[
            'mdc-list-item',
            { 'mdc-list-item--selected': defaultValue === selectedValue }
          ]"
          :data-value="defaultValue"
          aria-selected="true"
          role="option"
        >
          {{ defaultLabel }}
        </li>
        <li
          v-for="(option, index) in options"
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
          role="option"
        >
          {{ option[optionLabel] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MDCSelect } from '../../../material-components-web/select';
import UiFloatingLabel from '../form-controls/floating-label';
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
  }
};

export default {
  name: 'ui-select',
  components: {
    UiFloatingLabel
  },
  mixins: [typeMixin, materialIconMixin],
  model: {
    prop: 'model',
    event: UI_SELECT.EVENT.CHANGE
  },
  props: {
    // UI variants
    outlined: {
      type: Boolean,
      default: false
    },
    // States
    model: [String, Number],
    selectedIndex: {
      type: Number,
      default: -1
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
    defaultLabel: String,
    defaultValue: {
      type: [String, Number],
      default: ''
    },
    // Element attributes
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // UI attributes
    label: String,
    noLabel: {
      type: Boolean,
      default: false
    },
    leadingIcon: {
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
      selectedValue: this.model,
      currentOption: {}
    };
  },
  computed: {
    isOutlined() {
      return this.checkType(UI_SELECT.TYPES, 'outlined');
    },
    className() {
      return {
        'mdc-select': true,
        'mdc-select--outlined': this.isOutlined,
        'mdc-select--required': this.required,
        'mdc-select--disabled': this.disabled,
        'mdc-select--no-label': this.noLabel,
        'mdc-select--with-leading-icon': this.leadingIcon || this.materialIcon
      };
    }
  },
  watch: {
    model(val) {
      this.selectedValue = val;

      let selectedIndex = this.options.findIndex(
        option => option[this.optionValue] === val
      );
      this.$select.selectedIndex = this.defaultLabel
        ? selectedIndex + 1
        : selectedIndex;

      this.$emit(UI_SELECT.EVENT.SELECTED, {
        value: val,
        index: this.$select.selectedIndex
      });
    },
    selectedIndex(val) {
      this.$select.selectedIndex = val;

      // this.currentOption = this.options.find((option, index) => index === val);
      // this.selectedValue = this.currentOption[this.optionValue];
      // this.$emit(UI_SELECT.EVENT.CHANGE, this.selectedValue);
    },
    options(val) {
      this.$select.selectedIndex = 0;
      this.init(val);
    }
  },
  mounted() {
    this.$select = new MDCSelect(this.$el);
    this.$select.listen(`MDCSelect:${UI_SELECT.EVENT.CHANGE}`, ({ detail }) => {
      const selected = this.getSelected(detail.index);

      // this.currentOption = selected;
      // this.selectedValue = selected.value;

      this.$emit(UI_SELECT.EVENT.CHANGE, selected.value);
      this.$emit(UI_SELECT.EVENT.SELECTED, selected);
    });

    this.init();
  },
  methods: {
    init(options = this.options) {
      let currentOptions = Object.assign([], options);
      // Set default option
      if (this.defaultLabel) {
        let defaultOption = {};
        defaultOption[this.optionLabel] = this.defaultLabel;
        defaultOption[this.optionValue] = this.defaultValue;
        currentOptions.unshift(defaultOption);
      }
      // Set current option
      for (let i = 0, len = currentOptions.length; i < len; i++) {
        let currentOption = currentOptions[i];
        if (currentOption[this.optionValue] == this.selectedValue) {
          this.currentOption = currentOption;
          break;
        }
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
