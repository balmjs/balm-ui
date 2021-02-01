<template>
  <div :class="className">
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface">
        <h2 v-if="options.title" class="mdc-dialog__title">
          {{ options.title }}
        </h2>
        <div
          v-if="options.raw"
          class="mdc-dialog__content"
          v-html="options.message"
        ></div>
        <div v-else class="mdc-dialog__content">
          <i
            v-if="materialIcon"
            :class="['material-icons mdc-alert-dialog__icon', stateClassName]"
          >
            {{ materialIcon }}
          </i>
          <span class="mdc-alert-dialog__message">{{ options.message }}</span>
        </div>
        <footer class="mdc-dialog__actions">
          <slot></slot>
        </footer>
      </div>
    </div>
    <div class="mdc-dialog__scrim"></div>
  </div>
</template>

<script>
import stateTypeMixins from '../../mixins/state-type';

// For $alert/$confirm
export default {
  name: 'MdcDialog',
  mixins: [stateTypeMixins],
  props: {
    // States
    open: {
      type: Boolean,
      default: false
    },
    // UI attributes
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      opening: true,
      opened: false,
      state: '',
      stateOutlined: false
    };
  },
  computed: {
    className() {
      return [
        'mdc-dialog',
        this.options.className,
        {
          'mdc-dialog--opening': this.opening,
          'mdc-dialog--open': this.opened
        }
      ];
    }
  },
  watch: {
    open(val) {
      if (val) {
        setTimeout(() => {
          this.opened = true;
          setTimeout(() => {
            this.opening = false;
          }, 150);
        }, 150);
      }
    }
  },
  created() {
    if (this.options.state) {
      this.state = this.options.state;
      this.stateOutlined = this.options.stateOutlined;
    }
  }
};
</script>
