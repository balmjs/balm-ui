<template>
  <nav v-if="links" class="mdl-navigation">
    <router-link v-for="(link, index) in links"
      class="mdl-navigation__link"
      :key="index"
      :to="link.url"
      :tag="tag">
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
