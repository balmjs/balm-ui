<template>
  <a ref="item" :href="href" :class="className" @click="handleClick">
    <span
      v-if="hasRipple"
      :class="deprecatedListClassNameMap['mdc-list-item__ripple']"
    ></span>
    <slot name="before" :iconClass="UI_ITEM.cssClasses.firstTile"></slot>
    <slot>
      <!-- text content -->
    </slot>
    <slot name="after" :iconClass="UI_ITEM.cssClasses.lastTile"></slot>
  </a>
</template>

<script>
import { UI_ITEM } from './constants';

export default {
  name: 'UiNavItem',
  customOptions: {
    UI_ITEM
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import {
  useDeprecatedList,
  getDeprecatedItemClasses
} from '../../mixins/deprecated-list';

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  // States
  active: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_ITEM.EVENTS.CLICK]);

const item = ref(null);

const { hasRipple, deprecatedListClassNameMap } = useDeprecatedList(item);

const className = computed(() => [
  deprecatedListClassNameMap['mdc-list-item'],
  ...getDeprecatedItemClasses({
    activated: props.active
  })
]);

function handleClick(event) {
  emit(UI_ITEM.EVENTS.CLICK, event);
}
</script>
