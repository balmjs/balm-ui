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
    <ui-code language="html" :code="code1.html"></ui-code>
    <ui-code language="js" :code="code1.js"></ui-code>

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
    <ui-code language="html" :code="code2.html"></ui-code>
    <ui-code language="js" :code="code2.js"></ui-code>

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
    <ui-code language="html" :code="code3.html"></ui-code>
    <ui-code language="js" :code="code3.js"></ui-code>

    <h4>Tabs API</h4>
    <ui-tabs effect position="left" :active="tabs.tab" @switched="onChangeTabs">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="tabs.docs.props.data"
          :thead="tabs.docs.props.thead"
          :tbody="tabs.docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="tabs.docs.slots.data"
          :thead="tabs.docs.slots.thead"
          :tbody="tabs.docs.slots.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="events">
        <ui-table
          class="docs-table"
          :data="tabs.docs.events.data"
          :thead="tabs.docs.events.thead"
          :tbody="tabs.docs.events.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>

    <h4>Panel API</h4>
    <ui-tabs effect position="left" :active="panel.tab" @switched="onChangePanel">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="panel.docs.props.data"
          :thead="panel.docs.props.thead"
          :tbody="panel.docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="panel.docs.slots.data"
          :thead="panel.docs.slots.thead"
          :tbody="panel.docs.slots.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
import tabsDocs from '../apidocs/tabs';
import panelDocs from '../apidocs/panel';

export default {
  data() {
    return {
      code1: {
        html: '',
        js: ''
      },
      tab: 0,
      code2: {
        html: '',
        js: ''
      },
      tab2: 0,
      code3: {
        html: '',
        js: ''
      },
      tab3: 0,
      tabs: {
        tab: 0,
        docs: {
          props: {
            data: tabsDocs.props,
            thead: this.$docs.props.thead,
            tbody: this.$docs.props.tbody
          },
          slots: {
            data: tabsDocs.slots,
            thead: this.$docs.slots.thead,
            tbody: this.$docs.slots.tbody
          },
          events: {
            data: tabsDocs.events,
            thead: this.$docs.events.thead,
            tbody: this.$docs.events.tbody
          }
        }
      },
      panel: {
        tab: 0,
        docs: {
          props: {
            data: panelDocs.props,
            thead: this.$docs.props.thead,
            tbody: this.$docs.props.tbody
          },
          slots: {
            data: panelDocs.slots,
            thead: this.$docs.slots.thead,
            tbody: this.$docs.slots.tbody
          }
        }
      }
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
    },
    onChangeTabs(tab) {
      this.tabs.tab = tab;
    },
    onChangePanel(tab) {
      this.panel.tab = tab;
    }
  },
  async created() {
    for (let i = 1; i <= 3; i++) {
      let template = await this.$http.get(`${this.$domain}/snippets/tabs/demo${i}-template.html`);
      let script = await this.$http.get(`${this.$domain}/snippets/tabs/demo${i}-script.html`);
      this[`code${i}`] = {
        html: template.data,
        js: script.data
      };
    }
  }
};
</script>
