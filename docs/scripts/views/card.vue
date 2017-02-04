<template>
  <div class="demo-card">
    <div class="component-title">
      <h3>Card</h3>
      <p>Self-contained pieces of paper with data.</p>
    </div>

    <h4>Wide</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card class="demo-card-wide" border hasMenu>
          <template slot="header" scope="props">
            <h2 :class="props.className.title">Welcome</h2>
          </template>
          <template scope="props">
            <div :class="props.className.text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...
            </div>
          </template>
          <template slot="footer">
            <ui-button colored effect>Get Started</ui-button>
          </template>
          <template slot="menu">
            <ui-button icon="share" effect></ui-button>
          </template>
        </ui-card>
      </div>
    </div>
    <ui-markdown :text="code[0]"></ui-markdown>

    <h4>Square</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card class="demo-card-square" expand border>
          <template slot="header" scope="props">
            <h2 :class="props.className.title">Update</h2>
          </template>
          <template scope="props">
            <div :class="props.className.text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
            </div>
          </template>
          <template slot="footer">
            <ui-button colored effect>View Updates</ui-button>
          </template>
        </ui-card>
      </div>
    </div>
    <ui-markdown :text="code[1]"></ui-markdown>

    <h4>Image & Event</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card class="demo-card-image" expand>
          <template slot="footer">
            <span class="demo-card-image__filename">Image.jpg</span>
          </template>
        </ui-card>
      </div>
      <div class="snippet-demo">
        <ui-card class="demo-card-event" expand border>
          <template slot="header">
            <h4>
              Featured event:<br>
              May 24, 2016<br>
              7-11pm
            </h4>
          </template>
          <template slot="footer">
            <ui-button colored effect>Add to Calendar</ui-button>
            <div class="mdl-layout-spacer"></div>
            <i class="material-icons">event</i>
          </template>
        </ui-card>
      </div>
    </div>
    <ui-markdown :text="code[2]"></ui-markdown>

    <h4>A card (no shadow) with a title, image, text, and action.</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card>
          <template slot="header" scope="props">
            <h2 :class="props.className.title">
              Auckland Sky Tower<br>
              Auckland, New Zealand
            </h2>
          </template>
          <template scope="props">
            <div :class="props.className.text">
              The Sky Tower is an observation and telecommunications tower located in Auckland, New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure in the Southern Hemisphere.
            </div>
          </template>
          <template slot="footer">
            <a href="http://en.wikipedia.org/wiki/Sky_Tower_%28Auckland%29">Wikipedia entry</a>
          </template>
        </ui-card>
      </div>
    </div>
    <ui-markdown :text="code[3]"></ui-markdown>

    <h4>Card (level-3 shadow) with an image, caption, and text:</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card :dp="4" noHeader>
          <template scope="props">
            <div :class="props.className.media">
              <img src="skytower.jpg" width="173" height="157" border="0" alt="" style="padding:10px;">
            </div>
            <div :class="props.className.text">
              Auckland Sky Tower, taken March 24th, 2014
            </div>
            <div :class="props.className.text">
              The Sky Tower is an observation and telecommunications tower located in Auckland, New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure in the Southern Hemisphere.
            </div>
          </template>
        </ui-card>
      </div>
    </div>
    <ui-markdown :text="code[4]"></ui-markdown>

    <ui-apidoc name="card"></ui-apidoc>
  </div>
</template>

<script>
import snippets from '../mixins/snippets';

export default {
  mixins: [snippets],
  created() {
    this.showCode('card', 5);
  }
};
</script>
