<template>
  <div :class="className.outer">
    <div v-if="!noTitle" :class="className.title">
      <slot name="title" :className="titleClassName">
        <h2 class="mdl-card__title-text">{{ title }}</h2>
      </slot>
    </div>
    <div class="mdl-card__media" v-if="!noMedia">
      <slot name="media"></slot>
    </div>
    <div class="mdl-card__supporting-text" v-if="!noText">
      <slot name="text">{{ text }}</slot>
    </div>
    <div v-if="!noActions" :class="className.actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
const SHADOW_DEPTHS = [2, 3, 4, 6, 8, 16];
const CLASSNAME_TITLE = 'mdl-card__title-text';
const CLASSNAME_SUBTITLE = 'mdl-card__subtitle-text';

export default {
  name: 'ui-card',
  props: {
    title: String,
    text: String,
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
    noTitle: {
      type: Boolean,
      default: false
    },
    noMedia: {
      type: Boolean,
      default: false
    },
    noText: {
      type: Boolean,
      default: false
    },
    noActions: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      titleClassName: {
        title: CLASSNAME_TITLE,
        subtitle: CLASSNAME_SUBTITLE
      }
    };
  },
  computed: {
    className() {
      return {
        outer: [
          'mdl-card',
          this.shadowClassName
        ],
        title: {
          'mdl-card__title': true,
          'mdl-card--expand': this.expand
        },
        actions: {
          'mdl-card__actions': true,
          'mdl-card--border': this.border
        }
      };
    },
    shadowClassName() {
      return (SHADOW_DEPTHS.indexOf(+this.dp) > -1) ? `mdl-shadow--${this.dp}dp` : '';
    }
  }
};
</script>
