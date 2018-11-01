<template>
  <a :class="className" :href="url">
    <!-- Supporting visuals -->
    <span v-if="hasFirstTile" class="mdc-list-item__graphic">
      <slot name="before">
        <i v-if="firstIcon" :class="UI_GLOBAL.mdi">{{ firstIcon }}</i>
        <img v-if="firstImage" :src="firstImage">
      </slot>
    </span>
    <!-- Primary text -->
    <span class="mdc-list-item__text">
      <slot></slot>
    </span>
    <!-- Metadata / List control -->
    <span v-if="hasLastTile" class="mdc-list-item__meta">
      <slot name="after">
        {{ lastText }}
        <i v-if="lastIcon" :class="UI_GLOBAL.mdi">{{ lastIcon }}</i>
        <img v-if="lastImage" :src="lastImage">
      </slot>
    </span>
  </a>
</template>

<script>
import itemMixin from '../../mixins/item';
import anchorMixin from '../../mixins/anchor';
import UI_GLOBAL from '../../config/constants';

export default {
  name: 'ui-item-a',
  mixins: [itemMixin, anchorMixin],
  data() {
    return {
      UI_GLOBAL
    };
  }
};
</script>
