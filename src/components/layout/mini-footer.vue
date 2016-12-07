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
            <a :href="link.url" v-text="link.name"></a>
          </li>
        </slot>
      </ul>
    </div>
    <div class="mdl-mini-footer__right-section">
      <slot name="social">
        <button class="mdl-mini-footer__social-btn" v-for="item in social" v-html="item.icon" @click="share(item)"></button>
      </slot>
    </div>
  </footer>
</template>

<script>
/**
 * @example
 * <ui-mini-footer :logo="logo" :links="links" :social="social" @share="onShare"></ui-mini-footer>
 */
export default {
  name: 'ui-mini-footer',
  props: {
    logo: String,
    links: Array,
    social: Array
  },
  methods: {
    share(data) {
      this.$emit('share', data);
    }
  }
};
</script>
