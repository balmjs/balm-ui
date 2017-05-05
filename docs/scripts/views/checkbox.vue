<template>
  <div class="docs-checkbox">
    <h1>MDC Checkbox</h1>
    <section>
      <h2>CSS Only</h2>
      <ui-checkbox id="basic-checkbox" cssOnly>
        This is my checkbox
      </ui-checkbox>
    </section>

    <section>
      <h2>CSS Only - Disabled</h2>
      <ui-checkbox id="basic-disabled-checkbox-label" cssOnly disabled>
        This is my disabled checkbox
      </ui-checkbox>
    </section>

    <section>
      <h2>With Javascript</h2>
      <ui-checkbox id="native-js-checkbox">
        This is my checkbox
      </ui-checkbox>
    </section>

    <section class="mdc-theme--dark">
      <h2>Dark Theme</h2>
      <ui-checkbox id="checkbox-dark" dark>
        This is my checkbox
      </ui-checkbox>
    </section>

    <!-- <ui-apidoc name="checkbox"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
    // this.showCode('checkbox');
  }
};
</script>
