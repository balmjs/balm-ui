<template>
  <nav :class="className">
    <slot></slot>
  </nav>
</template>

<script>
import listMixin from '../../mixins/list';

export default {
  name: 'UiNav',
  mixins: [listMixin]
};
</script>
