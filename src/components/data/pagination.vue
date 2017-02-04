<template>
  <div :class="['mdl-pagination', {'mdl-pagination--mini': mini}]">
    <div v-if="showRecord" class="mdl-pagination--record">
      <slot :recordCount="recordCount" :pageSize="pageSize" :pageCount="pageCount"></slot>
    </div>
    <div class="mdl-pagination--paging">
      <a class="mdl-pagination--paging-previous">
        <span v-html="prev" @click="handleClick(currentPage === 1 ? 1 : currentPage - 1)"></span>
      </a>
      <a
        v-for="page in pageCount"
        v-if="!mini && isShow(page)"
        :class="{active: page === currentPage}">
        <span v-if="showPage(page)" @click="handleClick(page)">{{ page }}</span>
        <span v-else class="ellipsis">...</span>
      </a>
      <a class="mdl-pagination--paging-next">
        <span v-html="next" @click="handleClick(currentPage === pageCount ? pageCount : currentPage + 1)"></span>
      </a>
    </div>
    <div v-if="showJumper" class="mdl-pagination--jumper">
      <span>{{ jumperBefore }}</span>
      <input type="text" v-model="pager" @keyup.enter="handleClick(pager)">
      <span>{{ jumperAfter }}</span>
    </divH>
  </div>
</template>

<script>
const ARROW_LEFT = '&lsaquo;';
const ARROW_RIGHT = '&rsaquo;';
const EVENT_CHANGE = 'change';

export default {
  name: 'ui-pagination',
  props: {
    recordCount: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      required: true
    },
    page: {
      type: Number,
      default: 1
    },
    prev: {
      type: String,
      default: ARROW_LEFT
    },
    next: {
      type: String,
      default: ARROW_RIGHT
    },
    pageSpan: {
      type: Number,
      default: 3
    },
    showRecord: {
      type: Boolean,
      default: false
    },
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
    mini: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentPage: this.page,
      pager: this.page
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.recordCount / this.pageSize);
    },
    pageData() {
      return [];
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
        case (page === 1):
        case (page === this.pageCount):
        case (this.currentPage >= page && page >= this.currentPage - this.pageSpan):
        case (this.currentPage <= page && page <= this.currentPage + this.pageSpan):
          show = true;
          break;
      }
      return show;
    },
    showPage(page) {
      let isExisted = (this.currentPage === page - this.pageSpan || this.currentPage === page + this.pageSpan);
      let noFirstOrLast = (page !== 1 && page !== this.pageCount);
      return !(isExisted && noFirstOrLast);
    },
    handleClick(page) {
      if (!isNaN(page)) {
        switch (true) {
          case (page > this.pageCount):
            page = this.pageCount;
            break;
          case (page < 1):
            page = 1;
            break;
        }
        this.$emit(EVENT_CHANGE, +page);
        this.pager = page;
      } else {
        this.pager = this.currentPage;
      }
    }
  }
};
</script>
