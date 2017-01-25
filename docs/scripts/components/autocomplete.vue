<template>
  <ui-textfield label="Expand Text... (type 'a' or 'b')"
    :model="currentValue"
    :expand="expand"
    @input.native="handleInput($event)"
    @blur="handleBlur"
    @keydown="handleKeydown">
    <template slot="expand">
      <ul ref="autocomplete">
        <li v-for="item in items"
          :class="{'active': item.active}"
          @click="fillText(item.value)">{{ item.value }}</li>
      </ul>
    </template>
  </ui-textfield>
</template>

<script>
const EVENT_INPUT = 'input';
const EVENT_CHANGE = 'change';

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_ENTER = 13;

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
      currentItemIndex: 0,
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
        this.items = response.data[this.currentValue].map((item, index) => {
          return {
            active: index === 0,
            value: item
          };
        }) || [];

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
    },
    handleKeydown(event) {
      let count = this.items.length - 1;
      let choosing = false;

      if (event.keyCode === KEY_UP) {
        choosing = true;
        if (this.currentItemIndex === 0) {
          this.currentItemIndex = count;
        } else {
          this.currentItemIndex--;
        }
      } else if (event.keyCode === KEY_DOWN) {
        choosing = true;
        if (this.currentItemIndex === count) {
          this.currentItemIndex = 0;
        } else {
          this.currentItemIndex++;
        }
      } else if (event.keyCode === KEY_ENTER) {
        this.currentValue = this.items[this.currentItemIndex].value;
        this.hide();

        this.$emit(EVENT_CHANGE, this.currentValue);
      }

      if (choosing) {
        this.items = this.items.map((item, index) => {
          return {
            active: index === this.currentItemIndex,
            value: item.value
          };
        });
      }
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

<style scoped>
.mdl-textfield__expand ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.mdl-textfield__expand li:hover,
.mdl-textfield__expand li.active {
  background: black;
  color: white;
}
</style>
