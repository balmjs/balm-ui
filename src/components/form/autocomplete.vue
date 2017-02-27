<template>
  <ui-textfield class="mdl-autocomplete"
    :model="currentValue"
    :placeholder="placeholder"
    :expand="isExpand"
    :plus="plus"
    @input.native="handleInput($event)"
    @blur="handleBlur"
    @keydown="handleKeydown">
    <template slot="expand">
      <ul ref="autocomplete">
        <li v-for="(suggestion, index) in currentSuggestion"
          :key="index"
          :class="{'active': suggestion[ITEM_ACTIVE]}"
          @click="fillText(suggestion)">{{ suggestion[ITEM_VALUE] }}</li>
      </ul>
    </template>
    <template slot="plus">
      <slot name="plus"></slot>
    </template>
  </ui-textfield>
</template>

<script>
import UiTextfield from './textfield';

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_ENTER = 13;
const METHOD_GET = 'GET';
const METHOD_POST = 'POST';
const ITEM_ACTIVE = 'active';
const ITEM_KEY = 'key';
const ITEM_VALUE = 'value';
const _EVENT_CLICK = 'click';
const EVENT_INPUT = 'input';
const EVENT_RESPONSE = 'response';
const EVENT_ENTER = 'enter';

export default {
  name: 'ui-autocomplete',
  components: {
    UiTextfield
  },
  props: {
    model: {
      required: true
    },
    placeholder: String,
    method: {
      type: String,
      default: METHOD_GET
    },
    url: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: function() {
        return {};
      }
    },
    suggestion: Array,
    plus: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ITEM_ACTIVE: ITEM_ACTIVE,
      ITEM_VALUE: ITEM_VALUE,
      _callback: null,
      isExpand: false,
      currentValue: this.model,
      currentSuggestion: [],
      currentSuggestionIndex: 0
    }
  },
  methods: {
    show() {
      this.isExpand = true;
    },
    hide() {
      this.isExpand = false;
      this.currentSuggestionIndex = 0;
    },
    async request(data) {
      let config = {
        method: this.method.toLowerCase(),
        url: this.url
      };

      switch (this.method.toUpperCase()) {
        case METHOD_GET:
          config.params = data;
          break;
        case METHOD_POST:
          config.data = data;
          break;
      }

      let response = await this.$http(config);
      this.$emit(EVENT_RESPONSE, response.data);
    },
    handleInput(event) {
      this.currentValue = event.target.value;
      this.$emit(EVENT_INPUT, this.currentValue);

      if (!this.currentValue) {
        this.hide();
        this.currentSuggestion = [];
      }
    },
    handleBlur(event) {
      if (!this._callback) {
        this._callback = e => {
          let inTextfield = false;
          let parentEl = e.target.parentNode;
          while (parentEl && parentEl !== this.$el) {
            if (parentEl === this.$el) {
              inTextfield = true;
            }
            parentEl = parentEl.parentNode;
          }

          if (e !== event && this.isExpand && !inTextfield) {
            document.removeEventListener(_EVENT_CLICK, this._callback);
            this.hide();
          }
        };
      }
      document.addEventListener(_EVENT_CLICK, this._callback);
    },
    fillText(data) {
      this.currentValue = data[ITEM_VALUE];
      this.hide();

      delete data[ITEM_ACTIVE];
      this.$emit(EVENT_ENTER, data);
    },
    handleKeydown(event) {
      if (this.currentSuggestion.length) {
        let count = this.currentSuggestion.length - 1;
        let choosing = false;

        if (event.keyCode === KEY_UP) {
          choosing = true;
          if (this.currentSuggestionIndex === 0) {
            this.currentSuggestionIndex = count;
          } else {
            this.currentSuggestionIndex--;
          }
        } else if (event.keyCode === KEY_DOWN) {
          choosing = true;
          if (this.currentSuggestionIndex === count) {
            this.currentSuggestionIndex = 0;
          } else {
            this.currentSuggestionIndex++;
          }
        } else if (event.keyCode === KEY_ENTER) {
          let data = this.currentSuggestion[this.currentSuggestionIndex];
          this.currentValue = data[ITEM_VALUE];
          this.hide();

          delete data[ITEM_ACTIVE];
          this.$emit(EVENT_ENTER, data);
          event.preventDefault();
        }

        if (choosing) {
          this.currentSuggestion = this.currentSuggestion.map((item, index) => {
            let result = {};
            result[ITEM_ACTIVE] = index === this.currentSuggestionIndex;
            result[ITEM_KEY] = item[ITEM_KEY];
            result[ITEM_VALUE] = item[ITEM_VALUE];
            return result;
          });
        }
      }
    }
  },
  watch: {
    model(val) {
      this.currentValue = val;
    },
    params(val) {
      if (this.currentValue) {
        this.request(val);
      }
    },
    suggestion(val) {
      this.currentSuggestion = val;
      if (this.currentSuggestion.length) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  beforeDestroy() {
    if (this._callback) {
      document.removeEventListener(_EVENT_CLICK, this._callback);
    }
  }
};
</script>
