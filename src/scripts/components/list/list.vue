<template>
  <ul :class="className">
    <slot>
      <!-- <ui-item> -->
    </slot>
  </ul>
</template>

<script>
import { MDCList } from '../../../material-components-web/list';
import listMixin from '../../mixins/list';
import UI_LIST from './constants';

export default {
  name: 'ui-list',
  mixins: [listMixin],
  model: {
    prop: 'selectedIndex',
    event: UI_LIST.EVENT.ACTION
  },
  props: {
    // States
    selectedIndex: {
      type: Number,
      default: -1
    },
    // UI attributes
    singleSelection: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      UI_LIST,
      $list: null
    };
  },
  mounted() {
    this.$list = new MDCList(this.$el);

    // TODO: has bug? Execute twice in <ui-dismissible-drawer> and <ui-modal-drawer>
    this.$list.listen(`MDCList:${UI_LIST.EVENT.ACTION}`, ({ detail }) => {
      this.$emit(UI_LIST.EVENT.ACTION, detail.index);
    });

    if (this.singleSelection) {
      this.$list.singleSelection = true;
    }
  }
};
</script>
