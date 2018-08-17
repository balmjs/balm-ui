<template>
  <li class="mdc-list-item" role="menuitem" :tabindex="tabindex(item)">
    <span v-if="item[itemKeys.icon]" class="mdc-menu__selection-group-icon">
      {{ item[itemKeys.icon] }}
      <slot>{{ item[itemKeys.label] }}</slot>
    </span>
    <template v-else>
      <slot>{{ item[itemKeys.label] }}</slot>
    </template>
  </li>
</template>

<script>
// Define constants
const DEFAULT_MENUITEM_KEYS = {
  label: 'label',
  icon: 'icon'
};
const MENUITEM_KEYS = Object.keys(DEFAULT_MENUITEM_KEYS);

export default {
  name: 'ui-menuitem',
  props: {
    // UI attributes
    item: {
      type: Object,
      default: function() {
        return {};
      }
    },
    keys: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    itemKeys() {
      let currentItemKeys = DEFAULT_MENUITEM_KEYS;

      Object.keys(this.keys).forEach(key => {
        if (MENUITEM_KEYS.includes(key) && this.keys[key]) {
          currentItemKeys[key] = this.keys[key];
        }
      });

      return currentItemKeys;
    }
  },
  methods: {
    tabindex(item) {
      return item.disabled ? -1 : item.tabindex || 0;
    }
  }
};
</script>
