<template>
  <div :class="[$tt('body1'), 'demo--home']">
    <section class="hero" v-ripple.unbounded>
      <h3 :class="$tt('headline3')">BalmUI</h3>
    </section>
    <div :class="[$tt('body2'), 'pure-docs']">
      <p :class="$tt('headline6')">Next Generation Material UI for Vue.js</p>
      <ui-button raised @click="$router.push({'name': 'intro'})">Get Started</ui-button>
    </div>
  </div>
</template>
