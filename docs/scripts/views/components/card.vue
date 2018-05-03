<template>
  <div class="demo--card">
    <section class="hero">
      <ui-card class="demo-card">
        <ui-card-primary-action href="#">
          <ui-card-media rectangle class="demo-card__media demo-card__media--16-9"></ui-card-media>
          <div class="demo-card__primary">
            <h2 :class="[$tt('headline6'), 'demo-card__title']">Our Changing Planet</h2>
            <h3 :class="[$tt('subtitle2'), 'demo-card__subtitle']">by Kurt Wagner</h3>
          </div>
          <div :class="[$tt('body2'), 'demo-card__secondary']">
            Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
        </ui-card-primary-action>
        <ui-card-actions>
          <ui-card-buttons>
            <ui-button cardAction>Read</ui-button>
            <ui-button cardAction>Bookmark</ui-button>
          </ui-card-buttons>
          <ui-card-icons>
            <ui-icon-toggle cardIcon :on="icon1.on" :off="icon1.off"></ui-icon-toggle>
            <ui-icon-toggle cardIcon>share</ui-icon-toggle>
            <ui-icon-toggle cardIcon>more_vert</ui-icon-toggle>
          </ui-card-icons>
        </ui-card-actions>
      </ui-card>
    </section>

    <h1 :class="$tt('headline3')">0. Usage</h1>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h1 :class="$tt('headline3')">1. Example</h1>
    <section class="demo-card-collection">
      <div class="mdc-card mdc-card--outlined demo-card">
        <div class="demo-card-article-group-heading mdc-typography--subtitle2">Headlines</div>

        <hr class="mdc-list-divider">

        <a class="demo-card-article mdc-ripple-surface" href="#">
          <h2 class="demo-card-article__title mdc-typography--headline5">Copper on the rise</h2>
          <p class="demo-card-article__snippet mdc-typography--body2">
            Copper price soars amid global market optimism and increased demand.
          </p>
        </a>

        <hr class="mdc-list-divider">

        <a class="demo-card-article mdc-ripple-surface" href="#">
          <h2 class="demo-card-article__title mdc-typography--headline5">U.S. tech startups rebound</h2>
          <p class="demo-card-article__snippet mdc-typography--body2">
            Favorable business conditions have allowed startups to secure more fundraising deals compared to last
            year.
          </p>
        </a>

        <hr class="mdc-list-divider">

        <a class="demo-card-article mdc-ripple-surface" href="#">
          <h2 class="demo-card-article__title mdc-typography--headline5">Asia's clean energy ambitions</h2>
          <p class="demo-card-article__snippet mdc-typography--body2">
            China plans to invest billions of dollars for the development of over 300 clean energy projects in
            Southeast Asia.
          </p>
        </a>

        <hr class="mdc-list-divider">

        <div class="mdc-card__actions mdc-card__actions--full-bleed">
          <a class="mdc-button mdc-card__action mdc-card__action--button demo-card-action" href="#">
            All Business Headlines
            <i class="material-icons" aria-hidden="true">arrow_forward</i>
          </a>
        </div>
      </div>

      <ui-card class="demo-card demo-card--photo">
        <ui-card-primary-action class="demo-card__primary-action" href="#">
          <ui-card-media square class="demo-card__media">
            <ui-card-media-content class="demo-card__media-content--with-title">
              <div class="demo-card__media-title mdc-typography--subtitle2">
                Vacation Photos
              </div>
            </ui-card-media-content>
          </ui-card-media>
        </ui-card-primary-action>
        <ui-card-actions>
          <ui-card-icons>
            <ui-icon-toggle cardIcon :on="icon1.on" :off="icon1.off"></ui-icon-toggle>
            <ui-icon-toggle cardIcon :on="icon2.on" :off="icon2.off"></ui-icon-toggle>
            <ui-icon-toggle cardIcon>share</ui-icon-toggle>
          </ui-card-icons>
        </ui-card-actions>
      </ui-card>

      <ui-card class="demo-card demo-card--music">
        <ui-card-primary-action class="demo-card__primary-action" href="#">
          <div class="demo-card__music-row">
            <ui-card-media square class="demo-card__media demo-card__media--music"></ui-card-media>
            <div class="demo-card__music-info">
              <div class="demo-card__music-title mdc-typography--headline5">Rozes</div>
              <div class="demo-card__music-artist mdc-typography--body2">Under the Grave</div>
              <div class="demo-card__music-year mdc-typography--body2">(2016)</div>
            </div>
          </div>
        </ui-card-primary-action>
        <hr class="mdc-list-divider">
        <ui-card-actions class="mdc-card__actions">
          <ui-card-buttons class="demo-card__action-buttons--text-only">Rate this album</ui-card-buttons>
          <ui-card-icons>
            <ui-icon v-for="i in 5"
              class="demo-card__action-icon--star"
              :title="`${i} star${ i > 1 ? 's' : '' }`">star_border</ui-icon>
          </ui-card-icons>
        </ui-card-actions>
      </ui-card>
    </section>

    <h1 :class="$tt('headline3')">2. API</h1>
    <ui-apidocs name="card"></ui-apidocs>
    <ui-apidocs name="card-primary-action"></ui-apidocs>
    <ui-apidocs name="card-media"></ui-apidocs>
    <ui-apidocs name="card-media-content"></ui-apidocs>
    <ui-apidocs name="card-actions"></ui-apidocs>
    <ui-apidocs name="card-buttons"></ui-apidocs>
    <ui-apidocs name="card-icons"></ui-apidocs>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  mixins: [snippets],
  data() {
    return {
      icon1: {
        on: { content: 'favorite', label: 'Remove From Favorites' },
        off: { content: 'favorite_border', label: 'Add to Favorites' }
      },
      icon2: {
        on: { content: 'bookmark', label: 'Remove bookmark' },
        off: { content: 'bookmark_border', label: 'Add bookmark' }
      }
    };
  },
  created() {
    this.showCode('card', 3);
  }
};
</script>
