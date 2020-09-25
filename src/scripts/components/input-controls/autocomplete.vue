<template>
  <ui-textfield
    :model-value="inputValue"
    :input-id="inputId"
    :class="className"
    :outlined="outlined"
    :label="label"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :fullwidth="fullwidth"
    :end-aligned="endAligned"
    :with-leading-icon="hasLeadingIcon"
    :with-trailing-icon="hasTrailingIcon"
    plus
    @focus="handleFocus"
    @keydown="handleKeydown"
    @update:modelValue="handleInput"
    @blur="handleBlur"
  >
    <!-- Leading icon (optional) -->
    <template #before="{ iconClass }">
      <i
        v-if="materialIcon"
        :class="
          getIconClassName([
            UI_TEXTFIELD_ICON.cssClasses.icon,
            UI_TEXTFIELD_ICON.cssClasses.leadingIcon
          ])
        "
        v-text="materialIcon"
      ></i>
      <template v-else>
        <slot name="before" :iconClass="iconClass"></slot>
      </template>
    </template>

    <!-- Label text -->
    <template #default>
      <slot></slot>
    </template>

    <!-- Trailing icon (optional) -->
    <template #after="{ iconClass }">
      <slot name="after" :iconClass="iconClass"></slot>
    </template>

    <template #plus>
      <div ref="autocomplete" class="mdc-autocomplete__list">
        <ul class="mdc-list">
          <li
            v-for="(item, index) in currentSuggestion.data"
            :key="index"
            :data-index="index"
            :class="getItemClassName(index)"
            @click="handleSelected(item)"
            v-html="item[UI_AUTOCOMPLETE.ITEM.LABEL]"
          ></li>
        </ul>
      </div>
    </template>
  </ui-textfield>
</template>

<script>
import UiTextfield from './textfield';
import domMixin from '../../mixins/dom';
import textfieldMixin from '../../mixins/textfield';
import getType from '../../utils/typeof';
import { UI_TEXTFIELD_ICON } from './constants';

// Define autocomplete constants
const UI_AUTOCOMPLETE = {
  ITEM: {
    LABEL: 'label',
    VALUE: 'value',
    SELECTED: 'selected'
  },
  EVENT: {
    INPUT: 'update:modelValue',
    SEARCH: 'search',
    SELECTED: 'selected',
    // For inner
    CLICK: 'click',
    MOUSEMOVE: 'mousemove',
    MOUSELEAVE: 'mouseleave'
  },
  escapeRegex: new RegExp('<[^>]+>', 'g')
};

const KEYCODE = {
  UP: 38,
  DOWN: 40,
  ENTER: 13
};

