<template>
  <div :class="className">
    <ui-menu isSelect
      :menu="currentOptions"
      :disabled="disabled"
      @clicked="handleChange">
      <template slot="icon">
        <span :class="{'placeholder': !currentValue}">{{ currentValue || placeholder }}</span>
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
    options: {
      type: Array,
      default() {
        return [];
      }
    },
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
      currentKey: this.model,
      currentValue: '',
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
      this.currentKey = val;
    },
    options(val) {
      this.currentOptions = this.init(val);
      this.currentValue = '';

      let currentOptions = this.currentOptions;
      if (currentOptions.length) {
        this.initSelected(currentOptions, currentOptions[0].label, 'label');
      }
    }
  },
  methods: {
    initSelected(options, defaults = '', keyField = 'value') {
      let selected = defaults;

      for (let i = 0, len = options.length; i < len; i++) {
        if (options[i].key == this.currentKey) {
          selected = options[i][keyField];
          break;
        }
      }

      this.currentValue = selected;
    },
    init(_options = this.options) {
      let options = [];

      // default value
      if (this.defaultValue) {
        options.unshift({
          key: this.defaultKey,
          value: this.defaultValue
        });
        this.currentValue = options[0].value;
      }

      options = options.concat(_options);

      // init selected
      if (!this.placeholder && options.length) {
        this.initSelected(options, options[0].value);
      }

      // menu data
      let result = options.map((option, index) => {
        return {
          index: index,
          value: option.key,
          label: option.value,
          selected: option.value === this.currentValue
        };
      });

      return result;
    },
    handleChange(option) {
      if (option.label !== this.currentValue) {
        this.currentValue = option.label;
        this.$emit(EVENT_CHANGE, {
          index: option.index,
          key: option.value,
          value: option.label
        });
      }
    }
  },
  mounted() {
    let options = this.options;
    if (options.length) {
      this.initSelected(options);
    }
  }
};
</script>
