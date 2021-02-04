<template>
  <div :class="className">
    <div class="mdc-data-table__pagination-trailing">
      <!-- Page size -->
      <div
        v-if="!mini && Array.isArray(pageSize)"
        class="mdc-data-table__pagination-rows-per-page"
      >
        <div class="mdc-data-table__pagination-rows-per-page-label">
          {{ pageSizeBeforeText }}
        </div>
        <div class="mdc-data-table__pagination-rows-per-page-select">
          <select v-model="currentPageSize" @change="handleChange">
            <template v-for="size in pageSize">
              <option :key="`pageSize-${size}`">{{ size }}</option>
            </template>
          </select>
        </div>
        <span>{{ pageSizeAfterText }}</span>
      </div>
      <div class="mdc-data-table__pagination-navigation">
        <!-- Total -->
        <div v-if="showTotal" class="mdc-data-table__pagination-total">
          <slot :currentMinRow="currentMinRow" :currentMaxRow="currentMaxRow">
            {{ currentMinRow }}‑{{ currentMaxRow }} of {{ total }}
          </slot>
        </div>
        <!-- Navigation buttons -->
        <mdc-button
          v-if="!hasPageSpan"
          class="mdc-data-table__pagination-button mdc-data-table__pagination-first-button"
          no-label
          :disabled="currentPage === 1"
          data-first-page="true"
          @click="handleClick(1)"
        >
          <slot name="first">
            <i class="material-icons">first_page</i>
          </slot>
        </mdc-button>
        <mdc-button
          class="mdc-data-table__pagination-button mdc-data-table__pagination-prev-button"
          no-label
          :disabled="currentPage === 1"
          data-prev-page="true"
          @click="handleClick(currentPage - 1)"
        >
          <slot name="prev">
            <i class="material-icons">chevron_left</i>
          </slot>
        </mdc-button>
        <div
          v-if="!mini && hasPageSpan"
          class="mdc-data-table__pagination-page"
        >
          <template v-for="pageNumber in pageCount">
            <template v-if="isShow(pageNumber)">
              <mdc-button
                v-if="showPage(pageNumber)"
                :key="`page-${pageNumber}`"
                :class="{
                  'mdc-data-table__pagination-button': true,
                  'mdc-pagination__button--active': pageNumber === currentPage
                }"
                @click="handleClick(pageNumber)"
              >
                {{ pageNumber }}
              </mdc-button>
              <button
                v-else
                :key="`page-${pageNumber}`"
                class="mdc-button mdc-data-table__pagination-button mdc-pagination__button--ellipsis"
              >
                <span class="mdc-button__label">...</span>
              </button>
            </template>
          </template>
        </div>
        <mdc-button
          class="mdc-data-table__pagination-button mdc-data-table__pagination-next-button"
          :disabled="currentPage === pageCount"
          no-label
          data-next-page="true"
          @click="handleClick(currentPage + 1)"
        >
          <slot name="next">
            <i class="material-icons">chevron_right</i>
          </slot>
        </mdc-button>
        <mdc-button
          v-if="!hasPageSpan"
          class="mdc-data-table__pagination-button mdc-data-table__pagination-last-button"
          :disabled="currentPage === pageCount"
          no-label
          data-last-page="true"
          @click="handleClick(pageCount)"
        >
          <slot name="last">
            <i class="material-icons">last_page</i>
          </slot>
        </mdc-button>
      </div>
      <!-- Jumper -->
      <div v-if="!mini && showJumper" class="mdc-data-table__pagination-jumper">
        <div class="mdc-data-table__pagination-jumper-label">
          {{ jumperBeforeText }}
        </div>
        <div class="mdc-data-table__pagination-jumper-input">
          <input
            v-model="jumpPage"
            type="number"
            min="1"
            :max="pageCount"
            @keydown.prevent.enter="handleClick($event.target.value)"
          />
          <span>{{ jumperAfterText }}</span>
          <mdc-button
            v-if="jumperButtonText"
            :outlined="jumperButtonOutlined"
            :unelevated="!jumperButtonOutlined"
            @click="handleClick(jumpPage)"
          >
            {{ jumperButtonText }}
          </mdc-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MdcButton from '../buttons/mdc-button';

// Define pagination constants
const UI_PAGINATION = {
  POSITIONS: ['left', 'center', 'right'],
  MIN_PAGE_SPAN: 3,
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'UiPagination',
  components: {
    MdcButton
  },
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
    jumperButtonOutlined: {
      type: Boolean,
      default: false
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
      currentPage: this.page,
      currentPageSize: Array.isArray(this.pageSize)
        ? this.pageSize[0]
        : this.pageSize,
      jumpPage: this.page
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
