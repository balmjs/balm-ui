<template>
  <div :class="[$tt('body1'), 'page--home']">
    <section class="hero" v-ripple.unbounded>
      <h1 :class="$tt('headline1')">BalmUI</h1>
    </section>
    <div :class="[$tt('body2'), 'pure-docs']">
      <p :class="$tt('subtitle1')">
        Build beautiful, usable products with BalmUI for Vue.js
      </p>
      <ui-button raised @click="$router.push({ name: 'guide.intro' })"
        >Get started</ui-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  metaInfo: {
    titleTemplate: '%s - Home'
  }
};
</script>
