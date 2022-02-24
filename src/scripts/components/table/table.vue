<template>
  <!-- Container -->
  <div ref="table" :class="className">
    <template v-if="hasFixedCell">
      <mdc-table-frame
        class="mdc-data-table__fixed-header"
        :columns-data="columns.data"
        :offset-left="offsetLeft"
      >
        <mdc-table-header
          :selected-rows="modelValue"
          :thead="thead"
          :row-checkbox="rowCheckbox"
          :sort-icon-align-end="sortIconAlignEnd"
          :fixed="hasFixedCell"
          :cell-style="cellStyle"
          :fixed-scroll-width="fixedScrollWidth"
        >
          <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData"></slot>
          </template>
        </mdc-table-header>
      </mdc-table-frame>
      <mdc-table-frame
        ref="tableContent"
        class="mdc-data-table__fixed-body"
        :columns-data="columns.data"
        :scroll="scroll"
        :max-width="currentMaxWidth"
      >
        <mdc-table-body
          :data="data"
          :current-data="currentData"
          :selected-rows="modelValue"
          :tbody="tbody"
          :row-checkbox="rowCheckbox"
          :selected-key="selectedKey"
          :row-id-prefix="rowIdPrefix"
          :cell-style="cellStyle"
        >
          <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData"></slot>
          </template>
        </mdc-table-body>
      </mdc-table-frame>
      <mdc-table-frame
        class="mdc-data-table__fixed-footer"
        :columns-data="columns.data"
        :offset-left="offsetLeft"
      >
        <mdc-table-footer
          :data="data"
          :tfoot="tfoot"
          :row-checkbox="rowCheckbox"
          :columns="columns.count"
          :cell-style="cellStyle"
        >
          <template v-for="(_, name) in $slots" #[name]="slotData">
            <slot :name="name" v-bind="slotData"></slot>
          </template>
        </mdc-table-footer>
      </mdc-table-frame>
    </template>
    <mdc-table-frame v-else :columns-data="columns.data">
      <mdc-table-header
        :selected-rows="modelValue"
        :thead="thead"
        :row-checkbox="rowCheckbox"
        :sort-icon-align-end="sortIconAlignEnd"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </mdc-table-header>
      <mdc-table-body
        :data="data"
        :current-data="currentData"
        :selected-rows="modelValue"
        :tbody="tbody"
        :row-checkbox="rowCheckbox"
        :selected-key="selectedKey"
        :row-id-prefix="rowIdPrefix"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </mdc-table-body>
      <mdc-table-footer
        :data="data"
        :tfoot="tfoot"
        :row-checkbox="rowCheckbox"
        :columns="columns.count"
      >
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name="name" v-bind="slotData"></slot>
        </template>
      </mdc-table-footer>
    </mdc-table-frame>

    <mdc-table-progress></mdc-table-progress>

    <slot></slot>
  </div>
</template>

<script>
import UI_TABLE from './constants';

export default {
  name: 'UiTable',
  customOptions: {
    UI_TABLE
  }
};
</script>

<script setup>
import {
  ref,
  computed,
  watch,
  onMounted,
  onBeforeUnmount,
  nextTick
} from 'vue';
import { MDCDataTable } from '../../../material-components-web/data-table';
import { events } from '../../../material-components-web/data-table/constants';
import MdcTableFrame from './mdc-table-frame.vue';
import MdcTableHeader from './mdc-table-header.vue';
import MdcTableBody from './mdc-table-body.vue';
import MdcTableFooter from './mdc-table-footer.vue';
import MdcTableProgress from './mdc-table-progress.vue';
import getType from '../../utils/typeof';

const props = defineProps({
  // States
  data: {
    type: Array,
    default: () => []
  },
  modelValue: {
    type: Array,
    default: () => []
  },
  // UI attributes
  thead: {
    type: Array,
    default: () => []
  },
  tbody: {
    type: Array,
    default: () => []
  },
  tfoot: {
    type: Array,
    default: () => []
  },
  fullwidth: {
    type: Boolean,
    default: false
  },
  rowCheckbox: {
    type: Boolean,
    default: false
  },
  selectedKey: {
    type: [Boolean, String],
    default: false
  },
  rowIdPrefix: {
    type: String,
    default: ''
  },
  sortIconAlignEnd: {
    type: Boolean,
    default: false
  },
  showProgress: {
    type: Boolean,
    default: false
  },
  fixedHeader: {
    type: Boolean,
    default: false
  },
  defaultColWidth: {
    type: Number,
    default: 0
  },
  scroll: {
    type: Object,
    default: () => ({
      x: false,
      y: false
    })
  }
});

