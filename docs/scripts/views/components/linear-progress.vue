<template>
  <div class="demo--linear-progress">
    <section class="hero">
      <ui-linear-progress indeterminate></ui-linear-progress>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <section>
      <fieldset>
        <legend :class="$tt('headline6')">Linear Progress Indicators</legend>

        <figure class="linear-progress-demo">
          <ui-linear-progress :progress="progress"></ui-linear-progress>
          <figcaption>Determinate (Progress: {{progress }})</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress indeterminate></ui-linear-progress>
          <figcaption>Indeterminate</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress progress="0.5" data-buffer="true" buffer="0.75"></ui-linear-progress>
          <figcaption>Buffer</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress reversed progress="0.5"></ui-linear-progress>
          <figcaption>Reversed</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress indeterminate reversed></ui-linear-progress>
          <figcaption>Indeterminate Reversed</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress reversed progress="0.5" data-buffer="true" buffer="0.75"></ui-linear-progress>
          <figcaption>Buffer Reversed</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress class="demo-linear-progress--custom" progress="0.5" data-buffer="true" buffer="0.75"></ui-linear-progress>
          <figcaption>Custom Colors with Buffer</figcaption>
        </figure>

      </fieldset>
      <ui-accordion>
        <ui-markdown :text="code[1]"></ui-markdown>
      </ui-accordion>
    </section>

    <h3 :class="$tt('headline3')">2. APIs</h3>
    <ui-apidocs name="linear-progress"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Linear Progress'
  },
  mixins: [snippets],
  data() {
    return {
      progress: 0,
      timer: null
    };
  },
  created() {
    this.showCode('linear-progress');
    this.setProgress();
  },
  methods: {
    setProgress() {
      this.timer = setInterval(() => {
        if (this.progress === 1) {
          clearInterval(this.timer);
          this.progress = 0;
          this.setProgress();
        } else {
          this.progress += 0.1;
          this.progress = +this.progress.toFixed(2);
        }
      }, 1e3);
    }
  }
};
</script>
