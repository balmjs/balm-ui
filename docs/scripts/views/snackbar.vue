<template>
  <div class="demo--snackbar">
    <section class="hero">
      <ui-snackbar class="mdc-snackbar--active"
        message="Message sent"
        actionText="Undo"
        cssOnly></ui-snackbar>
    </section>

    <section class="example">
      <h2>Basic Example</h2>
      <div>
        <ui-checkbox id="multiline" :model="multiline" @change="onChange('multiline', $event)">Multiline</ui-checkbox><br>
        <ui-checkbox id="action-on-bottom" :model="actionOnBottom" @change="onChange('actionOnBottom', $event)">Action On Bottom</ui-checkbox><br>
        <ui-textfield id="message" :model="message" @input="onChange('message', $event)">Message Text</ui-textfield><br>
        <ui-textfield id="action" :model="actionText" @input="onChange('actionText', $event)">Action Text</ui-textfield><br>

        <ui-button @click.native="show">Show</ui-button>

        <ui-snackbar
          :active="active"
          :message="message"
          :actionHandler="actionHandler"
          :multiline="multiline"
          :actionOnBottom="actionOnBottom"
          :actionText="actionText"
          @done="onDone"></ui-snackbar>
      </div>
    </section>

    <!-- <ui-apidoc name="snackbar"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      active: false,
      message: 'Hello Snackbar',
      actionText: '',
      multiline: false,
      actionOnBottom: false
    };
  },
  methods: {
    show(type) {
      this.active = true;
    },
    onDone() {
      this.active = false;
    },
    actionHandler() {
      console.log('gg');
    }
  },
  created() {
    // this.showCode('snackbar', 2);
  }
};
</script>
