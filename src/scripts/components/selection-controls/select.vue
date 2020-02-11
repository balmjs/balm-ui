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
        ref="text"
        class="mdc-select__selected-text"
        role="button"
        aria-haspopup="listbox"
        :aria-labelledby="label"
        :aria-required="required"
        :aria-disabled="disabled"
        :aria-controls="helperTextId"
        :aria-describedby="helperTextId"
      >
        {{ currentSelectedLabel }}
      </div>
      <div v-if="isOutlined" class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
          <ui-floating-label v-if="!noLabel" :isFloatAbove="isFloatAbove">
            <slot>{{ label }}</slot>
          </ui-floating-label>
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>
      <template v-else>
        <ui-floating-label v-if="!noLabel" :isFloatAbove="isFloatAbove">
          <slot>{{ label }}</slot>
        </ui-floating-label>
        <div class="mdc-line-ripple"></div>
      </template>
    </div>

    <div class="mdc-select__menu mdc-menu mdc-menu-surface" role="listbox">
      <ul class="mdc-list">
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
    UPDATE_MODEL: 'update-value',
    CHANGE: 'change',
    SELECTED: 'selected'
  },
  DEFAULT_SELECTED_INDEX: -1
};

export default {
  name: 'ui-select',
  components: {
    UiFloatingLabel
  },
  mixins: [typeMixin, materialIconMixin],
  model: {
    prop: 'model',
    event: UI_SELECT.EVENT.UPDATE_MODEL
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
      currentOptions: [],
      currentOption: {},
      currentSelectedValue: this.model,
      currentSelectedIndex: UI_SELECT.DEFAULT_SELECTED_INDEX
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
    },
    currentSelectedLabel() {
      let selectedLabel =
        this.currentSelectedIndex === UI_SELECT.DEFAULT_SELECTED_INDEX
          ? ''
          : this.currentOption[this.optionLabel];

      // TODO: Temporary solution: manual control
      if (this.$refs.text) {
        this.$refs.text.textContent = selectedLabel;
      }

      return selectedLabel;
    },
    // TODO: Temporary solution: manual control
    isFloatAbove() {
      return !!this.currentOption[this.optionLabel];
    }
  },
  watch: {
    model(val) {
      this.currentSelectedValue = val;

      const index = this.setCurrentOption(this.options);
      this.currentSelectedIndex = this.defaultLabel ? index + 1 : index;

      this.$select.selectedIndex = this.currentSelectedIndex;

      this.$emit(UI_SELECT.EVENT.CHANGE, this.currentSelectedValue);
      this.$emit(UI_SELECT.EVENT.SELECTED, {
        index: this.currentSelectedIndex,
        value: this.currentOption[this.optionValue],
        label: this.currentOption[this.optionLabel]
      });
    },
    options(val) {
      this.init(val);
    }
  },
  mounted() {
    this.$select = new MDCSelect(this.$el);

    this.$select.listen(`MDCSelect:${UI_SELECT.EVENT.CHANGE}`, ({ detail }) => {
      if (
        this.defaultLabel
          ? this.currentOptions.length > 1
          : this.currentOptions.length
      ) {
        const selected = this.getSelected(detail.index);
        this.$emit(UI_SELECT.EVENT.UPDATE_MODEL, selected.value);
      }
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
      const index = this.setCurrentOption();
      this.currentSelectedIndex = index;
    },
    setCurrentOption(currentOptions = this.currentOptions) {
      let index = UI_SELECT.DEFAULT_SELECTED_INDEX;

      this.currentOption = {};
      this.currentOption[this.optionLabel] = this.defaultLabel;
      this.currentOption[this.optionValue] = this.defaultValue;

      for (let i = 0, len = currentOptions.length; i < len; i++) {
        let currentOption = currentOptions[i];
        if (currentOption[this.optionValue] == this.currentSelectedValue) {
          index = i;
          this.currentOption = currentOption;
          break;
        }
      }

      return index;
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
