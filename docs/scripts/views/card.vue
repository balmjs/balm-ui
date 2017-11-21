<template>
  <div class="demo--card">
    <section class="hero">
      <ui-card class="demo-card">
        <ui-card-media class="demo-card__16-9-media"></ui-card-media>
        <ui-card-head>
          <ui-card-title>Title goes here</ui-card-title>
          <ui-card-subtitle>Subtitle here</ui-card-subtitle>
        </ui-card-head>
        <ui-card-actions>
          <ui-button class="mdc-card__action" compact>Action 1</ui-button>
          <ui-button class="mdc-card__action" compact>Action 2</ui-button>
        </ui-card-actions>
      </ui-card>
    </section>

    <section class="demo-typography--section mdc-typography" id="demo-wrapper">
      <div>
        <ui-card class="demo-card">
          <ui-card-media class="demo-card__16-9-media"></ui-card-media>
          <ui-card-body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </ui-card-body>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card demo-card--with-avatar">
          <ui-card-head>
            <div class="demo-card__avatar"></div>
            <ui-card-title :large="false">Title</ui-card-title>
            <ui-card-subtitle>Subhead</ui-card-subtitle>
          </ui-card-head>
          <ui-card-media class="demo-card__16-9-media"></ui-card-media>
          <ui-card-body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.
          </ui-card-body>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card demo-card--with-avatar">
          <ui-card-head>
            <div class="demo-card__avatar"></div>
            <ui-card-title :large="false">Title</ui-card-title>
            <ui-card-subtitle>Subhead</ui-card-subtitle>
          </ui-card-head>
          <ui-card-media class="demo-card__16-9-media"></ui-card-media>
          <ui-card-actions vertical>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card">
          <ui-card-media class="demo-card__16-9-media"></ui-card-media>
          <ui-card-head>
            <ui-card-title>Title goes here</ui-card-title>
            <ui-card-subtitle>Subtitle here</ui-card-subtitle>
          </ui-card-head>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card">
          <ui-card-head>
            <ui-card-title>Title goes here</ui-card-title>
            <ui-card-subtitle>Subtitle here</ui-card-subtitle>
          </ui-card-head>
          <ui-card-body>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </ui-card-body>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card demo-card--bg-demo" dark>
          <ui-card-head>
            <ui-card-title>Title goes here</ui-card-title>
            <ui-card-subtitle>Subtitle here</ui-card-subtitle>
          </ui-card-head>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact dark>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact dark>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card demo-card--small">
          <ui-card-media>
            <ui-card-title>Title</ui-card-title>
          </ui-card-media>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card">
          <ui-card-horizontal-block>
            <ui-card-head>
              <ui-card-title>Title here</ui-card-title>
              <ui-card-subtitle>Subtitle here</ui-card-subtitle>
            </ui-card-head>
            <ui-card-media-item :src="require('../../images/1-1.jpg')" alt="">
            </ui-card-media-item>
          </ui-card-horizontal-block>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card">
          <ui-card-horizontal-block>
            <ui-card-head>
              <ui-card-title>Title here</ui-card-title>
              <ui-card-subtitle>Subtitle here</ui-card-subtitle>
            </ui-card-head>
            <ui-card-media-item size="1.5" :src="require('../../images/1-1.jpg')" alt="">
            </ui-card-media-item>
          </ui-card-horizontal-block>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card">
          <ui-card-horizontal-block>
            <ui-card-head>
              <ui-card-title>Title here</ui-card-title>
              <ui-card-subtitle>Subtitle here</ui-card-subtitle>
            </ui-card-head>
            <ui-card-media-item size="2" :src="require('../../images/1-1.jpg')" alt="">
            </ui-card-media-item>
          </ui-card-horizontal-block>
          <ui-card-actions>
            <ui-button class="mdc-card__action" compact>Action 1</ui-button>
            <ui-button class="mdc-card__action" compact>Action 2</ui-button>
          </ui-card-actions>
        </ui-card>
      </div>

      <div>
        <ui-card class="demo-card">
          <ui-card-horizontal-block>
            <ui-card-media-item size="3" :src="require('../../images/1-1.jpg')" alt="">
            </ui-card-media-item>
            <ui-card-actions vertical>
              <!-- TODO(sgomes): Replace with icon buttons when we have those. -->
              <ui-button cssOnly compact>A1</ui-button>
              <ui-button cssOnly compact>A2</ui-button>
            </ui-card-actions>
          </ui-card-horizontal-block>
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
