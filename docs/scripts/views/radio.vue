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

    // TODO
  </div>
</template>

<script>
export default {
  data() {
    return {
      gender: '',
      demoCount: 1,
      code: []
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
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/radio/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
