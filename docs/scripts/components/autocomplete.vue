<template>
  <ui-textfield label="Expand Text..."
    :model="currentValue"
    :expand="expand"
    @input.native="handleInput($event)"
    @blur="handleBlur">
    <template slot="expand">
      <ul ref="autocomplete">
        <li v-for="item in items" @click="fillText(item)">{{ item }}</li>
      </ul>
    </template>
  </ui-textfield>
</template>

<script>
const EVENT_INPUT = 'input';
const EVENT_CHANGE = 'change';

const KEY_UP = 38;
const KEY_DOWN = 40;

export default {
  name: 'ui-autocomplete',
  props: {
    model: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentValue: this.model,
      expand: false,
      items: [],
      callback: null
    }
  },
  methods: {
    show() {
      this.expand = true;
    },
    hide() {
      this.expand = false;
    },
    async handleInput(event) {
      this.currentValue = event.target.value;

      // mock data
      if (this.currentValue) {
        let response = await this.$http.get(this.url);
        // TODO: custom response data
        this.items = response.data[this.currentValue] || [];

        if (response.data[this.currentValue]) {
          this.show();
        } else {
          this.hide();
        }
      } else {
        this.hide();
        this.items = [];
      }

      this.$emit(EVENT_INPUT, this.currentValue);
    },
    handleBlur(event) {
      if (!this.callback) {
        this.callback = e => {
          let inTextfield = false;
          let parentEl = e.target.parentNode;
          while (parentEl && parentEl !== this.$el) {
            if (parentEl === this.$el) {
              inTextfield = true;
            }
            parentEl = parentEl.parentNode;
          }

          if (e !== event && this.expand && !inTextfield) {
            document.removeEventListener('click', this.callback);
            this.hide();
          }
        };
      }
      document.addEventListener('click', this.callback);
    },
    fillText(val) {
      this.currentValue = val;
      this.hide();

      this.$emit(EVENT_CHANGE, this.currentValue);
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    }
  },
  beforeDestroy() {
    if (this.callback) {
      document.removeEventListener('click', this.callback);
    }
  }
};
</script>
