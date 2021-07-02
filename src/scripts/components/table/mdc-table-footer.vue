<template>
  <!-- Footers -->
  <tfoot v-if="tfootData.length">
    <tr class="mdc-data-table__footer-row">
      <td
        v-for="(tfootCellData, tfootCellIndex) in tfootData"
        :key="tfootCellIndex"
        :class="tfootCellClassName(tfootCellData)"
        :style="tfootCellData[T_CELL.STYLE] || null"
      >
        <slot
          v-if="tfootCellData[T_CELL.SLOT]"
          :name="tfootCellData[T_CELL.SLOT]"
          :data="tfootCellData[T_CELL.VALUE]"
        ></slot>
        <template v-else>{{ tfootCellData[T_CELL.VALUE] }}</template>
      </td>
    </tr>
  </tfoot>
</template>

<script>
import tableFooterMixin from '../../mixins/table-footer';

export default {
  name: 'MdcTableFooter',
  mixins: [tableFooterMixin]
};
</script>
