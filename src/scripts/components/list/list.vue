<template>
  <ul ref="list" :class="className" :role="role">
    <slot></slot>
  </ul>
</template>

<script>
import { UI_LIST } from './constants';

export default {
  name: 'UiList',
  customOptions: {
    UI_LIST
  }
};
</script>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import { strings } from '../../../material-components-web/list/constants';
import { listProps, useList } from '../../mixins/list';
import { useRipple } from '../../mixins/ripple';

const props = defineProps({
  ...listProps,
  // States
  modelValue: {
    type: Number,
    default: -1
  },
  // UI attributes
  singleSelection: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([UI_LIST.EVENTS.ACTION]);

const list = ref(null);
const state = reactive({
  role: null
});
const { role } = toRefs(state);

function init($list) {
  $list.listen(strings.ACTION_EVENT, ({ detail }) => {
    emit(UI_LIST.EVENTS.ACTION, detail.index);
  });

  update($list);

  // Making lists accessible
  state.role =
    list.value.getAttribute('role') ||
    (props.singleSelection ? 'listbox' : 'list');
}

function update($list) {
  if ($list) {
    if (props.singleSelection && props.modelValue > -1) {
      $list.singleSelection = true;
      $list.selectedIndex = props.modelValue;
    }

    if (!props.nonInteractive) {
      $list.listElements.forEach((itemEl) => {
        useRipple(itemEl);

        const itemRole = itemEl.getAttribute('role');
        if (itemRole === 'checkbox' || itemRole === 'radio') {
          $list.layout();
        }
      });
    }
  }
}

const { className } = useList(list, props, { init, update });

defineExpose({
  role
});
</script>
