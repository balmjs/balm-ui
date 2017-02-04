<template>
  <div class="docs-radio">
    <div class="component-title">
      <h3>Radio button</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-radio name="sex" value="M" :model="gender" @change="chooseSex">Male</ui-radio>
      </div>
      <div class="snippet-demo">
        <ui-radio name="sex" value="F" :model="gender" @change="chooseSex">Female</ui-radio>
      </div>
    </div>
    <ui-button @click.native="onWatchSex('M')">choose Male</ui-button>
    <ui-button @click.native="onWatchSex('F')">choose Female</ui-button>
    <ui-markdown :text="code[0]"></ui-markdown>

    <ui-apidoc name="radio"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      gender: ''
    };
  },
  methods: {
    chooseSex(val) {
      this.gender = val;
    },
    onWatchSex(val) {
      this.gender = val;
    }
  },
  created() {
    this.showCode('radio');
  }
};
</script>
