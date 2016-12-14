<template>
  <ui-tabs :tab="tabs.tab" :panel="tabs.panel" effect>
    <template slot="panel0">安顺地区覅的设计方案</template>
    <template slot="panel2">asdfaosdjfoadjfa</template>
  </ui-tabs>
</template>

<script>
export default {
  data() {
    return {
      tabs: {
        tab: ['菜单1', '菜单2', '菜单3'],
        panel: ['1111111', '2222222', '3333333']
      }
    };
  }
};
</script>
