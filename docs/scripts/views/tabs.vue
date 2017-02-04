<template>
  <div class="demo-tabs">
    <div class="component-title">
      <h3>Tabs</h3>
    </div>

    <h4>{{ $t('tabs.basic') }}</h4>
    <div class="snippet-demo">
      <ui-tabs effect :active="tab" @switched="onChange">
        <ui-panel tab="Tab1">
          <p>Panel1</p>
        </ui-panel>
        <ui-panel tab="Tab2">
          <p>Panel2</p>
        </ui-panel>
        <ui-panel tab="Tab3">
          <p>Panel3</p>
        </ui-panel>
      </ui-tabs>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>{{ $t('tabs.materialIcon') }}</h4>
    <div class="snippet-demo">
      <ui-tabs effect icon="material-icons" :active="tab2" @switched="onChange2">
        <ui-panel tab="edit">
          <p>Material icon1</p>
        </ui-panel>
        <ui-panel tab="delete">
          <p>Material icon2</p>
        </ui-panel>
      </ui-tabs>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>{{ $t('tabs.customIcon') }}</h4>
    <div class="snippet-demo">
      <ui-tabs effect icon="fa" iconPrefix="fa" noIconText :active="tab3" @switched="onChange3">
        <ui-panel tab="qrcode">
          <p>QR code</p>
        </ui-panel>
        <ui-panel tab="tv">
          <p>PC</p>
        </ui-panel>
      </ui-tabs>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

    <ui-apidoc name="tabs"></ui-apidoc>
    <ui-apidoc name="panel"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
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
  },
  created() {
    this.showCode('tabs', 3);
  }
};
</script>
