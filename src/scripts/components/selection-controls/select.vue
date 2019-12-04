<template>
  <div :class="className">
    <!-- Native Select -->
    <template v-if="native">
      <select
        :id="id"
        v-model="selectedValue"
        class="mdc-select__native-control"
        :disabled="disabled"
        v-bind="attrs"
        @change="nativeHandleChange"
      >
        <!-- Default option -->
        <option v-if="defaultLabel" :value="defaultValue" selected>{{
          defaultLabel
        }}</option>
        <template v-if="group">
          <template v-for="(option, optionIndex) in options">
            <!-- A group of options -->
            <optgroup
              v-if="
                option[groupLabel] &&
                  option[groupItems] &&
                  option[groupItems].length
              "
              :key="optionIndex"
              :label="option[groupLabel]"
            >
              <option
                v-for="(item, itemIndex) in option[groupItems]"
                :key="itemIndex"
                :value="item[optionValue]"
                >{{ item[optionLabel] }}</option
              >
            </optgroup>
            <!-- An option -->
            <option
              v-if="option[optionLabel] && option[optionValue]"
              :key="optionIndex"
              :value="option[optionValue]"
              >{{ option[optionLabel] }}</option
            >
          </template>
        </template>
        <template v-else>
          <option
            v-for="(option, index) in options"
            :key="index"
            :value="option[optionValue]"
            :disabled="option.disabled || false"
            >{{ option[optionLabel] }}</option
          >
        </template>
      </select>
    </template>
    <!-- Enhanced Select -->
    <template v-else>
      <div class="mdc-select__anchor">
        <i class="mdc-select__dropdown-icon"></i>
        <div class="mdc-select__selected-text"></div>
        <span v-if="!noLabel" class="mdc-floating-label">
          <slot>{{ label }}</slot>
        </span>
        <div class="mdc-line-ripple"></div>
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
    </template>
  </div>
</template>

<script>
import { MDCSelect } from '../../../material-components-web/select';
import elementMixin from '../../mixins/element';

// Define constants
const UI_SELECT = {
  EVENT: {
    CHANGE: 'change',
    SELECTED: 'selected'
  }
};

export default {
  name: 'ui-select',
  mixins: [elementMixin],
  model: {
    prop: 'model',
    event: UI_SELECT.EVENT.CHANGE
  },
  props: {
    // Type
    native: {
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
    group: {
      type: Boolean,
      default: false
    },
    groupLabel: {
      type: String,
      default: 'label'
    },
    groupItems: {
      type: String,
      default: 'items'
    }
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
        'mdc-select--native': this.native,
        'mdc-select--outlined': this.outlined,
        'mdc-select--required': this.required,
        'mdc-select--disabled': this.disabled,
        'mdc-select--no-label': this.noLabel
      };
    }
  },
  watch: {
    model(val) {
      if (this.native) {
        this.selectedValue = val;

        const selectedIndex = this.options.findIndex(
          option => option[this.optionValue] === val
        );
        const index = this.defaultLabel ? selectedIndex + 1 : selectedIndex;
        const selected = this.getSelected(index);

        this.$emit(UI_SELECT.EVENT.SELECTED, {
          index,
          value: selected[this.optionValue],
          label: selected[this.optionLabel]
        });
      }
    }
  },
  mounted() {
    if (!this.native) {
      this.$select = new MDCSelect(this.$el);
      this.$select.listen(
        `MDCSelect:${UI_SELECT.EVENT.CHANGE}`,
        ({ detail }) => {
          // console.log(
          //   `Selected option at index ${detail.index} with value "${detail.value}"`
          // );

          const selected = this.getSelected(detail.index);

          this.$emit(UI_SELECT.EVENT.CHANGE, selected.value);
          this.$emit(UI_SELECT.EVENT.SELECTED, selected);
        }
      );
    }
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
    },
    nativeHandleChange() {
      this.$emit(UI_SELECT.EVENT.CHANGE, this.selectedValue);
    }
  }
};
</script>
