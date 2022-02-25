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
          UI_GLOBAL.getMaterialIconClass([
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
import UI_GLOBAL from '../../config/constants';
import { UI_TEXTFIELD_ICON } from '../textfield/constants';
import { deprecatedListClassNameMap } from '../list/constants';

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
    UI_GLOBAL,
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
  reactive,
  toRefs,
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
import { iconProps, useMaterialIcon } from '../../mixins/material-icon';
import getType from '../../utils/typeof';
import {
  optionFormatDefaultValue,
  checkOptionFormat
} from '../../utils/option-format';

const props = defineProps({
  ...iconProps,
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
const slots = useSlots();

const autocomplete = ref(null);
const autocompleteList = ref(null);
const state = reactive({
  autocompleteListEl: null,
  autocompleteListener: null,
  isExpanded: false,
  inputValue: props.modelValue,
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
});
const { inputValue } = toRefs(state);

const { materialIcon } = useMaterialIcon(props);

const className = computed(() => ({
  'mdc-autocomplete': true,
  'mdc-autocomplete--expanded': state.isExpanded
}));
const hasLeadingIcon = computed(
  () => !!(props.withLeadingIcon || slots.before)
);
const hasTrailingIcon = computed(
  () => !!(props.withTrailingIcon || slots.after)
);

onBeforeMount(() => checkOptionFormat('<ui-autocomplete>', props.sourceFormat));

onMounted(() => {
  state.autocompleteListEl = autocompleteList.value;
  state.autocompleteListEl.addEventListener(
    UI_AUTOCOMPLETE.EVENTS.MOUSEMOVE,
    handleMousemove
  );
  state.autocompleteListEl.addEventListener(
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
  if (state.autocompleteListener) {
    document.removeEventListener(
      UI_AUTOCOMPLETE.EVENTS.CLICK,
      state.autocompleteListener
    );
  }
  state.autocompleteListEl.removeEventListener(
    UI_AUTOCOMPLETE.EVENTS.MOUSEMOVE,
    handleMousemove
  );
  state.autocompleteListEl.removeEventListener(
    UI_AUTOCOMPLETE.EVENTS.MOUSELEAVE,
    handleMouseleave
  );
});

function initClientHeight() {
  const view = state.autocompleteListEl;
  const list = view.querySelector('ul');
  const item = view.querySelector('li');

  if (!state.scroll.$view) {
    state.scroll.$view = view;
    state.scroll.viewHeight = view.offsetHeight;
  }
  if (!state.scroll.item) {
    state.scroll.itemHeight = item.offsetHeight;
  }
  if (state.scroll.list !== list.offsetHeight) {
    state.scroll.listHeight = list.offsetHeight;
  }

  state.scroll.defaultFirstIndex = 0;
  state.scroll.defaultLastIndex =
    parseInt(state.scroll.viewHeight / state.scroll.itemHeight, 10) - 1;
  let maxHeight = state.currentSuggestion.data.length - 1;
  if (state.scroll.defaultReversedLastIndex !== maxHeight) {
    state.scroll.defaultReversedLastIndex = maxHeight;
    state.scroll.defaultReversedFirstIndex =
      state.scroll.defaultReversedLastIndex - state.scroll.defaultLastIndex;
  }

  state.scroll.currentLastIndex = state.scroll.defaultLastIndex;
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
  state.currentSuggestion.data = state.currentSource
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

  if (
    keywords.length >= props.minlength &&
    state.currentSuggestion.data.length
  ) {
    state.isExpanded = true;
    nextTick(() => initClientHeight());
  }
}

function off() {
  state.isExpanded = false;
  state.currentSuggestion.index = -1;
  clearSelected();
}

function search(keywords) {
  if (props.remote) {
    // Remote data source
    if (state.timer) {
      clearTimeout(state.timer);
    }

    state.timer = setTimeout(() => {
      emit(UI_AUTOCOMPLETE.EVENTS.SEARCH, keywords); // AJAX
    }, props.delay);
  } else {
    on();
  }
}

function setDataSource(dataSource) {
  if (getType(dataSource) === 'array') {
    state.currentSource = dataSource.map((data) => {
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

    state.currentSuggestion.data = state.currentSource;
  }
}

function handleFocus() {
  if (props.autofocus) {
    on();
  }
}

function handleKeydown(event) {
  if (state.currentSuggestion.data.length) {
    const MIN = 0;
    const MAX = state.currentSuggestion.data.length - 1;

    switch (event.keyCode) {
      case KEYCODE.DOWN:
        clearSelected();

        if (state.currentSuggestion.index === MAX) {
          state.currentSuggestion.index = MIN;

          state.scroll.currentFirstIndex = state.scroll.defaultFirstIndex;
          state.scroll.currentLastIndex = state.scroll.defaultLastIndex;
          state.scroll.$view.scrollTop = 0;
        } else {
          state.currentSuggestion.index++;

          if (state.currentSuggestion.index > state.scroll.currentLastIndex) {
            state.scroll.currentFirstIndex++;
            state.scroll.currentLastIndex++;
            state.scroll.$view.scrollTop += state.scroll.itemHeight;
          }
        }

        autocompleteListEl.blur(); // Hide mouse
        event.preventDefault();
        break;
      case KEYCODE.UP:
        clearSelected();

        if (
          state.currentSuggestion.index === MIN ||
          state.currentSuggestion.index === -1
        ) {
          state.currentSuggestion.index = MAX;

          state.scroll.currentFirstIndex =
            state.scroll.defaultReversedFirstIndex;
          state.scroll.currentLastIndex = state.scroll.defaultReversedLastIndex;
          state.scroll.$view.scrollTop =
            state.scroll.itemHeight * state.scroll.defaultReversedFirstIndex;
        } else {
          state.currentSuggestion.index--;

          if (state.currentSuggestion.index < state.scroll.currentLastIndex) {
            state.scroll.currentFirstIndex--;
            state.scroll.currentLastIndex--;
            if (
              state.currentSuggestion.index <
              state.scroll.defaultReversedFirstIndex
            ) {
              state.scroll.$view.scrollTop -= state.scroll.itemHeight;
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
            state.currentSuggestion.data[
              state.currentSuggestion.index < MIN
                ? MIN
                : state.currentSuggestion.index
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
  if (!state.autocompleteListener) {
    const el = autocomplete.value.textfield;

    state.autocompleteListener = (e) => {
      let inTextfield = false;
      let parentEl = e.target;

      while (parentEl && parentEl !== el) {
        parentEl = parentEl.parentNode;
        if (parentEl === el) {
          inTextfield = true;
        }
      }

      if (e !== event && state.isExpanded && !inTextfield) {
        document.removeEventListener(
          UI_AUTOCOMPLETE.EVENTS.CLICK,
          state.autocompleteListener
        );
        off();
      }
    };
  }

  document.addEventListener(
    UI_AUTOCOMPLETE.EVENTS.CLICK,
    state.autocompleteListener
  );
}

function handleMousemove(event) {
  const el = event.target;
  if (
    el.tagName === 'LI' &&
    !el.classList.contains(UI_AUTOCOMPLETE.cssClasses.selected)
  ) {
    state.currentSelectedItem = el;

    clearSelected();

    el.classList.add(UI_AUTOCOMPLETE.cssClasses.selected);
    state.currentSuggestion.index = el.dataset.index;
  }
}

function handleMouseleave() {
  if (state.currentSelectedItem) {
    state.currentSelectedItem.classList.remove(
      UI_AUTOCOMPLETE.cssClasses.selected
    );
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
    selected: index === state.currentSuggestion.index
  }
];

defineExpose({
  hasLeadingIcon,
  hasTrailingIcon
});
</script>
