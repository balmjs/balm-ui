<template>
  <div :class="className">
    <div class="mdc-data-table__pagination-trailing">
      <!-- Page size -->
      <div v-if="!mini && Array.isArray(pageSize)" class="mdc-data-table__pagination-rows-per-page">
        <div class="mdc-data-table__pagination-rows-per-page-label">{{ pageSizeBeforeText }}</div>
        <div class="mdc-data-table__pagination-rows-per-page-select">
          <select v-model="currentPageSize" @change="handleChange">
            <template v-for="size in pageSize" :key="`pageSize-${size}`">
              <option>{{ size }}</option>
            </template>
          </select>
        </div>
        <span>{{ pageSizeAfterText }}</span>
      </div>
      <div class="mdc-data-table__pagination-navigation">
        <!-- Total -->
        <div
          v-if="showTotal"
          class="mdc-data-table__pagination-total"
        >{{ currentMinRow }}‑{{ currentMaxRow }} of {{ total }}</div>
        <!-- Navigation buttons -->
        <button
          v-if="!hasPageSpan"
          class="mdc-button mdc-data-table__pagination-button mdc-data-table__pagination-first-button"
          data-first-page="true"
          :disabled="currentPage === 1"
          @click="handleClick(1)"
        >
          <div class="mdc-button__ripple"></div>
          <slot name="first">
            <i class="material-icons">first_page</i>
          </slot>
        </button>
        <button
          class="mdc-button mdc-data-table__pagination-button mdc-data-table__pagination-prev-button"
          data-prev-page="true"
          :disabled="currentPage === 1"
          @click="handleClick(currentPage - 1)"
        >
          <div class="mdc-button__ripple"></div>
          <slot name="prev">
            <i class="material-icons">chevron_left</i>
          </slot>
        </button>
        <div v-if="!mini && hasPageSpan" class="mdc-data-table__pagination-page">
          <template v-for="pageNumber in pageCount" :key="`page-${pageNumber}`">
            <template v-if="isShow(pageNumber)">
              <button
                v-if="showPage(pageNumber)"
                :class="{
                  'mdc-button': true,
                  'mdc-data-table__pagination-button': true,
                  'mdc-pagination__button--active': pageNumber === currentPage
                }"
                @click="handleClick(pageNumber)"
              >
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">{{ pageNumber }}</span>
              </button>
              <button
                v-else
                class="mdc-button mdc-data-table__pagination-button mdc-pagination__button--ellipsis"
              >
                <span class="mdc-button__label">...</span>
              </button>
            </template>
          </template>
        </div>
        <button
          class="mdc-button mdc-data-table__pagination-button mdc-data-table__pagination-next-button"
          data-next-page="true"
          :disabled="currentPage === pageCount"
          @click="handleClick(currentPage + 1)"
        >
          <div class="mdc-button__ripple"></div>
          <slot name="next">
            <i class="material-icons">chevron_right</i>
          </slot>
        </button>
        <button
          v-if="!hasPageSpan"
          class="mdc-button mdc-data-table__pagination-button mdc-data-table__pagination-last-button"
          data-last-page="true"
          :disabled="currentPage === pageCount"
          @click="handleClick(pageCount)"
        >
          <div class="mdc-button__ripple"></div>
          <slot name="last">
            <i class="material-icons">last_page</i>
          </slot>
        </button>
      </div>
      <!-- Jumper -->
      <div v-if="!mini && showJumper" class="mdc-data-table__pagination-jumper">
        <div class="mdc-data-table__pagination-jumper-label">{{ jumperBeforeText }}</div>
        <div class="mdc-data-table__pagination-jumper-input">
          <input
            v-model="jumpPage"
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
            @click="handleClick(jumpPage)"
          >
            <div class="mdc-button__ripple"></div>
            <span class="mdc-button__label">{{ jumperButtonText }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Define pagination constants
const UI_PAGINATION = {
  POSITIONS: ['left', 'center', 'right'],
  MIN_PAGE_SPAN: 3,
  EVENT: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiPagination',
  props: {
    // States
    modelValue: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    // UI attributes
    pageSpan: {
      type: [Number, Boolean],
      default: UI_PAGINATION.MIN_PAGE_SPAN
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    pageSize: {
      type: [Number, Array],
      default: 10
    },
    pageSizeText: {
      type: [String, Array],
      default: 'Rows per page'
    },
    showJumper: {
      type: Boolean,
      default: false
    },
    jumperText: {
      type: [String, Array],
      default: 'Goto'
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
  emits: [UI_PAGINATION.EVENT.CHANGE],
  data() {
    return {
      currentPage: this.modelValue,
      currentPageSize: Array.isArray(this.pageSize)
        ? this.pageSize[0]
        : this.pageSize,
      jumpPage: this.modelValue
    };
  },
  computed: {
    className() {
      let result = [
        'mdc-data-table__pagination',
        'mdc-pagination',
        { 'mdc-pagination--mini': this.mini }
      ];

      if (UI_PAGINATION.POSITIONS.includes(this.position)) {
        result.push(`mdc-pagination--${this.position}`);
      }

      return result;
    },
    pageCount() {
      return Math.ceil(this.total / this.currentPageSize);
    },
    currentMinRow() {
      return this.currentPageSize * (this.currentPage - 1) + 1;
    },
    currentMaxRow() {
      const max = this.currentPageSize * this.currentPage;
      return max > this.total ? this.total : max;
    },
    hasPageSpan() {
      return (
        this.mini ||
        (this.pageSpan && this.pageSpan >= UI_PAGINATION.MIN_PAGE_SPAN)
      );
    },
    pageSizeBeforeText() {
      return Array.isArray(this.pageSizeText)
        ? this.pageSizeText[0]
        : this.pageSizeText;
    },
    pageSizeAfterText() {
      return Array.isArray(this.pageSizeText) ? this.pageSizeText[1] : '';
    },
    jumperBeforeText() {
      return Array.isArray(this.jumperText)
        ? this.jumperText[0]
        : this.jumperText;
    },
    jumperAfterText() {
      return Array.isArray(this.jumperText) ? this.jumperText[1] : '';
    }
  },
  watch: {
    modelValue(val) {
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
    getPage(page) {
      switch (true) {
        case page > this.pageCount:
          page = this.pageCount;
          break;
        case page < 1:
          page = 1;
          break;
      }
      return page;
    },
    handleClick(page) {
      if (this.currentPage !== page) {
        if (isNaN(page)) {
          this.jumpPage = this.currentPage;
        } else {
          page = this.getPage(page);
          this.jumpPage = page;
          this.$emit(UI_PAGINATION.EVENT.CHANGE, +page);
        }
      }
    },
    handleChange() {
      let page = this.getPage(this.currentPage);
      if (this.currentPage !== page) {
        this.jumpPage = page;
        this.$emit(UI_PAGINATION.EVENT.CHANGE, +page);
      }
    }
  }
};
</script>
