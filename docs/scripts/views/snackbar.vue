<template>
  <div class="demo-snackbar">
    <ui-button effect @click.native="show">show</ui-button>
    <ui-snackbar type="1" :message="message" :active="active" :actionHandler="reset" actionText="Close" @done=""></ui-snackbar>
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
