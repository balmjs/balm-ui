<template>
  <!-- Custom MDC Select, shown on desktop -->
  <div :class="className"
       role="listbox"
       tabindex="0"
       :aria-disabled="disabled">
    <span class="mdc-select__selected-text">
      <slot>{{ selectedOption[optionValue] || placeholder }}</slot>
    </span>
    <ui-menu class="mdc-select__menu" :dark="dark">
      <ui-menuitem v-for="(option, index) in currentOptions"
                   role="option"
                   :item="option"
                   :key="index"></ui-menuitem>
    </ui-menu>
  </div>
</template>

<script>
import {MDCSelect} from '../../../material-components-web/select';
import UiMenu from '../menu/menu';
import UiMenuItem from '../menu/menuitem';

const MDC_EVENT_CHANGE = 'MDCSelect:change';
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-select2',
  components: {
    UiMenu,
    UiMenuItem
  },
  props: {
    // state
    model: null,
    // element attributes
    disabled: {
      type: Boolean,
      default: false
    },
    // ui attributes
    options: {
      required: true,
      type: Array,
      default() {
        return [];
      }
    },
    optionKey: {
      type: String,
      default: 'value'
    },
    optionValue: {
      type: String,
      default: 'label'
    },
    defaultKey: {
      type: String,
      default: ''
    },
    defaultValue: String,
    placeholder: String,
    // theme
    dark: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $select: null,
      currentValue: this.model,
      currentOptions: [],
      selectedOption: {}
    };
  },
  computed: {
    className() {
      return {
        'mdc-select': true,
        'mdc-select--disabled': this.disabled
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
        this.setSelectedTextContent(this.selectedOption[this.optionValue]);
      }
    }
  },
  methods: {
    changeHandler({detail}) {
      let index = detail.selectedIndex;
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

        this.$emit(UI_EVENT_CHANGE, {
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
        this.$select.foundation_.adapter_.setSelectedTextContent(selectedTextContent);
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
        this.setSelectedTextContent(this.selectedOption[this.optionValue]);
        this.$emit(UI_EVENT_CHANGE, this.selectedOption[this.optionKey]);
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
        let needInit = !this.placeholder || (this.placeholder && this.currentValue);
        if (needInit) {
          this.initSelected(currentOptions);
        }
        // menu items
        result = currentOptions.map(option => {
          return {
            index: option.index || 0,
            label: option[this.optionValue]
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
  },
  mounted() {
    if (!this.disabled) {
      this.$select = new MDCSelect(this.$el);
      this.$select.listen(MDC_EVENT_CHANGE, this.changeHandler);
      this.$el.style.width = 'auto'; // NOTE: MDCSelect's bug (when options is empty)
    }

    this.currentOptions = this.init();
  }
};
</script>
