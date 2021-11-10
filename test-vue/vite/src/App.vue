<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <HelloBalmUI />
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue';
import HelloBalmUI from './components/HelloBalmUI.vue';

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style lang="scss">
@use '@material/theme/variables' as theme-variables with (
  $primary: #f00
);

@use 'balm-ui/components/icon' with (
  $font-path: 'balm-ui/fonts'
);

@use 'balm-ui/dist/balm-ui';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
