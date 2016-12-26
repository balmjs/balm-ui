<template>
  <div class="demo-tabs">
    <h4>{{ $t('tabs.basic') }}</h4>
    <ui-tabs effect :active="tab" @switched="onChange">
      <ui-panel tab="菜单1">
        <p>Panel1</p>
      </ui-panel>
      <ui-panel tab="菜单2">
        <p>Panel2</p>
      </ui-panel>
      <ui-panel tab="菜单3">
        <p>Panel3</p>
      </ui-panel>
    </ui-tabs>
    <ui-code language="html" :code="code1.html"></ui-code>
    <ui-code language="js" :code="code1.js"></ui-code>

    <h4>{{ $t('tabs.materialIcon') }}</h4>
    <ui-tabs effect icon="material-icons" :active="tab2" @switched="onChange2">
      <ui-panel tab="edit">
        <p>Material icon1</p>
      </ui-panel>
      <ui-panel tab="delete">
        <p>Material icon2</p>
      </ui-panel>
    </ui-tabs>
    <ui-code language="html" :code="code2.html"></ui-code>
    <ui-code language="js" :code="code2.js"></ui-code>

    <h4>{{ $t('tabs.customIcon') }}</h4>
    <ui-tabs effect icon="fa" iconPrefix="fa" noIconText :active="tab3" @switched="onChange3">
      <ui-panel tab="qrcode">
        <p>QR code</p>
      </ui-panel>
      <ui-panel tab="tv">
        <p>PC</p>
      </ui-panel>
    </ui-tabs>
    <ui-code language="html" :code="code3.html"></ui-code>
    <ui-code language="js" :code="code3.js"></ui-code>
  </div>
</template>

<script>
import UiCode from '../components/code';

export default {
  components: {
    UiCode
  },
  data() {
    return {
      code1: {
        html: require('../snippets/tabs/demo1-template.html'),
        js: require('../snippets/tabs/demo1-script.html')
      },
      tab: 0,
      code2: {
        html: require('../snippets/tabs/demo2-template.html'),
        js: require('../snippets/tabs/demo2-script.html')
      },
      tab2: 0,
      code3: {
        html: require('../snippets/tabs/demo3-template.html'),
        js: require('../snippets/tabs/demo3-script.html')
      },
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
