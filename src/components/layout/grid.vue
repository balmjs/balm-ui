<template>
  <div :class="className">
    <div v-for="(cell, index) in gridData" :class="cell">
      <slot :name="`cell${index}`">
        <code v-text="getCellTemplate(index)"></code>
      </slot>
    </div>
  </div>
</template>

<script>
import {isObject} from '../../helpers/util';

const MODE = ['', 'phone', 'tablet', 'desktop'];
const MODE_PHONE = 1;
const MODE_TABLET = 2;
const MODE_DESKTOP = 3;
const ALIGN = ['', 'top', 'middle', 'bottom', 'stretch'];
const ALIGN_TOP = 1;
const ALIGN_MIDDLE = 2;
const ALIGN_BOTTOM = 3;
const ALIGN_FULL = 4;

export default {
  name: 'ui-badge',
  props: {
    data: {
      type: Array,
      required: true
    },
    mode: {
      type: Number,
      default: 0
    },
    // Modifies the grid cells to have no margin between them.
    noSpacing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentData: this.data,
      currentMode: MODE[this.mode]
    };
  },
  computed: {
    className() {
      return {
        'mdl-grid': true,
        'mdl-grid--no-spacing': this.noSpacing
      };
    },
    gridData() {
      let result = [];
      let rows = this.currentData;
      let rowData = [];

      if (rows.length === 1) { // single line
        rowData = rows[0];
        result = this.getGridData(rowData);
      } else { // multi line
        for (let row of rows) {
          rowData = rowData.concat(row);
        }
        result = this.getGridData(rowData);
      }

      return result;
    }
  },
  watch: {
    data(val) {
      this.currentData = val;
    },
    currentData(val) {
    }
  },
  methods: {
    getCellTemplate(index) {
      return `<template slot="cell${index}"></template>`;
    },
    setCellClassName(cell, value) {
      let suffix = this.currentMode ? `-${this.currentMode}` : '';

      if (isObject(value)) {
        // Sets the column size for the cell to N
        cell.push(`mdl-cell--${value.col}-col${suffix}`);
        // Adds N columns of whitespace before the cell
        if (value.offset) {
          cell.push(`mdl-cell--${value.offset}-offset${suffix}`);
        }
        // Reorders cell to position N
        if (value.order) {
          cell.push(`mdl-cell--order-${value.order}${suffix}`);
        }
        // Aligns the cell to the parent
        if (value.align) {
          let align = ALIGN[value.align];
          cell.push(`mdl-cell--${align}`);
        }
        // TODO: Hides the cell
      } else {
        cell.push(`mdl-cell--${value}-col${suffix}`);
      }

      return cell;
    },
    getGridData(rowData) {
      let result = [];

      for (let key in rowData) {
        let value = rowData[key];
        let cell = ['mdl-cell'];
        cell = this.setCellClassName(cell, value);
        result.push(cell);
      }

      return result;
    }
  },
  created() {
    if (!(Array.isArray(this.data) && Array.isArray(this.data[0]))) {
      console.error('The data must be an array!');
    }
  }
};
</script>
