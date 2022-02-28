<template>
  <div ref="form" :class="className">
    <slot
      :itemClass="UI_FORM.cssClasses.item"
      :subitemClass="UI_FORM.cssClasses.subitem"
      :actionClass="UI_FORM.cssClasses.actions"
    ></slot>
  </div>
</template>

<script>
// Define text divider constants
const UI_FORM = {
  TYPES: {
    horizontal: 0,
    vertical: 1
  },
  cssClasses: {
    item: 'mdc-form__item',
    subitem: 'mdc-form__subitem',
    actions: 'mdc-form__actions'
  }
};

export default {
  name: 'UiForm',
  customOptions: {
    UI_FORM
  }
};
</script>

<script setup>
import { ref, computed, onBeforeMount, onMounted, nextTick } from 'vue';
import checkType from '../../mixins/type';

const props = defineProps({
  // UI variants
  type: {
    type: [String, Number],
    default: 0
  },
  // UI attributes
  nowrap: {
    type: Boolean,
    default: false
  },
  labelTopAligned: {
    type: Boolean,
    default: false
  },
  labelRightAligned: {
    type: Boolean,
    default: false
  },
  labelTopRightAligned: {
    type: Boolean,
    default: false
  },
  // form items
  itemMarginBottom: {
    type: [String, Number],
    default: 0
  },
  actionAlign: {
    type: String,
    default: 'left'
  },
  // horizontal form
  labelWidth: {
    type: [String, Number],
    default: 0
  },
  labelMarginRight: {
    type: [String, Number],
    default: 0
  },
  // vertical form
  labelMarginBottom: {
    type: [String, Number],
    default: 0
  }
});

const isVertical = computed(
  () => checkType(props, UI_FORM.TYPES, 'vertical') || props.type === '|'
);
const className = computed(() => ({
  'mdc-form': true,
  'mdc-form--horizontal': !isVertical.value,
  'mdc-form--vertical': isVertical.value,
  'mdc-form--nowrap': props.nowrap,
  'mdc-form--label-top-aligned': props.labelTopAligned,
  'mdc-form--label-right-aligned': props.labelRightAligned,
  'mdc-form--label-top-right-aligned': props.labelTopRightAligned,
  'mdc-form--actions-center': props.actionAlign === 'center',
  'mdc-form--actions-right': props.actionAlign === 'right'
}));

const form = ref(null);

onBeforeMount(() => {
  if (isVertical.value) {
    if (props.labelWidth || props.labelMarginRight) {
      throw new Error(
        `[UiForm]: The 'labelWidth'/'labelMarginRight' prop only takes effect in the horizontal type form`
      );
    }
  } else {
    if (props.labelMarginBottom) {
      throw new Error(
        `[UiForm]: The 'labelMarginBottom' prop only takes effect in the vertical type form`
      );
    }
  }
});

onMounted(() => {
  nextTick(() => {
    [...form.value.children]
      .filter(
        (child) => child.classList && child.classList.contains('mdc-form-field')
      )
      .forEach((child) => child.classList.add(UI_FORM.cssClasses.item));
  });
});
</script>
