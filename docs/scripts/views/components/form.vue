<template>
  <docs-page name="form" :apis="['form', 'form-field']" demo-count="2">
    <template #hero>
      <h1 :class="$tt('headline1')">Form</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-form nowrap label-width="80">
          <template #default="{ actionClass }">
            <legend>Horizontal Form</legend>
            <ui-form-field>
              <label>Input:</label>
              <ui-textfield></ui-textfield>
            </ui-form-field>
            <ui-form-field>
              <label>Select:</label>
              <ui-select></ui-select>
            </ui-form-field>
            <ui-form-field :class="actionClass">
              <ui-button raised>Submit</ui-button>
              <ui-button outlined>Cancel</ui-button>
            </ui-form-field>
          </template>
        </ui-form>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-form type="|">
          <template #default="{ actionClass }">
            <legend>Vertical Form</legend>
            <ui-form-field>
              <label>Input:</label>
              <ui-textfield></ui-textfield>
            </ui-form-field>
            <ui-form-field>
              <label>Select:</label>
              <ui-select fullwidth></ui-select>
            </ui-form-field>
            <ui-form-field :class="actionClass">
              <ui-button raised>Submit</ui-button>
              <ui-button outlined>Cancel</ui-button>
            </ui-form-field>
          </template>
        </ui-form>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Form'
  }
};
</script>
