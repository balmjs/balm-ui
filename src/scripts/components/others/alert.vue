<template>
  <div
    v-if="!destroyed"
    :class="[
      'mdc-alert',
      `mdc-alert--${stateType}`,
      { 'mdc-alert--closed': closed }
    ]"
  >
    <slot name="icon">
      <i
        v-if="materialIcon"
        :class="['material-icons mdc-alert__icon', stateClassName]"
        v-text="materialIcon"
      ></i>
    </slot>
    <div class="mdc-alert__content">
      <slot></slot>
    </div>
    <i
      v-if="closable"
      class="material-icons mdc-alert__close-button"
      @click="onClose"
    >
      clear
    </i>
  </div>
</template>

<script>
import stateTypeMixins from '../../mixins/state-type';

export default {
  name: 'UiAlert',
  mixins: [stateTypeMixins],
  props: {
    // UI attributes
    state: {
      type: String,
      default: '' // success, info, warning, error, help
    },
    stateOutlined: {
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
