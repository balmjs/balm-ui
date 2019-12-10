<template>
  <div :class="[$tt('body1'), 'demo--elevation']">
    <header class="hero directive">
      <div class="hero-demo">
        <figure class="demo-surface" v-shadow="0">
          <figcaption>FLAT 0dp</figcaption>
        </figure>
        <figure class="demo-surface" v-shadow="8">
          <figcaption>RAISED 8dp</figcaption>
        </figure>
        <figure :class="['demo-surface', 'demo-elevation--custom-color']">
          <figcaption>CUSTOM 16dp</figcaption>
        </figure>
      </div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="demo-surfaces">
        <figure class="demo-surface" v-shadow="0">
          <figcaption>
            0dp (
            <code>mdc-elevation--z0</code>)
          </figcaption>
        </figure>
        <figure v-for="i in 24" :key="i" class="demo-surface" v-shadow="i">
          <figcaption>
            {{ i }}dp ( <code>mdc-elevation--z{{ i }}</code
            >)
          </figcaption>
        </figure>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <section>
        <div id="hover-el" v-shadow.transition="[2, 8]">
          <p>Hover over or tap me for a transition</p>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="elevation" type="directive"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="elevation"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Elevation'
  },
  mixins: [snippets],
  created() {
    this.showCode('elevation', 2);
  }
};
</script>
