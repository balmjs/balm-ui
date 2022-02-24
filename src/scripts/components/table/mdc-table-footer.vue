<template>
  <!-- Footers -->
  <tfoot v-if="tfootData.length">
    <tr class="mdc-data-table__footer-row">
      <td
        v-for="(tfootCellData, tfootCellIndex) in tfootData"
        :key="tfootCellIndex"
        :class="tfootCellClassName(tfootCellData)"
        :style="tfootCellData[UI_TABLE.CELL.STYLE] || null"
      >
        <slot
          v-if="tfootCellData[UI_TABLE.CELL.SLOT]"
          :name="tfootCellData[UI_TABLE.CELL.SLOT]"
          :data="tfootCellData[UI_TABLE.CELL.VALUE]"
        ></slot>
        <template v-else>{{ tfootCellData[UI_TABLE.CELL.VALUE] }}</template>
      </td>
    </tr>
  </tfoot>
</template>

<script>
import UI_TABLE from './constants';

export default {
  name: 'MdcTableFooter',
  customOptions: {
    UI_TABLE
  }
};
</script>

<script setup>
import { tableCommonProps } from '../../mixins/table';
import { tableFooterProps, useTableFooter } from '../../mixins/table-footer';

const props = defineProps({
  ...tableCommonProps,
  ...tableFooterProps
});

const { tfootData, tfootCellClassName } = useTableFooter(props);
</script>
