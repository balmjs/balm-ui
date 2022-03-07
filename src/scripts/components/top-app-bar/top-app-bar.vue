<template>
  <!-- (M3) Container -->
  <header ref="topAppBar" :class="className">
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      >
        <!-- Leading navigation icon -->
        <span class="mdc-top-app-bar__brand">
          <slot
            name="nav-icon"
            :navIconClass="UI_TOP_APP_BAR.cssClasses.navIcon"
          >
            <mdc-icon-button
              v-if="defaultNavIcon"
              :id="navId"
              :class="UI_TOP_APP_BAR.cssClasses.navIcon"
              v-text="defaultNavIcon"
            ></mdc-icon-button>
          </slot>
        </span>
        <!-- Headline -->
        <span class="mdc-top-app-bar__title">
          <slot>{{ title }}</slot>
        </span>
      </section>
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
        role="toolbar"
      >
        <!-- Trailing interactive icons -->
        <slot
          name="toolbar"
          :toolbarItemClass="UI_TOP_APP_BAR.cssClasses.actionItem"
        ></slot>
      </section>
    </div>
  </header>
</template>

<script>
// Define top app bar constants
const name = 'UiTopAppBar';

const UI_TOP_APP_BAR = {
  TYPES: {
    nonRegular: -1, // Contextual action bar
    standard: 0,
    fixed: 1,
    dense: 2,
    prominent: 3,
    prominentDense: 4,
    short: 5,
    shortCollapsed: 6
  },
  cssClasses: {
    navIcon: 'mdc-top-app-bar__navigation-icon',
    actionItem: 'mdc-top-app-bar__action-item'
  },
  FIXED_ADJUST: {
    STANDARD: 'mdc-top-app-bar--fixed-adjust',
    PROMINENT: 'mdc-top-app-bar--prominent-fixed-adjust',
    DENSE: 'mdc-top-app-bar--dense-fixed-adjust',
    DENSE_PROMINENT: 'mdc-top-app-bar--dense-prominent-fixed-adjust',
    SHORT: 'mdc-top-app-bar--short-fixed-adjust'
  },
  EVENTS: {
    NAV: 'nav',
    CLOSE: 'close'
  }
};

export default {
  name,
  customOptions: {
    name,
    UI_TOP_APP_BAR
  }
};
</script>

<script setup>
import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue';
import { MDCTopAppBar } from '../../../material-components-web/top-app-bar';
import { strings } from '../../../material-components-web/top-app-bar/constants';
import MdcIconButton from '../icon-button/mdc-icon-button.vue';
import checkType from '../../mixins/type';

const props = defineProps({
  contentSelector: {
    type: String,
    required: true
  },
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  fixed: {
    type: Boolean,
    default: false
  },
  dense: {
    type: Boolean,
    default: false
  },
  prominent: {
    type: Boolean,
    default: false
  },
  prominentDense: {
    type: Boolean,
    default: false
  },
  short: {
    type: Boolean,
    default: false
  },
  shortCollapsed: {
    type: Boolean,
    default: false
  },
  // UI attributes
  title: {
    type: String,
    default: ''
  },
  navIcon: {
    type: [String, Boolean],
    default: 'menu'
  },
  navId: {
    type: [String, null],
    default: null
  }
});

const emit = defineEmits([
  UI_TOP_APP_BAR.EVENTS.NAV,
  UI_TOP_APP_BAR.EVENTS.CLOSE
]);

const topAppBar = ref(null);
const state = reactive({
  $topAppBar: null
});

const isNonRegular = computed(() =>
  checkType(props, UI_TOP_APP_BAR.TYPES, 'nonRegular')
);
const isFixed = computed(() => checkType(props, UI_TOP_APP_BAR.TYPES, 'fixed'));
const isDense = computed(() => checkType(props, UI_TOP_APP_BAR.TYPES, 'dense'));
const isProminent = computed(() =>
  checkType(props, UI_TOP_APP_BAR.TYPES, 'prominent')
);
const isProminentDense = computed(
  () =>
    (props.dense && props.prominent) ||
    checkType(props, UI_TOP_APP_BAR.TYPES, 'prominentDense')
);
const isShort = computed(() => checkType(props, UI_TOP_APP_BAR.TYPES, 'short'));
const isShortCollapsed = computed(() =>
  checkType(props, UI_TOP_APP_BAR.TYPES, 'shortCollapsed')
);
const className = computed(() => ({
  'mdc-top-app-bar': true,
  'mdc-top-app-bar--fixed': isFixed.value,
  'mdc-top-app-bar--dense': isDense.value || isProminentDense.value,
  'mdc-top-app-bar--prominent': isProminent.value || isProminentDense.value,
  'mdc-top-app-bar--short': isShort.value || isShortCollapsed.value,
  'mdc-top-app-bar--short-collapsed': isShortCollapsed.value
}));
const defaultNavIcon = computed(() =>
  isNonRegular.value ? UI_TOP_APP_BAR.EVENTS.CLOSE : props.navIcon
);

function getFixedAdjustElement(contentEl) {
  let fixedAdjustEl;

  const newDiv = document.createElement('div');
  const firstElInContent = contentEl.children[0];

  if (firstElInContent) {
    if (firstElInContent.classList.contains('mdc-drawer')) {
      fixedAdjustEl = contentEl;
    } else {
      let existingFixedAdjust =
        /^mdc-top-app-bar--([a-z]+-)*fixed-adjust$/.test(
          firstElInContent.className
        );

      if (existingFixedAdjust) {
        fixedAdjustEl = firstElInContent;
      } else {
        fixedAdjustEl = newDiv;
        contentEl.insertBefore(newDiv, contentEl.firstChild);
      }
    }
  } else {
    fixedAdjustEl = newDiv;
    contentEl.insertBefore(newDiv, contentEl.firstChild);
  }

  return fixedAdjustEl;
}

function createFixedAdjustElement() {
  if (props.contentSelector) {
    const contentEl = document.querySelector(props.contentSelector);
    const fixedAdjustEl = contentEl ? getFixedAdjustElement(contentEl) : null;

    if (fixedAdjustEl) {
      fixedAdjustEl.classList.remove(
        ...Object.values(UI_TOP_APP_BAR.FIXED_ADJUST)
      );

      if (isDense.value) {
        fixedAdjustEl.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.DENSE);
      } else if (isProminent.value) {
        fixedAdjustEl.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.PROMINENT);
      } else if (isProminentDense.value) {
        fixedAdjustEl.classList.add(
          UI_TOP_APP_BAR.FIXED_ADJUST.DENSE_PROMINENT
        );
      } else if (isShort.value || isShortCollapsed.value) {
        fixedAdjustEl.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.SHORT);
      } else {
        fixedAdjustEl.classList.add(UI_TOP_APP_BAR.FIXED_ADJUST.STANDARD);
      }
    }
  } else {
    console.warn(`[${name}]: The 'contentSelector' prop is required`);
  }
}

function init() {
  if (state.$topAppBar) {
    state.$topAppBar.destroy();
  }

  nextTick(() => {
    createFixedAdjustElement();
    state.$topAppBar = new MDCTopAppBar(topAppBar.value);

    state.$topAppBar.listen(strings.NAVIGATION_EVENT, () => {
      emit(
        isNonRegular.value
          ? UI_TOP_APP_BAR.EVENTS.CLOSE
          : UI_TOP_APP_BAR.EVENTS.NAV
      );
    });
  });
}

onMounted(() => {
  init();

  watch(
    () => props.type,
    () => init()
  );
});
</script>
