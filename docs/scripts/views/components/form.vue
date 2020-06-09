<template>
  <ui-page name="form" demoCount="2">
    <template #hero>
      <h1 :class="$tt('headline1')">Form</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-form>
          <legend>Horizontal Form</legend>
          <ui-form-field class="form-item">
            <label>Input:</label>
            <ui-textfield></ui-textfield>
          </ui-form-field>
          <ui-form-field class="form-item">
            <label>Select:</label>
            <ui-select></ui-select>
          </ui-form-field>
          <ui-form-field class="form-action">
            <ui-button raised>Submit</ui-button>
            <ui-button outlined>Cancel</ui-button>
          </ui-form-field>
        </ui-form>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-form type="|">
          <legend>Vertical Form</legend>
          <ui-form-field class="form-item">
            <label>Input:</label>
            <ui-textfield></ui-textfield>
          </ui-form-field>
          <ui-form-field class="form-item">
            <label>Select:</label>
            <ui-select fullwidth></ui-select>
          </ui-form-field>
          <ui-form-field class="form-action">
            <ui-button raised>Submit</ui-button>
            <ui-button outlined>Cancel</ui-button>
          </ui-form-field>
        </ui-form>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Form'
  }
};
</script>
