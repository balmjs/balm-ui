<template>
  <div class="demo--typography">
    <section class="hero">
      <h1 :class="$tt('headline1')">Tt</h1>
    </section>

    <h3 :class="$tt('headline3')">0. Usage</h3>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h3 :class="$tt('headline3')">1. Example</h3>
    <section class="demo-typography--section">
      <h6 :class="$tt('headline6')">Styles</h6>
      <h1 :class="$tt('headline1')">Headline 1</h1>
      <h2 :class="$tt('headline2')">Headline 2</h2>
      <h3 :class="$tt('headline3')">Headline 3</h3>
      <h4 :class="$tt('headline4')">Headline 4</h4>
      <h5 :class="$tt('headline5')">Headline 5</h5>
      <h6 :class="$tt('headline6')">Headline 6</h6>

      <h6 :class="$tt('subtitle1')">Subtitle 1</h6>
      <h6 :class="$tt('subtitle2')">Subtitle 2</h6>

      <p :class="$tt('body1')">
        Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur.
      </p>
      <p :class="$tt('body2')">
        Body 2 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur.
      </p>

      <div><span :class="$tt('button')">Button text</span></div>

      <div><span :class="$tt('caption')">Caption text</span></div>

      <div><span :class="$tt('overline')">Overline text</span></div>
    </section>
    <ui-accordion>
      <ui-markdown :code="code[1]"></ui-markdown>
    </ui-accordion>

    <h3 :class="$tt('headline3')">2. Typography Plugin API</h3>
    <ui-apidocs name="typography"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - Typography'
  },
  mixins: [snippets],
  created() {
    this.showCode('typography');
  }
};
</script>
