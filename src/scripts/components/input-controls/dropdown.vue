<template>
  <ui-menu-anchor :class="className">
    <div class="mdc-dropdown__surface" @click="handleOpen">
      <div class="mdc-dropdown__selected-text">
        <slot>{{ currentOption[optionLabel] }}</slot>
      </div>
      <div class="mdc-dropdown__icon">
        <slot name="icon">
          <i class="material-icons">{{ open ? 'expand_less' : 'expand_more' }}</i>
        </slot>
      </div>
    </div>
    <ui-menu v-model="open"
      class="mdc-dropdown__menu"
      position="BOTTOM_START"
      @selected="handleChange">
      <!-- Default option -->
      <ui-menuitem v-if="defaultLabel"
        :class="{'mdc-list-item--selected': defaultValue === selectedValue}">
        {{ defaultLabel }}
      </ui-menuitem>
      <ui-menuitem v-for="(option, index) in options"
        :key="index"
        :item="option"
        :class="{'mdc-list-item--selected': option[optionValue] === selectedValue}">
        {{ option[optionLabel] }}
      </ui-menuitem>
    </ui-menu>
  </ui-menu-anchor>
</template>

<script>
import UiMenuAnchor from '../menu/menu-anchor';
import UiMenu from '../menu/menu';
import UiMenuitem from '../menu/menuitem';
import selectMixin from '../../mixins/select';

// Define constants
const UI_DROPDOWN = {
  EVENT: {
    CHANGE: 'change', // return option[optionValue]
    SELECTED: 'selected' // return option
  }
};

export default {
  name: 'ui-dropdown',
  components: {
    UiMenuAnchor,
    UiMenu,
    UiMenuitem
  },
  mixins: [selectMixin],
  data() {
    return {
      open: false,
      currentOptions: [],
      currentOption: {}
    };
  },
  computed: {
    className() {
      return {
        'mdc-dropdown': true,
        'mdc-dropdown--active': this.open,
        'mdc-dropdown--disabled': this.disabled
      };
    }
  },
  watch: {
    selectedIndex(val) {
      this.currentOption = this.currentOptions.find(
        (option, index) => index === val
      );
      this.selectedValue = this.currentOption[this.optionValue];
      this.$emit(UI_DROPDOWN.EVENT.CHANGE, this.selectedValue);
    },
    options(val) {
      this.init(val);
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    handleOpen() {
      this.open = true;
    },
    handleChange({ index }) {
      if (index > -1 && this.currentOptions[index]) {
        this.currentOption = this.currentOptions[index];
        this.selectedValue = this.currentOption[this.optionValue];

        this.$emit(UI_DROPDOWN.EVENT.CHANGE, this.selectedValue);
      } else {
        console.warn('Invalid Option!');
      }
    },
    init(options = this.options) {
      this.currentOptions = Object.assign([], options);

      // Set default option
      if (this.defaultLabel) {
        let defaultOption = {};
        defaultOption[this.optionLabel] = this.defaultLabel;
        defaultOption[this.optionValue] = this.defaultValue;
        this.currentOptions.unshift(defaultOption);
      }

      // Set current option
      for (let i = 0, len = this.currentOptions.length; i < len; i++) {
        let currentOption = this.currentOptions[i];
        if (currentOption[this.optionValue] == this.selectedValue) {
          this.currentOption = currentOption;
          break;
        }
      }
    }
  }
};
</script>
