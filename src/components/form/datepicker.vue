<template>
  <div class="mdl-datepicker">
    <ui-textfield
      :model="currentValue"
      :placeholder="placeholder"
      :plus="toggle || clear"
      @change="handleInput">
      <template slot="plus">
        <div v-if="toggle" class="mdl-datepicker__toggle" data-toggle>
          <slot name="toggle">
            <i class="fa fa-calendar"></i>
          </slot>
        </div>
        <div v-if="clear" class="mdl-datepicker__clear" data-clear>
          <slot name="clear">
            <i class="fa fa-close"></i>
          </slot>
        </div>
      </template>
    </ui-textfield>
  </div>
</template>

<script>
import Flatpickr from 'flatpickr';
import UiTextfield from './textfield';

const EVENT_CHANGE = 'change';

export default {
  name: 'ui-datepicker',
  components: {
    UiTextfield
  },
  props: {
    config: {
      type: Object,
      default: function() {
        return {};
      }
    },
    model: {
      required: true
    },
    placeholder: String,
    toggle: {
      type: Boolean,
      default: false
    },
    clear: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      flatpickr: null,
      currentValue: this.model
    }
  },
  methods: {
    handleInput(event) {
      this.currentValue = event.target.value;
      this.$emit(EVENT_CHANGE, this.currentValue);
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  mounted() {
    if (!this.flatpickr) {
      this.config.wrap = true;
      this.flatpickr = new Flatpickr(this.$el, this.config);
    }
  },
  beforeDestroy() {
    this.flatpickr.destroy();
    this.flatpickr = null;
  }
};
</script>
