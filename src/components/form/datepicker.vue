<template>
  <div class="mdl-datepicker">
    <ui-textfield
      :label="label"
      :model="currentValue"
      :plus="plus"
      @input.native="handleInput($event)">
      <template slot="plus">
        <div class="mdl-datepicker__plus" data-toggle>
          <slot name="plus">
            <i class="fa fa-calendar"></i>
          </slot>
        </div>
      </template>
    </ui-textfield>
  </div>
</template>

<script>
import Flatpickr from 'flatpickr';
import UiTextfield from './textfield';

const EVENT_INPUT = 'input';

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
    label: String,
    model: {
      type: String,
      required: true
    },
    plus: {
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
      this.$emit(EVENT_INPUT, this.currentValue);
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
