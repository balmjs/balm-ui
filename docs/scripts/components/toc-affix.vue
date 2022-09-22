<template>
  <div v-shadow.transition="[2, 8]" class="toc-affix">
    <ui-tabs v-model="active" @update:model-value="onChange">
      <ui-tab v-anchor:href="'#ui-usage'" class="v-anchor">{{
        t('page.usage')
      }}</ui-tab>
      <ui-tab v-anchor:href="'#ui-demo'" class="v-anchor">{{
        t('page.demo')
      }}</ui-tab>
      <ui-tab
        v-for="(item, index) in items"
        :key="index"
        v-anchor:href="item.id"
        class="v-anchor"
      >
        {{ item.name }}
      </ui-tab>
      <ui-tab v-if="!withoutApis" v-anchor:href="'#ui-apis'" class="v-anchor">{{
        t('page.apis')
      }}</ui-tab>
      <ui-tab v-if="!withoutCss" v-anchor:href="'#ui-sass'" class="v-anchor">{{
        t('page.sass')
      }}</ui-tab>
      <slot></slot>
    </ui-tabs>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { $MIN_WIDTH } from '@/config';

const DEBUG = false;
const bodyEl = document.documentElement || document.body;

export default {
  name: 'UiTocAffix',
  props: {
    items: {
      type: Object,
      default() {
        return {};
      }
    },
    withoutApis: {
      type: Boolean,
      default: false
    },
    withoutCss: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const { t } = useI18n();

    return {
      t
    };
  },
  data() {
    return {
      active: 0,
      lastScrollTop: 0,
      lastScrollTopCache: 0 // fix(@chrome): scrollTop bug in canary version
    };
  },
  computed: {
    offset() {
      return window.innerWidth >= $MIN_WIDTH ? 128 : 104;
    }
  },
  mounted() {
    const isIE = window.IE && window.IE <= 11;
    if (!isIE) {
      this.lastScrollTop = this.getScrollTop();

      this.$nextTick(() => {
        const anchorElements = ['usage', 'demo', 'apis', 'sass'].map((key) => {
          const el = document.getElementById(`ui-${key}`);
          return el ? this.getElementTop(el) - this.offset : 0;
        });
        const anchorElementsCount = anchorElements.filter((x) => x).length;
        const halfViewportHeight = document.body.clientHeight * 0.5;

        window.addEventListener('balmScroll', () => {
          const curScrollTop = this.getScrollTop();
          const curScrollTopWithOffset = curScrollTop + halfViewportHeight;

          if (curScrollTop > this.lastScrollTop) {
            // down ↓
            for (let i = this.active + 1; i < anchorElementsCount; i++) {
              DEBUG &&
                console.log(
                  'down',
                  i,
                  curScrollTopWithOffset,
                  anchorElements[i],
                  curScrollTopWithOffset >= anchorElements[i]
                );

              if (curScrollTopWithOffset >= anchorElements[i]) {
                if (this.active !== i) {
                  DEBUG && console.log('gg');
                  this.active = i;
                  this.lastScrollTopCache = curScrollTop;
                }
              } else {
                DEBUG && console.log('skip');
                break;
              }
            }
          } else if (curScrollTop < this.lastScrollTop) {
            // up ↑
            for (let i = this.active; i; i--) {
              DEBUG &&
                console.log(
                  'up',
                  i,
                  curScrollTopWithOffset,
                  anchorElements[i],
                  curScrollTopWithOffset <= anchorElements[i]
                );

              if (curScrollTopWithOffset <= anchorElements[i]) {
                if (this.active) {
                  DEBUG && console.log('gg');
                  this.active -= 1;
                  this.lastScrollTopCache = curScrollTop;
                }
              } else {
                DEBUG && console.log('skip');
                break;
              }
            }
          }

          this.lastScrollTop = curScrollTop;
        });
      });
    }
  },
  methods: {
    getScrollTop() {
      return bodyEl.scrollTop;
    },
    getElementTop(element) {
      let actualTop = element.offsetTop;
      let current = element.offsetParent;

      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }

      return actualTop;
    },
    onChange() {
      if (this.lastScrollTopCache) {
        bodyEl.scrollTop = this.lastScrollTopCache;
        this.lastScrollTopCache = 0;
      } else {
        this.lastScrollTop = this.getScrollTop();
      }
    }
  }
};
</script>
