<template>
  <div v-if="!destroyed" :class="className">
    <slot name="icon">
      <i
        v-if="materialIcon"
        :class="
          UI_GLOBAL.getMaterialIconClass(stateClassName, 'mdc-alert__icon')
        "
        v-text="materialIcon"
      ></i>
    </slot>
    <div class="mdc-alert__content">
      <slot></slot>
    </div>
    <i
      v-if="closable"
      :class="UI_GLOBAL.getMaterialIconClass('mdc-alert__close-button')"
      @click="handleClose"
    >
      clear
    </i>
  </div>
</template>

<script>
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'UiAlert',
  customOptions: {
    UI_GLOBAL
  }
};
</script>

<script setup>
import { reactive, toRefs, computed } from 'vue';
import { useStateType } from '../../mixins/state-type';

const props = defineProps({
  // UI attributes
  state: {
    type: String,
    default: '' // 'success' | 'info' | 'warning' | 'error' | 'help'
  },
  stateOutlined: {
    type: Boolean,
    default: false
  },
  closable: {
    type: Boolean,
    default: false
  }
});

const state = reactive({
  closed: false,
  destroyed: false
});
const { closed, destroyed } = toRefs(state);

const { stateType, stateClassName, materialIcon } = useStateType(props);

const className = computed(() => [
  'mdc-alert',
  `mdc-alert--${stateType.value}`,
  {
    'mdc-alert--closed': state.closed
  }
]);

function handleClose() {
  state.closed = true;

  setTimeout(() => {
    state.destroyed = true;
  }, 200);
}
</script>