const emit = defineEmits([UI_TABLE.EVENTS.CHANGE]);

const table = ref(null);
const tableContent = ref(null);
let $table = null;
let columnsData = props.tbody;
let currentData = props.data;
let ticking = false;
let currentOffsetLeft = 0;
let currentMaxWidth = 0;
let fixedScrollWidth = 0;

const hasFixedCell = computed(() => {
  const fixedFirstColumn =
    getType(props.tbody[0]) === 'object' ? props.tbody[0].fixed : false;
  const fixedLastColumn =
    getType(props.tbody[props.tbody.length - 1]) === 'object'
      ? props.tbody[props.tbody.length - 1].fixed
      : false;

  const hasFixedColumn = !!(
    props.fixedHeader ||
    fixedFirstColumn ||
    fixedLastColumn
  );

  if (hasFixedColumn && !props.defaultColWidth) {
    console.warn('[UiTable]', 'You need set defaultColWidth prop first');
  }

  return props.defaultColWidth && hasFixedColumn;
}).value;

const className = computed(() => ({
  'mdc-data-table': true,
  'mdc-data-table--fixed': hasFixedCell,
  'mdc-data-table--fullwidth': props.fullwidth
}));

const columns = computed(() => {
  let count = columnsData.length;
  let maxWidth = 0;
  let data = props.tbody.map(({ colClass, width }) => {
    const colWidth = width || props.defaultColWidth;
    maxWidth += colWidth;

    return {
      class: colClass,
      style: colWidth ? { width: `${colWidth}px` } : null
    };
  });

  if (props.rowCheckbox) {
    count += 1;
    maxWidth += UI_TABLE.CHECKBOX_COL_WIDTH;
    data.unshift({
      class: 'checkbox',
      style: { width: `${UI_TABLE.CHECKBOX_COL_WIDTH}px` }
    });
  }

  nextTick(() => {
    const currentWidth = table.value.offsetWidth;
    if (hasFixedCell && currentWidth > maxWidth) {
      console.warn(
        '[UiTable]',
        `The table max width is ${maxWidth}px, but the current is ${currentWidth}px.`
      );
    }
  });

  return {
    count,
    data
  };
});

const cellStyle = computed(() => {
  let result = [];

  let originTbody = Object.assign([], props.tbody);
  if (props.rowCheckbox) {
    originTbody.unshift(
      hasFixedCell
        ? {
            fixed: 'left',
            width: UI_TABLE.CHECKBOX_COL_WIDTH
          }
        : {}
    );
  }

  let sumWidth = 0;
  for (let index = 0, len = originTbody.length; index < len; index++) {
    let style;

    let { fixed } = originTbody[index];
    let fixedWidth = 0;
    switch (fixed) {
      case 'left':
        if (index > 0) {
          let { width } = originTbody[index - 1];
          sumWidth += width;
          fixedWidth = `${sumWidth}px`;
        }
        style = { position: 'sticky', left: fixedWidth };
        break;
      case 'right':
        if (index < len - 1) {
          sumWidth = 0;
          for (let j = index + 1; j < len; j++) {
            let { width } = originTbody[j];
            sumWidth += width;
          }
          fixedWidth = `${sumWidth}px`;
        }
        style = { position: 'sticky', right: fixedWidth };
        break;
      default:
    }

    result.push(style);
  }

  return result;
});

