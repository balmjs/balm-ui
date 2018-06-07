<template>
  <a :class="[className, actionClassName]"
    :href="url"
    :data-icon-inner-selector="iconInnerSelector">
    <slot></slot>
  </a>
</template>

<script>
import iconButtonMixin from '../../mixins/icon-button';
import linkMixin from '../../mixins/link';

export default {
  name: 'ui-icon-link',
  mixins: [iconButtonMixin, linkMixin]
};
</script>
