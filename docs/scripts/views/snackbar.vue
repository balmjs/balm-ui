<template>
  <div class="demo-snackbar">
    <div class="component-title">
      <h3>Snackbar</h3>
      <p>Transient popup notifications.</p>
    </div>

    <h4>Toast</h4>
    <div class="snippet-demo">
      <ui-button raised effect @click.native="show('toast')">Show</ui-button>
      <ui-snackbar :active="toast.active" :message="toast.message" @done="hide('toast')"></ui-snackbar>
    </div>
    <ui-code language="html" :code="code1.html"></ui-code>
    <ui-code language="js" :code="code1.js"></ui-code>

    <h4>snackbar</h4>
    <div class="snippet-demo">
      // TODO
    </div>

    <h4>Snackbar API</h4>
    <ui-tabs effect position="left" :active="tab" @switched="onChange">
      <ui-panel tab="props">
        <ui-table
          class="docs-table"
          :data="docs.props.data"
          :thead="docs.props.thead"
          :tbody="docs.props.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="slots">
        <ui-table
          class="docs-table"
          :data="docs.slots.data"
          :thead="docs.slots.thead"
          :tbody="docs.slots.tbody">
        </ui-table>
      </ui-panel>
      <ui-panel tab="events">
        <ui-table
          class="docs-table"
          :data="docs.events.data"
          :thead="docs.events.thead"
          :tbody="docs.events.tbody">
        </ui-table>
      </ui-panel>
    </ui-tabs>
  </div>
</template>

<script>
import snackbarDocs from '../apidocs/snackbar';

export default {
  data() {
    return {
      toast: {
        active: false,
        message: 'Hello BalmUI'
      },
      code1: {
        html: '',
        js: ''
      },
      tab: 0,
      docs: {
        props: {
          data: snackbarDocs.props,
          thead: this.$docs.props.thead,
          tbody: this.$docs.props.tbody
        },
        slots: {
          data: snackbarDocs.slots,
          thead: this.$docs.slots.thead,
          tbody: this.$docs.slots.tbody
        },
        events: {
          data: snackbarDocs.events,
          thead: this.$docs.events.thead,
          tbody: this.$docs.events.tbody
        }
      }
    };
  },
  methods: {
    show(type) {
      this[type].active = true;
    },
    hide(type) {
      this[type].active = false;
    },
    onChange(tab) {
      this.tab = tab;
    }
  },
  async created() {
    for (let i = 1; i <= 1; i++) {
      let template = await this.$http.get(`${this.$domain}/snippets/snackbar/demo${i}-template.html`);
      let script = await this.$http.get(`${this.$domain}/snippets/snackbar/demo${i}-script.html`);
      this[`code${i}`] = {
        html: template.data,
        js: script.data
      };
    }
  }
};
</script>
