<template>
  <table class="mdl-data-table mdl-js-data-table">
    <slot>
      <caption v-if="caption">{{ caption }}</caption>
      <colgroup v-if="currentCol">
        <col v-for="(value, key) in currentCol" :key="key" :class="`col-${value}`">
      </colgroup>
    </slot>
    <!-- Table Head -->
    <thead>
      <slot name="thead" :className="{asc: CLASSNAME_ASC, desc: CLASSNAME_DESC}">
        <tr v-for="(rowValue, rowKey) in theadData" :key="rowKey">
          <template v-for="(cell, index) in rowValue">
            <template v-if="cell.isCheckbox">
              <th
              :key="index"
              :colspan="cell.col"
              :rowspan="cell.row"
              :class="cell.class">
                <ui-checkbox
                  name="checkAll"
                  :value="cell.value"
                  :model="isCheckAll"
                  @change="onCheckAll"></ui-checkbox>
              </th>
            </template>
            <template v-else>
              <th
              :key="index"
              :colspan="cell.col"
              :rowspan="cell.row"
              :class="[
                cell.class,
                getSortClass(cell.sort)
              ]"
              @click="sort(cell)">
                <span>{{ cell.value }}</span>
              </th>
            </template>
          </template>
        </tr>
      </slot>
    </thead>
    <!-- Table Body -->
    <tbody>
      <slot name="tbody" :data="currentData">
        <!-- Has Data -->
        <template v-if="tbodyData.length">
          <tr v-for="(rowValue, rowKey) in tbodyData"
            :key="rowKey"
            :class="{
              'selected': isSelected(rowValue, rowKey),
              'detail-view': isDetailView(rowKey)
            }">
            <td v-for="(cell, index) in rowValue"
              :key="index"
              :colspan="cell.col"
              :rowspan="cell.row"
              :class="cell.class">
              <!-- Data View -->
              <div v-if="isCellData(rowKey, cell) && !cell.raw">
                <template v-if="cell.url">
                  <a :href="cell.url">{{ cell.value }}</a>
                </template>
                <template v-else>
                  {{ cell.value }}
                </template>
              </div>
              <div v-if="isCellData(rowKey, cell) && cell.raw" v-html="cell.value"></div>
              <!-- Detail View Control -->
              <i v-if="cell.isPlus"
                class="material-icons"
                @click="viewDetail(rowKey, cell)">{{ cell.show ? 'remove' : 'add' }}</i>
              <!-- Checkbox -->
              <ui-checkbox v-if="cell.isCheckbox"
                name="checkOne[]"
                :value="selectKeyField ? cell.value : getSelectIndex(rowKey)"
                :model="currentCheckboxList"
                @change="onCheckOne"></ui-checkbox>
              <!-- Actions -->
              <div v-if="cell.isAction">
                <ui-button v-for="(actionValue, actionKey) in cell.actions"
                  :key="actionKey"
                  :icon="actionValue.icon || actionValue.isIcon"
                  :link="actionValue.isLink"
                  @click.native="doAction(actionValue.name, actionValue.data)">
                  <span v-if="!actionValue.icon" v-html="actionValue.value"></span>
                </ui-button>
              </div>
              <!-- Detail View -->
              <div v-if="isDetailView(rowKey)" class="mdl-data-table__detail-view">
                <slot name="detail"></slot>
              </div>
            </td>
          </tr>
        </template>
        <!-- No Data -->
        <template v-else>
          <tr>
            <td class="mdl-no-data-table" :colspan="currentCol">{{ noData }}</td>
          </tr>
        </template>
      </slot>
    </tbody>
    <!-- Table Foot -->
    <tfoot v-if="tfootData.length">
      <slot name="tfoot" :data="tfootData">
        <tr>
          <td v-for="(cell, index) in tfootData"
            :key="index"
            :colspan="cell.col"
            :rowspan="cell.row"
            :class="cell.class">
            <template v-if="cell.raw">
              <div v-html="cell.value"></div>
            </template>
            <template v-else>
              <div>{{ cell.value }}</div>
            </template>
          </td>
        </tr>
      </slot>
    </tfoot>
  </table>
</template>

