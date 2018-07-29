<template>
  <ui-textfield expand
    v-model="inputValue"
    :class="className"
    :placeholder="placeholder"
    :disabled="disabled"
    @focus="handleFocus"
    @keydown="handleKeydown"
    @input="handleInput"
    @blur="handleBlur">
    <template slot="expand">
      <ul ref="autocomplete">
        <li v-for="(item, index) in currentSuggestion"
            v-html="item[UI_AUTOCOMPLETE.ITEM.VALUE]"
            :key="index"
            :data-index="index"
            :class="{'active': index === currentSuggestionIndex}"
            @click="onSelected(item)">
        </li>
      </ul>
    </template>
  </ui-textfield>
</template>

<script>
import UiTextfield from './textfield';
import getType from '../../utils/typeof';

// Define constants
const KEYCODE = {
  UP: 38,
  DOWN: 40,
  ENTER: 13
};

const UI_AUTOCOMPLETE = {
  ITEM: {
    ACTIVE: 'active',
    KEY: 'key',
    VALUE: 'value'
  },
  EVENT: {
    INPUT: 'input',
    SEARCH: 'search',
    SELECTED: 'selected',
    CLICK: 'click',
    MOUSEMOVE: 'mousemove',
    MOUSELEAVE: 'mouseleave'
  },
  REGEX: {
    REMOVE_HTML_TAG: new RegExp('<[^>]+>', 'g')
  }
};

