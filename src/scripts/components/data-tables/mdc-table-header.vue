<template>
  <!-- Column header -->
  <thead v-if="theadData.length">
    <tr
      v-for="(theadRow, theadRowIndex) in theadData"
      :key="`thead-row-${theadRowIndex}`"
      class="mdc-data-table__header-row"
    >
      <template v-for="(theadCell, theadCellIndex) in theadRow">
        <th
          :key="`thead-cell-${theadCellIndex}`"
          :class="theadCellClassName(theadCell)"
          :colspan="theadCell[T_CELL.COLSPAN] || null"
          :rowspan="theadCell[T_CELL.ROWSPAN] || null"
          role="columnheader"
          :data-column-id="theadCell.columnId"
          :aria-sort="getSort(theadCell)"
        >
          <!-- Column header row checkbox -->
          <mdc-checkbox
            v-if="theadCell[T_CELL.CHECKBOX]"
            :class="'mdc-data-table__header-row-checkbox'"
          ></mdc-checkbox>
          <template v-else>
            <!-- With sort button -->
            <div class="mdc-data-table__header-cell-wrapper">
              <template v-if="theadCell.sort">
                <template v-if="sortIconAlignEnd">
                  <div
                    class="mdc-data-table__header-cell-label"
                    v-text="theadCell[T_CELL.VALUE]"
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
                      v-if="theadCell[T_CELL.SLOT]"
                      :name="theadCell[T_CELL.SLOT]"
                    ></slot>
                    <template v-else>{{ theadCell[T_CELL.VALUE] }}</template>
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
                  v-if="theadCell[T_CELL.SLOT]"
                  :name="theadCell[T_CELL.SLOT]"
                ></slot>
                <template v-else>{{ theadCell[T_CELL.VALUE] }}</template>
              </template>
            </div>
          </template>
        </th>
      </template>
      <th v-if="fixed" :class="theadCellClassName({ scrollbar: true })"></th>
    </tr>
  </thead>
</template>

<script>
import MdcCheckbox from '../selection-controls/mdc-checkbox';
import MdcIconButton from '../buttons/mdc-icon-button';
import tableHeaderMixin from '../../mixins/table-header';
import UI_TABLE from './constants';

export default {
  name: 'MdcTableHeader',
  components: {
    MdcCheckbox,
    MdcIconButton
  },
  mixins: [tableHeaderMixin],
  data() {
    return {
      UI_TABLE
    };
  }
};
</script>
