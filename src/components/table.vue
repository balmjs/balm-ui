<template>
  <table :class="className">
    <slot name="thead" :data="theadData">
      <thead>
        <tr v-for="row in theadData">
          <th v-for="cell in row" :colspan="cell.col" :rowspan="cell.row" :class="cell.class">
            <span v-if="cell.data" v-text="cell.data"></span>
            <component v-if="cell.isCheckbox" is="ui-checkbox" name="checkAll" :value="cell.value" :model="checkAll"></component>
          </th>
        </tr>
      </thead>
    </slot>
    <slot name="tbody" :data="tbodyData">
      <tbody>
        <tr v-for="row in tbodyData">
          <td v-for="cell in row" :colspan="cell.col" :rowspan="cell.row" :class="cell.class">
            <span v-if="cell.data" v-text="cell.data"></span>
            <component v-if="cell.isCheckbox" is="ui-checkbox" name="checkOne[]" :value="cell.value" :model="checkOne"></component>
            <component v-if="Array.isArray(cell)" v-for="action in cell" is="ui-button" @click.native="doAction(action.name, action.data)" v-text="action.value"></component>
          </td>
        </tr>
      </tbody>
    </slot>
    <slot name="tfoot" :data="tfootData">
      <tfoot v-if="tfootData.length">
        <tr v-for="row in tfootData">
          <td v-for="cell in row" :colspan="cell.col" :rowspan="cell.row" :class="cell.class">
            <span v-text="cell.data"></span>
          </td>
        </tr>
      </tfoot>
    </slot>
  </table>
</template>

<script>
import mdlTable from '../styles/data-table/data-table';
import {isString, isObject} from '../helpers/util';
import UiButton from './button';
import UiCheckbox from './form/checkbox';

const T_HEAD = 'thead';
const T_BODY = 'tbody';
const T_FOOT = 'tfoot';
const CELL_DATA = 'data';
const CELL_COLSPAN = 'col';
const CELL_ROWSPAN = 'row';
const CELL_CLASS = 'class';
const ACTION_LINK = 'link';
const ACTION_BUTTON = 'button';
const ACTION_ICON = 'icon';

export default {
  name: 'ui-table',
  components: {
    UiButton,
    UiCheckbox
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    keyField: {
      type: String,
      default: 'id'
    },
    col: {
      type: Number,
      default: 1
    },
    thead: {
      type: Array,
      required: true
    },
    tbody: {
      type: Array,
      required: true
    },
    tfoot: {
      type: Array,
      default: function() {
        return [];
      }
    },
    action: Array,
    checkbox: {
      type: String,
      default: 'left' // or 'right'
    },
    checkList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    selectable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkboxData: ''
    };
  },
  computed: {
    className() {
      return {
        table: {
          'mdl-data-table': true,
          'mdl-js-data-table': true,
          'mdl-data-table--selectable': this.selectable
        },
        // TODO:
        thead: {
          'mdl-data-table__header--sorted-ascending': this.asc,
          'mdl-data-table__header--sorted-descending': this.desc
        },
        cell: {
          'mdl-data-table__cell--non-numeric': this.nonNum
        }
      };
    },
    theadData() {
      return this.getData({
        type: T_HEAD,
        table: this.thead,
        data: this.thead,
        checkbox: this.checkbox
      });
    },
    tbodyData() {
      return this.getData({
        type: T_BODY,
        table: this.tbody,
        data: this.data,
        checkbox: this.checkbox,
        action: this.action
      });
    },
    tfootData() {
      return [];
      // this.getData({
      //   type: T_FOOT,
      //   table: this.tfoot
      // });
    },
    checkAll() {
      let dataCount = this.data.length;

      let beEqual = this.checkList.length === dataCount;

      let ids = this.data.map(value => {
        return value[this.keyField];
      });
      let exists = this.checkList.every(id => ids.indexOf(id) > -1);

      return dataCount && beEqual && exists;
    },
    checkOne() {
      return this.checkList;
    }
  },
  methods: {
    getCell(data) {
      let result = {};

      if (isString(data)) {
        result[CELL_DATA] = data;
      } else if (isObject(data)) {
        result[CELL_DATA] = data[CELL_DATA];
        result[CELL_COLSPAN] = data[CELL_COLSPAN];
        result[CELL_ROWSPAN] = data[CELL_ROWSPAN];
        result[CELL_CLASS] = data[CELL_CLASS];
      } else {
        console.warn('Invalid cell data!');
      }

      return result;
    },
    getCheckbox(type, result, key = 1) {
      let cell = {};

      switch (type) {
        case T_HEAD:
          cell = {
            isCheckbox: true,
            value: true,
            row: key // row number
          };
          break;
        case T_BODY:
          cell = {
            isCheckbox: true,
            value: key // data[this.keyField]
          };
          break;
      }

      if (this.checkbox === 'left') {
        result.unshift(cell);
      } else {
        result.push(cell);
      }

      return result;
    },
    getAction(result, data) {
      let cell = [];

      for (let action of this.action) {
        switch (action.type.toLowerCase()) {
          case ACTION_LINK:
            break;
          case ACTION_BUTTON:
            cell.push({
              isAction: true,
              name: action.name,
              value: action.value,
              data: data
            });
            break;
          case ACTION_ICON:
            break;
        }
      }

      if (cell.length) {
        result.push(cell);
      }

      return result;
    },
    getData(object) {
      let result = [];
      let {type, table, data} = object;

      if (Array.isArray(data)) {
        let cell;
        let isMultiLine = false;

        switch (type) {
          case T_HEAD:
            result[0] = []; // single line init
            for (let key in data) {
              let row = data[key];
              if (Array.isArray(row)) { // multi line
                isMultiLine = true;
                result[key] = [];
                for (cell of row) {
                  result[key].push(this.getCell(cell));
                }
              } else { // single line
                cell = row;
                result[0].push(this.getCell(cell));
              }
            }
            // add checkbox
            if (object.checkbox) {
              result[0] = this.getCheckbox(type, result[0], data.length);
            }
            break;
          case T_BODY:
            for (let key in data) {
              let value = data[key];
              result[key] = [];
              for (let field of table) {
                result[key].push(this.getCell({
                  data: value[field]
                }));
              }
              // add action
              result[key] = this.getAction(result[key], value);
              // add checkbox
              result[key] = this.getCheckbox(type, result[key], value[this.keyField]);
            }
            break;
        }
      } else {
        console.error(`${type} must be an array!`);
      }

      return result;
    },
    doAction(name, data) {
      this.$emit(name, data);
    }
  },
  watch: {
    // checkbox(val) {
    //   // this.currentCheckboxData = val;
    // },
    // currentData(val) {
    //   // this.$emit('input', val);
    // }
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
</style>
