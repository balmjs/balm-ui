<template>
  <!-- List item -->
  <li
    ref="menuitem"
    :class="nested ? null : getClass(item)"
    :role="nested ? null : 'menuitem'"
    :data-value="item.value || value"
    @click="handleClick"
  >
    <ul v-if="nested" class="mdc-menu__selection-group">
      <slot></slot>
    </ul>
    <template v-else>
      <span :class="deprecatedListClassNameMap['mdc-list-item__ripple']"></span>
      <!-- Including label text and optional leading icon, trailing icon, and keyboard command -->
      <slot>
        <ui-menuitem-icon v-if="item.icon">
          <i
            :class="UI_GLOBAL.cssClasses.icon"
            aria-hidden="true"
            v-text="item.icon"
          ></i>
        </ui-menuitem-icon>
        <ui-menuitem-text v-if="item.text">{{ item.text }}</ui-menuitem-text>
      </slot>
    </template>
  </li>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiMenuitem',
  customOptions: {
    UI_GLOBAL
  }
};
</script>

<script setup>
import { ref, onMounted } from 'vue';
import UiMenuitemIcon from './menuitem-icon.vue';
import UiMenuitemText from './menuitem-text.vue';
import { useGlobal } from '../../config/constants';
import { useRipple } from '../../mixins/ripple';
import {
  useDeprecatedList,
  getDeprecatedItemClasses
} from '../../mixins/deprecated-list';

const props = defineProps({
  // Layout
  nested: {
    type: Boolean,
    default: false
  },
  // States
  item: {
    type: Object,
    default: () => ({}) // { text: string, icon: string, value: string }
  },
  value: {
    type: null, // NOTE: String usually
    default: null
  },
  // UI attributes
  disabled: {
    type: Boolean,
    default: false
  },
  selected: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_GLOBAL.EVENTS.CLICK]);

const menuitem = ref(null);

const { handleClick } = useGlobal({ emit });
const { deprecatedListClassNameMap } = useDeprecatedList(menuitem);

onMounted(() => {
  if (!props.nested) {
    useRipple(menuitem.value);
  }
});

function getClass(item) {
  return [
    deprecatedListClassNameMap['mdc-list-item'],
    ...getDeprecatedItemClasses({
      disabled: props.disabled || item.disabled
    }),
    {
      'mdc-menu-item--selected': props.selected || item.selected
    }
  ];
}
</script>
