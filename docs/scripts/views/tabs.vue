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
    <ui-tabs effect icon="material-icons" :active="tab2" @switched="onChange2">
      <ui-panel tab="add">
        <p>icon1</p>
      </ui-panel>
      <ui-panel tab="edit">
        <p>icon2</p>
      </ui-panel>
      <ui-panel tab="delete">
        <p>icon3</p>
      </ui-panel>
    </ui-tabs>
    <ui-tabs effect icon="fa" iconPrefix="fa" noIconText :active="tab3" @switched="onChange3">
      <ui-panel tab="qrcode">
        <p>QR code</p>
      </ui-panel>
      <ui-panel tab="tv">
        <p>PC</p>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 0,
      tab2: 0,
      tab3: 0
    };
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    },
    onChange2(tab) {
      this.tab2 = tab;
    },
    onChange3(tab) {
      this.tab3 = tab;
    }
  }
};
</script>
