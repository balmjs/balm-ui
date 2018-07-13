<template>
  <div class="demo--elevation">
    <section class="hero">
      <figure :class="['demo-surface', $shadow()]">
        <figcaption>FLAT 0dp</figcaption>
      </figure>
      <figure :class="['demo-surface', $shadow(8)]">
        <figcaption>RAISED 8dp</figcaption>
      </figure>
      <figure :class="['demo-surface', 'demo-elevation--custom-color']">
        <figcaption>CUSTOM 16dp</figcaption>
      </figure>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <section class="demo-surfaces">
      <figure :class="['demo-surface', $shadow()]">
        <figcaption>0dp (<code>mdc-elevation--z0</code>)</figcaption>
      </figure>
      <figure v-for="i in 24"
        :key="i"
        :class="['demo-surface', $shadow(i)]">
        <figcaption>{{ i }}dp (<code>mdc-elevation--z{{ i }}</code>)</figcaption>
      </figure>
    </section>
    <section>
      <div id="hover-el" :class="$shadow(2, true)">
        <p>Hover over or tap me for a transition</p>
      </div>
    </section>

    <h3 :class="$tt('headline3')">2. API</h3>
    <ui-apidocs name="elevation"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Elevation'
  },
  mixins: [snippets],
  created() {
    this.showCode('elevation');
  }
};
</script>
