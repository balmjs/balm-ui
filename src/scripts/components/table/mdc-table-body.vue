<template>
  <!-- Rows -->
  <tbody class="mdc-data-table__content">
    <tr
      v-for="(tbodyRowData, tbodyRowIndex) in tbodyData"
      :key="`tbody-row-${tbodyRowIndex}`"
      :class="[
        'mdc-data-table__row',
        {
          'mdc-data-table__row--selected':
            tbodyRowData[0][UI_TABLE.CELL.SELECTED]
        }
      ]"
      :data-row-id="tbodyRowData[0][UI_TABLE.CELL.ROW_ID] || null"
      :aria-selected="
        tbodyRowData[0][UI_TABLE.CELL.CHECKBOX]
          ? tbodyRowData[0][UI_TABLE.CELL.SELECTED]
          : null
      "
    >
      <td
        v-for="(tbodyCellData, tbodyCellIndex) in tbodyRowData"
        :key="`tbody-cell-${tbodyCellIndex}`"
        :class="cellClassName(tbodyCellData)"
        :style="tbodyCellData[UI_TABLE.CELL.STYLE] || null"
      >
        <!-- Row checkboxes -->
        <mdc-checkbox
          v-if="tbodyCellData[UI_TABLE.CELL.CHECKBOX]"
          :class="[
            'mdc-data-table__row-checkbox',
            {
              'mdc-checkbox--selected': tbodyCellData[UI_TABLE.CELL.SELECTED]
            }
          ]"
          :checked="tbodyCellData[UI_TABLE.CELL.SELECTED]"
        ></mdc-checkbox>
        <!-- Data / Actions -->
        <template v-else>
          <slot
            v-if="tbodyCellData[UI_TABLE.CELL.SLOT]"
            :name="tbodyCellData[UI_TABLE.CELL.SLOT]"
            :data="currentData[tbodyRowIndex]"
          ></slot>
          <template v-else>{{ tbodyCellData[UI_TABLE.CELL.VALUE] }}</template>
        </template>
      </td>
    </tr>
  </tbody>
</template>

<script>
import UI_TABLE from './constants';

export default {
  name: 'MdcTableBody',
  customOptions: {
    UI_TABLE
  }
};
</script>

<script setup>
import MdcCheckbox from '../checkbox/mdc-checkbox.vue';
import { tableCommonProps } from '../../mixins/table';
import { tableBodyProps, useTableBody } from '../../mixins/table-body';

const props = defineProps({
  ...tableCommonProps,
  ...tableBodyProps
});

const { tbodyData, cellClassName } = useTableBody(props);
</script>
