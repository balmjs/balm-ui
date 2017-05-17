<template>
  <div class="demo--card">
    <section class="hero">
      <ui-card :class="'demo-card'">
        <ui-card-media class="demo-card__16-9-media"></ui-card-media>
        <ui-card-primary large hasSubtitle>
          <template slot="title">
            Title goes here
          </template>
          <template slot="subtitle">
            Subtitle here
          </template>
        </ui-card-primary>
        <ui-card-actions>
          <ui-button class="mdc-card__action" compact>Action 1</ui-button>
          <ui-button class="mdc-card__action" compact>Action 2</ui-button>
        </ui-card-actions>
      </ui-card>
    </section>

    <section class="demo-typography--section mdc-typography" id="demo-wrapper">
      <div>
        <ui-card :class="'demo-card'">
          <ui-card-media class="demo-card__16-9-media"></ui-card-media>
          <ui-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </ui-card-text>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card demo-card--with-avatar'">
          <ui-card-primary hasSubtitle>
            <template slot="before">
              <div class="demo-card__avatar"></div>
            </template>
            <template slot="title">
              Title
            </template>
            <template slot="subtitle">
              Subhead
            </template>
          </ui-card-primary>
          <ui-card-media class="demo-card__16-9-media"></ui-card-media>
          <ui-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </ui-card-text>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card demo-card--with-avatar'">
          <ui-card-primary hasSubtitle>
            <template slot="before">
              <div class="demo-card__avatar"></div>
            </template>
            <template slot="title">
              Title
            </template>
            <template slot="subtitle">
              Subhead
            </template>
          </ui-card-primary>
          <ui-card-media class="demo-card__16-9-media"></ui-card-media>
          <ui-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </ui-card-text>
          <ui-card-actions vertical>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card'">
          <ui-card-media class="demo-card__16-9-media"></ui-card-media>
          <ui-card-primary large hasSubtitle>
            <template slot="title">
              Title goes here
            </template>
            <template slot="subtitle">
              Subtitle here
            </template>
          </ui-card-primary>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card'">
          <ui-card-primary large hasSubtitle>
            <template slot="title">
              Title goes here
            </template>
            <template slot="subtitle">
              Subtitle here
            </template>
          </ui-card-primary>
          <ui-card-text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </ui-card-text>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card demo-card--bg-demo'" dark>
          <ui-card-primary large hasSubtitle>
            <template slot="title">
              Title goes here
            </template>
            <template slot="subtitle">
              Subtitle here
            </template>
          </ui-card-primary>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact dark>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact dark>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card demo-card--small'">
          <ui-card-media>
            <ui-card-primary noWrap large>
              <template slot="title">
                Title
              </template>
            </ui-card-primary>
          </ui-card-media>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card'">
          <ui-card-block>
            <ui-card-primary large hasSubtitle>
              <template slot="title">
                Title here
              </template>
              <template slot="subtitle">
                Subtitle here
              </template>
            </ui-card-primary>
            <template slot="after" scope="props">
              <img :class="props.className.media" :src="require('../../images/1-1.jpg')" alt="">
            </template>
          </ui-card-block>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card'">
          <ui-card-block>
            <template slot="before" scope="props">
              <img :class="[props.className.media, props.className.x1_5]" :src="require('../../images/1-1.jpg')" alt="">
            </template>
            <ui-card-primary large hasSubtitle>
              <template slot="title">
                Title here
              </template>
              <template slot="subtitle">
                Subtitle here
              </template>
            </ui-card-primary>
          </ui-card-block>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card'">
          <ui-card-block>
            <ui-card-primary large hasSubtitle>
              <template slot="title">
                Title here
              </template>
              <template slot="subtitle">
                Subtitle here
              </template>
            </ui-card-primary>
            <template slot="after" scope="props">
              <img :class="[props.className.media, props.className.x2]" :src="require('../../images/1-1.jpg')" alt="">
            </template>
          </ui-card-block>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card :class="'demo-card'">
          <ui-card-block class="mdc-card__horizontal-block">
            <template slot="before" scope="props">
              <img :class="[props.className.media, props.className.x3]" :src="require('../../images/1-1.jpg')" alt="">
            </template>
            <ui-card-actions vertical>
              <ui-button class="mdc-card__action" compact>A1</ui-button>
              <ui-button class="mdc-card__action" compact>A2</ui-button>
            </ui-card-actions>
          </ui-card-block>
        </ui-card>
      </div>
    </section>

    <!-- <ui-apidoc name="card"></ui-apidoc> -->
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  created() {
    // this.showCode('card', 5);
  }
};
</script>
