<template>
  <ui-page type="directive" name="ripple" demoCount="3" withoutCss>
    <template #hero>
      <div v-ripple></div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <div class="example">
          <h6 :class="$tt('headline6')">Bounded</h6>
          <div class="demo-surface" v-ripple v-shadow="2">
            Interact with me!
          </div>
        </div>
        <div class="example">
          <h6 :class="$tt('headline6')">Bounded - CSS Only</h6>
          <div class="demo-surface" v-ripple:cssOnly v-shadow="2">
            Interact with me!
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <div class="example">
          <h6 :class="$tt('headline6')">Unbounded</h6>
          <ui-icon
            class="demo-surface"
            data-mdc-ripple-is-unbounded
            v-ripple.unbounded
            >favorite</ui-icon
          >
        </div>
        <div class="example">
          <h6 :class="$tt('headline6')">Unbounded - CSS Only</h6>
          <ui-icon
            class="demo-surface"
            data-mdc-ripple-is-unbounded
            v-ripple:cssOnly.unbounded
            >favorite</ui-icon
          >
        </div>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <div class="example">
          <h6 :class="$tt('headline6')">Theme Styles</h6>
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
        <div class="example">
          <h6 :class="$tt('headline6')">Theme Styles - CSS Only</h6>
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
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Ripple'
  }
};
</script>
