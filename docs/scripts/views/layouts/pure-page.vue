<template>
  <div v-anchor.html.offset="64" :class="[$tt('body1'), `page--${name}`]">
    <div :class="[$tt('body2'), 'pure-docs']">
      <ui-markdown :text="docs"></ui-markdown>
      <ui-footer-nav :prev="prev" :next="next"></ui-footer-nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurePage',
  inheritAttrs: false,
  customOptions: {}
};
</script>

<script setup>
import { computed } from 'vue';
import { useStore } from 'balm-ui';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  prev: {
    type: [Object, null],
    default: null
  },
  next: {
    type: [Object, null],
    default: null
  }
});

const store = useStore();

const docs = computed(() => {
  const filename = `${store.lang}/guide/${props.name}`;
  return require(`@/docs/${filename}.md`).default; // NOTE: just one variable in `require`
});
</script>
