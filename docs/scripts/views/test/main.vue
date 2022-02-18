<template>
  <div class="page--card">
    <ui-card class="demo-card demo-card--music">
      <ui-card-content class="demo-card__primary-action">
        <div class="demo-card__music-row">
          <ui-card-media
            square
            class="demo-card__media demo-card__media--music"
          ></ui-card-media>
          <div class="demo-card__music-info">
            <div :class="[$tt('headline5'), 'demo-card__music-title']">
              Rozes
            </div>
            <div class="demo-card__music-artist">Under the Grave</div>
            <div class="demo-card__music-year">(2016)</div>
          </div>
        </div>
      </ui-card-content>
      <ui-list-divider></ui-list-divider>
      <ui-card-actions>
        <ui-card-buttons class="demo-card__action-buttons--text-only">
          Rate this album
        </ui-card-buttons>
        <ui-card-icons>
          <ui-icon
            v-for="i in 5"
            :key="i"
            class="demo-card__action-icon--star"
            :title="`${i} star${i > 1 ? 's' : ''}`"
          >
            star_border
          </ui-icon>
        </ui-card-icons>
      </ui-card-actions>
    </ui-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon1: {
        on: 'favorite',
        off: 'favorite_border'
      },
      icon2: {
        on: 'bookmark',
        off: 'bookmark_border'
      }
    };
  }
};
</script>

<style></style>
