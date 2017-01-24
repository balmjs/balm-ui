<template>
  <div :class="className">
    <ui-menu isSelect :menu="currentOptions" @clicked="handleChange">
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
    value: Array,
    defaultValue: String,
    defaultKey: {
      type: [String, Number],
      default: ''
    },
    model: [String, Number],
    placeholder: String
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
        'is-expand': this.isExpand
      };
    },
    currentOptions() {
      let options = [];

      // default value
      if (this.defaultValue) {
        options.unshift({
          key: this.defaultKey,
          value: this.defaultValue
        });
      }

      // selected init
      options = options.concat(this.value);
      if (options.length) {
        let selected = options[0].value;
        for (let i = 0, len = options.length; i < len; i++) {
          if (options[i].key == this.currentValue) {
            selected = options[i].value;
            break;
          }
        }

        this.selected = selected;
      }

      // menu data
      let result = options.map((option, index) => {
        return {
          index: index,
          value: option.key,
          label: option.value,
          selected: option.value === this.selected
        };
      });

      return result;
    },
    expand() {
      return this.isExpand ? 'expand_less' : 'expand_more';
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  methods: {
    handleChange(option) {
      this.selected = option.label;
      this.$emit(EVENT_CHANGE, {
        index: option.index,
        key: option.value,
        value: option.label
      });
    },
    bindKeyboard() {

    },
    unbindKeyboard() {

    }
  },
  mounted() {
    this.bindKeyboard();
  }
};
</script>
