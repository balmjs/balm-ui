<template>
  <section class="component-section">
    <h6 :class="$tt('headline6')">Radio</h6>
    <div class="component-wrapper space-around">
      <ui-form-field>
        <ui-radio name="radio-component-1" :value="0"></ui-radio>
      </ui-form-field>
      <ui-form-field>
        <ui-radio
          v-model="value"
          name="radio-component-1"
          :value="1"
        ></ui-radio>
      </ui-form-field>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      value: 1
    };
  }
};
</script>
