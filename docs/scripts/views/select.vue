<template>
  <div class="demo-select">
    <div class="component-title">
      <h3>Select</h3>
    </div>

    // TODO
    <div class="snippet-demo">
      <ui-select :value="options" :model="selected" defaultValue="全部" @change="onChange"></ui-select>
      <ui-select :value="subOptions"></ui-select>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 2,
      options: [{
        key: 1,
        value: 'item 1'
      }, {
        key: 2,
        value: 'item 2'
      }, {
        key: 3,
        value: 'item 3'
      }],
      subOptions: []
    };
  },
  methods: {
    onChange(option) {
      this.selected = option.key;
      if (option.key === 1) {
        this.subOptions = [{
          key: 'A',
          value: 'A'
        }, {
          key: 'B',
          value: 'B'
        }];
      } else {
        this.subOptions = [{
          key: 'C',
          value: 'C'
        }, {
          key: 'D',
          value: 'D'
        }];
      }
    }
  }
};
</script>
