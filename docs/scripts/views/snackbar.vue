<template>
  <div class="demo-snackbar">
    <div class="component-title">
      <h3>Snackbar</h3>
      <p>Transient popup notifications.</p>
    </div>

    <h4>Toast</h4>
    <div class="snippet-demo">
      <ui-button raised effect @click.native="show('toast')">Show Toast</ui-button>
      <ui-snackbar :active="toast.active" :message="toast.message" @done="hide('toast')"></ui-snackbar>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>snackbar</h4>
    <div class="snippet-demo">
      <ui-button raised effect @click.native="show('snackbar')">Show Snackbar</ui-button>
      <ui-snackbar :type="1"
        :active="snackbar.active"
        :message="snackbar.message"
        :timeout="3000"
        :actionHandler="actionHandler"
        actionText="Undo"
        @done="hide('snackbar')"></ui-snackbar>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Snackbar API</h4>
    <ui-tabs effect position="left" :active="docs.tab" @switched="onChange">
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
        message: 'Hello Toast'
      },
      snackbar: {
        active: false,
        message: 'Hello Snackbar'
      },
      demoCount: 2,
      code: [],
      docs: {
        tab: 0,
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
      this.snackbar.message = new Date().toString();
    },
    hide(type) {
      this[type].active = false;
    },
    actionHandler() {
      this.snackbar.active = false;
    },
    onChange(tab) {
      this.docs.tab = tab;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/snackbar/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
