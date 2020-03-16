<template>
  <div :class="[$tt('body1'), 'demo--test']">
    <p>Value1: {{ typeof value }} {{ value }}</p>
    <p>Value2: {{ typeof value }} {{ value2 }}</p>
    <hr />

    <subtest v-if="open" @close="$balmUI.onHide('open')"></subtest>
    <div v-else>
      <ui-button @click="$balmUI.onShow('open')">Parent Test</ui-button>
      <div v-for="i in 100" :key="i">{{ i }}</div>
    </div>

    <div :class="$tt('body2')">
      <!-- Test: input -->

      <!-- <input type="text" v-model="value" />
      <br />
      <ui-textfield v-model="value">
        Textfield
      </ui-textfield>
      <br />
      <ui-textfield :model="value" @input="$balmUI.onChange('value', $event)">
        Textfield
      </ui-textfield>
      <hr /> -->

      <!-- Test: checkbox -->

      <!-- <input type="checkbox" v-model="value" />
      <br />
      <ui-checkbox v-model="value"></ui-checkbox>
      <br />
      <ui-checkbox
        :model="value"
        @change="$balmUI.onChange('value', $event)"
      ></ui-checkbox>
      <hr /> -->

      <!-- <input type="checkbox" v-model="value2" value="a" />
      <input type="checkbox" v-model="value2" value="b" />
      <br />
      <ui-checkbox v-model="value2" value="a"></ui-checkbox>
      <ui-checkbox v-model="value2" value="b"></ui-checkbox>
      <br />
      <ui-checkbox
        :model="value2"
        value="a"
        @change="$balmUI.onChange('value2', $event)"
      ></ui-checkbox>
      <ui-checkbox
        :model="value2"
        value="b"
        @change="$balmUI.onChange('value2', $event)"
      ></ui-checkbox>
      <hr /> -->

      <!-- Test: radio -->

      <!-- <input type="radio" value="a" v-model="value" />
      <input type="radio" value="b" v-model="value" />
      <br />
      <ui-radio value="a" v-model="value"></ui-radio>
      <ui-radio value="b" v-model="value"></ui-radio>
      <br />
      <ui-radio
        value="a"
        :model="value"
        @change="$balmUI.onChange('value', $event)"
      ></ui-radio>
      <ui-radio
        value="b"
        :model="value"
        @change="$balmUI.onChange('value', $event)"
      ></ui-radio>
      <hr /> -->

      <!-- Test: select -->
      <!-- <select v-model="value">
        <option value="">Please select one</option>
        <option value="a">A</option>
        <option value="b">B</option>
      </select>
      <br />
      <ui-select
        defaultLabel="Please select one"
        :options="options"
        v-model="value"
      ></ui-select>
      <br />
      <ui-select
        defaultLabel="Please select one"
        :options="options"
        :model="value"
        @change="$balmUI.onChange('value', $event)"
      ></ui-select>
      <hr /> -->
    </div>
  </div>
</template>

<script>
import Subtest from './subtest';

export default {
  components: {
    Subtest
  },
  data() {
    return {
      open: false,
      source: ['a', 'ab', 'abc', 'abcd'],
      value: 'a',
      value2: 'a',
      options: [
        {
          label: 'A',
          value: 'a'
        },
        {
          label: 'B',
          value: 'b'
        }
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      // this.options = [
      //   {
      //     label: 'A',
      //     value: 'a'
      //   },
      //   {
      //     label: 'B',
      //     value: 'b'
      //   }
      // ];
      // this.value = 'b';
      // this.value2 = 'b';
    }, 1e3);
  }
};
</script>
