<template>
  <div
    ref="tableFrame"
    class="mdc-data-table__table-container"
    :style="containerStyle"
  >
    <table class="mdc-data-table__table" :style="tableStyle">
      <colgroup v-if="columnsData.length">
        <col
          v-for="(colValue, colKey) in columnsData"
          :key="colKey"
          :class="colValue.class ? `col-${colValue.class}` : `col-${colKey}`"
          :style="colValue.style || null"
        />
      </colgroup>
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MdcTableFrame',
  customOptions: {}
};
</script>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  columnsData: {
    type: Array,
    default: () => []
  },
  scroll: {
    type: Object,
    default: () => ({})
  },
  offsetLeft: {
    type: Number,
    default: 0
  },
  maxWidth: {
    type: Number,
    default: 0
  }
});

const tableFrame = ref(null);

const containerStyle = computed(() =>
  props.scroll.y
    ? {
        'max-height': `${props.scroll.y}px`
      }
    : null
);
const tableStyle = computed(() => {
  const scrollX = props.scroll.x || props.maxWidth;

  return scrollX
    ? {
        width: `${scrollX}px`
      }
    : null;
});

watch(
  () => props.offsetLeft,
  (val) => {
    const el = tableFrame.value;
    if (el) {
      el.scrollLeft = val;
    }
  }
);

defineExpose({
  tableFrame
});
</script>
