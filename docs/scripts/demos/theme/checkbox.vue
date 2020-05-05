<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Checkbox</h6>
    <div class="component-wrapper">
      <ui-form-field>
        <ui-checkbox></ui-checkbox>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox indeterminate></ui-checkbox>
      </ui-form-field>
      <ui-form-field>
        <ui-checkbox v-model="value"></ui-checkbox>
      </ui-form-field>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>
