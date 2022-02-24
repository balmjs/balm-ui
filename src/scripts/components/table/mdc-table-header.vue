<template>
  <!-- Column header -->
  <thead v-if="theadData.length">
    <tr
      v-for="(theadRowData, theadRowIndex) in theadData"
      :key="`thead-row-${theadRowIndex}`"
      class="mdc-data-table__header-row"
    >
      <th
        v-for="(theadCellData, theadCellIndex) in theadRowData"
        :key="`thead-cell-${theadCellIndex}`"
        :class="theadCellClassName(theadCellData)"
        :colspan="theadCellData[UI_TABLE.CELL.COLSPAN] || null"
        :rowspan="theadCellData[UI_TABLE.CELL.ROWSPAN] || null"
        :style="theadCellData[UI_TABLE.CELL.STYLE] || null"
        role="columnheader"
        :data-column-id="theadCellData.columnId"
        :aria-sort="getSort(theadCellData)"
      >
        <!-- Column header row checkbox -->
        <mdc-checkbox
          v-if="theadCellData[UI_TABLE.CELL.CHECKBOX]"
          ref="checkbox"
          :class="[
            'mdc-data-table__header-row-checkbox',
            {
              'mdc-checkbox--selected': selectedRows.length
            }
          ]"
        ></mdc-checkbox>
        <template v-else>
          <!-- With sort button -->
          <div class="mdc-data-table__header-cell-wrapper">
            <template v-if="theadCellData.sort">
              <template v-if="sortIconAlignEnd">
                <div
                  class="mdc-data-table__header-cell-label"
                  v-text="theadCellData[UI_TABLE.CELL.VALUE]"
                ></div>
                <mdc-icon-button
                  class="mdc-data-table__sort-icon-button"
                  v-text="UI_TABLE.SORTING.ICON"
                ></mdc-icon-button>
              </template>
              <template v-else>
                <mdc-icon-button
                  class="mdc-data-table__sort-icon-button"
                  v-text="UI_TABLE.SORTING.ICON"
                ></mdc-icon-button>
                <div class="mdc-data-table__header-cell-label">
                  <slot
                    v-if="theadCellData[UI_TABLE.CELL.SLOT]"
                    :name="theadCellData[UI_TABLE.CELL.SLOT]"
                  ></slot>
                  <template v-else>{{
                    theadCellData[UI_TABLE.CELL.VALUE]
                  }}</template>
                </div>
              </template>
              <div
                class="mdc-data-table__sort-status-label"
                aria-hidden="true"
              ></div>
            </template>
            <!-- Column header name -->
            <template v-else>
              <slot
                v-if="theadCellData[UI_TABLE.CELL.SLOT]"
                :name="theadCellData[UI_TABLE.CELL.SLOT]"
              ></slot>
              <template v-else>{{
                theadCellData[UI_TABLE.CELL.VALUE]
              }}</template>
            </template>
          </div>
        </template>
      </th>
      <th
        v-if="fixed"
        :class="theadCellClassName({ scrollbar: true })"
        :style="fixedScrollPlaceholderStyle"
      ></th>
    </tr>
  </thead>
</template>

<script>
import UI_TABLE from './constants';

export default {
  name: 'MdcTableHeader',
  customOptions: {
    UI_TABLE
  }
};
</script>

<script setup>
import { ref, computed } from 'vue';
import MdcCheckbox from '../checkbox/mdc-checkbox.vue';
import MdcIconButton from '../icon-button/mdc-icon-button.vue';
import { tableCommonProps } from '../../mixins/table';
import { tableHeaderProps, useTableHeader } from '../../mixins/table-header';

const props = defineProps({
  ...tableCommonProps,
  ...tableHeaderProps,
  fixedScrollWidth: {
    type: Number,
    default: 0
  }
});

const checkbox = ref(null);

const { theadData, theadCellClassName, getSort } = useTableHeader(
  checkbox,
  props
);

const fixedScrollPlaceholderStyle = computed(() => {
  const padding = Math.ceil(props.fixedScrollWidth / 2);
  return `padding: ${padding}px`;
});
</script>
