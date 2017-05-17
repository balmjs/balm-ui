<template>
  <div class="mdc-card__horizontal-block">
    <slot name="before" :className="cssClasses"></slot>
    <slot></slot>
    <slot name="after" :className="cssClasses"></slot>
  </div>
</template>

<script>
import cssClasses from './constants';

export default {
  name: 'ui-card-block',
  data() {
    return {
      cssClasses
    };
  }
};
</script>
