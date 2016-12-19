<template>
  <div class="demo-tabs">
    <ui-tabs effect :active="tab" @switched="onChange">
      <ui-panel tab="菜单1">
        <p>panel1</p>
      </ui-panel>
      <ui-panel tab="菜单2">
        <p>panel2</p>
      </ui-panel>
      <ui-panel tab="菜单3">
        <p>panel3</p>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0
    };
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    }
  }
};
</script>