onMounted(() => {
  $table = new MDCDataTable(table.value);

  $table.listen(events.ROW_SELECTION_CHANGED, ({ detail }) => {
    let selectedRows = props.modelValue; // NOTE: cache selected rows for pagination

    currentData.forEach((tbodyRowData, tbodyRowIndex) => {
      let selectedRowId = props.selectedKey
        ? tbodyRowData[props.selectedKey]
        : tbodyRowIndex;

      if (tbodyRowIndex === detail.rowIndex) {
        // checked
        if (detail.selected) {
          selectedRows.push(selectedRowId);
        } else {
          // unchecked
          selectedRows.splice(
            selectedRows.findIndex(
              (selectedKey) => selectedKey === selectedRowId
            ),
            1
          );
        }
      }
    });

    emit(UI_TABLE.EVENTS.CHANGE, selectedRows);
  });

  $table.listen(events.SELECTED_ALL, () => {
    let oldSelectedRows = props.modelValue; // NOTE: cache selected rows for pagination

    let newSelectedRows = currentData.map((tbodyRowData, tbodyRowIndex) => {
      return props.selectedKey
        ? tbodyRowData[props.selectedKey]
        : tbodyRowIndex;
    });

    let selectedRows = [...new Set(oldSelectedRows.concat(newSelectedRows))]; // merge + unique

    emit(UI_TABLE.EVENTS.CHANGE, selectedRows);
  });

  $table.listen(events.UNSELECTED_ALL, () => {
    let oldSelectedRows = props.modelValue; // NOTE: cache selected rows for pagination

    let newSelectedRows = currentData.map((tbodyRowData, tbodyRowIndex) => {
      return props.selectedKey
        ? tbodyRowData[props.selectedKey]
        : tbodyRowIndex;
    });

    // Difference set
    let a = new Set(oldSelectedRows);
    let b = new Set(newSelectedRows);
    let selectedRows = Array.from(new Set([...a].filter((x) => !b.has(x))));

    emit(UI_TABLE.EVENTS.CHANGE, selectedRows);
  });

  $table.listen(events.SORTED, ({ detail }) => {
    // TODO: multi-row header is unsupported
    handleSort(detail);
  });

  if (props.modelValue.length) {
    initSelectedRows();
  }

  if (props.showProgress) {
    $table.showProgress();
  }

  if (hasFixedCell) {
    tableContent.value.addEventListener('scroll', handleScroll);

    if (props.rowCheckbox) {
      currentMaxWidth += UI_TABLE.CHECKBOX_COL_WIDTH;
    }

    props.tbody.forEach(({ width }) => {
      currentMaxWidth += width || props.defaultColWidth;
    });
  }

  watch(
    () => props.data,
    (val) => {
      currentData = val;

      nextTick(() => {
        $table.hideProgress();
        $table.layout();
        initSelectedRows();

        const el = tableContent.value;
        if (el) {
          fixedScrollWidth = el.offsetWidth - el.clientWidth;
        }
      });
    }
  );
  watch(
    () => props.showProgress,
    (val) => (val ? $table.showProgress() : $table.hideProgress())
  );
});

onBeforeUnmount(() => {
  if (hasFixedCell) {
    tableContent.value.removeEventListener('scroll', handleScroll);
  }
});

function handleSort({ columnId, sortValue }) {
  let newSelectedRows = [];

  if (sortValue) {
    const isNumber = currentData.every(
      (data) => getType(data[columnId]) === 'number'
    );

    if (sortValue === 'descending') {
      currentData.sort(
        isNumber
          ? (a, b) => {
              return b[columnId] - a[columnId];
            }
          : (a, b) => {
              return b[columnId].localeCompare(a[columnId]);
            }
      );
    } else if (sortValue === 'ascending') {
      currentData.sort(
        isNumber
          ? (a, b) => {
              return a[columnId] - b[columnId];
            }
          : (a, b) => {
              return a[columnId].localeCompare(b[columnId]);
            }
      );
    }

    let oldSelectedRows = props.modelValue;
    if (props.selectedKey) {
      newSelectedRows = [...oldSelectedRows];
    } else {
      const tableRowCount = currentData.length;

      let oldSelectedIndex = 0;
      for (let index = tableRowCount - 1; index >= 0; index--) {
        if (oldSelectedRows.includes(oldSelectedIndex)) {
          newSelectedRows.push(index);
        }
        oldSelectedIndex++;
      }
      newSelectedRows.sort();
    }
  }

  emit(UI_TABLE.EVENTS.CHANGE, newSelectedRows);
}

function initSelectedRows() {
  if (props.rowCheckbox && currentData.length) {
    let rowIds = props.modelValue
      .map((selectedRow) => {
        let rowIndex = props.selectedKey
          ? currentData.findIndex(
              (tbodyRowData) => tbodyRowData[props.selectedKey] === selectedRow
            )
          : selectedRow;
        return `${props.rowIdPrefix}${rowIndex}`;
      })
      .filter((row) => row > -1);

    $table.setSelectedRowIds(rowIds);
  }
}

function handleScroll(e) {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const offsetLeft = e.target.scrollLeft;

      if (currentOffsetLeft != offsetLeft) {
        currentOffsetLeft = offsetLeft;
      }

      ticking = false;
    });
    ticking = true;
  }
}
</script>
