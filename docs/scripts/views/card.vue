<template>
  <div class="demo-card">
    <h3>MDC Cards</h3>
    <section class="demo-typography--section mdc-typography">
      <ui-card :class="'demo-card'">
        <ui-card-media class="demo-card__16-9-media"></ui-card-media>
        <ui-card-text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
        </ui-card-text>
      </ui-card>

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
          <ui-card-media-item class="demo-card__1-1-media"></ui-card-media-item>
        </ui-card-block>
        <ui-card-actions>
          <ui-button class="mdc-card__action" compact>Action 1</ui-button>
          <ui-button class="mdc-card__action" compact>Action 2</ui-button>
        </ui-card-actions>
      </ui-card>

      <ui-card :class="'demo-card'">
        <ui-card-block>
          <ui-card-media-item class="demo-card__1-1-media" :size="1.5"></ui-card-media-item>
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
          <ui-card-media-item class="demo-card__1-1-media" :size="2"></ui-card-media-item>
        </ui-card-block>
        <ui-card-actions>
          <ui-button class="mdc-card__action" compact>Action 1</ui-button>
          <ui-button class="mdc-card__action" compact>Action 2</ui-button>
        </ui-card-actions>
      </ui-card>

      <ui-card :class="'demo-card'">
        <ui-card-block class="mdc-card__horizontal-block">
          <ui-card-media-item class="demo-card__1-1-media" :size="3"></ui-card-media-item>
          <ui-card-actions vertical>
            <ui-button class="mdc-card__action" compact>A1</ui-button>
            <ui-button class="mdc-card__action" compact>A2</ui-button>
          </ui-card-actions>
        </ui-card-block>
      </ui-card>
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
