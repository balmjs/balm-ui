<template>
  <li :class="className" @click="$parent.onChange">
    <span v-if="hasFirstTile" class="mdc-list-item__graphic">
      <slot name="before">
        <i v-if="firstIcon" class="material-icons">{{ firstIcon }}</i>
        <img v-if="firstImage" :src="firstImage">
      </slot>
    </span>

    <span class="mdc-list-item__text">
      <slot><!-- Item text --></slot>
    </span>

    <span v-if="hasLastTile" class="mdc-list-item__meta">
      <slot name="after">
        {{ lastText }}
        <i v-if="lastIcon" class="material-icons">{{ lastIcon }}</i>
        <img v-if="lastImage" :src="lastImage">
      </slot>
    </span>
  </li>
</template>

<script>
import itemMixin from '../../mixins/item';

export default {
  name: 'ui-item',
  mixins: [itemMixin]
};
</script>
