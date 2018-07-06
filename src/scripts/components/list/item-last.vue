<template>
  <span class="mdc-list-item__meta">
    <slot>
      {{ text }}
      <i v-if="icon" class="material-icons">{{ icon }}</i>
      <img v-if="image" :src="image">
    </slot>
  </span>
</template>

<script>
export default {
  name: 'ui-item-last',
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: String,
    image: String
  },
  created() {
    let hasMultiValue =
      [this.text, this.icon, this.image].filter(value => value).length > 1;

    if (hasMultiValue) {
      console.warn('You can only set a text, icon or image');
    }
  }
};
</script>
