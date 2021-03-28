<template>
  <div :class="className">
    <template v-if="loading">
      <div v-if="avatar" class="mdc-skeleton__header">
        <i :class="avatarClassName" :style="avatarSize"></i>
      </div>
      <div class="mdc-skeleton__content">
        <h3 v-if="title" class="mdc-skeleton-title" :style="titleWidth"></h3>
        <ul v-if="paragraphRows" class="mdc-skeleton-paragraph">
          <template v-for="row in paragraphRows">
            <li
              :key="row"
              :style="row === paragraphRows ? paragraphWidth : {}"
            ></li>
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
import getType from '../../utils/typeof';

export default {
  name: 'UiSkeleton',
  props: {
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
  },
  computed: {
    className() {
      return this.loading
        ? {
            'mdc-skeleton': true,
            'mdc-skeleton--with-avatar': this.avatar,
            'mdc-skeleton--active': this.active
          }
        : {};
    },
    skeletonAvatar() {
      return getType(this.avatar) === 'object' ? this.avatar : {};
    },
    avatarClassName() {
      return {
        'mdc-skeleton-avatar': true,
        'mdc-skeleton-avatar--circle': this.skeletonAvatar.shape !== 'square',
        'mdc-skeleton-avatar--large': this.skeletonAvatar.size === 'large',
        'mdc-skeleton-avatar--small': this.skeletonAvatar.size === 'small'
      };
    },
    avatarSize() {
      const size = this.skeletonAvatar.size;

      return getType(size) === 'number'
        ? {
            width: `${size}px`,
            height: `${size}px`,
            lineHeight: `${size}px`
          }
        : {};
    },
    titleWidth() {
      let style = {};

      if (!this.avatar && this.paragraph) {
        style = { width: '38%' };
      }

      if (this.avatar && this.paragraph) {
        style = { width: '50%' };
      }

      if (getType(this.title) === 'object' && this.title.width) {
        style = { width: this.title.width };
      }

      return style;
    },
    paragraphWidth() {
      let style = {};

      if (!this.avatar || !this.title) {
        style = { width: '61%' };
      }

      if (getType(this.paragraph) === 'object' && this.paragraph.width) {
        style = { width: this.paragraph.width };
      }

      return style;
    },
    paragraphRows() {
      let rows = 0;

      if (!this.avatar && this.title) {
        rows = 3;
      } else {
        rows = 2;
      }

      if (getType(this.paragraph) === 'object' && this.paragraph.rows) {
        rows = this.paragraph.rows;
      }

      return rows;
    }
  }
};
</script>
