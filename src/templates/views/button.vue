<template>
  <div>
    <ui-button primary @click.native="show">Primary Button</ui-button>
    <ui-button effect @click.native="hide">Button</ui-button>
  </div>
</template>

<script>
export default {
  methods: {
    show() {
      console.log('show popup');
      // this.popup.message = (new Date()).toString();
      // this.popup.active = true;
    },
    hide() {
      console.log('hide');
      // this.popup.active = false;
    }
  },
  created() {
    console.log('button', MaterialButton);
  }
};
</script>
