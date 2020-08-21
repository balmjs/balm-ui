<template>
  <div class="mdc-data-table__pagination">
    <div class="mdc-data-table__pagination-trailing">
      <!-- Page size -->
      <div v-if="!mini && showPageSize" class="mdc-data-table__pagination-rows-per-page">
        <div class="mdc-data-table__pagination-rows-per-page-label">Rows per page</div>
        <div class="mdc-data-table__pagination-rows-per-page-select">
          <slot name="page-size"></slot>
        </div>
      </div>
      <div class="mdc-data-table__pagination-navigation">
        <!-- Total -->
        <div v-if="!mini && showTotal" class="mdc-data-table__pagination-total">
          <slot
            name="total"
            :minRow="currentMinRow"
            :maxRow="currentMaxRow"
          >{{ currentMinRow }}‑{{ currentMaxRow }} of {{ total }}</slot>
        </div>
        <!-- Navigation buttons -->
        <button
          class="mdc-icon-button material-icons mdc-data-table__pagination-button"
          data-first-page="true"
          :disabled="currentPage === 1"
          @click="handleClick(1)"
        >
          <div class="mdc-button__icon">first_page</div>
        </button>
        <button
          class="mdc-icon-button material-icons mdc-data-table__pagination-button"
          data-prev-page="true"
          :disabled="currentPage === 1"
          @click="handleClick(currentPage - 1)"
        >
          <div class="mdc-button__icon">chevron_left</div>
        </button>
        <ul class="mdc-data-table__pagination-page">
          <template v-for="pageNumber in pageCount">
            <li
              v-if="isShow(pageNumber)"
              :key="`page-${pageNumber}`"
              :class="getPageClassName(pageNumber)"
            >
              <a v-if="showPage(pageNumber)" @click="handleClick(pageNumber)">{{ pageNumber }}</a>
              <span v-else class="ellipsis">...</span>
            </li>
          </template>
        </ul>
        <button
          class="mdc-icon-button material-icons mdc-data-table__pagination-button"
          data-next-page="true"
          :disabled="currentPage === pageCount"
          @click="handleClick(currentPage + 1)"
        >
          <div class="mdc-button__icon">chevron_right</div>
        </button>
        <button
          class="mdc-icon-button material-icons mdc-data-table__pagination-button"
          data-last-page="true"
          :disabled="currentPage === pageCount"
          @click="handleClick(pageCount)"
        >
          <div class="mdc-button__icon">last_page</div>
        </button>
      </div>
      <!-- Jumper -->
      <div v-if="!mini && showJumper" class="mdc-data-table__pagination-jumper">
        <span>{{ jumperBeforeText }}</span>
        <input
          v-model="pager"
          type="number"
          min="1"
          :max="pageCount"
          @keydown.prevent.enter="handleClick($event.target.value)"
        />
        <span>{{ jumperAfterText }}</span>
        <button
          v-if="jumperButtonText"
          type="button"
          class="mdc-button"
          @click="handleClick(pager)"
          v-text="jumperButtonText"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define pagination constants
const UI_PAGINATION = {
  POSITIONS: ['left', 'right'],
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiPagination',
  model: {
    prop: 'page',
    event: UI_PAGINATION.EVENT.CHANGE
  },
  props: {
    // States
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    // UI attributes
    pageSpan: {
      type: Number,
      default: 3
    },
    prev: {
      type: String,
      default: ''
    },
    next: {
      type: String,
      default: ''
    },
    showPageSize: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showJumper: {
      type: Boolean,
      default: false
    },
    jumperBeforeText: {
      type: String,
      default: 'Goto'
    },
    jumperAfterText: {
      type: String,
      default: ''
    },
    jumperButtonText: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: ''
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL,
      UI_PAGINATION,
      currentPage: this.page,
      pager: this.page
    };
  },
  computed: {
    className() {
      let result = ['mdc-pagination'];

      if (this.mini) {
        result.push('mdc-pagination--mini');
      } else if (UI_PAGINATION.POSITIONS.includes(this.position)) {
        result.push(`mdc-pagination--${this.position}`);
      }

      return result;
    },
    pageCount() {
      return Math.ceil(this.total / this.pageSize);
    },
    currentMinRow() {
      return this.pageSize * (this.page - 1) + 1;
    },
    currentMaxRow() {
      const max = this.pageSize * this.page;
      return max > this.total ? this.total : max;
    },
    materialIcon() {
      return !(this.prev && this.next);
    },
    currentPrev() {
      return this.prev || 'keyboard_arrow_left';
    },
    currentNext() {
      return this.next || 'keyboard_arrow_right';
    }
  },
  watch: {
    page(val) {
      this.currentPage = val;
    }
  },
  methods: {
    isShow(page) {
      let show = false;
      switch (true) {
        case page === 1:
        case page === this.pageCount:
        case this.currentPage >= page &&
          page >= this.currentPage - this.pageSpan:
        case this.currentPage <= page &&
          page <= this.currentPage + this.pageSpan:
          show = true;
          break;
      }
      return show;
    },
    showPage(page) {
      let isExisted =
        this.currentPage === page - this.pageSpan ||
        this.currentPage === page + this.pageSpan;
      let nonFirstOrLast = page !== 1 && page !== this.pageCount;
      return !(isExisted && nonFirstOrLast);
    },
    getPageClassName(page) {
      return [
        this.showPage(page)
          ? 'mdc-data-table__pagination-button'
          : 'mdc-data-table__pagination-ellipsis',
        { 'mdc-data-table__pagination-active': page === this.currentPage }
      ];
    },
    handleClick(page) {
      if (this.currentPage !== page) {
        if (isNaN(page)) {
          this.pager = this.currentPage;
        } else {
          switch (true) {
            case page > this.pageCount:
              page = this.pageCount;
              break;
            case page < 1:
              page = 1;
              break;
          }
          this.pager = page;
          this.$emit(UI_PAGINATION.EVENT.CHANGE, +page);
        }
      }
    }
  }
};
</script>
