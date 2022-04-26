<template>
  <div>Options API Test</div>
  <ui-table
    :data="viewModel.tableData"
    :thead="viewModel.thead"
    :tbody="viewModel.tbody"
    class="data-table"
    fullwidth
  >
    <template #testDropdown="{ data }">
      <ui-textfield
        v-model="data.testDropdownData"
        :helper-text-id="'test-helper-text[' + data.rowID + ']'"
        :disabled="true"
        :type="1"
      >
      </ui-textfield>
      <ui-textfield-helper
        :id="'test-helper-text[' + data.rowID + ']'"
        :valid-msg="validMsg.testDropdownData"
      >
      </ui-textfield-helper>
    </template>
  </ui-table>
</template>

<script>
import { useValidator } from 'balm-ui';

const validations = {
  testDropdownData: {
    label: 'test dropdown',
    validator: 'requiredRow',
    requiredRow: {
      validate(value) {
        //value here always is always undefined
        return !helpers.isEmpty(value);
      },
      message: 'There is a row with an invalid test dropdown value'
    }
  }
};

export default {
  data() {
    return {
      balmUI: useValidator(),
      validations,
      viewModel: myViewModelType,
      validMsg: {},
      messages: []
    };
  },
  methods: {
    submit() {
      let result = this.balmUI.validate(this.viewModel);
      let { valid, validMsg, messages } = result;
      this.validMsg = validMsg;
      this.messages = messages;
    }
  }
};
</script>

<style></style>