export default {
  name: 'UiAutocomplete',
  components: {
    UiTextfield
  },
  mixins: [domMixin, textfieldMixin],
  props: {
    // <ui-textfield> variants
    outlined: {
      type: Boolean,
      default: false
    },
    // States
    modelValue: {
      type: [String, Number],
      default: ''
    },
    source: {
      type: Array, // Two supported formats: ['Choice1', 'Choice2'] or [{label: 'Choice1', value: 'value1'}, ...]
      default() {
        return [];
      }
    },
    // <ui-textfield> props
    inputId: {
      type: [String, null],
      default: null
    },
    // UI attributes
    autofocus: {
      type: Boolean,
      default: false
    },
    delay: {
      type: [Number, String],
      default: 300
    },
    minlength: {
      type: [Number, String],
      default: 1
    },
    remote: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    UI_AUTOCOMPLETE.EVENT.INPUT,
    UI_AUTOCOMPLETE.EVENT.SEARCH,
    UI_AUTOCOMPLETE.EVENT.SELECTED
  ],
  data() {
    return {
      UI_AUTOCOMPLETE,
      UI_TEXTFIELD_ICON,
      $autocomplete: null,
      $callback: null,
      isExpanded: false,
      inputValue: this.modelValue,
      currentSource: [], // source data
      currentSuggestion: {
        data: [], // filter data
        index: -1
      },
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
        'mdc-autocomplete--expanded': this.isExpanded
      };
    },
    hasLeadingIcon() {
      return !!(this.withLeadingIcon || this.$slots.before);
    },
    hasTrailingIcon() {
      return !!(this.withTrailingIcon || this.$slots.after);
    }
  },
  watch: {
    modelValue(val) {
      if (this.inputValue !== val) {
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
  beforeUnmount() {
    if (this.$callback) {
      document.removeEventListener(UI_AUTOCOMPLETE.EVENT.CLICK, this.$callback);
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
      let view = this.$autocomplete;
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
      let maxHeight = this.currentSuggestion.data.length - 1;
      if (this.scroll.defaultReversedLastIndex !== maxHeight) {
        this.scroll.defaultReversedLastIndex = maxHeight;
        this.scroll.defaultReversedFirstIndex =
          this.scroll.defaultReversedLastIndex - this.scroll.defaultLastIndex;
      }

      this.scroll.currentLastIndex = this.scroll.defaultLastIndex;
    },
    show() {
      let keywords = this.inputValue.trim();
      if (
        keywords.length >= this.minlength &&
        this.currentSuggestion.data.length
      ) {
        this.isExpanded = true;
        this.$nextTick(() => {
          this.initClientHeight();
        });
      }
    },
    hide() {
      this.isExpanded = false;
      this.currentSuggestion.index = -1;
      this.clearSelected();
    },
    search(keywords) {
      if (this.remote) {
        // Remote datasource
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          this.$emit(UI_AUTOCOMPLETE.EVENT.SEARCH, keywords); // AJAX
        }, this.delay);
      } else {
        if (['*', '+', '?', '[', '\\'].includes(keywords)) {
          keywords = `\\${keywords}`;
        }
        // Local datasource
        this.currentSuggestion.data = this.currentSource.filter((word) => {
          return RegExp(keywords, 'i').test(word[UI_AUTOCOMPLETE.ITEM.LABEL]);
        });

        this.show();
      }
    },
    setDataSource(dataSource) {
      if (getType(dataSource) === 'array') {
        this.currentSource = dataSource.map((data) => {
          let item = {};

          if (getType(data) === 'string' || getType(data) === 'number') {
            item[UI_AUTOCOMPLETE.ITEM.LABEL] = data;
            item[UI_AUTOCOMPLETE.ITEM.VALUE] = data;
          } else if (getType(data) === 'object') {
            item = data;
          } else {
            console.warn("DataSource's item must be a string or object");
          }

          return item;
        });

        this.currentSuggestion.data = this.currentSource;
      }
    },
    handleFocus() {
      if (this.autofocus) {
        this.show();
      }
    },
    handleKeydown(event) {
      if (this.currentSuggestion.data.length) {
        const MIN = 0;
        const MAX = this.currentSuggestion.data.length - 1;

        switch (event.keyCode) {
          case KEYCODE.DOWN:
            this.clearSelected();

            if (this.currentSuggestion.index === MAX) {
              this.currentSuggestion.index = MIN;

              this.scroll.currentFirstIndex = this.scroll.defaultFirstIndex;
              this.scroll.currentLastIndex = this.scroll.defaultLastIndex;
              this.scroll.$view.scrollTop = 0;
            } else {
              this.currentSuggestion.index++;

              if (this.currentSuggestion.index > this.scroll.currentLastIndex) {
                this.scroll.currentFirstIndex++;
                this.scroll.currentLastIndex++;
                this.scroll.$view.scrollTop += this.scroll.itemHeight;
              }
            }

            this.$autocomplete.blur(); // Hide mouse
            event.preventDefault();
            break;
          case KEYCODE.UP:
            this.clearSelected();

            if (
              this.currentSuggestion.index === MIN ||
              this.currentSuggestion.index === -1
            ) {
              this.currentSuggestion.index = MAX;

              this.scroll.currentFirstIndex = this.scroll.defaultReversedFirstIndex;
              this.scroll.currentLastIndex = this.scroll.defaultReversedLastIndex;
              this.scroll.$view.scrollTop =
                this.scroll.itemHeight * this.scroll.defaultReversedFirstIndex;
            } else {
              this.currentSuggestion.index--;

              if (this.currentSuggestion.index < this.scroll.currentLastIndex) {
                this.scroll.currentFirstIndex--;
                this.scroll.currentLastIndex--;
                if (
                  this.currentSuggestion.index <
                  this.scroll.defaultReversedFirstIndex
                ) {
                  this.scroll.$view.scrollTop -= this.scroll.itemHeight;
                }
              }
            }

            this.$autocomplete.blur(); // Hide mouse
            event.preventDefault();
            break;
          case KEYCODE.ENTER:
            let selectedItem = this.currentSuggestion.data[
              this.currentSuggestion.index
            ];
            this.handleSelected(selectedItem);
            event.preventDefault();
            break;
        }
      }
    },
    handleInput(value) {
      this.inputValue = `${value}`;
      this.$emit(UI_AUTOCOMPLETE.EVENT.INPUT, this.inputValue);

      let keywords = this.inputValue.trim();
      if (keywords.length >= this.minlength) {
        this.search(keywords);
      } else {
        this.hide();
      }
    },
    handleBlur(event) {
      if (!this.$callback) {
        this.$callback = (e) => {
          let inTextfield = false;
          let parentEl = e.target;

          while (parentEl && parentEl !== this.el) {
            parentEl = parentEl.parentNode;
            if (parentEl === this.el) {
              inTextfield = true;
            }
          }

          if (e !== event && this.isExpanded && !inTextfield) {
            document.removeEventListener(
              UI_AUTOCOMPLETE.EVENT.CLICK,
              this.$callback
            );
            this.hide();
          }
        };
      }
      document.addEventListener(UI_AUTOCOMPLETE.EVENT.CLICK, this.$callback);
    },
    handleMousemove(event) {
      let el = event.target;
      if (
        el.tagName === 'LI' &&
        !el.classList.contains(UI_AUTOCOMPLETE.ITEM.SELECTED)
      ) {
        this.currentSelectedItem = el;

        this.clearSelected();

        el.classList.add(UI_AUTOCOMPLETE.ITEM.SELECTED);
        this.currentSuggestion.index = el.dataset.index;
      }
    },
    handleMouseleave() {
      this.currentSelectedItem &&
        this.currentSelectedItem.classList.remove(
          UI_AUTOCOMPLETE.ITEM.SELECTED
        );
    },
    handleSelected(selectedItem) {
      this.hide();

      delete selectedItem[UI_AUTOCOMPLETE.ITEM.SELECTED];

      let result = Object.assign({}, selectedItem);
      result[UI_AUTOCOMPLETE.ITEM.LABEL] = result[
        UI_AUTOCOMPLETE.ITEM.LABEL
      ].replace(UI_AUTOCOMPLETE.escapeRegex, '');

      this.$emit(
        UI_AUTOCOMPLETE.EVENT.INPUT,
        result[UI_AUTOCOMPLETE.ITEM.LABEL]
      );
      this.$emit(UI_AUTOCOMPLETE.EVENT.SELECTED, result); // result: any
    },
    clearSelected() {
      let selectedItem = this.$autocomplete.querySelector(
        `li.${UI_AUTOCOMPLETE.ITEM.SELECTED}`
      );
      if (selectedItem) {
        selectedItem.classList.remove(UI_AUTOCOMPLETE.ITEM.SELECTED);
      }
    },
    getItemClassName(index) {
      return [
        'mdc-list-item',
        { selected: index === this.currentSuggestion.index }
      ];
    }
  }
};
</script>
