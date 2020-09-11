<template>
  <docs-page type="directive" name="tooltip" demo-count="2" without-css>
    <template #hero>
      <h1
        v-tooltip="'Hello BalmUI'"
        :class="$tt('headline1')"
        aria-describedby="hero-tooltip"
      >Tooltip</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Base tooltip</h6>
      <div class="demo">
        <ui-icon
          v-tooltip="'Share your content via social media'"
          aria-describedby="tooltip-demo-1"
        >share</ui-icon>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Rich tooltip</h6>
      <div class="demo">
        <ui-button aria-describedby="tooltip-demo-2">Hello</ui-button>
        <ui-tooltip id="tooltip-demo-2" width="200">
          <ui-icon>face</ui-icon>
          <span>lorem ipsum dolor</span>
        </ui-tooltip>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Tooltip'
  }
};
</script>
