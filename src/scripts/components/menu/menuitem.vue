<template>
  <li :class="nested ? null : getClass(item)"
    :role="nested ? null : 'menuitem'"
    :tabindex="nested ? null : tabindex(item)">
    <template v-if="nested">
      <ul class="mdc-menu__selection-group">
        <slot></slot>
      </ul>
    </template>
    <template v-else>
      <slot>{{ item[label] }}</slot>
    </template>
  </li>
</template>

<script>
export default {
  name: 'ui-menuitem',
  props: {
    // States
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    // UI attributes
    label: {
      type: String,
      default: 'label'
    },
    nested: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    getClass(item) {
      return {
        'mdc-list-item': true,
        'mdc-list-item--disabled': this.disabled || item.disabled,
        'mdc-menu-item--selected': this.selected || item.selected
      };
    },
    tabindex(item) {
      return item.disabled ? -1 : item.tabindex || 0;
    }
  }
};
</script>
