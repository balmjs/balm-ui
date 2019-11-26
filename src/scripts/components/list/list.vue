<template>
  <ul :class="className">
    <slot
      :itemClass="UI_LIST.cssClasses.item"
      :selectedClass="UI_LIST.cssClasses.selected"
      :activatedClass="UI_LIST.cssClasses.activated"
    ></slot>
  </ul>
</template>

<script>
import { MDCList } from '../../../material-components-web/list';
import UI_LIST from './constants';

export default {
  name: 'ui-list',
  model: {
    prop: 'selectedIndex',
    event: UI_LIST.EVENT.CHANGE
  },
  props: {
    type: {
      type: [Number, String],
      default: 1
    },
    // States
    selectedIndex: {
      type: Number,
      default: -1
    },
    // UI attributes
    nonInteractive: {
      type: Boolean,
      default: false
    },
    dense: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Boolean,
      default: false
    },
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
  computed: {
    className() {
      return {
        'mdc-list': true,
        'mdc-list--two-line': +this.type === UI_LIST.TYPES.twoLine,
        'mdc-list--non-interactive': this.nonInteractive,
        'mdc-list--dense': this.dense,
        'mdc-list--avatar-list': this.avatar
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$list = new MDCList(this.$el);

      if (this.singleSelection) {
        this.$list.singleSelection = true;
      }

      const selectedIndex = this.$list.selectedIndex;
      if (selectedIndex !== this.selectedIndex) {
        this.$emit(UI_LIST.EVENT.CHANGE, selectedIndex);
      }
    });
  },
  methods: {
    onChange() {
      this.$nextTick(() => {
        this.$emit(UI_LIST.EVENT.CHANGE, this.$list.selectedIndex);
      });
    }
  }
};
</script>
