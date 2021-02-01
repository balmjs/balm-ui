<template>
  <li
    :class="nested ? null : getClass(item)"
    :role="nested ? null : 'menuitem'"
    :data-value="item.value || value"
  >
    <template v-if="nested">
      <ul class="mdc-menu__selection-group">
        <slot></slot>
      </ul>
    </template>
    <template v-else>
      <span class="mdc-list-item__ripple"></span>
      <!-- Leading icon / Text / Command -->
      <slot>
        <ui-menuitem-icon v-if="item.icon">
          <i
            :class="UI_GLOBAL.cssClasses.icon"
            aria-hidden="true"
            v-text="item.icon"
          ></i>
        </ui-menuitem-icon>
        <ui-menuitem-text v-if="item.text">{{ item.text }}</ui-menuitem-text>
      </slot>
    </template>
  </li>
</template>

<script>
import UiMenuitemIcon from './menuitem-icon';
import UiMenuitemText from './menuitem-text';
import rippleMixin from '../../mixins/ripple';
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiMenuitem',
  components: {
    UiMenuitemIcon,
    UiMenuitemText
  },
  mixins: [rippleMixin],
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
        return {}; // { text: string, icon: string, value: string }
      }
    },
    value: {
      type: null, // NOTE: String usually
      default: null
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
  mounted() {
    if (!this.nested) {
      this.initRipple(this.$el);
    }
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