<script>
import '../../material-design-lite/data-table/data-table';
import {isString, isObject, isArray, isFunction} from '../utils/helper';
import UiButton from '../common/button';
import UiCheckbox from '../form/checkbox';

const DEFAULTS = {
  detailViewIndex: -1
};
const T_HEAD = 'thead';
const T_BODY = 'tbody';
const T_FOOT = 'tfoot';
const CELL_CLASS = 'class';
const CELL_COLSPAN = 'col';
const CELL_DATA = 'data';
const CELL_DETAIL_VIEW = 'detailView';
const CELL_FIELD = 'field';
const CELL_FUNCTION = 'fn';
const CELL_ICON = 'icon';
const CELL_INDEX = 'index';
const CELL_RAW = 'raw';
const CELL_ROWSPAN = 'row';
const CELL_SORT = 'sort';
const CELL_VALUE = 'value';
const CELL_URL = 'url';
const CELL_ACTION = 'actions';
const ACTION_BUTTON = 'button';
const ACTION_ICON = 'icon';
const ACTION_LINK = 'link';
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
const CLASSNAME_NON_NUMERIC = 'mdl-data-table__cell--non-numeric';
const CLASSNAME_TEXT_LEFT = 'mdl-data-table__cell--text-left';
const CLASSNAME_TEXT_CENTER = 'mdl-data-table__cell--text-center';
const CLASSNAME_TEXT_RIGHT = 'mdl-data-table__cell--text-right';
const CLASSNAME_ASC = 'mdl-data-table__header--sorted-ascending';
const CLASSNAME_DESC = 'mdl-data-table__header--sorted-descending';
const EVENT_SELECTED = 'selected';
const EVENT_VIEW_DETAIL = 'view-detail';

