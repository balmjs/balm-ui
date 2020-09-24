<template>
  <div>
    <div class="demo-radio-row">
      <ui-form-field>
        <ui-radio
          v-model="value1"
          input-id="ex-default-radio1"
          :name="`ex-default`"
          value="1"
        ></ui-radio>
        <label for="ex-default-radio1">Default Radio 1</label>
      </ui-form-field>
      <ui-form-field>
        <ui-radio
          v-model="value1"
          input-id="ex-default-radio2"
          :name="`ex-default`"
          value="2"
        ></ui-radio>
        <label for="ex-default-radio2">Default Radio 2</label>
      </ui-form-field>
    </div>
    <div class="demo-radio-row">
      <ui-form-field class="demo-radio--custom">
        <ui-radio
          v-model="value2"
          input-id="ex-custom-radio1"
          :name="`ex-custom`"
          :value="1"
        ></ui-radio>
        <label for="ex-custom-radio1">Custom Radio 1</label>
      </ui-form-field>
      <ui-form-field class="demo-radio--custom">
        <ui-radio
          v-model="value2"
          input-id="ex-custom-radio2"
          :name="`ex-custom`"
          :value="2"
        ></ui-radio>
        <label for="ex-custom-radio2">Custom Radio 2</label>
      </ui-form-field>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    code: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      value1: '1',
      value2: 1
    };
  }
};
</script>
