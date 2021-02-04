<template>
  <docs-page
    name="card"
    :apis="[
      'ui-card',
      'card',
      'card-content',
      'card-media',
      'card-media-content',
      'card-text',
      'card-actions',
      'card-buttons',
      'card-icons'
    ]"
    demo-count="3"
  >
    <template #hero>
      <div class="hero-demo">
        <ui-card :outlined="typeOption === 1" class="demo-card">
          <ui-card-content>
            <ui-card-media
              v-if="cardOptions.media"
              rectangle
              :style="`background-image:url('${cardMedia}')`"
            ></ui-card-media>
            <ui-card-text>
              <div :class="$tt('headline6')">Card title</div>
              <div
                :class="[
                  $tt('subtitle2'),
                  $theme.getTextClass('secondary', $store.theme)
                ]"
              >
                Secondary text
              </div>
            </ui-card-text>
            <ui-card-text v-if="cardOptions.supportingText">
              <div
                :class="[
                  $tt('subtitle2'),
                  $theme.getTextClass('secondary', $store.theme)
                ]"
              >
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
          v-model="typeOption"
          class="hero-option"
          :options="TypeOptions"
        >
          Type
        </ui-select>
        <div class="hero-option hero-options">
          <ui-form-field>
            <ui-checkbox
              id="card-media"
              v-model="cardOptions.media"
              :value="1"
            ></ui-checkbox>
            <label for="card-media">Media</label>
          </ui-form-field>
          <ui-form-field>
            <ui-checkbox
              id="card-supporting-text"
              v-model="cardOptions.supportingText"
              :value="1"
            ></ui-checkbox>
            <label for="card-supporting-text">Supporting text</label>
          </ui-form-field>
          <ui-form-field>
            <ui-checkbox
              id="card-buttons"
              v-model="cardOptions.buttons"
              :value="1"
            ></ui-checkbox>
            <label for="card-buttons">Buttons</label>
          </ui-form-field>
        </div>
      </div>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demo">
        <ui-card outlined class="demo-card">
          <div
            :class="[
              $tt('subtitle2'),
              $theme.getTextClass('secondary', $store.theme),
              'demo-card-article-group-heading'
            ]"
          >
            Headlines
          </div>
          <ui-list-divider></ui-list-divider>

          <template v-for="(item, index) in list" :key="`item${index}`">
            <a v-ripple class="demo-card-article">
              <h2 :class="[$tt('headline5'), 'demo-card-article__title']">
                {{ item.title }}
              </h2>
              <p
                :class="[
                  $theme.getTextClass('secondary', $store.theme),
                  'demo-card-article__snippet'
                ]"
              >
                {{ item.content }}
              </p>
            </a>
            <ui-list-divider></ui-list-divider>
          </template>

          <ui-card-actions full-bleed>
            <ui-button class="demo-card-action">
              All Business Headlines
              <template #after>
                <ui-icon>arrow_forward</ui-icon>
              </template>
            </ui-button>
          </ui-card-actions>
        </ui-card>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
        <ui-card class="demo-card demo-card--photo">
          <ui-card-content class="demo-card__primary-action">
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
              <ui-icon-button
                :class="$theme.getTextClass('icon', $store.theme)"
                :toggle="icon1"
              ></ui-icon-button>
              <ui-icon-button
                :class="$theme.getTextClass('icon', $store.theme)"
                :toggle="icon2"
              ></ui-icon-button>
              <ui-icon-button
                :class="$theme.getTextClass('icon', $store.theme)"
                icon="share"
              ></ui-icon-button>
            </ui-card-icons>
          </ui-card-actions>
        </ui-card>
      </div>
      <ui-snippet :code="$store.demos[2]"></ui-snippet>
    </section>

    <section class="demo-wrapper">
      <div class="demo">
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
            <ui-card-buttons class="demo-card__action-buttons--text-only"
              >Rate this album</ui-card-buttons
            >
            <ui-card-icons>
              <ui-icon
                v-for="i in 5"
                :key="i"
                :class="[
                  $theme.getTextClass('icon', $store.theme),
                  'demo-card__action-icon--star'
                ]"
                :title="`${i} star${i > 1 ? 's' : ''}`"
                >star_border</ui-icon
              >
            </ui-card-icons>
          </ui-card-actions>
        </ui-card>
      </div>
      <ui-snippet :code="$store.demos[3]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
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
  }
};
</script>
