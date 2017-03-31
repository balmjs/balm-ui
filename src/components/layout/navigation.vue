<template>
  <nav v-if="links" class="mdl-navigation">
    <router-link v-for="(link, index) in links"
      class="mdl-navigation__link"
      :key="index"
      :to="link[fields.url]"
      :tag="tag">
      <template v-if="isTagA">
        <span>{{ link[fields.name] }}</span>
      </template>
      <template v-else>
        <a>{{ link[fields.name] }}</a>
      </template>
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
    links: Array,
    fields: {
      type: Object,
      default() {
        return {
          name: 'name',
          url: 'url'
        };
      }
    }
  },
  computed: {
    isTagA() {
      return this.tag.toLowerCase() === TAG_A;
    }
  }
};
</script>
