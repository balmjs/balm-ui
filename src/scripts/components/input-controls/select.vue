<template>
  <div :class="className">
    <slot name="before"></slot>

    <select v-model="selectedValue"
            class="mdc-select__native-control"
            :disabled="disabled"
            :multiple="multiple"
            :size="size"
            @change="handleChange">
      <!-- Default option -->
      <option v-if="defaultLabel"
              :value="defaultValue"
              selected>{{ defaultLabel }}</option>
      <template v-if="group">
        <template v-for="option in options">
          <!-- A group of options -->
          <optgroup v-if="option.label && option.items && option.items.length"
                    class="mdc-list-group"
                    :label="option.label">
            <option v-for="(item, index) in option.items"
                    :key="index"
                    class="mdc-list-item"
                    :value="item[optionValue]">{{ item[optionLabel] }}</option>
          </optgroup>
          <!-- A list item -->
          <option v-if="!option.label && option[optionLabel]"
                  class="mdc-list-item"
                  :value="option[optionValue]">{{ option[optionLabel] }}</option>
          <!-- A divider -->
          <option v-if="multiple && (option === UI_SELECT.DIVIDER)"
                  class="mdc-list-divider"
                  role="presentation"
                  disabled></option>
        </template>
      </template>
      <template v-else>
        <option v-for="(option, index) in options"
                :key="index"
                :value="option[optionValue]"
                :disabled="option.disabled || false">{{ option[optionLabel] }}</option>
      </template>
    </select>
    <ui-floating-label v-if="!defaultLabel"
      :for="id"
      :floatAbove="!!selectedValue">
      <slot>{{ label }}</slot>
    </ui-floating-label>

    <slot name="after"></slot>

    <template v-if="!cssOnly">
      <template v-if="outlined">
        <div class="mdc-notched-outline">
          <svg>
            <path class="mdc-notched-outline__path"/>
          </svg>
        </div>
        <div class="mdc-notched-outline__idle"></div>
      </template>
      <div v-else class="mdc-line-ripple"></div>
    </template>
  </div>
</template>

<script>
import { MDCSelect } from '../../../material-components-web/select';
import UiFloatingLabel from './floating-label';
import elementMixin from '../../mixins/element';
import floatingLabelMixin from '../../mixins/floating-label';
import getType from '../../helpers/typeof';

const UI_SELECT = {
  DIVIDER: '-',
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
    model: null,
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    // Element attributes
    id: String,
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    size: {
      type: [Number, String],
      default: 0
    },
    // UI attributes
    cssOnly: {
      type: Boolean,
      default: false
    },
    label: String,
    box: {
      type: Boolean,
      default: false
    },
    outlined: {
      type: Boolean,
      default: false
    },
    optionLabel: {
      type: String,
      default: 'label'
    },
    optionValue: {
      type: String,
      default: 'value'
    },
    defaultValue: {
      type: String,
      default: ''
    },
    defaultLabel: String,
    group: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_SELECT,
      $select: null,
      selectedValue: this.model
    };
  },
  computed: {
    className() {
      return {
        'mdc-select': true,
        'mdc-select--box': this.box,
        'mdc-select--outlined': this.outlined,
        'mdc-select--disabled': this.disabled
      };
    }
  },
  watch: {
    model(val) {
      this.selectedValue = val;
    }
  },
  mounted() {
    // if (!this.multiple) {
    //   this.init();
    // }
    const select = this.$el;
    this.initAttributes(select.querySelector('select'));

    if (!this.$select && !this.cssOnly) {
      this.$select = new MDCSelect(select);
      this.$select.listen(UI_SELECT.EVENT.CHANGE, () => {
        this.$emit(UI_SELECT.EVENT.SELECTED, {
          index: this.$select.selectedIndex,
          value: this.$select.value
        });
      });
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_SELECT.EVENT.CHANGE, this.selectedValue);
    },
    init() {
      if (!this.defaultLabel && this.options.length) {
        let defaultOption = {};

        if (this.group) {
          for (let options of this.options) {
            if (options.items && options.items.length) {
              defaultOption = this.selectedValue
                ? options.items.find(
                    option => option[this.optionValue] == this.selectedValue
                  ) // `object` || `undefined`
                : options.items[0]; // `object`
            }
            if (
              getType(defaultOption) === 'object' &&
              defaultOption.hasOwnProperty(this.optionValue)
            ) {
              break;
            }
          }
        } else {
          defaultOption = this.selectedValue
            ? this.options.find(
                option => option[this.optionValue] == this.selectedValue
              )
            : this.options[0];
        }

        this.$emit(UI_SELECT.EVENT.CHANGE, defaultOption[this.optionValue]);
      }
    }
  }
};
</script>
