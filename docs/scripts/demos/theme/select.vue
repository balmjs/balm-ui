<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Select</h6>
    <div class="component-wrapper select-component">
      <ui-form-field>
        <ui-select :options="options">Label</ui-select>
      </ui-form-field>
      <ui-form-field>
        <ui-select
          v-model="value"
          outlined
          :options="options"
          default-label="Select"
          :default-value="0"
        >Label</ui-select>
      </ui-form-field>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: -1,
      options: [
        {
          label: 'Option 1',
          value: 1
        },
        {
          label: 'Option 2',
          value: 2
        },
        {
          label: 'Option 3',
          value: 3
        }
      ]
    };
  }
};
</script>
