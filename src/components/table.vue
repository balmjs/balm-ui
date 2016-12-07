<template>
  <table class="mdl-data-table mdl-js-data-table">
    <caption v-if="caption">
      <span v-text="caption"></span>
    </caption>
    <colgroup v-if="col">
      <col v-for="i in col" :class="'col-' + i">
    </colgroup>
    <slot name="thead" :data="theadData">
      <thead>
        <tr v-for="row in theadData">
          <th v-for="cell in row" :colspan="cell.col" :rowspan="cell.row" :class="[cell.class, {'mdl-data-table__header--sorted-ascending': cell.sort === 'asc'}, {'mdl-data-table__header--sorted-descending': cell.sort === 'desc'}]">
            <span v-if="!cell.isCheckbox" v-text="cell.value" @click="sort(cell)"></span>
            <ui-checkbox v-if="cell.isCheckbox" name="checkAll" :value="cell.value" :model="isCheckAll" @input="onCheckAll"></ui-checkbox>
          </th>
        </tr>
      </thead>
    </slot>
    <slot name="tbody" :data="tbodyData">
      <tbody>
        <tr v-for="row in tbodyData">
          <td v-for="cell in row" :colspan="cell.col" :rowspan="cell.row" :class="cell.class">
            <span v-if="!(cell.isCheckbox || cell.isAction)" v-text="cell.value"></span>
            <ui-checkbox v-if="cell.isCheckbox" name="checkOne[]" :value="cell.value" :model="currentCheckList" @input="onCheckOne"></ui-checkbox>
            <ui-button v-if="cell.isAction" v-for="action in cell.actions" :icon="action.icon" :link="action.link" @click.native="doAction(action.name, action.data)" v-html="action.value"></ui-button>
          </td>
        </tr>
      </tbody>
    </slot>
    <slot name="tfoot" :data="tfootData">
      <tfoot v-if="tfootData.length">
        <tr>
          <td v-for="cell in tfootData" :colspan="cell.col" :rowspan="cell.row" :class="cell.class">
            <span v-text="cell.value"></span>
          </td>
        </tr>
      </tfoot>
    </slot>
  </table>
</template>

<script>
/**
 * Supoorted: thead(2 rows) + tbody(N rows) + tfoot(1 row)
 */
import mdlTable from '../styles/data-table/data-table';
import {isString, isObject} from '../helpers/util';
import UiButton from './button';
import UiCheckbox from './form/checkbox';

