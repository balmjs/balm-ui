<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Textfield</h6>
    <div class="component-wrapper textfield-component-wrapper">
      <ui-form-field>
        <ui-textfield v-model="value" helperTextId="textfield-component-1">
          Label
        </ui-textfield>
        <ui-textfield-helper id="textfield-component-1" visible
          >Assistive text</ui-textfield-helper
        >
      </ui-form-field>

      <ui-form-field>
        <ui-textfield outlined helperTextId="textfield-component-2">
          Label
          <template #after>
            <ui-textfield-icon trailing>visibility</ui-textfield-icon>
          </template>
        </ui-textfield>
        <ui-textfield-helper id="textfield-component-2" visible
          >Assistive text</ui-textfield-helper
        >
      </ui-form-field>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: 'Input text'
    };
  }
};
</script>
