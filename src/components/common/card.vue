<template>
  <div :class="className.outer">
    <div v-if="!hideHeader" :class="className.header">
      <slot name="header" :className="titleClassName"></slot>
    </div>
    <slot :className="innerClassName"></slot>
    <div v-if="!hideFooter" :class="className.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
const SHADOW_DEPTHS = [2, 3, 4, 6, 8, 16];

const CLASSNAME_TITLE = 'mdl-card__title-text';
const CLASSNAME_SUBTITLE = 'mdl-card__subtitle-text';
const CLASSNAME_MEDIA = 'mdl-card__media';
const CLASSNAME_TEXT = 'mdl-card__supporting-text';

export default {
  name: 'ui-card',
  props: {
    // Adds a border to the card section that it's applied to
    border: {
      type: Boolean,
      default: false
    },
    // Assigns variable shadow depths (2, 3, 4, 6, 8, or 16) to card
    dp: {
      type: [Number, String],
      default: 0
    },
    expand: {
      type: Boolean,
      default: false
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      titleClassName: {
        title: CLASSNAME_TITLE,
        subtitle: CLASSNAME_SUBTITLE
      },
      innerClassName: {
        media: CLASSNAME_MEDIA,
        text: CLASSNAME_TEXT
      }
    };
  },
  computed: {
    shadowClassName() {
      return (SHADOW_DEPTHS.indexOf(+this.dp) > -1) ? `mdl-shadow--${this.dp}dp` : '';
    },
    className() {
      return {
        outer: [
          'mdl-card',
          this.shadowClassName
        ],
        header: {
          'mdl-card__title': true,
          'mdl-card--expand': this.expand
        },
        footer: {
          'mdl-card__actions': true,
          'mdl-card--border': this.border
        }
      };
    }
  }
};
</script>
