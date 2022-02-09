<template>
  <docs-page
    type="directive"
    name="tooltip"
    :apis="['v-tooltip', 'tooltip']"
    demo-count="2"
    without-css
  >
    <template #hero>
      <h1
        v-tooltip="'Hello BalmUI'"
        :class="$tt('headline1')"
        aria-describedby="hero-tooltip"
      >
        Tooltip
      </h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Plain tooltip</h6>
      <div class="demo">
        <ui-icon
          v-tooltip="'Share your content via social media'"
          aria-describedby="tooltip-demo-1"
        >
          share
        </ui-icon>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Rich tooltip</h6>
      <div class="demo">
        <ui-button data-tooltip-id="tooltip-demo-2">Hello</ui-button>
        <ui-tooltip-anchor>
          <ui-tooltip id="tooltip-demo-2" rich>
            <template #title>Lorem Ipsum</template>
            <template #default="{ linkClass }">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              pretium vitae est et dapibus. Aenean sit amet felis eu lorem
              fermentum aliquam sit amet sit amet eros.
              <a :class="linkClass">link</a>
            </template>
          </ui-tooltip>
        </ui-tooltip-anchor>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Tooltip'
    };
  }
};
</script>
