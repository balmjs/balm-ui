<template>
  <div class="demo-snackbar">
    <ui-button effect @click.native="show">show</ui-button>
    <ui-snackbar :message="message" :active="active" @done="reset"></ui-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World',
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
