<template>
  <ui-textfield
    ref="autocomplete"
    :model-value="inputValue"
    :class="className"
    :input-id="inputId"
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
      <div
        v-show="currentSuggestion.data.length"
        ref="autocompleteList"
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
    </template>
  </ui-textfield>
</template>

<script>
import { deprecatedListClassNameMap } from '../list/constants';
import { UI_TEXTFIELD_ICON } from '../textfield/constants';

// Define autocomplete constants
const UI_AUTOCOMPLETE = {
  cssClasses: {
    selected: 'selected'
  },
  EVENTS: {
    INPUT: 'update:modelValue',
    SEARCH: 'search',
    SELECTED: 'selected',
    // For inner
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
  customOptions: {
    UI_TEXTFIELD_ICON,
    UI_AUTOCOMPLETE,
    KEYCODE,
    deprecatedListClassNameMap
  }
};
</script>

<script setup>
import {
  ref,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  nextTick,
  useSlots
} from 'vue';
import UiTextfield from '../textfield/textfield.vue';
import { textfieldProps } from '../../mixins/textfield';
import getType from '../../utils/typeof';
import {
  optionFormatDefaultValue,
  checkOptionFormat
} from '../../utils/option-format';

const props = defineProps({
  ...textfieldProps,
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
    default: () => []
  },
  sourceFormat: {
    type: Object,
    default: () => optionFormatDefaultValue
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
  }
});

const emit = defineEmits([
  UI_AUTOCOMPLETE.EVENTS.INPUT,
  UI_AUTOCOMPLETE.EVENTS.SEARCH,
  UI_AUTOCOMPLETE.EVENTS.SELECTED
]);

const autocomplete = ref(null);
const autocompleteList = ref(null);
let autocompleteListEl = null;
let autocompleteListener = null;
let isExpanded = false;
const inputValue = ref(props.modelValue);
let currentSource = []; // source data
const currentSuggestion = {
  data: [], // filter data
  index: -1
};
let currentSelectedItem = null;
let timer = null;
let scroll = {
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
};

const className = computed(() => ({
  'mdc-autocomplete': true,
  'mdc-autocomplete--expanded': isExpanded
}));
const hasLeadingIcon = computed(() => {
  const slots = useSlots();
  return !!(props.withLeadingIcon || slots.before);
});
const hasTrailingIcon = computed(() => {
  const slots = useSlots();
  return !!(props.withTrailingIcon || slots.after);
});

onBeforeMount(() => checkOptionFormat('<ui-autocomplete>', props.sourceFormat));

onMounted(() => {
  autocompleteListEl = autocompleteList.value;
  autocompleteListEl.addEventListener(
    UI_AUTOCOMPLETE.EVENTS.MOUSEMOVE,
    handleMousemove
  );
  autocompleteListEl.addEventListener(
    UI_AUTOCOMPLETE.EVENTS.MOUSELEAVE,
    handleMouseleave
  );

  setDataSource(props.source);

  watch(
    () => props.modelValue,
    (val) => {
      if (inputValue.value !== val) {
        inputValue.value = `${val}`;
      }
    }
  );
  watch(
    () => props.source,
    (data) => {
      setDataSource(data);
      on();
    }
  );
});

onBeforeUnmount(() => {
  if (autocompleteListener) {
    document.removeEventListener(
      UI_AUTOCOMPLETE.EVENTS.CLICK,
      autocompleteListener
    );
  }
  autocompleteListEl.removeEventListener(
    UI_AUTOCOMPLETE.EVENTS.MOUSEMOVE,
    handleMousemove
  );
  autocompleteListEl.removeEventListener(
    UI_AUTOCOMPLETE.EVENTS.MOUSELEAVE,
    handleMouseleave
  );
});

function initClientHeight() {
  const view = autocompleteListEl;
  const list = view.querySelector('ul');
  const item = view.querySelector('li');

  if (!scroll.$view) {
    scroll.$view = view;
    scroll.viewHeight = view.offsetHeight;
  }
  if (!scroll.item) {
    scroll.itemHeight = item.offsetHeight;
  }
  if (scroll.list !== list.offsetHeight) {
    scroll.listHeight = list.offsetHeight;
  }

  scroll.defaultFirstIndex = 0;
  scroll.defaultLastIndex =
    parseInt(scroll.viewHeight / scroll.itemHeight, 10) - 1;
  let maxHeight = currentSuggestion.data.length - 1;
  if (scroll.defaultReversedLastIndex !== maxHeight) {
    scroll.defaultReversedLastIndex = maxHeight;
    scroll.defaultReversedFirstIndex =
      scroll.defaultReversedLastIndex - scroll.defaultLastIndex;
  }

  scroll.currentLastIndex = scroll.defaultLastIndex;
}

const escapeRegExChars = (value) =>
  value.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

const sanitize = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

function formatResult(keywords) {
  const pattern = '(' + escapeRegExChars(keywords) + ')';
  const regExp = new RegExp(pattern, 'gi');

  // Local data source
  currentSuggestion.data = currentSource
    .filter(
      (word) =>
        word[props.sourceFormat.label].toLowerCase().indexOf(keywords) !== -1
    )
    .map((word) => {
      const suggestionLabel = word[props.sourceFormat.label];

      word.html = props.highlight
        ? sanitize(
            suggestionLabel.replace(regExp, '<strong>$1</strong>')
          ).replace(/&lt;(\/?strong)&gt;/g, '<$1>')
        : sanitize(suggestionLabel);

      return word;
    });
}

