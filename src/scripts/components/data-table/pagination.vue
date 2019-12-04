<template>
  <div v-if="recordCount" :class="className">
    <div v-if="!mini && showRecord" class="mdc-pagination__record">
      <slot :pageCount="pageCount"></slot>
    </div>

    <div class="mdc-pagination__paging">
      <a
        :class="['mdc-pagination__previous', { disabled: currentPage === 1 }]"
        @click="currentPage === 1 ? null : handleClick(currentPage - 1)"
      >
        <i v-if="materialIcon" :class="UI_GLOBAL.mdi">{{ currentPrev }}</i>
        <span v-else>{{ currentPrev }}</span>
      </a>
      <template v-for="(page, index) in pageCount" v-if="!mini && isShow(page)">
        <a
          v-if="showPage(page)"
          :key="index"
          :class="{ active: page === currentPage }"
          @click="handleClick(page)"
        >
          <span>{{ page }}</span>
        </a>
        <span v-else :key="index" class="ellipsis">...</span>
      </template>
      <template v-if="mini && !showRecord">
        <slot :pageCount="pageCount"></slot>
      </template>
      <a
        :class="[
          'mdc-pagination__next',
          { disabled: currentPage === pageCount }
        ]"
        @click="currentPage === pageCount ? null : handleClick(currentPage + 1)"
      >
        <i v-if="materialIcon" :class="UI_GLOBAL.mdi">{{ currentNext }}</i>
        <span v-else>{{ currentNext }}</span>
      </a>

      <div v-if="!mini && showJumper" class="mdc-pagination__jumper">
        <span>{{ jumperBefore }}</span>
        <input
          type="number"
          min="1"
          :max="pageCount"
          v-model="pager"
          @keydown.prevent.enter="handleClick($event.target.value)"
        />
        <span>{{ jumperAfter }}</span>
        <button
          v-if="jumperButton"
          type="button"
          class="mdc-button"
          @click="handleClick(pager)"
        >
          {{ jumperButton }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

// Define constants
const UI_PAGINATION = {
  POSITIONS: ['left', 'right'],
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-pagination',
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
    recordCount: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    // UI attributes
    pageSpan: {
      type: Number,
      default: 3
    },
    prev: String,
    next: String,
    showJumper: {
      type: Boolean,
      default: false
    },
    jumperBefore: {
      type: String,
      default: 'Goto'
    },
    jumperAfter: {
      type: String,
      default: ''
    },
    jumperButton: {
      type: String,
      default: ''
    },
    position: String,
    showRecord: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL,
      currentPage: this.page,
      pager: this.page
    };
  },
  computed: {
    className() {
      let result = ['mdc-pagination'];

      if (this.mini) {
        result.push('mdc-pagination--mini');
      } else {
        if (this.showRecord) {
          result.push(`mdc-pagination--between`);
        } else if (UI_PAGINATION.POSITIONS.includes(this.position)) {
          result.push(`mdc-pagination--${this.position}`);
        }
      }

      return result;
    },
    pageCount() {
      return Math.ceil(this.recordCount / this.pageSize);
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
