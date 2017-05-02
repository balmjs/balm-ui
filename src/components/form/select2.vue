<template>
  <!-- Custom MDC Select, shown on desktop -->
  <div :class="className" role="listbox" tabindex="0" :aria-disabled="disabled">
    <span class="mdc-select__selected-text">
      <slot>{{ selectedOption[optionValue] }}</slot>
    </span>
    <ui-menu :class="'mdc-select__menu'">
      <ui-menuitem v-if="defaultValue"
        role="option"
        :item="defaultOption">{{ defaultValue }}</ui-menuitem>
      <template v-if="group">
        <!-- TODO -->
      </template>
      <template v-else>
        <ui-menuitem v-for="(option, index) in options" :key="index"
          role="option"
          :item="option"
          :label="optionValue"
          :tabindex="option.index || 0"
          :aria-selected="option[optionKey] == model">{{ option[optionValue] }}</ui-menuitem>
      </template>
    </ui-menu>
  </div>
</template>

<script>
import {MDCSelect} from '../../material-components-web/select';
import UiMenu from '../common/menu/menu';
import UiMenuItem from '../common/menu/menuitem';

const MDC_EVENT_CHANGE = 'MDCSelect:change';
const UI_EVENT_CHANGE = 'change';

export default {
  name: 'ui-select2',
  components: {
    UiMenu,
    UiMenuItem
  },
  props: {
    // attribute
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    // mdc
    selected: {
      required: true
    },
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
    group: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      $select: null,
      model: this.selected,
      selectedOption: {}
    };
  },
  computed: {
    className() {
      return {
        'mdc-select': !this.multiple && !this.group,
        'mdc-select--disabled': this.disabled,
        'mdc-multi-select': this.multiple,
        'mdc-list': this.group
      };
    },
    defaultOption() {
      let option = {};
      option[this.optionKey] = this.defaultKey;
      option[this.optionValue] = this.defaultValue;
      return option;
    }
  },
  watch: {
    selected(val) {
      this.model = val;
    },
    options(val) {
      this.resetSelected(!val.length);
      if (val.length) {
        this.init();
        this.setSelectedTextContent(this.selectedOption[this.optionValue]);
      } else {
        this.setSelectedTextContent('');
      }
    }
  },
  methods: {
    changeHandler(evt) {
      let detail = evt.detail;
      this.selectedOption = this.options[detail.selectedIndex];
      this.$emit(UI_EVENT_CHANGE, this.selectedOption[this.optionKey]);
    },
    init() {
      if (!this.defaultValue && this.options.length) {
        let currentOption = this.selectedOption;

        if (this.group) {
          for (let options of this.options) {
            if (options.items && options.items.length) {
              currentOption = this.model
                ? options.items.find(option => option[this.optionKey] == this.model) // `object` || `undefined`
                : options.items[0]; // `object`
            }
            if (isObject(currentOption) && currentOption.hasOwnProperty(this.optionKey)) {
              break;
            }
          }
        } else {
          currentOption = this.model
            ? this.options.find(option => option[this.optionKey] == this.model)
            : this.options[0];
        }

        this.selectedOption = currentOption;
        this.$emit(UI_EVENT_CHANGE, this.selectedOption[this.optionKey]);
      }
    },
    resetSelected(disabled) {
      this.selectedOption = {};
      this.$select.selectedIndex = -1;
      this.$select.disabled = disabled;
    },
    setSelectedTextContent(selectedTextContent = '') {
      this.$select.foundation_.adapter_.setSelectedTextContent(selectedTextContent);
    }
  },
  mounted() {
    if (!this.disabled) {
      this.$select = new MDCSelect(this.$el);
      this.$select.listen(MDC_EVENT_CHANGE, this.changeHandler);
      this.$el.style.width = 'auto'; // MDCSelect's bug (when options is empty)
    }

    if (!this.multiple) {
      this.init();
    }
  }
};
</script>
