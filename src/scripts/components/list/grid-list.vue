<template>
  <div :class="[className, tileAspect]">
    <ul class="mdc-grid-list__tiles">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
const DEFAULT_ASPECT_RATIO = '1x1';
const ASPECT_RATIO = [
  DEFAULT_ASPECT_RATIO,
  '16x9',
  '2x3',
  '3x2',
  '4x3',
  '3x4'
];

export default {
  name: 'ui-grid-list',
  props: {
    // ui attributes
    gutter1: {
      type: Boolean,
      default: false
    },
    headerCaption: {
      type: Boolean,
      default: false
    },
    twolineCaption: {
      type: Boolean,
      default: false
    },
    iconStart: {
      type: Boolean,
      default: false
    },
    iconEnd: {
      type: Boolean,
      default: false
    },
    ratio: {
      type: String,
      default: DEFAULT_ASPECT_RATIO
    }
  },
  computed: {
    className() {
      return {
        'mdc-grid-list': true,
        'mdc-grid-list--tile-gutter-1': this.gutter1,
        'mdc-grid-list--header-caption': this.headerCaption,
        'mdc-grid-list--twoline-caption': this.twolineCaption,
        'mdc-grid-list--with-icon-align-start': this.iconStart,
        'mdc-grid-list--with-icon-align-end': this.iconEnd
      };
    },
    tileAspect() {
      return ASPECT_RATIO.indexOf(this.ratio)
        ? `mdc-grid-list--tile-aspect-${this.ratio}`
        : '';
    }
  }
};
</script>
