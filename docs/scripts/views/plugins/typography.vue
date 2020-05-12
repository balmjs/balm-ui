<template>
  <ui-page type="plugin" name="typography" demoCount="1" :apis="['typography']">
    <template #hero>
      <h1 :class="$tt('headline1')">Tt</h1>
    </template>

    <!-- Content -->
    <h6 :class="$tt('headline6')">Styles</h6>
    <section class="demo-typography--section">
      <div class="demo-typography--headline">
        <h1 :class="$tt('headline1')">Headline 1</h1>
        <h2 :class="$tt('headline2')">Headline 2</h2>
        <h3 :class="$tt('headline3')">Headline 3</h3>
        <h4 :class="$tt('headline4')">Headline 4</h4>
        <h5 :class="$tt('headline5')">Headline 5</h5>
        <h6 :class="$tt('headline6')">Headline 6</h6>
      </div>

      <div class="demo-typography--subtitle">
        <div :class="$tt('subtitle1')">Subtitle 1</div>
        <div :class="$tt('subtitle2')">Subtitle 2</div>
      </div>

      <div class="demo-typography--body">
        <div :class="$tt('body1')">
          Body 1 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <br />
        <div :class="$tt('body2')">
          Body 2 paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
      </div>

      <div class="demo-typography--others">
        <div :class="$tt('button')">Button text</div>
        <div :class="$tt('caption')">Caption text</div>
        <div :class="$tt('overline')">Overline text</div>
      </div>
    </section>
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <!-- <h5 :class="[$tt('headline5'), 'demo-typography--heading-baseline']">
      Baseline
    </h5>
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
    </section> -->
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Typography'
  }
};
</script>
