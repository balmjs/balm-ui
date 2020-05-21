<template>
  <div class="toc-affix" v-shadow.transition="[2, 8]">
    <ui-tabs v-model="active">
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
      offset: 128
    };
  },
  // mounted() {
  //   let lastScrollTop =
  //     document.documentElement.scrollTop || document.body.scrollTop;

  //   this.$nextTick(() => {
  //     const anchorElements = ['usage', 'demo', 'apis', 'sass'].map((key) => {
  //       const el = document.getElementById(`ui-${key}`);
  //       return el ? this.getElementTop(el) : 0;
  //     });
  //     const anchorElementsCount = anchorElements.filter((x) => x).length;

  //     this.offset = document.body.clientHeight / anchorElementsCount;
  //     if (this.offset < 128) {
  //       this.offset = 128;
  //     }

  //     console.log(anchorElements);

  //     window.addEventListener('balmScroll', () => {
  //       const scrollTop =
  //         document.documentElement.scrollTop || document.body.scrollTop;

  //       if (scrollTop > lastScrollTop) {
  //         // down ↓
  //         for (let i = 0; i < anchorElementsCount; i++) {
  //           if (scrollTop + this.offset < anchorElements[i]) {
  //             break;
  //           }
  //           this.active = i;
  //         }
  //       } else if (scrollTop < lastScrollTop) {
  //         // up ↑
  //         for (let i = anchorElementsCount - 1; i >= 0; i--) {
  //           if (scrollTop + this.offset > anchorElements[i]) {
  //             break;
  //           }
  //           this.active = i;
  //         }
  //       }

  //       lastScrollTop = scrollTop;
  //     });
  //   });
  // },
  methods: {
    getElementTop(element) {
      let actualTop = element.offsetTop;
      let current = element.offsetParent;

      while (current !== null) {
        actualTop += current.offsetTop;
        current = current.offsetParent;
      }

      return actualTop;
    }
  }
};
</script>
