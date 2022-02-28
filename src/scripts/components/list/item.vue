<template>
  <li ref="item" :class="className" :role="role" @click="handleClick">
    <span
      v-if="hasRipple"
      :class="deprecatedListClassNameMap['mdc-list-item__ripple']"
    ></span>
    <slot name="before" :iconClass="UI_ITEM.cssClasses.firstTile"></slot>
    <slot>
      <!-- text content -->
    </slot>
    <slot name="after" :iconClass="UI_ITEM.cssClasses.lastTile"></slot>
  </li>
</template>

<script>
import { UI_ITEM } from './constants';

export default {
  name: 'UiItem',
  customOptions: {
    UI_ITEM
  }
};
</script>

<script setup>
import { ref, computed, getCurrentInstance } from 'vue';
import {
  useDeprecatedList,
  getDeprecatedItemClasses
} from '../../mixins/deprecated-list';

const props = defineProps({
  // States
  selected: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_ITEM.EVENTS.CLICK]);

const instance = getCurrentInstance();
const parent = instance.parent;
const item = ref(null);

const { hasRipple, deprecatedListClassNameMap } = useDeprecatedList(item);

const className = computed(() => [
  deprecatedListClassNameMap['mdc-list-item'],
  ...getDeprecatedItemClasses({
    selected: props.selected,
    disabled: props.disabled
  })
]);
const role = computed(() => {
  let name = null;

  if (parent) {
    switch (parent.exposed.role) {
      case 'listbox':
        name = 'option';
        break;
      case 'radiogroup':
        name = 'radio';
        break;
      case 'group':
        name = 'checkbox';
        break;
    }
  }

  return name;
});

function handleClick(event) {
  emit(UI_ITEM.EVENTS.CLICK, event);
}
</script>
