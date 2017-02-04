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

    <ui-apidoc name="snackbar"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      toast: {
        active: false,
        message: 'Hello Toast'
      },
      snackbar: {
        active: false,
        message: 'Hello Snackbar'
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
    }
  },
  created() {
    this.showCode('snackbar', 2);
  }
};
</script>
