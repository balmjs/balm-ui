<template>
  <nav class="mdl-navigation" v-if="links">
    <router-link class="mdl-navigation__link"
      v-for="link in links"
      :to="link.url">{{ link.name }}</router-link>
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
