<template>
  <div class="demo--card">
    <section class="hero">
      <ui-card class="demo-card">
        <ui-card-content>
          <ui-card-media rectangle class="demo-card__media demo-card__media--16-9"></ui-card-media>
          <div class="demo-card__primary">
            <h2 :class="[$tt('headline6'), 'demo-card__title']">Our Changing Planet</h2>
            <h3 :class="[$tt('subtitle2'), 'demo-card__subtitle']">by Kurt Wagner</h3>
          </div>
          <div :class="[$tt('body2'), 'demo-card__secondary']">
            Visit ten places on our planet that are undergoing the biggest changes today.
          </div>
        </ui-card-content>
        <ui-card-actions>
          <ui-card-buttons>
            <ui-button>Read</ui-button>
            <ui-button>Bookmark</ui-button>
          </ui-card-buttons>
          <ui-card-icons>
            <ui-icon-button :on="icon1.on" :off="icon1.off"></ui-icon-button>
            <ui-icon-button>share</ui-icon-button>
            <ui-icon-button>more_vert</ui-icon-button>
          </ui-card-icons>
        </ui-card-actions>
      </ui-card>
    </section>

    <h1 :class="$tt('headline3')">0. Usage</h1>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h1 :class="$tt('headline3')">1. Example</h1>
    <section class="demo-card-collection">
      <ui-card outlined class="demo-card">
        <div :class="[$tt('subtitle2'), 'demo-card-article-group-heading']">Headlines</div>
        <ui-list-divider></ui-list-divider>

        <template v-for="(item, index) in list">
          <a :key="`item${index}`" class="demo-card-article" v-ripple>
            <h2 :class="[$tt('headline5'), 'demo-card-article__title']">{{ item.title }}</h2>
            <p :class="[$tt('body2'), 'demo-card-article__snippet']">{{ item.content }}</p>
          </a>
          <ui-list-divider :key="`divider${index}`"></ui-list-divider>
        </template>

        <ui-card-actions fullBleed>
          <ui-link class="demo-card-action">
            All Business Headlines
            <ui-icon>arrow_forward</ui-icon>
          </ui-link>
        </ui-card-actions>
      </ui-card>
    </section>
    <ui-accordion>
      <ui-markdown :text="code[1]"></ui-markdown>
    </ui-accordion>

    <section class="demo-card-collection">
      <ui-card class="demo-card demo-card--photo">
        <ui-card-content class="demo-card__primary-action">
          <ui-card-media square class="demo-card__media">
            <ui-card-media-content class="demo-card__media-content--with-title">
              <div :class="[$tt('subtitle2'), 'demo-card__media-title']">
                Vacation Photos
              </div>
            </ui-card-media-content>
          </ui-card-media>
        </ui-card-content>
        <ui-card-actions>
          <ui-card-icons>
            <ui-icon-button :on="icon1.on" :off="icon1.off"></ui-icon-button>
            <ui-icon-button :on="icon2.on" :off="icon2.off"></ui-icon-button>
            <ui-icon-button>share</ui-icon-button>
          </ui-card-icons>
        </ui-card-actions>
      </ui-card>
    </section>
    <ui-accordion>
      <ui-markdown :text="code[2]"></ui-markdown>
    </ui-accordion>

    <section class="demo-card-collection">
      <ui-card class="demo-card demo-card--music">
        <ui-card-content class="demo-card__primary-action">
          <div class="demo-card__music-row">
            <ui-card-media square class="demo-card__media demo-card__media--music"></ui-card-media>
            <div class="demo-card__music-info">
              <div :class="[$tt('headline5'), 'demo-card__music-title']">Rozes</div>
              <div :class="[$tt('body2'), 'demo-card__music-artist']">Under the Grave</div>
              <div :class="[$tt('body2'), 'demo-card__music-year']">(2016)</div>
            </div>
          </div>
        </ui-card-content>
        <ui-list-divider></ui-list-divider>
        <ui-card-actions>
          <ui-card-buttons class="demo-card__action-buttons--text-only">Rate this album</ui-card-buttons>
          <ui-card-icons>
            <ui-icon v-for="i in 5" :key="i"
              class="demo-card__action-icon--star"
              :title="`${i} star${ i > 1 ? 's' : '' }`">star_border</ui-icon>
          </ui-card-icons>
        </ui-card-actions>
      </ui-card>
    </section>
    <ui-accordion>
      <ui-markdown :text="code[3]"></ui-markdown>
    </ui-accordion>

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
  metaInfo: {
    titleTemplate: '%s - Card'
  },
  mixins: [snippets],
  data() {
    return {
      list: [
        {
          title: 'Copper on the rise',
          content:
            'Copper price soars amid global market optimism and increased demand.'
        },
        {
          title: 'U.S. tech startups rebound',
          content:
            'Favorable business conditions have allowed startups to secure more fundraising deals compared to last year.'
        },
        {
          title: `Asia's clean energy ambitions`,
          content:
            'China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast Asia.'
        }
      ],
      icon1: {
        on: {
          content: 'favorite',
          label: 'Remove From Favorites'
        },
        off: {
          content: 'favorite_border',
          label: 'Add to Favorites'
        }
      },
      icon2: {
        on: {
          content: 'bookmark',
          label: 'Remove bookmark'
        },
        off: {
          content: 'bookmark_border',
          label: 'Add bookmark'
        }
      }
    };
  },
  created() {
    this.showCode('card', 3);
  }
};
</script>
