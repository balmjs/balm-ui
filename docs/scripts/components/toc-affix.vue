<template>
  <div class="toc-affix" v-shadow.transition="[2, 8]">
    <ui-tabs>
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
  }
};
</script>
