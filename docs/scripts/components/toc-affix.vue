<template>
  <div class="toc-affix" v-shadow.transition="[2, 8]">
    <ui-list>
      <ui-item class="v-anchor" v-anchor:href="'#ui-usage'">Usage</ui-item>
      <ui-item class="v-anchor" v-anchor:href="'#ui-example'">Example</ui-item>
      <ui-item
        v-for="(item, index) in items"
        :key="index"
        class="v-anchor"
        v-anchor:href="item.id"
      >{{ item.name }}</ui-item>
      <ui-item class="v-anchor" v-anchor:href="'#ui-apis'">APIs</ui-item>
    </ui-list>
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
    }
  }
};
</script>
