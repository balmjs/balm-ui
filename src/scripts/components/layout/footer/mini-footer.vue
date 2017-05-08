<template>
  <footer class="mdl-mini-footer">
    <div class="mdl-mini-footer__left-section">
      <div class="mdl-logo">
        <slot name="logo">
          <span v-html="logo"></span>
        </slot>
      </div>
      <ul class="mdl-mini-footer__link-list">
        <slot name="link">
          <li v-for="link in links">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </slot>
      </ul>
    </div>
    <div class="mdl-mini-footer__right-section">
      <slot name="social">
        <button v-for="item in social"
          class="mdl-mini-footer__social-btn"
          v-html="item.icon"
          @click="handleShare(item)"></button>
      </slot>
    </div>
  </footer>
</template>

<script>
const EVENT_SHARED = 'shared';

/**
 * @example
 * <ui-mini-footer :logo="logo" :links="links" :social="social" @shared="shared"></ui-mini-footer>
 */
export default {
  name: 'ui-mini-footer',
  props: {
    logo: String,
    links: Array,
    social: Array
  },
  methods: {
    handleShare(data) {
      this.$emit(EVENT_SHARED, data);
    }
  }
};
</script>
