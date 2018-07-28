<template>
  <div :class="className">
    <slot name="before"></slot>

    <select v-model="selectedValue"
            class="mdc-select__native-control"
            :disabled="disabled"
            v-bind="attrs"
            @change="handleChange">
      <!-- Default option -->
      <option v-if="defaultLabel"
              :value="defaultValue"
              selected>{{ defaultLabel }}</option>
      <template v-if="group">
        <template v-for="(option, optionIndex) in options">
          <!-- A group of options -->
          <optgroup v-if="option[groupLabel] && option[groupItems] && option[groupItems].length"
                    :key="optionIndex"
                    :label="option[groupLabel]">
            <option v-for="(item, itemIndex) in option[groupItems]"
                    :key="itemIndex"
                    :value="item[optionValue]">{{ item[optionLabel] }}</option>
          </optgroup>
          <!-- An option -->
          <option v-if="option[optionLabel] && option[optionValue]"
                  :key="optionIndex"
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
    <ui-floating-label v-if="!defaultLabel"
      :for="id"
      :floatAbove="!!`${selectedValue}`">
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
import selectMixin from '../../mixins/select';
import elementMixin from '../../mixins/element';
import floatingLabelMixin from '../../mixins/floating-label';
import getType from '../../utils/typeof';

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
  mixins: [selectMixin, elementMixin, floatingLabelMixin],
  props: {
    // Element attributes
    id: String,
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
      $select: null
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
    selectedIndex(val) {
      if (this.$select) {
        this.$select.selectedIndex = val;
        this.$emit(UI_SELECT.EVENT.CHANGE, this.$select.value);
      }
    }
  },
  mounted() {
    const select = this.$el;

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
