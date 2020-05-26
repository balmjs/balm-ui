<template>
  <div class="toc-affix" v-shadow.transition="[2, 8]">
    <ui-tabs v-model="active" @change="onChange">
      <ui-tab v-anchor:href="'#ui-usage'" class="v-anchor">Usage</ui-tab>
      <ui-tab v-anchor:href="'#ui-demo'" class="v-anchor">Demo</ui-tab>
      <ui-tab
        v-for="(item, index) in items"
        :key="index"
        v-anchor:href="item.id"
        class="v-anchor"
        >{{ item.name }}</ui-tab
      >
      <ui-tab v-anchor:href="'#ui-apis'" class="v-anchor">APIs</ui-tab>
      <ui-tab v-if="!withoutCss" v-anchor:href="'#ui-sass'" class="v-anchor"
        >Sass</ui-tab
      >
      <slot></slot>
    </ui-tabs>
  </div>
</template>

<script>
export default {
  name: 'ui-toc-affix',
  props: {
    items: {
      type: Object,
      default() {
        return {};
      }
    },
    withoutCss: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      active: 0,
      offset: 128,
      lastScrollTop: 0
    };
  },
  // mounted() {
  //   this.lastScrollTop = this.getScrollTop();

  //   this.$nextTick(() => {
  //     const anchorElements = ['usage', 'demo', 'apis', 'sass'].map((key) => {
  //       const el = document.getElementById(`ui-${key}`);
  //       return el ? this.getElementTop(el) : 0;
  //     });
  //     const anchorElementsCount = anchorElements.filter((x) => x).length;
  //     const viewportHeight = document.body.clientHeight;

  //     // this.offset = document.body.clientHeight / anchorElementsCount;
  //     // if (this.offset < 128) {
  //     //   this.offset = 128;
  //     // }

  //     // console.log(anchorElements);

  //     window.addEventListener('balmScroll', () => {
  //       const curScrollTop = this.getScrollTop();

  //       if (curScrollTop > this.lastScrollTop) {
  //         // down ↓
  //         for (let i = 0; i < anchorElementsCount; i++) {
  //           console.log('down', curScrollTop, anchorElements[i]);
  //           if (curScrollTop + this.offset <= anchorElements[i]) {
  //             break;
  //           }
  //           this.active = i;
  //         }
  //       } else if (curScrollTop < this.lastScrollTop) {
  //         // up ↑
  //         for (let i = anchorElementsCount - 1; i >= 0; i--) {
  //           console.log('up', curScrollTop, anchorElements[i] + viewportHeight);
  //           if (curScrollTop >= anchorElements[i] + viewportHeight) {
  //             break;
  //           }
  //           this.active = i;
  //         }
  //       }

  //       this.lastScrollTop = curScrollTop;
  //     });
  //   });
  // },
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
