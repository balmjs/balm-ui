```html
<ui-card class="demo-card demo-card--music">
  <ui-card-content class="demo-card__primary-action">
    <div class="demo-card__music-row">
      <ui-card-media
        square
        class="demo-card__media demo-card__media--music"
      ></ui-card-media>
      <div class="demo-card__music-info">
        <div :class="[$tt('headline5'), 'demo-card__music-title']">Rozes</div>
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
```

```scss
@use '@material/card/mixins' as card-mixins;
@use '@material/rtl/mixins' as rtl-mixins;

.demo-card {
  width: 320px;
}

.demo-card__media {
  background-image: url('../images/1-1.jpg');
}

.demo-card--music {
  @include card-mixins.shape-radius((24px, 4px), true);
}

.demo-card__music-row {
  display: flex;
  border-top-left-radius: inherit;

  @include rtl-mixins.rtl {
    border-top-left-radius: 0;
    border-top-right-radius: inherit;
  }
}

.demo-card__media--music {
  width: 110px;
  border-top-left-radius: inherit;

  @include rtl-mixins.rtl {
    border-top-left-radius: 0;
    border-top-right-radius: inherit;
  }
}

.demo-card__music-info {
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
}

.demo-card__action-buttons--text-only {
  margin-left: 8px;
}

.demo-card__action-icon--star {
  margin-left: 4px;
  margin-right: 4px;
  cursor: pointer;
}
```
