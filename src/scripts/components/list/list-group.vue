<template>
  <div class="mdc-list-group">
    <slot :className="cssClasses.subheader"></slot>
  </div>
</template>

<script>
import cssClasses from './constants';

export default {
  name: 'ui-list-group',
  data() {
    return {
      cssClasses
    };
  }
};
</script>
