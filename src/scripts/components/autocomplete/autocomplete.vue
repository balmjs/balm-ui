<template>
  <div :class="className">
    <ui-textfield
      v-model="inputValue"
      :input-id="inputId"
      :outlined="outlined"
      :label="label"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :fullwidth="fullwidth"
      :end-aligned="endAligned"
      :icon="icon"
      :with-leading-icon="hasLeadingIcon"
      :with-trailing-icon="hasTrailingIcon"
      @focus="handleFocus"
      @keydown="handleKeydown"
      @input="handleInput"
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

      <!-- <template #plus>
        <div
          v-show="currentSuggestion.data.length"
          ref="autocomplete"
          class="mdc-autocomplete__list"
        >
          <ul :class="deprecatedListClassNameMap['mdc-list']">
            <li
              v-for="(item, index) in currentSuggestion.data"
              :key="index"
              :data-index="index"
              :class="getItemClassName(index)"
              @click="handleSelected(item)"
              v-html="item.html"
            ></li>
          </ul>
        </div>
      </template> -->
    </ui-textfield>
    <!-- Autocomplete list -->
    <div
      v-show="currentSuggestion.data.length"
      ref="autocompleteList"
      :class="menuClassName"
    >
      <div class="mdc-drawer-scrim"></div>
      <ul :class="deprecatedListClassNameMap['mdc-list']">
        <li
          v-for="(item, index) in currentSuggestion.data"
          :key="index"
          :data-index="index"
          :class="getItemClassName(index)"
          @click="handleSelected(item)"
          v-html="item.html"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script>
import UiTextfield from '../textfield/textfield.vue';
import textfieldMixin from '../../mixins/textfield';
import deprecatedListMixin from '../../mixins/deprecated-list';
import getType from '../../utils/typeof';
import { UI_TEXTFIELD_ICON } from '../textfield/constants';
import {
  optionFormatDefaultValue,
  checkOptionFormat
} from '../../utils/option-format';

