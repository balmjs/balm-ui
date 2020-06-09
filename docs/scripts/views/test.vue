<template>
  <ui-form>
    <legend>Form</legend>
    <ui-form-field>
      <label>Input:</label>
      <ui-textfield endAligned class="form-item"></ui-textfield>
    </ui-form-field>
    <ui-form-field>
      <label>Textarea:</label>
      <ui-textfield class="form-item" inputType="textarea"></ui-textfield>
    </ui-form-field>
    <ui-form-field>
      <label>Select:</label>
      <ui-select class="form-item"></ui-select>
    </ui-form-field>
  </ui-form>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style></style>
