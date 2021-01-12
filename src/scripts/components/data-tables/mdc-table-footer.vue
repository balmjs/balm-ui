<template>
  <!-- Footers -->
  <tfoot v-if="tfootData.length">
    <tr class="mdc-data-table__footer-row">
      <td
        v-for="(tfootCell, tfootCellIndex) in tfootData"
        :key="tfootCellIndex"
        :class="tfootCellClassName(tfootCell)"
      >
        <slot
          v-if="tfootCell[T_CELL.SLOT]"
          :name="tfootCell[T_CELL.SLOT]"
          :data="tfootCell[T_CELL.VALUE]"
        ></slot>
        <template v-else>{{ tfootCell[T_CELL.VALUE] }}</template>
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
