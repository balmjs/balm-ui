<template>
  <div class="demo--ripple">
    <section :class="['hero']" v-ripple></section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>

    <section class="example">
      <div>
        <h2>Bounded</h2>
        <div class="demo-surface" v-ripple v-shadow="2">
          Interact with me!
        </div>
      </div>
      <div>
        <h2>Bounded - CSS Only</h2>
        <div class="demo-surface" v-ripple:cssOnly v-shadow="2">
          Interact with me!
        </div>
      </div>
    </section>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <section class="example">
      <div>
        <h2>Unbounded</h2>
        <ui-icon class="demo-surface" data-mdc-ripple-is-unbounded v-ripple.unbounded>
          favorite
        </ui-icon>
      </div>
      <div>
        <h2>Unbounded - CSS Only</h2>
        <ui-icon class="demo-surface" data-mdc-ripple-is-unbounded v-ripple:cssOnly.unbounded>
          favorite
        </ui-icon>
      </div>
    </section>
    <ui-accordion>
      <ui-markdown :code="code[2]"></ui-markdown>
    </ui-accordion>

    <section class="example">
      <div>
        <h2>Theme Styles</h2>
        <div :class="['demo-surface', $themeColor('primary')]"
          v-ripple="1"
          v-shadow="1">
          Primary
        </div>
        <div :class="['demo-surface', $themeColor('secondary')]"
          v-ripple="2"
          v-shadow="2">
          Secondary
        </div>
      </div>
      <div>
        <h2>Theme Styles - CSS Only</h2>
        <div :class="['demo-surface', $themeColor('primary')]"
          v-ripple:cssOnly="1"
          v-shadow="2">
          Primary
        </div>
        <div :class="['demo-surface', $themeColor('secondary')]"
          v-ripple:cssOnly="2"
          v-shadow="2">
          Secondary
        </div>
      </div>
    </section>
    <ui-accordion>
      <ui-markdown :code="code[3]"></ui-markdown>
    </ui-accordion>

    <h3 :class="$tt('headline3')">2. Ripple Directive API</h3>
    <ui-apidocs name="ripple"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Ripple'
  },
  mixins: [snippets],
  created() {
    this.showCode('ripple', 3);
  }
};
</script>
