<template>
  <div class="docs-checkbox">
    <div class="component-title">
      <h3>Checkbox button</h3>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo" v-for="num in [1, 2, 3]">
        <ui-checkbox :value="num" :model="numberOptions" @change="onChangeNumber">Option {{ num }}</ui-checkbox>
      </div>
    </div>
    <ui-button @click.native="onWatchNumber([1, 2])">choose 1,2</ui-button>
    <ui-button @click.native="onWatchNumber([1, 3])">choose 1,3</ui-button>
    <ui-button @click.native="onWatchNumber([2, 3])">choose 2,3</ui-button>

    <ui-markdown :text="code[0]"></ui-markdown>

    <div class="snippet-group">
      <div class="snippet-demo" v-for="str in ['A', 'B', 'C']">
        <ui-checkbox :value="str" :model="stringOptions" @change="onChangeString">Option {{ str }}</ui-checkbox>
      </div>
    </div>
    <ui-button @click.native="onWatchString(['A', 'B'])">choose A,B</ui-button>
    <ui-button @click.native="onWatchString(['A', 'C'])">choose A,C</ui-button>
    <ui-button @click.native="onWatchString(['B', 'C'])">choose B,C</ui-button>

    <ui-apidoc name="checkbox"></ui-apidoc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberOptions: [],
      stringOptions: [],
      demoCount: 1,
      code: []
    };
  },
  methods: {
    onChangeNumber(val) {
      this.numberOptions = val;
    },
    onChangeString(val) {
      this.stringOptions = val;
    },
    onWatchNumber(val) {
      this.numberOptions = val;
    },
    onWatchString(val) {
      this.stringOptions = val;
    }
  },
  created() {
    for (let i = 1; i <= this.demoCount; i++) {
      let code = require(`../snippets/checkbox/demo${i}.md`);
      this.code.push(code);
    }
  }
};
</script>
