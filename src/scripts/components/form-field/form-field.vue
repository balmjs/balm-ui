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
);
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
});
const marginRight = computed(() => {
  const formProps = state.form;
  return formProps && formProps.labelMarginRight
    ? +formProps.labelMarginRight
    : 0;
});
const actionPaddingLeft = computed(() => {
  const formProps = state.form;
  return formProps &&
    formProps.actionAlign === 'left' &&
    (flexBasis.value || marginRight.value)
    ? flexBasis.value + marginRight.value
    : 0;
});
// vertical form
const marginBottom = computed(() => {
  const formProps = state.form;
  return formProps && formProps.labelMarginBottom
    ? +formProps.labelMarginBottom
    : 0;
});

function getFrom(instance) {
  const parent = instance.parent;

  return parent.type.name === 'UiForm'
    ? parent.props
    : isCustomFormItem.value
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
      if (flexBasis.value) {
        label.style['flexBasis'] = `${flexBasis.value}px`;
      }
      if (marginRight.value) {
        label.style['marginRight'] = `${marginRight.value}px`;
      }
      if (marginBottom.value) {
        label.style['marginBottom'] = `${marginBottom.value}px`;
      }
    }

    const el = formField.value;
    if (
      el &&
      el.classList.contains('mdc-form__actions') &&
      actionPaddingLeft.value
    ) {
      el.style.paddingLeft = `${actionPaddingLeft.value}px`;
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
