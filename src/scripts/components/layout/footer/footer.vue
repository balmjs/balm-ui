<template>
  <footer class="mdl-mega-footer">
    <div class="mdl-mega-footer__top-section">
      <div class="mdl-mega-footer__left-section">
        <slot name="social">
          <button v-for="item in social"
            class="mdl-mega-footer__social-btn"
            v-html="item.icon"
            @click="handleShare(item)"></button>
        </slot>
      </div>
      <div class="mdl-mega-footer__right-section">
        <slot name="right-link">
          <a v-for="link in rightLinks" :href="link.url">{{ link.name }}</a>
        </slot>
      </div>
    </div>
    <div class="mdl-mega-footer__middle-section">
      <slot name="sitemap">
        <div v-for="sitemap in sitemaps" class="mdl-mega-footer__drop-down-section">
          <h1 class="mdl-mega-footer__heading">{{ sitemap.title }}</h1>
          <ul class="mdl-mega-footer__link-list">
            <li v-for="item in sitemap.list">
              <a :href="item.url">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </slot>
    </div>
    <div class="mdl-mega-footer__bottom-section">
      <div class="mdl-logo">
        <slot name="logo">
          <span v-html="logo"></span>
        </slot>
      </div>
      <ul class="mdl-mega-footer__link-list">
        <slot name="bottom-link">
          <li v-for="link in bottomLinks">
            <a :href="link.url">{{ link.name }}</a>
          </li>
        </slot>
      </ul>
    </div>
  </footer>
</template>

<script>
const EVENT_SHARED = 'shared';

export default {
  name: 'ui-footer',
  props: {
    social: Array,
    rightLinks: Array,
    sitemaps: Array,
    logo: String,
    bottomLinks: Array
  },
  methods: {
    handleShare(data) {
      this.$emit(EVENT_SHARED, data);
    }
  }
};
</script>
