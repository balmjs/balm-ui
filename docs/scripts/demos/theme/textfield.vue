<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Textfield</h6>
    <div class="component-wrapper textfield-component">
      <ui-form-field>
        <ui-textfield
          v-model="value"
          helper-text-id="textfield-component-1"
          helper-text-visible
        >
          Label
          <template #helper-text>Assistive text</template>
        </ui-textfield>
      </ui-form-field>

      <ui-form-field>
        <ui-textfield
          outlined
          helper-text-id="textfield-component-2"
          helper-text-visible
        >
          Label
          <template #after>
            <ui-textfield-icon trailing>visibility</ui-textfield-icon>
          </template>
          <template #helper-text>Assistive text</template>
        </ui-textfield>
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
