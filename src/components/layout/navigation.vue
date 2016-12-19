<template>
  <nav class="mdl-navigation" v-if="links">
    <router-link class="mdl-navigation__link" tag="li"
      v-for="link in links"
      :to="link.url">
      <a>{{ link.name }}</a>
    </router-link>
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
