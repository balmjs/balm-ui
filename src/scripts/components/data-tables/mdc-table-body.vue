<template>
  <!-- Rows -->
  <tbody class="mdc-data-table__content">
    <tr
      v-for="(tbodyRowData, tbodyRowIndex) in tbodyData"
      :key="`tbody-row-${tbodyRowIndex}`"
      :class="[
        'mdc-data-table__row',
        {
          'mdc-data-table__row--selected': tbodyRowData[0][T_CELL.SELECTED]
        }
      ]"
      :data-row-id="tbodyRowData[0][T_CELL.ROW_ID] || null"
      :aria-selected="
        tbodyRowData[0][T_CELL.CHECKBOX]
          ? tbodyRowData[0][T_CELL.SELECTED]
          : null
      "
    >
      <template v-for="(tbodyCellData, tbodyCellIndex) in tbodyRowData">
        <td
          :key="`tbody-cell-${tbodyCellIndex}`"
          :class="cellClassName(tbodyCellData)"
          :style="tbodyCellData[T_CELL.STYLE] || null"
        >
          <!-- Row checkboxes -->
          <mdc-checkbox
            v-if="tbodyCellData[T_CELL.CHECKBOX]"
            :class="[
              'mdc-data-table__row-checkbox',
              {
                'mdc-checkbox--selected': tbodyCellData[T_CELL.SELECTED]
              }
            ]"
            :checked="tbodyCellData[T_CELL.SELECTED]"
          ></mdc-checkbox>
          <!-- Data / Actions -->
          <template v-else>
            <slot
              v-if="tbodyCellData[T_CELL.SLOT]"
              :name="tbodyCellData[T_CELL.SLOT]"
              :data="currentData[tbodyRowIndex]"
            ></slot>
            <template v-else>{{ tbodyCellData[T_CELL.VALUE] }}</template>
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
