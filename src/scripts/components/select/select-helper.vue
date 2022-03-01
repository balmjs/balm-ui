<template>
  <!-- Helper text (optional) -->
  <p :id="id" :class="className" aria-hidden="true">
    <slot>{{ validMessage }}</slot>
  </p>
</template>

<script>
import { UI_HELPER_TEXT } from '../../mixins/helper-text';

const name = 'UiSelectHelper';

export default {
  name,
  customOptions: {
    name,
    UI_HELPER_TEXT
  }
};
</script>

<script setup>
import { computed, onBeforeMount } from 'vue';
import { helperTextProps, useHelperText } from '../../mixins/helper-text';

const props = defineProps({
  ...helperTextProps
});

const emit = defineEmits([UI_HELPER_TEXT.EVENTS.CHANGE]);

const { hasValidMsg, validMessage } = useHelperText(props, { emit });

const isVisible = computed(() => !props.visible || hasValidMsg.value); // hasValidMsg: For css name bug
const className = computed(() => ({
  'mdc-select-helper-text': true,
  'mdc-select-helper-text--validation-msg-persistent': hasValidMsg.value,
  'mdc-select-helper-text--validation-msg': isVisible.value
}));

onBeforeMount(() => {
  const needHelperTextId = props.visible || hasValidMsg.value;

  if (!props.id && needHelperTextId) {
    console.warn(
      `[${name}]: The 'helperTextId' prop is required for <ui-select>`
    );
  }
});
</script>
