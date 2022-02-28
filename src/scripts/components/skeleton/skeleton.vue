<template>
  <div :class="className">
    <template v-if="loading">
      <div v-if="avatar" class="mdc-skeleton__header">
        <i :class="avatarClassName" :style="avatarSize"></i>
      </div>
      <div class="mdc-skeleton__content">
        <h3 v-if="title" class="mdc-skeleton-title" :style="titleWidth"></h3>
        <ul v-if="paragraphRows" class="mdc-skeleton-paragraph">
          <template v-for="row in paragraphRows" :key="row">
            <li :style="row === paragraphRows ? paragraphWidth : {}"></li>
          </template>
        </ul>
      </div>
    </template>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
export default {
  name: 'UiSkeleton',
  customOptions: {}
};
</script>

<script setup>
import { computed } from 'vue';
import getType from '../../utils/typeof';

const props = defineProps({
  // States
  loading: {
    type: Boolean,
    default: true
  },
  // UI attributes
  active: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: [Boolean, Object],
    default: false
  },
  title: {
    type: [Boolean, Object],
    default: true
  },
  paragraph: {
    type: [Boolean, Object],
    default: true
  }
});

const className = computed(() =>
  props.loading
    ? {
        'mdc-skeleton': true,
        'mdc-skeleton--with-avatar': props.avatar,
        'mdc-skeleton--active': props.active
      }
    : {}
);
const skeletonAvatar = computed(() =>
  getType(props.avatar) === 'object' ? props.avatar : {}
);
const avatarClassName = computed(() => ({
  'mdc-skeleton-avatar': true,
  'mdc-skeleton-avatar--circle': skeletonAvatar.value.shape !== 'square',
  'mdc-skeleton-avatar--large': skeletonAvatar.value.size === 'large',
  'mdc-skeleton-avatar--small': skeletonAvatar.value.size === 'small'
}));
const avatarSize = computed(() => {
  const { size } = skeletonAvatar.value;

  return getType(size) === 'number'
    ? {
        width: `${size}px`,
        height: `${size}px`,
        lineHeight: `${size}px`
      }
    : {};
});
const titleWidth = computed(() => {
  let style = {};

  if (!props.avatar && props.paragraph) {
    style = { width: '38%' };
  }

  if (props.avatar && props.paragraph) {
    style = { width: '50%' };
  }

  if (getType(props.title) === 'object' && props.title.width) {
    style = { width: props.title.width };
  }

  return style;
});
const paragraphWidth = computed(() => {
  let style = {};

  if (!props.avatar || !props.title) {
    style = { width: '61%' };
  }

  if (getType(props.paragraph) === 'object' && props.paragraph.width) {
    style = { width: props.paragraph.width };
  }

  return style;
});
const paragraphRows = computed(() => {
  let rows = 0;

  if (!props.avatar && props.title) {
    rows = 3;
  } else {
    rows = 2;
  }

  if (getType(props.paragraph) === 'object' && props.paragraph.rows) {
    rows = props.paragraph.rows;
  }

  return rows;
});
</script>
