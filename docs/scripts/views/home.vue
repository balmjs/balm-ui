<template>
  <div :class="[$tt('body1'), 'demo--home']">
    <section class="hero" v-ripple.unbounded>
      <h2 :class="$tt('headline2')">BalmUI</h2>
    </section>
    <div :class="[$tt('body2'), 'pure-docs']">
      <p :class="$tt('headline6')">
        Build beautiful, usable products using BalmUI for Vue.js
      </p>
      <ui-button raised @click="$router.push({ name: 'guide.intro' })"
        >Get started</ui-button
      >
    </div>
  </div>
</template>
