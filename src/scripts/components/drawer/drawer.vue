<template>
  <!-- Container -->
  <aside ref="drawer" :class="className">
    <slot></slot>
  </aside>
  <!-- Scrim (modal and bottom only) -->
</template>

<script>
// Define drawer constants
const name = 'UiDrawer';

const UI_DRAWER = {
  TYPES: {
    permanent: 0,
    dismissible: 1,
    modal: 2
  },
  cssClasses: {
    root: 'mdc-drawer-root',
    scrim: 'mdc-drawer-scrim'
  },
  EVENTS: {
    NAV: 'nav',
    CHANGE: 'update:modelValue'
  }
};

export default {
  name,
  customOptions: {
    UI_DRAWER
  }
};
</script>

<script setup>
import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue';
import { MDCDrawer } from '../../../material-components-web/drawer';
import { strings } from '../../../material-components-web/drawer/constants';
import checkType from '../../mixins/type';

const props = defineProps({
  navId: {
    type: [String, null],
    default: null
  },
  // States
  modelValue: {
    type: Boolean,
    default: false
  },
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  // UI attributes
  viewportHeight: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_DRAWER.EVENTS.NAV, UI_DRAWER.EVENTS.CHANGE]);

const drawer = ref(null);
const state = reactive({
  $drawer: null
});
let scrimEl = null;

const isPermanent = computed(() =>
  checkType(props, UI_DRAWER.TYPES, 'permanent')
);
const isDismissible = computed(() =>
  checkType(props, UI_DRAWER.TYPES, 'dismissible')
);
const isModal = computed(() => checkType(props, UI_DRAWER.TYPES, 'modal'));
const className = computed(() => ({
  'mdc-drawer': true,
  'mdc-drawer--dismissible': isDismissible.value,
  'mdc-drawer--modal': isModal.value
}));

onMounted(() => {
  if (props.viewportHeight) {
    const el = drawer.value;
    el.parentNode.classList.add(UI_DRAWER.cssClasses.root);
  }

  if (isDismissible.value || isModal.value) {
    createScrim();

    init();
  }

  watch(
    () => props.modelValue,
    (val) => {
      if (state.$drawer) {
        state.$drawer.open = val;
      }
    }
  );

  watch(
    () => props.type,
    () => {
      nextTick(() => {
        if (isModal.value) {
          createScrim();

          if (!state.$drawer) {
            init();
          }
        }
      });
    }
  );
});

function createScrim() {
  if (isModal.value && !scrimEl) {
    scrimEl = document.createElement('div');
    scrimEl.className = UI_DRAWER.cssClasses.scrim;
    scrimEl.addEventListener('click', handleClose);

    const el = drawer.value;
    el.parentNode.insertBefore(scrimEl, el.nextSibling);
  }
}

function checkNav() {
  let result = true;

  if (!(state.$drawer.list && state.$drawer.list.listElements.length)) {
    result = false;
    console.warn(
      `[${name}]: <ui-nav> or <ui-list> is required for <ui-drawer-content> in the drawer`
    );
  }

  return result;
}

function init() {
  const el = drawer.value;
  state.$drawer = new MDCDrawer(el);

  state.$drawer.listen(strings.OPEN_EVENT, () => {
    emit(UI_DRAWER.EVENTS.NAV, true);
  });
  state.$drawer.listen(strings.CLOSE_EVENT, handleClose);

  if (props.navId && document.getElementById(props.navId)) {
    checkNav();

    document.getElementById(props.navId).addEventListener('click', () => {
      if (checkNav()) {
        state.$drawer.open = !state.$drawer.open;
      }
    });

    state.$drawer.open = props.modelValue;
  }
}

function handleClose() {
  emit(UI_DRAWER.EVENTS.NAV, false);
  emit(UI_DRAWER.EVENTS.CHANGE, false);
}
</script>
