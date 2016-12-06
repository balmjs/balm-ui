<template>
  <table :class="className">
    <slot name="thead" :data="theadData">
      <thead>
        <tr v-for="row in theadData">
          <th v-for="cell in row" :colspan="cell.col" :rowspan="cell.row" :class="[cell.class, {'mdl-data-table__header--sorted-ascending': cell.sort === 'asc'}, {'mdl-data-table__header--sorted-descending': cell.sort === 'desc'}]">
            <span v-if="cell.data" v-text="cell.data" @click="sort(cell)"></span>
            <ui-checkbox v-if="cell.isCheckbox" name="checkAll" :value="cell.value" :model="isCheckAll" @input="onCheckAll"></ui-checkbox>
          </th>
        </tr>
      </thead>
    </slot>
    <slot name="tbody" :data="tbodyData">
      <tbody>
        <tr v-for="row in tbodyData">
          <td v-for="cell in row" :colspan="cell.col" :rowspan="cell.row" :class="cell.class">
            <span v-if="cell.data" v-text="cell.data"></span>
            <ui-checkbox v-if="cell.isCheckbox" name="checkOne[]" :value="cell.value" :model="currentCheckList" @input="onCheckOne"></ui-checkbox>
            <ui-button v-if="Array.isArray(cell)" v-for="action in cell" :icon="action.icon" :link="action.link" @click.native="doAction(action.name, action.data)" v-html="action.value"></ui-button>
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
const CELL_SORT = 'sort';
const CELL_CLASS = 'class';
const ACTION_LINK = 'link';
const ACTION_BUTTON = 'button';
const ACTION_ICON = 'icon';
const POSITION_LEFT = 'left';
const POSITION_RIGHT = 'right';
const SORT_ASC = 'asc';
const SORT_DESC = 'desc';

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
    selectable: {
      type: [String, Boolean],
      default: false
    },
    checkList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      isCheckAll: false,
      currentCheckList: this.checkList,
      currentData: this.data
    };
  },
  computed: {
    className() {
      return {
        'mdl-data-table': true,
        'mdl-js-data-table': true
      };
    },
    theadData() {
      return this.getData({
        type: T_HEAD,
        table: this.thead,
        data: this.thead,
        selectable: this.selectable
      });
    },
    tbodyData() {
      return this.getData({
        type: T_BODY,
        table: this.tbody,
        data: this.currentData,
        selectable: this.selectable,
        action: this.action
      });
    },
    tfootData() {
      return [];
      // this.getData({
      //   type: T_FOOT,
      //   table: this.tfoot
      // });
    }
  },
  methods: {
    getCell(data) {
      let result = {};

      if (isString(data)) {
        result[CELL_DATA] = data;
      } else if (isObject(data)) {
        result[CELL_DATA] = data[CELL_DATA];
        if (data[CELL_COLSPAN]) {
          result[CELL_COLSPAN] = data[CELL_COLSPAN];
        }
        if (data[CELL_ROWSPAN]) {
          result[CELL_ROWSPAN] = data[CELL_ROWSPAN];
        }
        if (data[CELL_SORT]) {
          result[CELL_SORT] = data[CELL_SORT];
        }

        let className = [];
        if (data[CELL_CLASS]) {
          className.push(data[CELL_CLASS]);
        }
        if (data.noNum) {
          className.push('mdl-data-table__cell--non-numeric');
        }
        if (className.length) {
          result[CELL_CLASS] = className.join(' ');
        }
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
            row: key, // row number
            isCheckbox: true,
            value: true
          };
          break;
        case T_BODY:
          cell = {
            isCheckbox: true,
            value: key // data[this.keyField]
          };
          break;
      }

      if (this.selectable === POSITION_LEFT) {
        result.unshift(cell);
      } else if (this.selectable === POSITION_RIGHT) {
        result.push(cell);
      }

      return result;
    },
    getAction(result, data) {
      let cell = [];

      for (let action of this.action) {
        let cellData = {
          name: action.name,
          value: action.value,
          data: data
        };
        switch (action.type.toLowerCase()) {
          case ACTION_LINK:
            cellData.link = true;
            break;
          case ACTION_ICON:
            cellData.icon = true;
            break;
        }
        cell.push(cellData);
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
            if (object.selectable) {
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
    },
    onCheckOne(data) {
      this.currentCheckList = data;
    },
    onCheckAll(checked) {
      this.isCheckAll = checked;
    },
    checkAll() {
      let dataCount = this.currentData.length; // not empty
      let beEqual = this.currentCheckList.length === dataCount;
      let ids = this.currentData.map(value => value[this.keyField]);
      let exists = this.currentCheckList.every(id => ids.indexOf(id) > -1);

      this.isCheckAll = dataCount && beEqual && exists;
    },
    sort(data) {
      // TODO
      console.log(data.sort);
      if (data.sort === SORT_ASC) {
        data.sort = SORT_DESC;
        // this.currentData
      } else if (data.sort === SORT_DESC) {
        data.sort = SORT_ASC;
      }
    }
  },
  watch: {
    checkList(val) {
      this.currentCheckList = val;
    },
    currentCheckList(val) {
      this.checkAll();
      this.$emit('checkbox', val);
    },
    isCheckAll(val) {
      let lastCheckList = (this.currentCheckList.length === this.currentData.length) ? [] : this.currentCheckList;
      this.currentCheckList = val ? this.currentData.map(value => value[this.keyField]) : lastCheckList;
    }
  },
  created() {
    this.checkAll();
  }
};
</script>

<style scoped>
table {
  width: 100%;
}
</style>
