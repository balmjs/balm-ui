<template>
  <nav class="mdl-navigation" v-if="links">
    <a class="mdl-navigation__link" v-for="link in links" :href="link.url" v-text="link.value"></a>
  </nav>
</template>

<script>
export default {
  name: 'ui-navigation',
  props: {
    links: Array
  }
};
</script>
