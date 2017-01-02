<template>
  <div class="demo-snackbar">
    <div class="component-title">
      <h3>Snackbar</h3>
      <p>Transient popup notifications.</p>
    </div>

    // TODO
    <div class="snippet-demo">
      <ui-button effect @click.native="show">show</ui-button>
      <ui-snackbar :message="message" :active="active" @done="reset"></ui-snackbar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello BalmUI',
      active: false
    };
  },
  methods: {
    show() {
      this.active = true;
    },
    reset() {
      this.active = false;
    }
  }
};
</script>
