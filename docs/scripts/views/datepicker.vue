<template>
  <div class="docs-datepicker">
    <div class="component-title">
      <h3>DatePicker</h3>
    </div>

    <div class="snippet-demo">
      <ui-datepicker label="Select Date.." :model="date" @input="onInput" plus>
        <i slot="plus" class="fa fa-calendar"></i>
      </ui-datepicker>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-apidoc name="datepicker"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      date: ''
    };
  },
  methods: {
    onInput(val) {
      this.date = val;
    }
  },
  created() {
    this.showCode('datepicker');
  }
};
</script>
