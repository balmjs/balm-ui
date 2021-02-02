<template>
  <div v-if="!destroyed" :class="className">
    <slot name="icon">
      <i
        v-if="materialIcon"
        :class="getIconClassName('mdc-alert__icon')"
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
  computed: {
    className() {
      return [
        'mdc-alert',
        `mdc-alert--${this.stateType}`,
        {
          'mdc-alert--closed': this.closed
        }
      ];
    }
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
