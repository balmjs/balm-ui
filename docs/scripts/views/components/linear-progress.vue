<template>
  <div :class="[$tt('body1'), 'demo--linear-progress']">
    <header class="hero component">
      <ui-linear-progress indeterminate></ui-linear-progress>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demos'" :class="$tt('headline4')">1. Example</h4>
      <section>
        <h6 :class="$tt('headline6')">Linear Progress Indicators</h6>
        <figure class="linear-progress-demo">
          <ui-linear-progress :progress="progress"></ui-linear-progress>
          <figcaption>Determinate (Progress: {{ progress }})</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress indeterminate></ui-linear-progress>
          <figcaption>Indeterminate</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress
            progress="0.5"
            data-buffer="true"
            buffer="0.75"
          ></ui-linear-progress>
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
          <ui-linear-progress
            reversed
            progress="0.5"
            data-buffer="true"
            buffer="0.75"
          ></ui-linear-progress>
          <figcaption>Buffer Reversed</figcaption>
        </figure>

        <figure class="linear-progress-demo">
          <ui-linear-progress
            class="demo-linear-progress--custom"
            progress="0.5"
            data-buffer="true"
            buffer="0.75"
          ></ui-linear-progress>
          <figcaption>Custom Colors with Buffer</figcaption>
        </figure>
        <ui-accordion>
          <ui-markdown :text="code[1]"></ui-markdown>
        </ui-accordion>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="linear-progress"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="linear-progress"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

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
