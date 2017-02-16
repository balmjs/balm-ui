<template>
  <div class="demo-chip">
    <div class="component-title">
      <h3>Confirm</h3>
      <p>As the same as Alert component, confirm is an extension of dialog.</p>
    </div>

    <div class="btn-group">
      <ui-button primary effect raised @click.native="showDialog('showConfirm')">open confirm</ui-button>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-confirm
      :show="showConfirm"
      @on-close="closeDialog('showConfirm')"
      @on-cancel="onCancel"
      @on-confirm="onConfirm">
      <h4>Hello, Balm!</h4>
    </ui-confirm>

    <ui-apidoc name="confirm"></ui-apidoc>
  </div>
</template>
<script type="text/babel">
  import snippets from '../mixins/snippets';

  export default {
    mixins: [snippets],
    data() {
      return {
        showConfirm: false
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
      onCancel(){
        console.log('clicked the Cancel button!');
      },
      onConfirm(){
        console.log('clicked the OK button!');
      }
    },
    created() {
      this.showCode('confirm', 1);
    },
  }
</script>
