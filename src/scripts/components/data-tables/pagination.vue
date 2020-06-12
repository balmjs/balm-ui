<template>
  <nav :class="className">
    <slot
      name="before"
      :recordClass="UI_PAGINATION.cssClasses.record"
      :pageCount="pageCount"
      :currentMinRow="currentMinRow"
      :currentMaxRow="currentMaxRow"
    ></slot>
    <ul v-if="total" class="mdc-pagination__pages">
      <li
        :class="[
          'mdc-pagination__previous',
          { 'mdc-pagination__page-item--disabled': currentPage === 1 }
        ]"
        :aria-disabled="currentPage === 1"
        @click="currentPage === 1 ? null : handleClick(currentPage - 1)"
      >
        <slot name="prev">
          <i v-if="materialIcon" :class="UI_GLOBAL.cssClasses.icon" v-text="currentPrev"></i>
          <span v-else>{{ currentPrev }}</span>
        </slot>
      </li>
      <template v-if="mini">
        <slot :pageCount="pageCount" :currentMinRow="currentMinRow" :currentMaxRow="currentMaxRow"></slot>
      </template>
      <template v-else>
        <template v-for="(pageNumber, index) in pageCount">
          <li v-if="isShow(pageNumber)" :key="index" :class="getPageClassName(pageNumber)">
            <a v-if="showPage(pageNumber)" @click="handleClick(pageNumber)">{{ pageNumber }}</a>
            <span v-else class="ellipsis">...</span>
          </li>
        </template>
      </template>
      <li
        :class="[
          'mdc-pagination__next',
          { 'mdc-pagination__page-item--disabled': currentPage === pageCount }
        ]"
        :aria-disabled="currentPage === pageCount"
        @click="currentPage === pageCount ? null : handleClick(currentPage + 1)"
      >
        <slot name="next">
          <i v-if="materialIcon" :class="UI_GLOBAL.cssClasses.icon" v-text="currentNext"></i>
          <span v-else>{{ currentNext }}</span>
        </slot>
      </li>
    </ul>
    <slot
      name="before-jumper"
      :recordClass="UI_PAGINATION.cssClasses.record"
      :pageCount="pageCount"
      :currentMinRow="currentMinRow"
      :currentMaxRow="currentMaxRow"
    ></slot>
    <!-- Jumper -->
    <div v-if="!mini && showJumper" class="mdc-pagination__jumper">
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
    <slot
      name="after-jumper"
      :recordClass="UI_PAGINATION.cssClasses.record"
      :pageCount="pageCount"
      :currentMinRow="currentMinRow"
      :currentMaxRow="currentMaxRow"
    ></slot>
  </nav>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define pagination constants
const UI_PAGINATION = {
  POSITIONS: ['left', 'right'],
  cssClasses: {
    record: 'mdc-pagination__record'
  },
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
          ? 'mdc-pagination__page-item'
          : 'mdc-pagination__page-item-ellipsis',
        { 'mdc-pagination__page-item--active': page === this.currentPage }
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
