<template>
  <div :class="className">
    <ui-menu isSelect
      :menu="currentOptions"
      :disabled="disabled"
      @clicked="handleChange">
      <template slot="icon">
        <span :class="{'placeholder': !selected}">{{ selected || placeholder }}</span>
        <i class="material-icons">{{ expand }}</i>
      </template>
    </ui-menu>
  </div>
</template>

<script>
import UiMenu from '../common/menu/menu';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-select',
  components: {
    UiMenu
  },
  props: {
    options: Array,
    defaultValue: String,
    defaultKey: {
      type: String,
      default: ''
    },
    model: {
      required: true
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selected: '',
      currentValue: this.model,
      isExpand: false
    };
  },
  computed: {
    className() {
      return {
        'mdl-select': true,
        'mdl-select--disabled': this.disabled,
        'is-expand': this.isExpand
      };
    },
    currentOptions() {
      return this.init();
    },
    expand() {
      return this.isExpand ? 'expand_less' : 'expand_more';
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    options(val) {
      this.currentOptions = this.init(val);
      this.selected = '';

      let currentOptions = this.currentOptions;
      if (currentOptions.length) {
        let selected = currentOptions[0].label;
        for (let i = 0, len = currentOptions.length; i < len; i++) {
          if (currentOptions[i].key == this.currentValue) {
            selected = currentOptions[i].label;
            break;
          }
        }

        this.selected = selected;
      }
    }
  },
  methods: {
    init(_options = this.options) {
      let options = [];

      // default value
      if (this.defaultValue) {
        options.unshift({
          key: this.defaultKey,
          value: this.defaultValue
        });
        this.selected = options[0].value;
      }

      // menu data
      let result = options.concat(_options).map((option, index) => {
        return {
          index: index,
          value: option.key,
          label: option.value,
          selected: option.value === this.selected
        };
      });

      return result;
    },
    handleChange(option) {
      this.selected = option.label;
      this.$emit(EVENT_CHANGE, {
        index: option.index,
        key: option.value,
        value: option.label
      });
    }
  }
};
</script>
