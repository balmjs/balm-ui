<template>
  <div>
    <div class="demo-radio-row">
      <ui-form-field>
        <ui-radio
          :id="`ex${categoryNumber}-default-radio1`"
          :name="`ex${categoryNumber}-default`"
          :cssOnly="cssOnly"
          value="1"
          v-model="value1"
        ></ui-radio>
        <label :for="`ex${categoryNumber}-default-radio1`">Default Radio 1</label>
      </ui-form-field>
      <ui-form-field>
        <ui-radio
          :id="`ex${categoryNumber}-default-radio2`"
          :name="`ex${categoryNumber}-default`"
          :cssOnly="cssOnly"
          value="2"
          v-model="value1"
        ></ui-radio>
        <label :for="`ex${categoryNumber}-default-radio2`">Default Radio 2</label>
      </ui-form-field>
    </div>
    <div class="demo-radio-row">
      <ui-form-field class="demo-radio--custom">
        <ui-radio
          :id="`ex${categoryNumber}-custom-radio1`"
          :name="`ex${categoryNumber}-custom`"
          :cssOnly="cssOnly"
          :value="1"
          v-model="value2"
        ></ui-radio>
        <label :for="`ex${categoryNumber}-custom-radio1`">Custom Radio 1</label>
      </ui-form-field>
      <ui-form-field class="demo-radio--custom">
        <ui-radio
          :id="`ex${categoryNumber}-custom-radio2`"
          :name="`ex${categoryNumber}-custom`"
          :cssOnly="cssOnly"
          :value="2"
          v-model="value2"
        ></ui-radio>
        <label :for="`ex${categoryNumber}-custom-radio2`">Custom Radio 2</label>
      </ui-form-field>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cssOnly: {
      type: Boolean,
      default: false
    },
    code: Array
  },
  data() {
    return {
      value1: '1',
      value2: 1
    };
  },
  computed: {
    categoryNumber() {
      return this.cssOnly ? 1 : 0;
    }
  }
};
</script>
