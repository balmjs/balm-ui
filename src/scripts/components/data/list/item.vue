<template>
  <li :class="{
    'mdl-list__item': true,
    'mdl-list__item--two-line': $parent.twoLine,
    'mdl-list__item--three-line': $parent.threeLine
  }">
    <div class="mdl-list__item-primary-content">
      <slot :className="className.primary"></slot>
    </div>
    <template v-if="hasMultiLine">
      <div class="mdl-list__item-secondary-content">
        <slot name="action" :className="className.secondary"></slot>
      </div>
    </template>
    <template v-else>
      <slot name="action" :className="className.secondary"></slot>
    </template>
  </li>
</template>

<script>
const CLASSNAME_ICON = 'material-icons mdl-list__item-icon';
const CLASSNAME_AVATAR = 'material-icons mdl-list__item-avatar';
const CLASSNAME_SUBTITLE = 'mdl-list__item-sub-title';
const CLASSNAME_TEXTBODY = 'mdl-list__item-text-body';
const CLASSNAME_INFO = 'mdl-list__item-secondary-info';
const CLASSNAME_ACTION = 'mdl-list__item-secondary-action';

export default {
  name: 'ui-item',
  data() {
    return {
      className: {
        primary: {
          icon: CLASSNAME_ICON,
          avatar: CLASSNAME_AVATAR,
          subtitle: CLASSNAME_SUBTITLE,
          text: CLASSNAME_TEXTBODY
        },
        secondary: {
          info: CLASSNAME_INFO,
          action: CLASSNAME_ACTION
        }
      }
    };
  },
  computed: {
    hasMultiLine() {
      return this.$parent.twoLine || this.$parent.threeLine;
    }
  }
};
</script>
