<template>
  <div ref="formField" :class="className" :style="style">
    <slot>
      <!-- Form item: checkbox or radio + label -->
    </slot>
  </div>
</template>

<script>
export default {
  name: 'UiFormField',
  customOptions: {}
};
</script>

<script setup>
import {
  ref,
  reactive,
  toRefs,
  computed,
  onMounted,
  useSlots,
  getCurrentInstance
} from 'vue';
import { MDCFormField } from '../../../material-components-web/form-field';

const props = defineProps({
  // UI attributes
  nowrap: {
    type: Boolean,
    default: false
  },
  alignEnd: {
    type: Boolean,
    default: false
  },
  spaceBetween: {
    type: Boolean,
    default: false
  }
});

const slots = useSlots();

const instance = getCurrentInstance();
const formField = ref(null);
const state = reactive({
  $formField: null,
  form: null
});
const { $formField } = toRefs(state);

const className = computed(() => {
  return {
    'mdc-form-field': true,
    'mdc-form-field--nowrap': props.nowrap,
    'mdc-form-field--align-end': props.alignEnd,
    'mdc-form-field--space-between': props.spaceBetween
  };
});
const isCustomFormItem = computed(
  () => formField.value && formField.value.classList.contains('mdc-form__item')
).value;
const style = computed(() => {
  const formProps = state.form;
  return formProps && formProps.itemMarginBottom
    ? {
        'margin-bottom': `${formProps.itemMarginBottom}px`
      }
    : 0;
});
// horizontal form
const flexBasis = computed(() => {
  const formProps = state.form;
  return formProps && formProps.labelWidth ? +formProps.labelWidth : 0;
}).value;
const marginRight = computed(() => {
  const formProps = state.form;
  return formProps && formProps.labelMarginRight
    ? +formProps.labelMarginRight
    : 0;
}).value;
const actionPaddingLeft = computed(() => {
  const formProps = state.form;
  return formProps &&
    formProps.actionAlign === 'left' &&
    (flexBasis || marginRight)
    ? flexBasis + marginRight
    : 0;
}).value;
// vertical form
const marginBottom = computed(() => {
  const formProps = state.form;
  return formProps && formProps.labelMarginBottom
    ? +formProps.labelMarginBottom
    : 0;
}).value;

function getFrom(instance) {
  const parent = instance.parent;

  return parent.type.name === 'UiForm'
    ? parent.props
    : isCustomFormItem
    ? getFrom(parent)
    : null;
}

function initFormLabel() {
  if (slots.default) {
    const $label = slots.default().find((component) => {
      return component.type === 'label';
    });

    const label = $label?.el;
    if (label) {
      if (flexBasis) {
        label.style['flexBasis'] = `${flexBasis}px`;
      }
      if (marginRight) {
        label.style['marginRight'] = `${marginRight}px`;
      }
      if (marginBottom) {
        label.style['marginBottom'] = `${marginBottom}px`;
      }
    }

    const el = formField.value;
    if (el && el.classList.contains('mdc-form__actions') && actionPaddingLeft) {
      el.style.paddingLeft = `${actionPaddingLeft}px`;
    }
  }
}

onMounted(() => {
  state.$formField = new MDCFormField(formField.value);

  state.form = getFrom(instance);

  initFormLabel();
});

defineExpose({
  $formField
});
</script>
