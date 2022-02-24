<template>
  <li
    ref="menuitem"
    :class="nested ? null : getClass(item)"
    :role="nested ? null : 'menuitem'"
    :data-value="item.value || value"
    @click="$emit('click', $event)"
  >
    <ul v-if="nested" class="mdc-menu__selection-group">
      <slot></slot>
    </ul>
    <template v-else>
      <span :class="deprecatedListClassNameMap['mdc-list-item__ripple']"></span>
      <!-- Leading icon / Text / Command -->
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
import UI_GLOBAL from '../icon/constants';

export default {
  name: 'UiMenuitem',
  inheritAttrs: false,
  customOptions: {
    UI_GLOBAL
  }
};
</script>

<script setup>
import { ref, onMounted } from 'vue';
import UiMenuitemIcon from './menuitem-icon.vue';
import UiMenuitemText from './menuitem-text.vue';
import { useRipple } from '../../mixins/ripple';
import { useDeprecatedList } from '../../mixins/deprecated-list';

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

const emit = defineEmits(['click']);

const menuitem = ref(null);

onMounted(() => {
  if (!props.nested) {
    useRipple(menuitem.value);
  }
});

const { deprecatedListClassNameMap, getDeprecatedItemClasses } =
  useDeprecatedList(menuitem);

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
