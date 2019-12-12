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
import rippleMixin from '../../mixins/ripple';
import UI_LIST from './constants';

export default {
  name: 'ui-list',
  mixins: [listMixin, rippleMixin],
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
  watch: {
    selectedIndex(val) {
      if (this.$list) {
        this.$list.selectedIndex = val;
      }
    }
  },
  mounted() {
    this.init();
  },
  updated() {
    if (!this.$list) {
      this.init();
    }
  },
  methods: {
    init() {
      this.$list = new MDCList(this.$el);

      const listElements = this.$list.listElements;

      if (listElements.length) {
        if (!this.nonInteractive) {
          listElements.map(listItemEl => this.initRipple(listItemEl));
        }

        if (this.singleSelection) {
          this.$list.singleSelection = true;
          this.$list.selectedIndex = this.selectedIndex;
        }

        // TODO: has bug? Execute twice in <ui-dismissible-drawer> and <ui-modal-drawer>
        this.$list.listen(`MDCList:${UI_LIST.EVENT.ACTION}`, ({ detail }) => {
          this.$emit(UI_LIST.EVENT.ACTION, detail.index);
        });
      } else {
        this.$list = null;
      }
    }
  }
};
</script>
