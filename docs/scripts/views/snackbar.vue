<template>
  <div class="demo--snackbar">
    <section class="hero">
      <ui-snackbar cssOnly
        class="mdc-snackbar--active"
        message="Message sent"></ui-snackbar>
    </section>

    <section class="example">
      <h2>Basic Example</h2>
      <div>
        <ui-checkbox id="multiline"
          :model="multiline"
          @change="onChange('multiline', $event)">Multiline</ui-checkbox><br>
        <ui-checkbox id="action-on-bottom"
          :model="actionOnBottom"
          :disabled="!multiline"
          @change="onChange('actionOnBottom', $event)">Action On Bottom</ui-checkbox><br>

        <ui-textfield id="message"
          :model="message"
          @input="onChange('message', $event)">Message Text</ui-textfield><br>
        <ui-textfield id="action"
          :model="actionText"
          @input="onChange('actionText', $event)">Action Text</ui-textfield><br>

        <ui-button raised @click.native="onShow('active')">Show</ui-button>

        <ui-snackbar
          :active="active"
          :message="message"
          :actionHandler="actionHandler"
          :multiline="multiline"
          :actionOnBottom="actionOnBottom"
          :actionText="actionText"
          @callback="onHide('active')"></ui-snackbar>
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
      actionText: 'Undo',
      multiline: false,
      actionOnBottom: false
    };
  },
  methods: {
    actionHandler() {
      console.log('gg');
    }
  },
  created() {
    // this.showCode('snackbar', 2);
  }
};
</script>
