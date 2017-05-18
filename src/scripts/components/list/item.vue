<template>
  <li :class="cssClasses.item">
    <slot name="before" :className="cssClasses.start"></slot>
    <slot :className="textClassName"></slot>
    <slot name="after" :className="cssClasses.end"></slot>
  </li>
</template>

<script>
import cssClasses from './constants';

export default {
  name: 'ui-item',
  data() {
    return {
      cssClasses,
      textClassName: {
        text: cssClasses.text,
        subtext: cssClasses.subtext
      }
    };
  }
};
</script>
