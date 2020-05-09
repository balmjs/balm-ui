<template>
  <div
    :class="['mdc-collapse', { 'mdc-collapse--expanded': isExpanded }]"
    :aria-expanded="isExpanded"
  >
    <div class="mdc-collapse__header" @click="handleToggle">
      <i v-if="withIcon" class="material-icons mdc-collapse__icon">{{
        isExpanded ? 'expand_more' : 'chevron_right'
      }}</i>
      <template v-else>
        <template v-if="isExpanded">
          <slot name="expand-more-icon"></slot>
        </template>
        <template v-else>
          <slot name="expand-less-icon"></slot>
        </template>
      </template>
      <slot name="toggle"></slot>
    </div>
    <div v-show="isExpanded" class="mdc-collapse__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// Define collapse constants
const UI_COLLAPSE = {
  EVENT: {
    CHANGE: 'change'
  }
};

export default {
  name: 'ui-collapse',
  model: {
    prop: 'expanded',
    event: UI_COLLAPSE.EVENT.CHANGE
  },
  props: {
    // States
    expanded: {
      type: Boolean,
      default: false
    },
    // UI attributes
    withIcon: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isExpanded: this.expanded
    };
  },
  watch: {
    expanded(val) {
      this.isExpanded = val;
    }
  },
  methods: {
    handleToggle() {
      this.isExpanded = !this.isExpanded;
    }
  }
};
</script>
