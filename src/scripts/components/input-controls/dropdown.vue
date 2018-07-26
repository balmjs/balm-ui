<template>
  <div :class="className">
    <div class="mdc-dropdown__surface" @click="handleOpen">
      <div class="mdc-dropdown__selected-text">
        <slot>{{ currentOption[optionLabel] }}</slot>
      </div>
    </div>
    <ui-menu v-model="open" class="mdc-dropdown__menu">
      <!-- Default option -->
      <!-- <ui-menuitem v-if="placeholder">{{ defaultLabel }}</ui-menuitem> -->
      <ui-menuitem v-for="(option, index) in options" :key="index">
        {{ option[optionLabel] }}
      </ui-menuitem>
    </ui-menu>
  </div>
</template>

<script>
import UiMenu from '../menu/menu';
import UiMenuitem from '../menu/menuitem';
import selectMixin from '../../mixins/select';

// Define constants
const UI_DROPDOWN = {
  EVENT: {
    CHANGE: 'change',
    SELECTED: 'selected'
  }
};

export default {
  name: 'ui-dropdown',
  components: {
    UiMenu,
    UiMenuitem
  },
  mixins: [selectMixin],
  data() {
    return {
      open: false,
      selectedValue: this.model,
      currentOption: {}
    };
  },
  computed: {
    className() {
      return {
        'mdc-selectmenu': true,
        'mdc-selectmenu--disabled': this.disabled
      };
    },
    hasDefaultOption() {
      return this.defaultValue ? this.defaultValue.trim() : false;
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    options(val) {
      this.currentOptions = this.init(val);
      if (this.currentOptions.length) {
        // this.setSelectedTextContent(this.selectedOption[this.optionValue]);
      }
    }
  },
  mounted() {
    // this.currentOptions = this.init();
  },
  methods: {
    handleOpen() {
      this.open = true;
    },
    changeHandler() {
      let index = this.$select.selectedIndex;
      if (this.options[index]) {
        let key = this.defaultKey;
        let value = this.defaultValue;
        if (this.hasDefaultOption) {
          index -= 1;
        }
        if (index > -1) {
          this.selectedOption = this.options[index];
          key = this.selectedOption[this.optionKey];
          value = this.selectedOption[this.optionValue];
        }
        this.$emit(UI_DROPDOWN.EVENT.CHANGE, {
          index,
          key,
          value
        });
      } else {
        console.warn('Invalid Options!');
      }
    },
    setSelectedTextContent(selectedTextContent = '') {
      if (this.$select) {
        this.$select.foundation_.adapter_.setSelectedTextContent(
          selectedTextContent
        );
      }
    },
    initSelected(currentOptions = this.currentOptions) {
      let selectedOption = {};
      if (this.$select) {
        this.$select.disabled = false;
        this.$select.selectedIndex = 0; // default index
      }

      for (let i = 0, len = currentOptions.length; i < len; i++) {
        let currentOption = currentOptions[i];
        let selected = currentOption[this.optionKey] == this.currentValue;

        if (selected || i === 0) {
          selectedOption = currentOption;
        }

        if (selected) {
          if (this.$select && i > 0) {
            this.$select.selectedIndex = i; // selected index
          }
          break;
        }
      }

      if (selectedOption[this.optionValue]) {
        this.selectedOption = selectedOption;
        // this.setSelectedTextContent(this.selectedOption[this.optionValue]);
        this.$emit(
          UI_DROPDOWN.EVENT.CHANGE,
          this.selectedOption[this.optionKey]
        );
      }
    },
    init(options = this.options) {
      let result = [];
      let currentOptions = [];

      // default value
      if (this.hasDefaultOption) {
        let defaultOption = {};
        defaultOption[this.optionKey] = this.defaultKey;
        defaultOption[this.optionValue] = this.defaultValue;
        currentOptions.push(defaultOption);
      }

      currentOptions = currentOptions.concat(options);

      // default selected
      if (currentOptions.length) {
        // init selected
        let needInit =
          !this.placeholder || (this.placeholder && this.currentValue);
        if (needInit) {
          this.initSelected(currentOptions);
        }
        // menu items
        result = currentOptions.map(option => {
          return {
            index: option.index || 0,
            label: option[this.optionValue],
            disabled: option.disabled
          };
        });
      } else {
        // reset selected
        if (this.$select) {
          this.selectedOption = {};
          this.$select.selectedIndex = -1;
          this.$select.disabled = true;
        }
      }

      return result;
    }
  }
};
</script>