export default {
  name: 'ui-autocomplete',
  components: {
    UiTextfield
  },
  model: {
    prop: 'model',
    event: UI_AUTOCOMPLETE.EVENT.INPUT
  },
  props: {
    // States
    model: {
      type: [String, Number],
      default: ''
    },
    // Element attributes
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    // UI attributes
    autoFocus: {
      type: Boolean,
      default: false
    },
    delay: {
      type: [Number, String],
      default: 300
    },
    minLength: {
      type: [Number, String],
      default: 1
    },
    source: [Array, Function], // Two supported formats: ['value1', 'value2'] or [{key1: 'value1'}, {key2: 'value2'}]
    remote: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_AUTOCOMPLETE,
      $autocomplete: null,
      _callback: null,
      isExpand: false,
      inputValue: this.model,
      currentSource: [], // source data
      currentSuggestion: [], // filter data
      currentSuggestionIndex: -1,
      currentSelectedItem: null,
      timer: null,
      scroll: {
        $view: null,
        viewHeight: 0,
        listHeight: 0,
        itemHeight: 0,
        currentFirstIndex: 0,
        currentLastIndex: 0,
        defaultFirstIndex: 0,
        defaultLastIndex: 0,
        defaultReversedLastIndex: 0,
        defaultReversedFirstIndex: 0
      }
    };
  },
  computed: {
    className() {
      return {
        'mdc-autocomplete': true,
        'mdc-autocomplete--expand': this.isExpand
      };
    }
  },
  watch: {
    model(val) {
      if (val !== this.inputValue) {
        this.inputValue = `${val}`;
      }
    },
    source(data) {
      this.setDataSource(data);
      this.show();
    }
  },
  mounted() {
    this.$autocomplete = this.$refs.autocomplete;
    this.$autocomplete.addEventListener(
      UI_AUTOCOMPLETE.EVENT.MOUSEMOVE,
      this.handleMousemove
    );
    this.$autocomplete.addEventListener(
      UI_AUTOCOMPLETE.EVENT.MOUSELEAVE,
      this.handleMouseleave
    );

    this.setDataSource(this.source);
  },
  beforeDestroy() {
    if (this._callback) {
      document.removeEventListener(UI_AUTOCOMPLETE.EVENT.CLICK, this._callback);
    }
    this.$autocomplete.removeEventListener(
      UI_AUTOCOMPLETE.EVENT.MOUSEMOVE,
      this.handleMousemove
    );
    this.$autocomplete.removeEventListener(
      UI_AUTOCOMPLETE.EVENT.MOUSELEAVE,
      this.handleMouseleave
    );
  },
  methods: {
    initClientHeight() {
      let view = this.$autocomplete.parentNode;
      let list = view.querySelector('ul');
      let item = view.querySelector('li');

      if (!this.scroll.$view) {
        this.scroll.$view = view;
        this.scroll.viewHeight = view.offsetHeight;
      }
      if (!this.scroll.item) {
        this.scroll.itemHeight = item.offsetHeight;
      }
      if (this.scroll.list !== list.offsetHeight) {
        this.scroll.listHeight = list.offsetHeight;
      }

      this.scroll.defaultFirstIndex = 0;
      this.scroll.defaultLastIndex =
        parseInt(this.scroll.viewHeight / this.scroll.itemHeight, 10) - 1;
      let maxHeight = this.currentSuggestion.length - 1;
      if (this.scroll.defaultReversedLastIndex !== maxHeight) {
        this.scroll.defaultReversedLastIndex = maxHeight;
        this.scroll.defaultReversedFirstIndex =
          this.scroll.defaultReversedLastIndex - this.scroll.defaultLastIndex;
      }

      this.scroll.currentLastIndex = this.scroll.defaultLastIndex;
    },
    show() {
      let keywords = this.inputValue.trim();
      if (keywords.length >= this.minLength && this.currentSuggestion.length) {
        this.isExpand = true;
        this.$nextTick(() => {
          this.initClientHeight();
        });
      }
    },
    hide() {
      this.isExpand = false;
      this.currentSuggestionIndex = -1;
      this.clearSelected();
    },
    search(keywords) {
      if (this.remote) {
        // remote datasource
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          this.$emit(UI_AUTOCOMPLETE.EVENT.SEARCH, keywords); // AJAX
        }, this.delay);
      } else {
        // local datasource
        this.currentSuggestion = this.currentSource.filter(word => {
          return RegExp(keywords, 'i').test(word.value);
        });

        this.show();
      }
    },
    setDataSource(dataSource) {
      if (getType(dataSource) === 'array') {
        this.currentSource = dataSource.map(data => {
          let item = {};

          if (getType(data) === 'string' || getType(data) === 'number') {
            item[UI_AUTOCOMPLETE.ITEM.KEY] = data;
            item[UI_AUTOCOMPLETE.ITEM.VALUE] = data;
          } else if (getType(data) === 'object') {
            item = data;
          } else {
            console.warn("DataSource's item must be a string or object.");
          }

          return item;
        });

        this.currentSuggestion = this.currentSource;
      }
    },
    handleFocus(event) {
      if (this.autoFocus) {
        this.show();
      }
    },
    handleKeydown(event) {
      if (this.currentSuggestion.length) {
        const MIN = 0;
        const MAX = this.currentSuggestion.length - 1;

        switch (event.keyCode) {
          case KEYCODE.DOWN:
            this.clearSelected();

            if (this.currentSuggestionIndex === MAX) {
              this.currentSuggestionIndex = MIN;

              this.scroll.currentFirstIndex = this.scroll.defaultFirstIndex;
              this.scroll.currentLastIndex = this.scroll.defaultLastIndex;
              this.scroll.$view.scrollTop = 0;
            } else {
              this.currentSuggestionIndex++;

              if (this.currentSuggestionIndex > this.scroll.currentLastIndex) {
                this.scroll.currentFirstIndex++;
                this.scroll.currentLastIndex++;
                this.scroll.$view.scrollTop += this.scroll.itemHeight;
              }
            }

            this.$autocomplete.blur(); // hide mouse
            event.preventDefault();
            break;
          case KEYCODE.UP:
            this.clearSelected();

            if (
              this.currentSuggestionIndex === MIN ||
              this.currentSuggestionIndex === -1
            ) {
              this.currentSuggestionIndex = MAX;

              this.scroll.currentFirstIndex = this.scroll.defaultReversedFirstIndex;
              this.scroll.currentLastIndex = this.scroll.defaultReversedLastIndex;
              this.scroll.$view.scrollTop =
                this.scroll.itemHeight * this.scroll.defaultReversedFirstIndex;
            } else {
              this.currentSuggestionIndex--;

              if (this.currentSuggestionIndex < this.scroll.currentLastIndex) {
                this.scroll.currentFirstIndex--;
                this.scroll.currentLastIndex--;
                if (
                  this.currentSuggestionIndex <
                  this.scroll.defaultReversedFirstIndex
                ) {
                  this.scroll.$view.scrollTop -= this.scroll.itemHeight;
                }
              }
            }

            this.$autocomplete.blur(); // hide mouse
            event.preventDefault();
            break;
          case KEYCODE.ENTER:
            let selectedItem = this.currentSuggestion[
              this.currentSuggestionIndex
            ];
            this.onSelect(selectedItem);
            event.preventDefault();
            break;
        }
      }
    },
    handleInput(value) {
      this.inputValue = `${value}`;
      this.$emit(UI_AUTOCOMPLETE.EVENT.INPUT, this.inputValue);

      let keywords = this.inputValue.trim();
      if (keywords.length >= this.minLength) {
        this.search(keywords);
      } else {
        this.hide();
      }
    },
    handleBlur(event) {
      if (!this._callback) {
        this._callback = e => {
          let inTextfield = false;
          let parentEl = e.target.parentNode;

          while (parentEl && parentEl !== this.$el) {
            parentEl = parentEl.parentNode;
            if (parentEl === this.$el) {
              inTextfield = true;
            }
          }

          if (e !== event && this.isExpand && !inTextfield) {
            document.removeEventListener(
              UI_AUTOCOMPLETE.EVENT.CLICK,
              this._callback
            );
            this.hide();
          }
        };
      }
      document.addEventListener(UI_AUTOCOMPLETE.EVENT.CLICK, this._callback);
    },
    handleMousemove(event) {
      let el = event.target;
      if (
        el.tagName === 'LI' &&
        !el.classList.contains(UI_AUTOCOMPLETE.ITEM.ACTIVE)
      ) {
        this.currentSelectedItem = el;

        this.clearSelected();

        el.classList.add(UI_AUTOCOMPLETE.ITEM.ACTIVE);
        this.currentSuggestionIndex = el.dataset.index;
      }
    },
    handleMouseleave() {
      this.currentSelectedItem.classList.remove(UI_AUTOCOMPLETE.ITEM.ACTIVE);
    },
    onSelected(selectedItem) {
      this.hide();

      delete selectedItem[UI_AUTOCOMPLETE.ITEM.ACTIVE];

      let result = Object.assign({}, selectedItem);
      result[UI_AUTOCOMPLETE.ITEM.VALUE] = result[
        UI_AUTOCOMPLETE.ITEM.VALUE
      ].replace(UI_AUTOCOMPLETE.REGEX.REMOVE_HTML_TAG, '');
      this.inputValue = result[UI_AUTOCOMPLETE.ITEM.VALUE];

      this.$emit(UI_AUTOCOMPLETE.EVENT.SELECTED, result); // result: any
    },
    clearSelected() {
      let activeItem = this.$autocomplete.querySelector(
        `li.${UI_AUTOCOMPLETE.ITEM.ACTIVE}`
      );
      if (activeItem) {
        activeItem.classList.remove(UI_AUTOCOMPLETE.ITEM.ACTIVE);
      }
    }
  }
};
</script>
