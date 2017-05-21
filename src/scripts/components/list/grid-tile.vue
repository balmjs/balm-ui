<template>
  <li class="mdc-grid-tile">
    <div class="mdc-grid-tile__primary">
      <template v-if="imgUrl">
        <img class="mdc-grid-tile__primary-content" :src="imgUrl" :alt="title">
      </template>
      <template v-else>
        <div :class="['mdc-grid-tile__primary-content', imgClass]"></div>
      </template>
    </div>
    <span v-if="!imageOnly" class="mdc-grid-tile__secondary">
      <template v-if="icon">
        <i :class="[CLASSNAME_ICON, 'material-icons']">{{ icon }}</i>
      </template>
      <template v-else>
        <slot name="icon" :className="CLASSNAME_ICON"></slot>
      </template>
      <slot></slot>
    </span>
  </li>
</template>

<script>
const CLASSNAME_ICON = 'mdc-grid-tile__icon';

export default {
  name: 'ui-grid-tile',
  props: {
    imageOnly: {
      type: Boolean,
      default: false
    },
    imgUrl: String,
    title: String,
    imgClass: '',
    icon: String
  },
  data() {
    return {
      CLASSNAME_ICON
    };
  }
};
</script>
