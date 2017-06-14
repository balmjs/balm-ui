<template>
  <li :class="cssClasses.item">
    <slot></slot>
  </li>
</template>

<script>
import cssClasses from './constants';

export default {
  name: 'ui-item',
  data() {
    return {
      cssClasses
    };
  }
};
</script>
