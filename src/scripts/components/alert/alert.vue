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
      @click="onClose"
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
import { ref, computed } from 'vue';
import { useStateType } from '../../mixins/state-type';

const props = defineProps({
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
});

let closed = ref(false);
let destroyed = ref(false);

const { stateType, stateClassName, materialIcon } = useStateType(props);

const className = computed(() => [
  'mdc-alert',
  `mdc-alert--${stateType}`,
  {
    'mdc-alert--closed': closed
  }
]);

function onClose() {
  closed.value = true;

  setTimeout(() => {
    destroyed.value = true;
  }, 200);
}
</script>
