<template>
  <li
    :class="nested ? null : getClass(item)"
    :role="nested ? null : 'menuitem'"
  >
    <template v-if="nested">
      <ul class="mdc-menu__selection-group">
        <slot></slot>
      </ul>
    </template>
    <template v-else>
      <!-- Leading icon / Text / Command -->
      <slot>
        <ui-menuitem-icon v-if="item.icon">
          <i :class="UI_GLOBAL.mdi" aria-hidden="true">{{ item.icon }}</i>
        </ui-menuitem-icon>
        <ui-menuitem-text v-if="item.text">{{ item.text }}</ui-menuitem-text>
      </slot>
    </template>
  </li>
</template>

<script>
import UiMenuitemIcon from './menuitem-icon';
import UiMenuitemText from './menuitem-text';
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'ui-menuitem',
  components: {
    UiMenuitemIcon,
    UiMenuitemText
  },
  props: {
    // Layout
    nested: {
      type: Boolean,
      default: false
    },
    // States
    item: {
      type: Object,
      default() {
        return {}; // { text: string, icon: string }
      }
    },
    // UI attributes
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_GLOBAL
    };
  },
  methods: {
    getClass(item) {
      return {
        'mdc-list-item': true,
        'mdc-list-item--disabled': this.disabled || item.disabled,
        'mdc-menu-item--selected': this.selected || item.selected
      };
    }
  }
};
</script>
