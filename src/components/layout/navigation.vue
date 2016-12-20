<template>
  <nav class="mdl-navigation" v-if="links">
    <router-link class="mdl-navigation__link" :tag="tag"
      v-for="link in links"
      :to="link.url">
      <span v-if="isTagA">{{ link.name }}</span>
      <a v-if="!isTagA">{{ link.name }}</a>
    </router-link>
  </nav>
</template>

<script>
const TAG_A = 'a';

export default {
  name: 'ui-navigation',
  props: {
    tag: {
      type: String,
      default: 'a' // or 'li'
    },
    links: Array
  },
  computed: {
    isTagA() {
      return this.tag.toLowerCase() === TAG_A;
    }
  }
};
</script>
