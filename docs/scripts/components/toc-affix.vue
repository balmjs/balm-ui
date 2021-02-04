<template>
  <div v-shadow.transition="[2, 8]" class="toc-affix">
    <ui-tabs v-model="active" @change="onChange">
      <ui-tab v-anchor:href="'#ui-usage'" class="v-anchor">
        {{ $t('page.usage') }}
      </ui-tab>
      <ui-tab v-anchor:href="'#ui-demo'" class="v-anchor">
        {{ $t('page.demo') }}
      </ui-tab>
      <ui-tab
        v-for="(item, index) in items"
        :key="index"
        v-anchor:href="item.id"
        class="v-anchor"
      >
        {{ item.name }}
      </ui-tab>
      <ui-tab v-if="!withoutApis" v-anchor:href="'#ui-apis'" class="v-anchor">
        {{ $t('page.apis') }}
      </ui-tab>
      <ui-tab v-if="!withoutCss" v-anchor:href="'#ui-sass'" class="v-anchor">
        {{ $t('page.sass') }}
      </ui-tab>
      <slot></slot>
    </ui-tabs>
  </div>
</template>

<script>
import { $MIN_WIDTH } from '@/config';

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
  data() {
    return {
      active: 0,
      lastScrollTop: 0
    };
  },
  computed: {
    offset() {
      return window.innerWidth >= $MIN_WIDTH ? 128 : 104;
    }
  },
  mounted() {
    if (!(window.IE && window.IE < 12)) {
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
              // console.log(
              //   'down',
              //   i,
              //   curScrollTopWithOffset,
              //   anchorElements[i],
              //   curScrollTopWithOffset >= anchorElements[i]
              // );

              if (curScrollTopWithOffset >= anchorElements[i]) {
                if (this.active !== i) {
                  // console.log('gg');
                  this.active = i;
                }
              } else {
                // console.log('skip');
                break;
              }
            }
          } else if (curScrollTop < this.lastScrollTop) {
            // up ↑
            for (let i = this.active; i; i--) {
              // console.log(
              //   'up',
              //   i,
              //   curScrollTopWithOffset,
              //   anchorElements[i],
              //   curScrollTopWithOffset <= anchorElements[i]
              // );

              if (curScrollTopWithOffset <= anchorElements[i]) {
                if (this.active) {
                  // console.log('gg');
                  this.active -= 1;
                }
              } else {
                // console.log('skip');
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
      return document.documentElement.scrollTop || document.body.scrollTop;
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
      this.lastScrollTop = this.getScrollTop();
    }
  }
};
</script>
