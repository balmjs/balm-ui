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
            <template v-for="size in pageSize" :key="`pageSize-${size}`">
              <option>{{ size }}</option>
            </template>
          </select>
        </div>
        <span>{{ pageSizeAfterText }}</span>
      </div>
      <div class="mdc-data-table__pagination-navigation">
        <!-- Total -->
        <div v-if="showTotal" class="mdc-data-table__pagination-total">
          <slot :currentMinRow="currentMinRow" :currentMaxRow="currentMaxRow">
            {{ currentMinRow }}‑{{ currentMaxRow }} {{ ofText }} {{ total }}
          </slot>
        </div>
        <!-- Navigation buttons -->
        <mdc-button
          v-if="!hasPageSpan"
          class="
            mdc-data-table__pagination-button
            mdc-data-table__pagination-first-button
          "
          no-label
          :disabled="currentPage === 1"
          data-first-page="true"
          @click="handleClick(1)"
        >
          <slot name="first">
            <i :class="UI_GLOBAL.cssClasses.icon">first_page</i>
          </slot>
        </mdc-button>
        <mdc-button
          class="
            mdc-data-table__pagination-button
            mdc-data-table__pagination-prev-button
          "
          no-label
          :disabled="currentPage === 1"
          data-prev-page="true"
          @click="handleClick(currentPage - 1)"
        >
          <slot name="prev">
            <i :class="UI_GLOBAL.cssClasses.icon">chevron_left</i>
          </slot>
        </mdc-button>
        <div
          v-if="!mini && hasPageSpan"
          class="mdc-data-table__pagination-page"
        >
          <template v-for="pageNumber in pageCount" :key="`page-${pageNumber}`">
            <template v-if="isShow(pageNumber)">
              <mdc-button
                v-if="showPage(pageNumber)"
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
                class="
                  mdc-button
                  mdc-data-table__pagination-button
                  mdc-pagination__button--ellipsis
                "
              >
                <span class="mdc-button__label">...</span>
              </button>
            </template>
          </template>
        </div>
        <mdc-button
          class="
            mdc-data-table__pagination-button
            mdc-data-table__pagination-next-button
          "
          :disabled="currentPage === pageCount"
          no-label
          data-next-page="true"
          @click="handleClick(currentPage + 1)"
        >
          <slot name="next">
            <i :class="UI_GLOBAL.cssClasses.icon">chevron_right</i>
          </slot>
        </mdc-button>
        <mdc-button
          v-if="!hasPageSpan"
          class="
            mdc-data-table__pagination-button
            mdc-data-table__pagination-last-button
          "
          :disabled="currentPage === pageCount"
          no-label
          data-last-page="true"
          @click="handleClick(pageCount)"
        >
          <slot name="last">
            <i :class="UI_GLOBAL.cssClasses.icon">last_page</i>
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
import UI_GLOBAL from '../../config/constants';

// Define pagination constants
const UI_PAGINATION = {
  POSITIONS: ['left', 'center', 'right'],
  MIN_PAGE_SPAN: 3,
  EVENTS: {
    CHANGE: 'update:modelValue'
  }
};

export default {
  name: 'UiPagination',
  customOptions: {
    UI_GLOBAL,
    UI_PAGINATION
  }
};
</script>

<script setup>
import { reactive, toRefs, computed, watch } from 'vue';
import MdcButton from '../button/mdc-button.vue';

const props = defineProps({
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
  ofText: {
    type: String,
    default: 'of'
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
});

const emit = defineEmits([UI_PAGINATION.EVENTS.CHANGE]);

const state = reactive({
  currentPage: props.modelValue,
  currentPageSize: Array.isArray(props.pageSize)
    ? props.pageSize[0]
    : props.pageSize,
  jumpPage: props.modelValue
});
const { currentPage, currentPageSize, jumpPage } = toRefs(state);

const className = computed(() => {
  let result = [
    'mdc-data-table__pagination',
    'mdc-pagination',
    { 'mdc-pagination--mini': props.mini }
  ];

  if (UI_PAGINATION.POSITIONS.includes(props.position)) {
    result.push(`mdc-pagination--${props.position}`);
  }

  return result;
});
const pageCount = computed(() =>
  Math.ceil(props.total / state.currentPageSize)
);
const currentMinRow = computed(
  () => state.currentPageSize * (state.currentPage - 1) + 1
);
const currentMaxRow = computed(() => {
  const max = state.currentPageSize * state.currentPage;
  return max > props.total ? props.total : max;
});
const hasPageSpan = computed(
  () =>
    props.mini ||
    (props.pageSpan && props.pageSpan >= UI_PAGINATION.MIN_PAGE_SPAN)
);
const pageSizeBeforeText = computed(() =>
  Array.isArray(props.pageSizeText) ? props.pageSizeText[0] : props.pageSizeText
);
const pageSizeAfterText = computed(() =>
  Array.isArray(props.pageSizeText) ? props.pageSizeText[1] : ''
);
const jumperBeforeText = computed(() =>
  Array.isArray(props.jumperText) ? props.jumperText[0] : props.jumperText
);
const jumperAfterText = computed(() =>
  Array.isArray(props.jumperText) ? props.jumperText[1] : ''
);

watch(
  () => props.modelValue,
  (val) => {
    state.currentPage = val;
  }
);

watch(
  () => props.pageSize,
  (val) => {
    if (!Array.isArray(val)) {
      state.currentPageSize = val;
    }
  }
);

function isShow(page) {
  let show = false;
  switch (true) {
    case page === 1:
    case page === pageCount.value:
    case state.currentPage >= page &&
      page >= state.currentPage - props.pageSpan:
    case state.currentPage <= page &&
      page <= state.currentPage + props.pageSpan:
      show = true;
      break;
  }
  return show;
}
function showPage(page) {
  let isExisted =
    state.currentPage === page - props.pageSpan ||
    state.currentPage === page + props.pageSpan;
  let nonFirstOrLast = page !== 1 && page !== pageCount.value;
  return !(isExisted && nonFirstOrLast);
}
function getPage(page) {
  switch (true) {
    case page > pageCount.value:
      page = pageCount.value;
      break;
    case page < 1:
      page = 1;
      break;
  }
  return page;
}
function handleClick(page) {
  if (state.currentPage !== page) {
    if (isNaN(page)) {
      state.jumpPage = state.currentPage;
    } else {
      page = getPage(page);
      state.jumpPage = page;
      emit(UI_PAGINATION.EVENTS.CHANGE, +page);
    }
  }
}
function handleChange() {
  let page = getPage(state.currentPage);
  if (state.currentPage !== page) {
    state.jumpPage = page;
    emit(UI_PAGINATION.EVENTS.CHANGE, +page);
  }
}
</script>