function on() {
  const keywords = inputValue.value;

  if (getType(keywords) === 'string') {
    formatResult(keywords.trim().toLowerCase());
  } else {
    throw new Error('[UiAutocomplete]: The keywords value must be a string');
  }

  if (keywords.length >= props.minlength && currentSuggestion.data.length) {
    isExpanded = true;
    nextTick(() => initClientHeight());
  }
}

function off() {
  isExpanded = false;
  currentSuggestion.index = -1;
  clearSelected();
}

function search(keywords) {
  if (props.remote) {
    // Remote datasource
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      emit(UI_AUTOCOMPLETE.EVENTS.SEARCH, keywords); // AJAX
    }, props.delay);
  } else {
    on();
  }
}

function setDataSource(dataSource) {
  if (getType(dataSource) === 'array') {
    currentSource = dataSource.map((data) => {
      let item = {};

      if (getType(data) === 'string' || getType(data) === 'number') {
        item[props.sourceFormat.label] = data;
        item[props.sourceFormat.value] = data;
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

    currentSuggestion.data = currentSource;
  }
}

function handleFocus() {
  if (props.autofocus) {
    on();
  }
}

function handleKeydown(event) {
  if (currentSuggestion.data.length) {
    const MIN = 0;
    const MAX = currentSuggestion.data.length - 1;

    switch (event.keyCode) {
      case KEYCODE.DOWN:
        clearSelected();

        if (currentSuggestion.index === MAX) {
          currentSuggestion.index = MIN;

          scroll.currentFirstIndex = scroll.defaultFirstIndex;
          scroll.currentLastIndex = scroll.defaultLastIndex;
          scroll.$view.scrollTop = 0;
        } else {
          currentSuggestion.index++;

          if (currentSuggestion.index > scroll.currentLastIndex) {
            scroll.currentFirstIndex++;
            scroll.currentLastIndex++;
            scroll.$view.scrollTop += scroll.itemHeight;
          }
        }

        autocompleteListEl.blur(); // Hide mouse
        event.preventDefault();
        break;
      case KEYCODE.UP:
        clearSelected();

        if (currentSuggestion.index === MIN || currentSuggestion.index === -1) {
          currentSuggestion.index = MAX;

          scroll.currentFirstIndex = scroll.defaultReversedFirstIndex;
          scroll.currentLastIndex = scroll.defaultReversedLastIndex;
          scroll.$view.scrollTop =
            scroll.itemHeight * scroll.defaultReversedFirstIndex;
        } else {
          currentSuggestion.index--;

          if (currentSuggestion.index < scroll.currentLastIndex) {
            scroll.currentFirstIndex--;
            scroll.currentLastIndex--;
            if (currentSuggestion.index < scroll.defaultReversedFirstIndex) {
              scroll.$view.scrollTop -= scroll.itemHeight;
            }
          }
        }

        autocompleteListEl.blur(); // Hide mouse
        event.preventDefault();
        break;
      case KEYCODE.ENTER:
        // Only autocomplete when text is inputted
        if (inputValue.value.length > 0) {
          // If no option is selected, use first option
          let selectedItem =
            currentSuggestion.data[
              currentSuggestion.index < MIN ? MIN : currentSuggestion.index
            ];
          handleSelected(selectedItem);
        }
        event.preventDefault();
        break;
    }
  }
}

function handleInput(value) {
  inputValue.value = `${value}`;
  emit(UI_AUTOCOMPLETE.EVENTS.INPUT, inputValue.value);

  let keywords = inputValue.value.trim();
  if (keywords.length >= props.minlength) {
    search(keywords);
  } else {
    off();
  }
}

function handleBlur(event) {
  if (!autocompleteListener) {
    const el = autocomplete.value.textfield;

    autocompleteListener = (e) => {
      let inTextfield = false;
      let parentEl = e.target;

      while (parentEl && parentEl !== el) {
        parentEl = parentEl.parentNode;
        if (parentEl === el) {
          inTextfield = true;
        }
      }

      if (e !== event && isExpanded && !inTextfield) {
        document.removeEventListener(
          UI_AUTOCOMPLETE.EVENTS.CLICK,
          autocompleteListener
        );
        off();
      }
    };
  }

  document.addEventListener(UI_AUTOCOMPLETE.EVENTS.CLICK, autocompleteListener);
}

function handleMousemove(event) {
  const el = event.target;
  if (
    el.tagName === 'LI' &&
    !el.classList.contains(UI_AUTOCOMPLETE.cssClasses.selected)
  ) {
    currentSelectedItem = el;

    clearSelected();

    el.classList.add(UI_AUTOCOMPLETE.cssClasses.selected);
    currentSuggestion.index = el.dataset.index;
  }
}

function handleMouseleave() {
  if (currentSelectedItem) {
    currentSelectedItem.classList.remove(UI_AUTOCOMPLETE.cssClasses.selected);
  }
}

function handleSelected(selectedItem) {
  off();

  delete selectedItem[UI_AUTOCOMPLETE.cssClasses.selected];
  delete selectedItem.html;

  emit(UI_AUTOCOMPLETE.EVENTS.INPUT, selectedItem[props.sourceFormat.label]);
  emit(UI_AUTOCOMPLETE.EVENTS.SELECTED, selectedItem); // selectedItem: any
}

function clearSelected() {
  const selectedItem = autocompleteListEl.querySelector(
    `li.${UI_AUTOCOMPLETE.cssClasses.selected}`
  );
  if (selectedItem) {
    selectedItem.classList.remove(UI_AUTOCOMPLETE.cssClasses.selected);
  }
}

const getItemClassName = (index) => [
  deprecatedListClassNameMap['mdc-list-item'],
  {
    selected: index === currentSuggestion.index
  }
];
</script>
