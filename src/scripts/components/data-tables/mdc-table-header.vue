<template>
  <!-- Column header -->
  <thead v-if="theadData.length">
    <tr
      v-for="(theadRowData, theadRowIndex) in theadData"
      :key="`thead-row-${theadRowIndex}`"
      class="mdc-data-table__header-row"
    >
      <template v-for="(theadCellData, theadCellIndex) in theadRowData">
        <th
          :key="`thead-cell-${theadCellIndex}`"
          :class="theadCellClassName(theadCellData)"
          :colspan="theadCellData[T_CELL.COLSPAN] || null"
          :rowspan="theadCellData[T_CELL.ROWSPAN] || null"
          :style="theadCellData[T_CELL.STYLE] || null"
          role="columnheader"
          :data-column-id="theadCellData.columnId"
          :aria-sort="getSort(theadCellData)"
        >
          <!-- Column header row checkbox -->
          <mdc-checkbox
            v-if="theadCellData[T_CELL.CHECKBOX]"
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
                    v-text="theadCellData[T_CELL.VALUE]"
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
                      v-if="theadCellData[T_CELL.SLOT]"
                      :name="theadCellData[T_CELL.SLOT]"
                    ></slot>
                    <template v-else>{{
                      theadCellData[T_CELL.VALUE]
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
                  v-if="theadCellData[T_CELL.SLOT]"
                  :name="theadCellData[T_CELL.SLOT]"
                ></slot>
                <template v-else>{{ theadCellData[T_CELL.VALUE] }}</template>
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
