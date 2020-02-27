<template>
  <ui-page-structure type="directive" name="ripple" demoCount="3" withoutCss>
    <template #hero>
      <div v-ripple></div>
    </template>

    <!-- Content -->
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
    <ui-snippet :code="$store.demos[1]"></ui-snippet>

    <section class="example">
      <div>
        <h2>Unbounded</h2>
        <ui-icon
          class="demo-surface"
          data-mdc-ripple-is-unbounded
          v-ripple.unbounded
          >favorite</ui-icon
        >
      </div>
      <div>
        <h2>Unbounded - CSS Only</h2>
        <ui-icon
          class="demo-surface"
          data-mdc-ripple-is-unbounded
          v-ripple:cssOnly.unbounded
          >favorite</ui-icon
        >
      </div>
    </section>
    <ui-snippet :code="$store.demos[2]"></ui-snippet>

    <section class="example">
      <div>
        <h2>Theme Styles</h2>
        <div
          :class="['demo-surface', $themeColor('primary')]"
          v-ripple="1"
          v-shadow="1"
        >
          Primary
        </div>
        <div
          :class="['demo-surface', $themeColor('secondary')]"
          v-ripple="2"
          v-shadow="2"
        >
          Secondary
        </div>
      </div>
      <div>
        <h2>Theme Styles - CSS Only</h2>
        <div
          :class="['demo-surface', $themeColor('primary')]"
          v-ripple:cssOnly="1"
          v-shadow="2"
        >
          Primary
        </div>
        <div
          :class="['demo-surface', $themeColor('secondary')]"
          v-ripple:cssOnly="2"
          v-shadow="2"
        >
          Secondary
        </div>
      </div>
    </section>
    <ui-snippet :code="$store.demos[3]"></ui-snippet>
  </ui-page-structure>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Ripple'
  }
};
</script>
