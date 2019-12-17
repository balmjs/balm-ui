<template>
  <div :class="[$tt('body1'), 'demo--card']">
    <header class="hero component">
      <div class="hero-demo">
        <ui-card :outlined="typeOption === 1" class="demo-card">
          <ui-card-content v-ripple>
            <ui-card-media
              v-if="cardOptions.media"
              rectangle
              :style="`background:url('${cardMedia}')`"
            ></ui-card-media>
            <ui-card-text>
              <div :class="$tt('headline6')">
                Card title
              </div>
              <div :class="[$tt('subtitle2'), $textColor('secondary')]">
                Secondary text
              </div>
            </ui-card-text>
            <ui-card-text v-if="cardOptions.supportingText">
              <div :class="[$tt('subtitle2'), $textColor('secondary')]">
                Greyhound divisively hello coldly wonderfully marginally far
                upon excluding.
              </div>
            </ui-card-text>
          </ui-card-content>
          <ui-card-actions v-if="cardOptions.buttons">
            <ui-button>Action1</ui-button>
            <ui-button>Action2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>
      <div class="hero-options">
        <ui-select
          class="hero-option"
          :options="TypeOptions"
          v-model="typeOption"
          >Type</ui-select
        >
        <div class="hero-option hero-options">
          <ui-form-field>
            <ui-checkbox
              id="card-media"
              :value="1"
              v-model="cardOptions.media"
            ></ui-checkbox>
            <label for="card-media">Media</label>
          </ui-form-field>
          <ui-form-field>
            <ui-checkbox
              id="card-supporting-text"
              :value="1"
              v-model="cardOptions.supportingText"
            ></ui-checkbox>
            <label for="card-supporting-text">Supporting text</label>
          </ui-form-field>
          <ui-form-field>
            <ui-checkbox
              id="card-buttons"
              :value="1"
              v-model="cardOptions.buttons"
            ></ui-checkbox>
            <label for="card-buttons">Buttons</label>
          </ui-form-field>
        </div>
      </div>
    </header>

    <ui-toc-affix></ui-toc-affix>

    <div :class="$tt('body2')">
      <h4 v-anchor:id="'ui-usage'" :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 v-anchor:id="'ui-demo'" :class="$tt('headline4')">1. Demo</h4>
      <section class="demo-card-collection">
        <ui-card outlined class="demo-card">
          <div :class="[$tt('subtitle2'), 'demo-card-article-group-heading']">
            Headlines
          </div>
          <ui-list-divider></ui-list-divider>

          <template v-for="(item, index) in list">
            <a :key="`item${index}`" class="demo-card-article" v-ripple>
              <h2 :class="[$tt('headline5'), 'demo-card-article__title']">
                {{ item.title }}
              </h2>
              <p class="demo-card-article__snippet">{{ item.content }}</p>
            </a>
            <ui-list-divider :key="`divider${index}`"></ui-list-divider>
          </template>

          <ui-card-actions fullBleed>
            <ui-a class="demo-card-action">
              All Business Headlines
              <template #after>
                <ui-icon>arrow_forward</ui-icon>
              </template>
            </ui-a>
          </ui-card-actions>
        </ui-card>
      </section>
      <ui-accordion>
        <ui-markdown :text="code[1]"></ui-markdown>
      </ui-accordion>

      <section class="demo-card-collection">
        <ui-card class="demo-card demo-card--photo">
          <ui-card-content class="demo-card__primary-action" v-ripple>
            <ui-card-media square class="demo-card__media">
              <ui-card-media-content
                class="demo-card__media-content--with-title"
              >
                <div :class="[$tt('subtitle2'), 'demo-card__media-title']">
                  Vacation Photos
                </div>
              </ui-card-media-content>
            </ui-card-media>
          </ui-card-content>
          <ui-card-actions>
            <ui-card-icons>
              <ui-icon-button :toggle="icon1"></ui-icon-button>
              <ui-icon-button :toggle="icon2"></ui-icon-button>
              <ui-icon-button icon="share"></ui-icon-button>
            </ui-card-icons>
          </ui-card-actions>
        </ui-card>
      </section>
      <ui-accordion>
        <ui-markdown :text="code[2]"></ui-markdown>
      </ui-accordion>

      <section class="demo-card-collection">
        <ui-card class="demo-card demo-card--music">
          <ui-card-content class="demo-card__primary-action" v-ripple>
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
            <ui-card-buttons class="demo-card__action-buttons--text-only"
              >Rate this album</ui-card-buttons
            >
            <ui-card-icons>
              <ui-icon
                v-for="i in 5"
                :key="i"
                class="demo-card__action-icon--star"
                :title="`${i} star${i > 1 ? 's' : ''}`"
                >star_border</ui-icon
              >
            </ui-card-icons>
          </ui-card-actions>
        </ui-card>
      </section>
      <ui-accordion>
        <ui-markdown :text="code[3]"></ui-markdown>
      </ui-accordion>

      <h4 v-anchor:id="'ui-apis'" :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="card"></ui-apidocs>
      <ui-apidocs name="card-content"></ui-apidocs>
      <ui-apidocs name="card-media"></ui-apidocs>
      <ui-apidocs name="card-media-content"></ui-apidocs>
      <ui-apidocs name="card-actions"></ui-apidocs>
      <ui-apidocs name="card-buttons"></ui-apidocs>
      <ui-apidocs name="card-icons"></ui-apidocs>

      <h4 v-anchor:id="'ui-sass'" :class="$tt('headline4')">
        3. Sass Variables
      </h4>
      <ui-cssdocs name="card"></ui-cssdocs>
    </div>
  </div>
</template>

<script>
import snippets from '@/mixins/snippets';
import cardMedia from '@/assets/card-media.svg';

const TypeOptions = [
  {
    label: 'Elevated',
    value: 0
  },
  {
    label: 'Outlined',
    value: 1
  }
];

export default {
  metaInfo: {
    titleTemplate: '%s - Card'
  },
  mixins: [snippets],
  data() {
    return {
      // hero
      cardMedia,
      TypeOptions,
      typeOption: 0,
      cardOptions: {
        media: false,
        supportingText: false,
        buttons: false
      },
      // demo
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
        on: 'favorite',
        off: 'favorite_border'
      },
      icon2: {
        on: 'bookmark',
        off: 'bookmark_border'
      }
    };
  },
  created() {
    this.showCode('card', 3);
  }
};
</script>
