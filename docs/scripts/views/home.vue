<template>
  <div :class="[$tt('body1'), 'page--home']">
    <section v-ripple.unbounded class="hero">
      <h1 :class="$tt('headline1')">BalmUI for Vue3</h1>
    </section>
    <div :class="[$tt('body2'), 'pure-docs']">
      <p :class="$tt('subtitle1')">
        Build beautiful products, faster for Vue.js
      </p>
      <p :class="$tt('subtitle2')">
        BalmUI is a Google Material design system – backed by open-source code –
        that helps teams build high-quality digital experiences.
      </p>
      <ui-button raised @click="$router.push({ name: 'guide.intro' })"
        >Get started</ui-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo: {
    titleTemplate: '%s - Home'
  }
};
</script>
