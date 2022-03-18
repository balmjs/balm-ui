<template>
  <div :class="className">
    <div class="mdc-dialog__container">
      <div class="mdc-dialog__surface">
        <h2 v-if="options.title" class="mdc-dialog__title">
          {{ options.title }}
        </h2>
        <div
          v-if="options.raw"
          :class="UI_DIALOG.cssClasses.content"
          v-html="options.message"
        ></div>
        <div v-else :class="UI_DIALOG.cssClasses.content">
          <i
            v-if="materialIcon"
            :class="
              UI_GLOBAL.getMaterialIconClass([
                stateClassName,
                'mdc-alert-dialog__icon'
              ])
            "
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
import UI_GLOBAL from '../../config/constants';
import { UI_DIALOG } from './constants';

// For $alert/$confirm
export default {
  name: 'MdcDialog',
  customOptions: {
    UI_GLOBAL,
    UI_DIALOG
  }
};
</script>

<script setup>
import { reactive, computed, watch, onBeforeMount } from 'vue';
import { useStateType } from '../../mixins/state-type';

const props = defineProps({
  // States
  open: {
    type: Boolean,
    default: false
  },
  // UI attributes
  options: {
    type: Object,
    default: () => ({})
  }
});

const state = reactive({
  opening: true,
  opened: false,
  state: '',
  stateOutlined: false
});

const { stateClassName, materialIcon } = useStateType(state);

const className = computed(() => [
  'mdc-dialog',
  props.options.className,
  {
    'mdc-dialog--opening': state.opening,
    'mdc-dialog--open': state.opened
  }
]);

watch(
  () => props.open,
  (val) => {
    if (val) {
      // animation
      setTimeout(() => {
        state.opened = true;
        setTimeout(() => {
          state.opening = false;
        }, 150);
      }, 150);
    } else {
      // reset
      state.opening = true;
      state.opened = false;
    }
  }
);

onBeforeMount(() => {
  if (props.options.state) {
    state.state = props.options.state;
    state.stateOutlined = props.options.stateOutlined;
  }
});
</script>
