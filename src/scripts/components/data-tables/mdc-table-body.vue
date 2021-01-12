<template>
  <!-- Rows -->
  <tbody class="mdc-data-table__content">
    <tr
      v-for="(tbodyRow, tbodyRowIndex) in tbodyData"
      :key="`tbody-row-${tbodyRowIndex}`"
      :class="[
        'mdc-data-table__row',
        {
          'mdc-data-table__row--selected': tbodyRow[0][T_CELL.SELECTED]
        }
      ]"
      :data-row-id="tbodyRow[0][T_CELL.ROW_ID] || null"
      :aria-selected="tbodyRow[0][T_CELL.SELECTED] || null"
    >
      <template v-for="(tbodyCell, tbodyCellIndex) in tbodyRow">
        <td
          :key="`tbody-cell-${tbodyCellIndex}`"
          :class="cellClassName(tbodyCell)"
        >
          <!-- Row checkboxes -->
          <mdc-checkbox
            v-if="tbodyCell[T_CELL.CHECKBOX]"
            :class="'mdc-data-table__row-checkbox'"
          ></mdc-checkbox>
          <!-- Data / Actions -->
          <template v-else>
            <slot
              v-if="tbodyCell[T_CELL.SLOT]"
              :name="tbodyCell[T_CELL.SLOT]"
              :data="currentData[tbodyRowIndex]"
            ></slot>
            <template v-else>{{ tbodyCell[T_CELL.VALUE] }}</template>
          </template>
        </td>
      </template>
    </tr>
  </tbody>
</template>

<script>
import MdcCheckbox from '../selection-controls/mdc-checkbox';
import tableBodyMixin from '../../mixins/table-body';

export default {
  name: 'MdcTableBody',
  components: {
    MdcCheckbox
  },
  mixins: [tableBodyMixin]
};
</script>
