<template>
  <li class="mdc-grid-tile">
    <div v-if="!noImage" class="mdc-grid-tile__primary">
      <template v-if="imgUrl">
        <img class="mdc-grid-tile__primary-content" :src="imgUrl" :alt="title">
      </template>
      <template v-else>
        <div :class="['mdc-grid-tile__primary-content', imgClass]"></div>
      </template>
    </div>
    <span v-if="!imageOnly" class="mdc-grid-tile__secondary">
      <template v-if="icon">
        <ui-icon
          :class="CLASSNAME_ICON"
          :size="iconSize"
          :dark="iconDark"
          :light="iconLight"
          :inactive="iconInactive">{{ icon }}</ui-icon>
      </template>
      <template v-else>
        <slot name="icon" :className="CLASSNAME_ICON"></slot>
      </template>
      <slot></slot>
    </span>
  </li>
</template>

<script>
import UiIcon from '../icon';
import iconMixin from '../../mixins/icon';

const CLASSNAME_ICON = 'mdc-grid-tile__icon';

export default {
  name: 'ui-grid-tile',
  components: {
    UiIcon
  },
  mixins: [iconMixin],
  props: {
    // ui attributes
    imgUrl: String,
    title: String,
    imgClass: [String, Array, Object],
    icon: String,
    // layout
    imageOnly: {
      type: Boolean,
      default: false
    },
    noImage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      CLASSNAME_ICON
    };
  }
};
</script>
