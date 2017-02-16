<template>
  <div class="demo-chip">
    <div class="component-title">
      <h3>Alert</h3>
      <p>Alert is an extension of dialog.</p>
    </div>

    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showAlert')">open alert</ui-button>
    </div>

    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-alert
      :show="showAlert"
      @on-click="closeDialog('showAlert', clickButton)"
      @on-close="closeDialog('showAlert')">
      <h4>Hello, Balm!</h4>
    </ui-alert>

    <ui-apidoc name="alert"></ui-apidoc>
  </div>
</template>
<script type="text/babel">
  import snippets from '../mixins/snippets';

  export default {
    mixins: [snippets],
    data() {
      return {
        showAlert: false
      }
    },
    methods: {
      showDialog(name){
        this[name] = true;
      },
      closeDialog(name, fn){
        this[name] = false;
        typeof fn === 'function' && fn();
      },
      clickButton(){
        console.log('clicked the button!');
      }
    },
    created() {
      this.showCode('alert', 1);
    },
  }
</script>
