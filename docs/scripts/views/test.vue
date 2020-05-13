<template>
  <div class="page--test">
    <ui-form-field block>
      <ui-textfield v-model="value">Label</ui-textfield>
    </ui-form-field>
    <br />
    <ui-form-field block>
      <ui-select v-model="selected" :options="options" defaultLabel="Select"
        >Label</ui-select
      >
    </ui-form-field>
    result: {{ selected.length }}
  </div>
</template>

<script>
const options = [
  {
    label: 'Bread, Cereal, Rice, and Pasta',
    value: 'grains'
  },
  {
    label: 'Vegetables',
    value: 'vegetables',
    disabled: true
  },
  {
    label: 'Fruit',
    value: 'fruit'
  },
  {
    label: 'Milk, Yogurt, and Cheese',
    value: 'dairy'
  },
  {
    label: 'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts',
    value: 'meat'
  },
  {
    label: 'Fats, Oils, and Sweets',
    value: 'fats'
  }
];

export default {
  data() {
    return {
      value: 'hello',
      options,
      selected: ''
    };
  }
};
</script>

<style>
.page--test {
  padding: 40px 20px;
}
</style>
