<template>
  <div :class="className">
    <slot name="before"></slot>

    <select v-model="selectedValue"
            class="mdc-select__native-control"
            :disabled="disabled"
            @change="handleChange">
      <!-- Default option -->
      <option v-if="placeholder"
              :value="defaultValue"
              :disabled="!defaultLabel"
              selected>{{ defaultLabel }}</option>
      <template v-if="group">
        <template v-for="option in options">
          <!-- A group of options -->
          <optgroup v-if="option[optgroupLabel] && option[optgroupItems] && option[optgroupItems].length"
                    :label="option[optgroupLabel]">
            <option v-for="(item, index) in option[optgroupItems]"
                    :key="index"
                    :value="item[optionValue]">{{ item[optionLabel] }}</option>
          </optgroup>
          <!-- An option -->
          <option v-if="option[optionLabel] && option[optionValue]"
                  :value="option[optionValue]">{{ option[optionLabel] }}</option>
        </template>
      </template>
      <template v-else>
        <option v-for="(option, index) in options"
                :key="index"
                :value="option[optionValue]"
                :disabled="option.disabled || false">{{ option[optionLabel] }}</option>
      </template>
    </select>
    <ui-floating-label
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

// Define constants
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
    model: null,
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedIndex: {
      type: Number,
      default: 0
    },
    // Element attributes
    id: String,
    disabled: {
      type: Boolean,
      default: false
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
    placeholder: {
      type: Boolean,
      default: false
    },
    defaultLabel: String,
    defaultValue: {
      type: String,
      default: ''
    },
    group: {
      type: Boolean,
      default: false
    },
    optgroupLabel: {
      type: String,
      default: 'label'
    },
    optgroupItems: {
      type: String,
      default: 'items'
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

      let selectedIndex = this.options.findIndex(
        option => option[this.optionValue] === val
      );
      this.$emit(UI_SELECT.EVENT.SELECTED, {
        value: val,
        index: this.placeholder ? selectedIndex + 1 : selectedIndex
      });
    },
    selectedIndex(val) {
      if (this.$select) {
        this.$select.selectedIndex = val;
        this.$emit(UI_SELECT.EVENT.CHANGE, this.$select.value);
      }
    }
  },
  mounted() {
    const select = this.$el;
    this.initAttributes(select.querySelector('select'));

    if (!this.$select && !this.cssOnly) {
      this.$select = new MDCSelect(select);
    }
  },
  methods: {
    handleChange() {
      this.$emit(UI_SELECT.EVENT.CHANGE, this.selectedValue);
    }
  }
};
</script>
