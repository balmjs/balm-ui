<template>
  <a :class="UI_LIST.SLOT_CLASS.item" :href="url">
    <span v-if="hasFirstTile" class="mdc-list-item__graphic">
      <slot name="first">
        <i v-if="firstIcon" class="material-icons">{{ firstIcon }}</i>
        <img v-if="firstImage" :src="firstImage">
      </slot>
    </span>

    <template v-if="$parent.twoLine">
      <span class="mdc-list-item__text">
        <slot><!-- Item text --></slot>
      </span>
    </template>
    <template v-else>
      <slot><!-- Item text --></slot>
    </template>

    <span v-if="hasLastTile" class="mdc-list-item__meta">
      <slot name="after">
        {{ lastText }}
        <i v-if="lastIcon" class="material-icons">{{ lastIcon }}</i>
        <img v-if="lastImage" :src="lastImage">
      </slot>
    </span>
  </a>
</template>

<script>
import itemMixin from '../../mixins/item';
import linkMixin from '../../mixins/link';
import UI_LIST from './constants';

export default {
  name: 'ui-item-link',
  mixins: [itemMixin, linkMixin],
  data() {
    return {
      UI_LIST
    };
  }
};
</script>
