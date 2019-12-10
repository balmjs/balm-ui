<template>
  <div :class="[$tt('body1'), 'demo--typography']">
    <header class="hero plugin">
      <h1 :class="$tt('headline1')">Tt</h1>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demos'" :class="$tt('headline4')">1. Example</h4>

      <h6 :class="$tt('headline6')">Styles</h6>
      <section class="demo-typography--section">
        <h1 :class="$tt('headline1')">Headline 1</h1>
        <h2 :class="$tt('headline2')">Headline 2</h2>
        <h3 :class="$tt('headline3')">Headline 3</h3>
        <h4 :class="$tt('headline4')">Headline 4</h4>
        <h5 :class="$tt('headline5')">Headline 5</h5>
        <h6 :class="$tt('headline6')">Headline 6</h6>

        <h6 :class="$tt('subtitle1')">Subtitle 1</h6>
        <h6 :class="$tt('subtitle2')">Subtitle 2</h6>

        <p :class="$tt('body1')">
          Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <p :class="$tt('body2')">
          Body 2 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <div>
          <span :class="$tt('button')">Button text</span>
        </div>

        <div>
          <span :class="$tt('caption')">Caption text</span>
        </div>

        <div>
          <span :class="$tt('overline')">Overline text</span>
        </div>
      </section>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <h6 :class="[$tt('headline6'), 'demo-typography--heading-baseline']">
        Baseline
      </h6>
      <section class="demo-typography--section-baseline">
        <h2 :class="['demo-typography__title', $tt('headline6')]">
          Our Changing Planet
        </h2>
        <h3 :class="['demo-typography__subtitle', $tt('subtitle2')]">
          by Kurt Wagner
        </h3>
        <div :class="['demo-typography__body', $tt('body2')]">
          Visit ten places on our planet that are undergoing the biggest changes
          today.
        </div>
        <div class="demo-typography-line-1">+34px</div>
        <div class="demo-typography-line-2">+22px</div>
        <div class="demo-typography-line-3">+28px</div>
      </section>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="typography" type="plugin"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="typography"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';

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
