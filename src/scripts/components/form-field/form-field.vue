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
import { ref, computed, onMounted, useSlots } from 'vue';
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

const formField = ref(null);
let $formField = null;
let form = null;

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
  return form && form.itemMarginBottom
    ? {
        'margin-bottom': `${form.itemMarginBottom}px`
      }
    : 0;
});
// horizontal form
const flexBasis = computed(() => {
  return form && form.labelWidth ? +form.labelWidth : 0;
}).value;
const marginRight = computed(() => {
  return form && form.labelMarginRight ? +form.labelMarginRight : 0;
}).value;
const actionPaddingLeft = computed(() => {
  return form && form.actionAlign === 'left' && (flexBasis || marginRight)
    ? flexBasis + marginRight
    : 0;
}).value;
// vertical form
const marginBottom = computed(() => {
  return form && form.labelMarginBottom ? +form.labelMarginBottom : 0;
});

function getFrom(self = formField) {
  const parent = self.$parent;

  return parent.$.type.name === 'UiForm'
    ? parent
    : isCustomFormItem
    ? getFrom(parent)
    : null;
}

function initFormLabel() {
  const slots = useSlots();

  if (slots.default) {
    const $label = slots.default().find((component) => {
      return component.type === 'label';
    });

    if ($label) {
      const label = $label.el;
      ['flexBasis', 'marginRight', 'marginBottom'].forEach((key) => {
        if (key) {
          label.style[key] = `${key}px`;
        }
      });
    }

    const el = formField.value;
    if (el && el.classList.contains('mdc-form__actions') && actionPaddingLeft) {
      el.style.paddingLeft = `${actionPaddingLeft}px`;
    }
  }
}

onMounted(() => {
  $formField = new MDCFormField(formField.value);

  form = getFrom();

  initFormLabel();
});

defineExpose({
  $formField
});
</script>