// Define autocomplete constants
const UI_AUTOCOMPLETE = {
  cssClasses: {
    selected: 'selected'
  },
  EVENT: {
    INPUT: 'input',
    SEARCH: 'search',
    SELECTED: 'selected',
    CLICK: 'click',
    MOUSEMOVE: 'mousemove',
    MOUSELEAVE: 'mouseleave'
  }
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
  mixins: [textfieldMixin, deprecatedListMixin],
  model: {
    prop: 'model',
    event: UI_AUTOCOMPLETE.EVENT.INPUT
  },
  props: {
    // <ui-textfield> variants
    outlined: {
      type: Boolean,
      default: false
    },
    // States
    model: {
      type: [String, Number],
      default: ''
    },
    source: {
      type: Array, // Two supported formats: ['Choice1', 'Choice2'] or [{label: 'Choice1', value: 'value1'}, ...]
      default() {
        return [];
      }
    },
    sourceFormat: {
      type: Object,
      default() {
        return optionFormatDefaultValue;
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
    },
    highlight: {
      type: Boolean,
      default: false
    },
    filterKeywords: {
      type: Boolean,
      default: false
    },
    inside: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_AUTOCOMPLETE,
      UI_TEXTFIELD_ICON,
      open: false,
      autocompleteList: null,
      $listener: null,
      inputValue: this.model,
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
        'mdc-autocomplete--fullwidth': this.fullwidth,
        'mdc-autocomplete--in-dialog': this.inside
      };
    },
    menuClassName() {
      return [
        'mdc-autocomplete__menu',
        'mdc-menu',
        'mdc-menu-surface',
        {
          'mdc-menu-surface--fullwidth': this.fullwidth,
          'mdc-menu-surface--open': this.open
        }
      ];
    },
    hasLeadingIcon() {
      return !!(this.withLeadingIcon || this.$slots.before);
    },
    hasTrailingIcon() {
      return !!(this.withTrailingIcon || this.$slots.after);
    }
  },
  watch: {
    model(val) {
      if (this.inputValue !== val) {
        this.inputValue = `${val}`;
      }
    },
    source(data) {
      this.setDataSource(data);
      this.show();
    }
  },
  beforeMount() {
    checkOptionFormat('<ui-autocomplete>', this.sourceFormat);
  },
  mounted() {
    this.autocompleteListEl = this.$refs.autocompleteList;
    this.autocompleteListEl.addEventListener(
      UI_AUTOCOMPLETE.EVENT.MOUSEMOVE,
      this.handleMousemove
    );
    this.autocompleteListEl.addEventListener(
      UI_AUTOCOMPLETE.EVENT.MOUSELEAVE,
      this.handleMouseleave
    );

    this.setDataSource(this.source);
  },
  beforeDestroy() {
    if (this.$listener) {
      document.removeEventListener(UI_AUTOCOMPLETE.EVENT.CLICK, this.$listener);
    }
    this.autocompleteListEl.removeEventListener(
      UI_AUTOCOMPLETE.EVENT.MOUSEMOVE,
      this.handleMousemove
    );
    this.autocompleteListEl.removeEventListener(
      UI_AUTOCOMPLETE.EVENT.MOUSELEAVE,
      this.handleMouseleave
    );
  },
  methods: {
    initClientHeight() {
      const view = this.autocompleteListEl;
      const list = view.querySelector('ul');
      const item = view.querySelector('li');

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
    escapeRegExChars(value) {
      return value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
    },
    sanitize(value) {
      return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    },
    formatResult(keywords) {
      const pattern = '(' + this.escapeRegExChars(keywords) + ')';
      const regExp = new RegExp(pattern, 'gi');

      // Local data source
      const filterSource = this.filterKeywords
        ? this.currentSource.filter((word) =>
            new RegExp(keywords, 'i').test(word[this.sourceFormat.label])
          )
        : this.currentSource;

      this.currentSuggestion.data = filterSource.map((word) => {
        const suggestionLabel = word[this.sourceFormat.label];

        word.html = this.highlight
          ? this.sanitize(
              suggestionLabel.replace(regExp, '<strong>$1</strong>')
            ).replace(/&lt;(\/?strong)&gt;/g, '<$1>')
          : this.sanitize(suggestionLabel);

        return word;
      });
    },
    show() {
      const keywords = this.inputValue;

      if (getType(keywords) === 'string') {
        this.formatResult(keywords.trim().toLowerCase());
      } else {
        throw new Error(
          '[UiAutocomplete]: The keywords value must be a string'
        );
      }

      if (
        keywords.length >= this.minlength &&
        this.currentSuggestion.data.length
      ) {
        this.open = true;
        this.$nextTick(() => this.initClientHeight());
      }
    },
    hide() {
      this.open = false;
      this.currentSuggestion.index = -1;
      this.clearSelected();
    },
    search(keywords) {
      if (this.remote) {
        // Remote data source
        if (this.timer) {
          clearTimeout(this.timer);
        }

        this.timer = setTimeout(() => {
          this.$emit(UI_AUTOCOMPLETE.EVENT.SEARCH, keywords); // AJAX
        }, this.delay);
      } else {
        this.show();
      }
    },
    setDataSource(dataSource) {
      if (getType(dataSource) === 'array') {
        this.currentSource = dataSource.map((data) => {
          let item = {};

          if (getType(data) === 'string' || getType(data) === 'number') {
            item[this.sourceFormat.label] = data;
            item[this.sourceFormat.value] = data;
          } else if (getType(data) === 'object') {
            item = data;
          } else {
            console.warn(
              '[UiAutocomplete]',
              `The item of the 'source' prop must be a string or object`
            );
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

            this.autocompleteListEl.blur(); // Hide mouse
            event.preventDefault();
            break;
          case KEYCODE.UP:
            this.clearSelected();

            if (
              this.currentSuggestion.index === MIN ||
              this.currentSuggestion.index === -1
            ) {
              this.currentSuggestion.index = MAX;

              this.scroll.currentFirstIndex =
                this.scroll.defaultReversedFirstIndex;
              this.scroll.currentLastIndex =
                this.scroll.defaultReversedLastIndex;
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

            this.autocompleteListEl.blur(); // Hide mouse
            event.preventDefault();
            break;
          case KEYCODE.ENTER:
            // Only autocomplete when text is inputted
            if (this.inputValue.length > 0) {
              // If no option is selected, use first option
              let selectedItem =
                this.currentSuggestion.data[
                  this.currentSuggestion.index < MIN
                    ? MIN
                    : this.currentSuggestion.index
                ];
              this.handleSelected(selectedItem);
            }
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
      if (!this.$listener) {
        this.$listener = (e) => {
          let inTextfield = false;
          let parentEl = e.target;

          while (parentEl && parentEl !== this.$el) {
            parentEl = parentEl.parentNode;
            if (parentEl === this.$el) {
              inTextfield = true;
            }
          }

          if (e !== event && !inTextfield) {
            document.removeEventListener(
              UI_AUTOCOMPLETE.EVENT.CLICK,
              this.$listener
            );
            this.hide();
          }
        };
      }

      document.addEventListener(UI_AUTOCOMPLETE.EVENT.CLICK, this.$listener, {
        capture: true
      });
    },
    handleMousemove(event) {
      const el = event.target;
      if (
        el.tagName === 'LI' &&
        !el.classList.contains(UI_AUTOCOMPLETE.cssClasses.selected)
      ) {
        this.currentSelectedItem = el;

        this.clearSelected();

        el.classList.add(UI_AUTOCOMPLETE.cssClasses.selected);
        this.currentSuggestion.index = el.dataset.index;
      }
    },
    handleMouseleave() {
      this.currentSelectedItem &&
        this.currentSelectedItem.classList.remove(
          UI_AUTOCOMPLETE.cssClasses.selected
        );
    },
    handleSelected(selectedItem) {
      this.hide();

      delete selectedItem[UI_AUTOCOMPLETE.cssClasses.selected];
      delete selectedItem.html;

      this.$emit(
        UI_AUTOCOMPLETE.EVENT.INPUT,
        selectedItem[this.sourceFormat.label]
      );
      this.$emit(UI_AUTOCOMPLETE.EVENT.SELECTED, selectedItem); // selectedItem: any
    },
    clearSelected() {
      let selectedItem = this.autocompleteListEl.querySelector(
        `li.${UI_AUTOCOMPLETE.cssClasses.selected}`
      );
      if (selectedItem) {
        selectedItem.classList.remove(UI_AUTOCOMPLETE.cssClasses.selected);
      }
    },
    getItemClassName(index) {
      return [
        this.deprecatedListClassNameMap['mdc-list-item'],
        { selected: index === this.currentSuggestion.index }
      ];
    }
  }
};
</script>
