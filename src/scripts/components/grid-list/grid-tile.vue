<template>
  <li class="mdc-grid-tile">
    <slot>
      <ui-grid-tile-primary :image="image" :imageClass="imageClass"></ui-grid-tile-primary>
      <ui-grid-tile-secondary v-if="title" :icon="icon">
        <ui-grid-tile-title>{{ title }}</ui-grid-tile-title>
        <ui-grid-tile-subtitle v-if="subtitle">{{ subtitle }}</ui-grid-tile-subtitle>
      </ui-grid-tile-secondary>
    </slot>
  </li>
</template>

<script>
import UiGridTilePrimary from './grid-tile-primary';
import UiGridTileSecondary from './grid-tile-secondary';
import UiGridTileTitle from './grid-tile-title';
import UiGridTileSubtitle from './grid-tile-subtitle';

export default {
  name: 'ui-grid-tile',
  components: {
    UiGridTilePrimary,
    UiGridTileSecondary,
    UiGridTileTitle,
    UiGridTileSubtitle
  },
  props: {
    // UI attributes
    image: String,
    imageClass: String,
    icon: String,
    title: String,
    subtitle: String
  }
};
</script>