/**
 * Supoorted: thead(2 rows) + tbody(N rows) + tfoot(1 row)
 */
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
    caption: String,
    thead: {
      type: Array,
      default() {
        return [];
      }
    },
    tbody: {
      type: Array,
      default() {
        return [];
      }
    },
    tfoot: {
      type: [Array, Boolean],
      default: false
    },
    action: {
      type: [Array, Object],
      default() {
        return [];
      }
    },
    selectable: {
      type: [String, Boolean],
      default: false
    },
    selectKeyField: {
      type: Boolean,
      default: false
    },
    keyField: {
      type: String,
      default: 'id'
    },
    checkboxList: {
      type: Array,
      default() {
        return [];
      }
    },
    noData: {
      type: String,
      default: 'No Data'
    },
    hasDetailView: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isCheckAll: false,
      currentCheckboxList: this.checkboxList,
      currentData: this.data,
      currentThead: this.thead,
      currentDetailViewIndex: DEFAULTS.detailViewIndex,
      CLASSNAME_ASC,
      CLASSNAME_DESC
    };
  },
  computed: {
    currentActions() {
      let actions = this.action;
      return isObject(actions) ? actions[CELL_VALUE] : actions;
    },
    currentCol() {
      let result = this.tbody.length;

      if (this.currentActions.length) {
        result += 1;
      }

      if (this.selectable) {
        result += 1;
      }

      if (this.hasDetailView) {
        result += 1;
      }

      return result;
    },
    theadData() {
      return this.getData({
        type: T_HEAD,
        data: this.currentThead
      });
    },
    tbodyData() {
      return this.getData({
        type: T_BODY,
        data: this.tbody
      });
    },
    tfootData() {
      return this.tfoot && this.currentData.length ? this.getData({
        type: T_FOOT,
        data: this.tfoot
      }) : [];
    },
    currentDataCount() {
      return (this.currentDetailViewIndex === DEFAULTS.detailViewIndex)
        ? this.currentData.length
        : this.currentData.length -1;
    }
  },
  methods: {
    getSortClass(sort) {
      let className = '';
      if (sort === SORT_ASC) {
        className = CLASSNAME_ASC;
      } else if (sort === SORT_DESC) {
        className = CLASSNAME_DESC;
      }
      return className;
    },
    getCell(type, data, index = -1) {
      let cell = {};
      let fn;

      if (isString(data)) {
        cell[CELL_VALUE] = data;
      } else if (isObject(data)) {
        // colspan attribute
        if (data[CELL_COLSPAN]) {
          cell[CELL_COLSPAN] = data[CELL_COLSPAN];
        }
        // rowspan attribute
        if (data[CELL_ROWSPAN]) {
          cell[CELL_ROWSPAN] = data[CELL_ROWSPAN];
        }
        // class attribute
        let className = [];
        // custom class
        let _className = data[CELL_CLASS];
        if (_className) {
          if (isFunction(_className)) {
            _className = _className(this.currentData[index], index);
          }
          className.push(_className);
        }
        // text-align
        if (data.noNum) {
          className.push(CLASSNAME_NON_NUMERIC);
        }
        if (data.align) {
          switch (data.align.toLowerCase()) {
            case 'left':
              className.push(CLASSNAME_TEXT_LEFT);
              break;
            case 'center':
              className.push(CLASSNAME_TEXT_CENTER);
              break;
            case 'right':
              className.push(CLASSNAME_TEXT_RIGHT);
              break;
          }
        }
        // text-align end
        if (className.length) {
          cell[CELL_CLASS] = className.join(' ');
        }

        switch (type) {
          case T_HEAD:
            // index: value
            cell[CELL_INDEX] = data[CELL_INDEX];
            cell[CELL_VALUE] = data[CELL_VALUE];
            // sort by
            if (data[CELL_SORT] && data[SORT_BY]) {
              cell[CELL_SORT] = data[CELL_SORT];
              cell[SORT_BY] = data[SORT_BY];
            }
            break;
          case T_FOOT:
            let result = 0;
            if (data[CELL_DATA].length) {
              switch (data.name.toLowerCase()) {
                case AGGREGATE_COUNT:
                  result = data[CELL_DATA].length;
                  if (this.currentDetailIndex > DEFAULTS.detailViewIndex) {
                    result += 1;
                  }
                  break;
                case AGGREGATE_SUM:
                  data[CELL_DATA].forEach(value => {
                    if (value) {
                      result += value;
                    }
                  });
                  break;
                case AGGREGATE_AVG:
                  data[CELL_DATA].forEach(value => {
                    if (value) {
                      result += value;
                    }
                  });
                  result /= data[CELL_DATA].length;
                  break;
                case AGGREGATE_MIN:
                  data[CELL_DATA].forEach(value => {
                    if (value) {
                      if (value < result) {
                        result = value;
                      } else if (result === 0) {
                        result = value;
                      }
                    }
                  });
                  break;
                case AGGREGATE_MAX:
                   data[CELL_DATA].forEach(value => {
                    if (value && value > result) {
                      result = value;
                    }
                  });
                  break;
                default:
                  result = '';
                  break;
              }
            }
            fn = data[CELL_FUNCTION];
            cell[CELL_VALUE] = fn ? fn(result) : Math.round(result * 100) / 100;
            // dangerously set innerHTML
            cell[CELL_RAW] = data[CELL_RAW];
            break;
          default: // T_BODY
            fn = data[CELL_FUNCTION];
            let _url = data[CELL_URL];
            cell[CELL_VALUE] = fn ? fn(this.currentData[index], index) : data[CELL_VALUE];
            cell[CELL_URL] = isFunction(_url) ? _url(this.currentData[index], index) : false;
            // dangerously set innerHTML
            cell[CELL_RAW] = data[CELL_RAW];
            break;
        }
      } else {
        console.warn('Invalid cell data!');
        cell[CELL_VALUE] = '';
      }

      return cell;
    },
    getCheckbox(type, result, value = 1) {
      if (this.selectable) {
        let cell = {};
        let isCheckbox = !!this.currentData.length;

        switch (type) {
          case T_HEAD:
            cell = {
              isCheckbox
            };
            if (value > 1) {
              cell.row = value; // row number
            }
            break;
          case T_BODY:
            cell = {
              isCheckbox,
              value // data[this.keyField]
            };
            break;
        }

        if (this.selectable === CHECKBOX_POSITION_RIGHT) {
          result.push(cell);
        } else if (this.selectable === CHECKBOX_POSITION_LEFT || this.selectable) {
          result.unshift(cell);
        }
      }

      return result;
    },
    getAction(result, data) {
      let cell = {
        isAction: true
      };

      let actions = this.action;
      if (isObject(actions)) {
        let className = [];

        let _className = actions[CELL_CLASS];
        if (_className) {
          className.push(_className);
        }
        // text-align
        if (actions.align) {
          switch (actions.align.toLowerCase()) {
            case 'left':
              className.push(CLASSNAME_TEXT_LEFT);
              break;
            case 'center':
              className.push(CLASSNAME_TEXT_CENTER);
              break;
            case 'right':
              className.push(CLASSNAME_TEXT_RIGHT);
              break;
          }
        }
        // text-align end
        if (className.length) {
          cell[CELL_CLASS] = className.join(' ');
        }
      }

      let currentActions = [];
      if (this.currentActions.length) {
        for (let action of this.currentActions) {
          let cellData = {
            name: action.name,
            value: action[CELL_VALUE] || action.name,
            data: data
          };
          switch (action.type.toLowerCase()) {
            case ACTION_LINK:
              cellData.isLink = true;
              break;
            case ACTION_ICON:
              cellData.isIcon = true;
              cellData[CELL_ICON] = action[CELL_ICON];
              break;
          }
          currentActions.push(cellData);
        }

        cell[CELL_ACTION] = currentActions.length ? currentActions : [];

        result.push(cell);
      }

      return result;
    },
    getDetailView(type, result, key = DEFAULTS.detailViewIndex, value = '') {
      if (this.hasDetailView) {
        let cell = {};

        switch (type) {
          case T_HEAD:
            if (key > 0) {
              cell = {
                row: key // row number
              };
            }
            break;
          case T_BODY:
            cell = {
              isPlus: true,
              show: +key === this.currentDetailViewIndex
            };
            if (value) {
              cell[CELL_DATA] = value;
            }
            break;
        }

        result.unshift(cell);
      }

      return result;
    },
    getData(object) {
      let result = [];
      let {type, data} = object;

      if (isArray(data)) {
        let cell;

        switch (type) {
          case T_HEAD:
            result[0] = []; // single line init
            for (let index in data) {
              let row = data[index];
              if (isArray(row)) { // multi line
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
                let value = row;
                cell = {};
                if (isObject(value)) {
                  cell = value;
                } else {
                  cell[CELL_VALUE] = value;
                }
                cell[CELL_INDEX] = index;
                result[0].push(this.getCell(type, cell));
              }
            }
            // add checkbox
            let rowspan = isArray(data[0]) ? data.length : 1;
            result[0] = this.getCheckbox(type, result[0], rowspan);
            // add plus
            result[0] = this.getDetailView(type, result[0], data.length);
            break;
          case T_BODY:
            for (let key in this.currentData) {
              let value = this.currentData[key];
              result[key] = [];
              if (value[CELL_DETAIL_VIEW]) {
                result[key].push(this.getCell(type, {
                  col: this.currentCol
                }));
              } else {
                // fill for cell
                for (let item of data) {
                  cell = {};
                  if (isObject(item)) {
                    cell = item;
                    cell[CELL_VALUE] = value[item[CELL_FIELD]]; // use `field` !important
                  } else {
                    cell[CELL_VALUE] = value[item];
                  }
                  result[key].push(this.getCell(type, cell, key));
                }
                // add action
                result[key] = this.getAction(result[key], value);
                // add checkbox
                result[key] = this.getCheckbox(type, result[key], value[this.keyField]);
                // add plus
                result[key] = this.getDetailView(type, result[key], key, value);
              }
            }
            break;
          case T_FOOT:
            for (let item of data) {
              if (item) {
                cell = item;
                let field = item && item[CELL_FIELD] ? item[CELL_FIELD] : false;
                if (field) {
                  cell[CELL_DATA] = item ? this.currentData.map(value => value[field]) : '';
                }
                result.push(this.getCell(type, cell));
              } else {
                result.push({});
              }
            }
            // add empty action & checkbox & plus
            if (this.currentActions.length) {
              result.push({});
            }
            result = this.getCheckbox(type, result);
            result = this.getDetailView(type, result);
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
      this.currentCheckboxList = data;
    },
    onCheckAll(checked) {
      this.isCheckAll = checked;
    },
    checkAll() {
      let notEmpty = this.currentDataCount;
      let beEqual = this.currentCheckboxList.length === this.currentDataCount;
      let ids = this.currentData.filter(value => !value[CELL_DETAIL_VIEW]).map((value, index) => this.selectKeyField ? value[this.keyField] : index);
      let exists = this.currentCheckboxList.every(id => ids.indexOf(id) > -1);

      this.isCheckAll = notEmpty && beEqual && exists;
    },
    isSelected(rowData, index) {
      let cell = rowData.find(cell => cell.isCheckbox);

      let result;
      if (this.selectKeyField) {
        result = cell
          ? this.currentCheckboxList.indexOf(cell[CELL_VALUE]) > -1
          : false;
      } else {
        if (this.currentDetailViewIndex === DEFAULTS.detailViewIndex) {
          result = this.currentCheckboxList.indexOf(index) > -1;
        } else {
          let _index = (index > this.currentDetailViewIndex)
            ? index - 1
            : index;
          result = this.currentCheckboxList.indexOf(_index) > -1;
        }
      }

      return cell ? result : false;
    },
    resetData(index) {
      this.currentData.splice(index + 1, 1);
      this.currentDetailViewIndex = DEFAULTS.detailViewIndex;
    },
    sort(data) {
      if (this.currentDetailViewIndex !== DEFAULTS.detailViewIndex) {
        let currentIndex = this.currentData.findIndex((value, index) => index === this.currentDetailViewIndex);
        this.resetData(currentIndex);
      }

      if (data[CELL_SORT]) {
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

      if (!this.selectKeyField) {
        this.currentCheckboxList = [];
        this.$emit(EVENT_SELECTED, []);
      }
    },
    viewDetail(currentIndex, cell) {
      if (cell.show) {
        this.resetData(currentIndex);
      } else {
        let result = [];

        if (this.currentDetailViewIndex === DEFAULTS.detailViewIndex) {
          this.currentData.forEach((value, index) => {
            if (index === currentIndex) {
              result.push(value);
              result.push({
                detailView: true
              });
            } else {
              result.push(value);
            }
          });
        } else {
          this.currentData.splice(this.currentDetailViewIndex + 1, 1);

          if (currentIndex > this.currentDetailViewIndex) {
            currentIndex = currentIndex - 1;
          }

          this.currentData.forEach((value, index) => {
            if (index === currentIndex) {
              result.push(value);
              result.push({
                detailView: true
              });
            } else {
              result.push(value);
            }
          });
        }

        this.currentData = result;
        this.currentDetailViewIndex = currentIndex;

        this.$emit(EVENT_VIEW_DETAIL, cell[CELL_DATA]);
      }
    },
    isDetailView(index) {
      let hasDetailViewRow = this.currentDetailViewIndex + 1 > 0;
      let isDetailViewRow = index === this.currentDetailViewIndex + 1;
      return hasDetailViewRow && isDetailViewRow;
    },
    isCellData(currentIndex, cell) {
      return !(cell.isPlus || cell.isCheckbox || cell.isAction || this.isDetailView(currentIndex));
    },
    getSelectIndex(currentIndex) {
      let result = currentIndex;

      if (this.currentDetailViewIndex > DEFAULTS.detailViewIndex & currentIndex > this.currentDetailViewIndex) {
        result -= 1;
      }

      return result;
    }
  },
  watch: {
    data(val) {
      this.currentData = val;
    },
    checkboxList(val) {
      this.currentCheckboxList = val;
    },
    currentCheckboxList(val) {
      this.checkAll();
      this.$emit(EVENT_SELECTED, val);
    },
    isCheckAll(val) {
      let beEqual = this.currentCheckboxList.length === this.currentDataCount;
      let lastCheckList = beEqual
        ? []
        : this.currentCheckboxList;

      this.currentCheckboxList = val
        ? this.currentData.filter(value => !value[CELL_DETAIL_VIEW]).map((value, index) => this.selectKeyField ? value[this.keyField] : index)
        : lastCheckList;
    },
    thead(val) {
      this.currentThead = val;
    }
  },
  created() {
    this.checkAll();
  },
  mounted() {
    this.$ui.upgradeElement(this.$el, 'MaterialDataTable');
  }
};
</script>