const T_HEAD = 'thead';
const T_BODY = 'tbody';
const T_FOOT = 'tfoot';
const CELL_VALUE = 'value';
const CELL_COLSPAN = 'col';
const CELL_ROWSPAN = 'row';
const CELL_SORT = 'sort';
const CELL_CLASS = 'class';
const CELL_INDEX = 'index';
const CELL_DATA = 'data';
const ACTION_LINK = 'link';
const ACTION_BUTTON = 'button';
const ACTION_ICON = 'icon';
const CHECKBOX_POSITION_LEFT = 'left';
const CHECKBOX_POSITION_RIGHT = 'right';
const AGGREGATE_COUNT = 'count';
const AGGREGATE_SUM = 'sum';
const AGGREGATE_AVG = 'avg';
const AGGREGATE_MIN = 'min';
const AGGREGATE_MAX = 'max';
const SORT_ASC = 'asc';
const SORT_DESC = 'desc';
const SORT_BY = 'by';
const CALLBACK_SELECTED = 'selected';

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
    caption: String,
    col: {
      type: Number,
      default: 0
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
      type: [Array, Boolean],
      default: false
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
      currentData: this.data,
      currentThead: this.thead
    };
  },
  computed: {
    theadData() {
      return this.getData({
        type: T_HEAD,
        table: this.currentThead,
        data: this.currentData,
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
      return this.tfoot ? this.getData({
        type: T_FOOT,
        table: this.tfoot,
        data: this.currentData,
        selectable: this.selectable,
      }) : [];
    }
  },
  methods: {
    getCell(type, data) {
      let cell = {};

      if (isString(data)) {
        cell[CELL_VALUE] = data;
      } else if (isObject(data)) {
        if (data[CELL_COLSPAN]) {
          cell[CELL_COLSPAN] = data[CELL_COLSPAN];
        }
        if (data[CELL_ROWSPAN]) {
          cell[CELL_ROWSPAN] = data[CELL_ROWSPAN];
        }

        let className = [];
        if (data[CELL_CLASS]) {
          className.push(data[CELL_CLASS]);
        }
        if (data.noNum) {
          className.push('mdl-data-table__cell--non-numeric');
        }
        if (className.length) {
          cell[CELL_CLASS] = className.join(' ');
        }

        switch (type) {
          case T_HEAD:
            cell[CELL_INDEX] = data[CELL_INDEX];
            cell[CELL_VALUE] = data[CELL_VALUE];
            if (data[CELL_SORT] && data[SORT_BY]) {
              cell[CELL_SORT] = data[CELL_SORT];
              cell[SORT_BY] = data[SORT_BY];
            }
            break;
          case T_FOOT:
            let result = 0;
            switch (data.name.toLowerCase()) {
              case AGGREGATE_COUNT:
                result = data[CELL_DATA].length;
                break;
              case AGGREGATE_SUM:
                data[CELL_DATA].forEach(value => {
                  result += value;
                });
                break;
              case AGGREGATE_AVG:
                data[CELL_DATA].forEach(value => {
                  result += value;
                });
                result /= data[CELL_DATA].length;
                break;
              case AGGREGATE_MIN:
                data[CELL_DATA].forEach(value => {
                  if (value < result) {
                    result = value;
                  } else if (result === 0) {
                    result = value;
                  }
                });
                break;
              case AGGREGATE_MAX:
                 data[CELL_DATA].forEach(value => {
                  if (value > result) {
                    result = value;
                  }
                });
                break;
              default:
                result = '';
                break;
            }
            // TODO: format
            cell[CELL_VALUE] = result;
            break;
          default:
            cell[CELL_VALUE] = data[CELL_VALUE];
            break;
        }
      } else {
        console.warn('Invalid cell data!');
        cell[CELL_VALUE] = '';
      }

      return cell;
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

      if (this.selectable === CHECKBOX_POSITION_LEFT) {
        result.unshift(cell);
      } else if (this.selectable === CHECKBOX_POSITION_RIGHT) {
        result.push(cell);
      }

      return result;
    },
    getAction(result, data) {
      let actions = [];
      for (let action of this.action) {
        let cellData = {
          name: action.name,
          value: action[CELL_VALUE],
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
        actions.push(cellData);
      }

      let cell = {
        isAction: true,
        actions: actions.length ? actions : []
      };
      result.push(cell);

      return result;
    },
    getData(object) {
      let result = [];
      let {type, table} = object;

      if (Array.isArray(table)) {
        let cell;
        let isMultiLine = false;

        switch (type) {
          case T_HEAD:
            result[0] = []; // single line init
            for (let index in table) {
              let row = table[index];
              if (Array.isArray(row)) { // multi line
                isMultiLine = true;
                result[index] = [];
                for (let key in row) {
                  let value = row[key];
                  cell = {};
                  if (isObject(value)) {
                    cell = value;
                  } else {
                    cell[CELL_VALUE] = value;
                  }
                  cell[CELL_INDEX] = `${index},${key}`; // array index separation
                  result[index].push(this.getCell(type, cell));
                }
              } else { // single line
                cell = {};
                if (isObject(row)) {
                  cell = row;
                } else {
                  cell[CELL_VALUE] = row;
                }
                cell[CELL_INDEX] = index;
                result[0].push(this.getCell(type, cell));
              }
            }
            // add checkbox
            if (object.selectable) {
              result[0] = this.getCheckbox(type, result[0], table.length);
            }
            break;
          case T_BODY:
            for (let key in object.data) {
              let value = object.data[key];
              result[key] = [];
              for (let field of table) {
                cell = {
                  value: value[field] // set value
                };
                result[key].push(this.getCell(type, cell));
              }
              // add action
              result[key] = this.getAction(result[key], value);
              // add checkbox
              result[key] = this.getCheckbox(type, result[key], value[this.keyField]);
            }
            break;
          case T_FOOT:
            for (let item of table) {
              cell = item || '';
              let field = item ? item[CELL_VALUE] : '';
              if (field) {
                cell[CELL_DATA] = item ? this.currentData.map(value => value[field]) : '';
              }
              result.push(this.getCell(type, cell));
            }
            // add empty action & checkbox
            result.push({});
            result = this.getCheckbox(type, result);
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
      let sortBy = data.by;
      let currentSort;

      if (data[CELL_SORT] === SORT_ASC) {
        currentSort = SORT_DESC;
        this.currentData.sort((a, b) => {
          return b[sortBy] - a[sortBy];
        });
      } else if (data[CELL_SORT] === SORT_DESC) {
        currentSort = SORT_ASC;
        this.currentData.sort((a, b) => {
          return a[sortBy] - b[sortBy];
        });
      }

      if (data[CELL_INDEX].indexOf(',') === -1) {
        this.currentThead[data[CELL_INDEX]][CELL_SORT] = currentSort;
      } else {
        let index = data[CELL_INDEX].split(',');
        this.currentThead[index[0]][index[1]][CELL_SORT] = currentSort;
      }
    }
  },
  watch: {
    checkList(val) {
      this.currentCheckList = val;
    },
    currentCheckList(val) {
      this.checkAll();
      this.$emit(CALLBACK_SELECTED, val);
    },
    isCheckAll(val) {
      let lastCheckList = (this.currentCheckList.length === this.currentData.length) ? [] : this.currentCheckList;
      this.currentCheckList = val ? this.currentData.map(value => value[this.keyField]) : lastCheckList;
    },
    thead(val) {
      this.currentThead = val;
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
