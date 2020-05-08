<template>
  <div
    v-if="!destroyed"
    :class="[
      'mdc-alert',
      `mdc-alert--${iconType}`,
      {
        'mdc-alert--closed': closed
      }
    ]"
  >
    <slot name="icon">
      <i
        v-if="materialIcon"
        :class="['material-icons mdc-alert__icon', iconClassName]"
        >{{ materialIcon }}</i
      >
    </slot>
    <div class="mdc-alert__content">
      <slot></slot>
    </div>
    <i
      v-if="closable"
      class="material-icons mdc-alert__close-button"
      @click="onClose"
      >clear</i
    >
  </div>
</template>

<script>
import iconTypeMixins from '../../mixins/icon-type';

export default {
  name: 'ui-alert',
  mixins: [iconTypeMixins],
  props: {
    icon: {
      type: String,
      default: '' // success, info, warning, error, help
    },
    iconOutlined: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      closed: false,
      destroyed: false
    };
  },
  methods: {
    onClose() {
      this.closed = true;

      setTimeout(() => {
        this.destroyed = true;
      }, 200);
    }
  }
};
</script>
