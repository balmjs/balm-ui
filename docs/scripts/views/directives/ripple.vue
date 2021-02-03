<template>
  <docs-page type="directive" name="ripple" demo-count="3" without-css>
    <template #hero>
      <div v-ripple></div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <div class="example">
          <h6 :class="$tt('headline6')">Bounded</h6>
          <div v-ripple v-shadow="2" class="demo-surface">
            Interact with me!
          </div>
        </div>
        <div class="example">
          <h6 :class="$tt('headline6')">Bounded - CSS Only</h6>
          <div v-ripple:cssOnly v-shadow="2" class="demo-surface">
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
            v-ripple.unbounded
            class="demo-surface"
            data-mdc-ripple-is-unbounded
            >favorite</ui-icon
          >
        </div>
        <div class="example">
          <h6 :class="$tt('headline6')">Unbounded - CSS Only</h6>
          <ui-icon
            v-ripple:cssOnly.unbounded
            class="demo-surface"
            data-mdc-ripple-is-unbounded
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
            v-ripple="1"
            v-shadow="1"
            :class="['demo-surface', $theme.getThemeClass('primary')]"
          >
            Primary
          </div>
          <div
            v-ripple="2"
            v-shadow="2"
            :class="['demo-surface', $theme.getThemeClass('secondary')]"
          >
            Secondary
          </div>
        </div>
        <div class="example">
          <h6 :class="$tt('headline6')">Theme Styles - CSS Only</h6>
          <div
            v-ripple:cssOnly="1"
            v-shadow="2"
            :class="['demo-surface', $theme.getThemeClass('primary')]"
          >
            Primary
          </div>
          <div
            v-ripple:cssOnly="2"
            v-shadow="2"
            :class="['demo-surface', $theme.getThemeClass('secondary')]"
          >
            Secondary
          </div>
        </div>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Ripple'
  }
};
</script>
