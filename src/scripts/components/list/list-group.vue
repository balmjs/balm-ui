<template>
  <div class="mdc-list-group">
    <slot :className="CLASSNAME_SUBHEADER"></slot>
  </div>
</template>

<script>
const CLASSNAME_SUBHEADER = 'mdc-list-group__subheader';

export default {
  name: 'ui-list-group',
  data() {
    return {
      CLASSNAME_SUBHEADER
    };
  }
};
</script>
