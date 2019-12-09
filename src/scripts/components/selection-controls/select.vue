<template>
  <!-- Enhanced Select -->
  <div :class="className">
    <div class="mdc-select__anchor">
      <slot name="icon"></slot>
      <i class="mdc-select__dropdown-icon"></i>
      <div
        class="mdc-select__selected-text"
        :aria-controls="helperTextId"
        :aria-describedby="helperTextId"
      ></div>
      <div v-if="outlined" class="mdc-notched-outline">
        <div class="mdc-notched-outline__leading"></div>
        <div class="mdc-notched-outline__notch">
          <ui-floating-label
            v-if="!noLabel"
            :floatAbove="floatAbove"
            :shake="shake"
          >
            <slot>{{ label }}</slot>
          </ui-floating-label>
        </div>
        <div class="mdc-notched-outline__trailing"></div>
      </div>
      <template v-else>
        <ui-floating-label
          v-if="!noLabel"
          :floatAbove="floatAbove"
          :shake="shake"
        >
          <slot>{{ label }}</slot>
        </ui-floating-label>
        <div class="mdc-line-ripple"></div>
      </template>
    </div>

    <div class="mdc-select__menu mdc-menu mdc-menu-surface">
      <ul class="mdc-list">
        <li
          v-if="defaultLabel"
          :class="[
            'mdc-list-item',
            { 'mdc-list-item--selected': defaultValue === selectedValue }
          ]"
          :data-value="defaultLabel"
          aria-selected="true"
        >
          {{ defaultLabel }}
        </li>
        <li
          v-for="(option, index) in options"
          :key="index"
          :class="[
            'mdc-list-item',
            {
              'mdc-list-item--selected': option[optionValue] === selectedValue
            }
          ]"
          :data-value="option[optionLabel]"
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
import elementMixin from '../../mixins/element';
import floatingLabelMixin from '../../mixins/floating-label';

// Define select constants
const UI_SELECT = {
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
  mixins: [elementMixin, floatingLabelMixin],
  model: {
    prop: 'model',
    event: UI_SELECT.EVENT.CHANGE
  },
  props: {
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
    disabled: {
      type: Boolean,
      default: false
    },
    // UI attributes
    label: String,
    outlined: {
      type: Boolean,
      default: false
    },
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
      $select: null,
      selectedValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-select': true,
        'mdc-select--outlined': this.outlined,
        'mdc-select--required': this.required,
        'mdc-select--disabled': this.disabled,
        'mdc-select--no-label': this.noLabel,
        'mdc-select--with-leading-icon': this.leadingIcon
      };
    }
  },
  mounted() {
    this.$select = new MDCSelect(this.$el);
    this.$select.listen(`MDCSelect:${UI_SELECT.EVENT.CHANGE}`, ({ detail }) => {
      const selected = this.getSelected(detail.index);

      this.$emit(UI_SELECT.EVENT.CHANGE, selected.value);
      this.$emit(UI_SELECT.EVENT.SELECTED, selected);
    });
  },
  methods: {
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
