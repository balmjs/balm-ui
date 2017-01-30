<template>
  <div class="demo-card">
    <div class="component-title">
      <h3>Card</h3>
      <p>Self-contained pieces of paper with data.</p>
    </div>

    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card :dp="2">
          <template slot="header" scope="props">
            <h2 :class="props.className.title">Title</h2>
            <h3 :class="props.className.subtitle">Subtitle</h3>
          </template>
          <template scope="props">
            <div :class="props.className.media">Media</div>
            <div :class="props.className.text">Text</div>
          </template>
          <template slot="footer">
            Actions
          </template>
        </ui-card>
      </div>
    </div>

    <h4>A card (no shadow) with a title, image, text, and action.</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card :dp="2">
          <template slot="header" scope="props">
            <h2 :class="props.className.title">Auckland Sky Tower<br>Auckland, New Zealand</h2>
          </template>
          <template scope="props">
            <div :class="props.className.text">The Sky Tower is an observation and telecommunications tower located in Auckland, New Zealand. It is 328 metres (1,076 ft) tall, making it the tallest man-made structure in the Southern Hemisphere.</div>
          </template>
          <template slot="footer">
            <a href="http://en.wikipedia.org/wiki/Sky_Tower_%28Auckland%29">Wikipedia entry</a>
          </template>
        </ui-card>
      </div>
    </div>

    <h4>Card (level-3 shadow) with an image, caption, and text:</h4>
    <div class="snippet-group">
      <div class="snippet-demo">
        <ui-card :dp="4" hideHeader>
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
          <template slot="footer">
            <a href="http://en.wikipedia.org/wiki/Sky_Tower_%28Auckland%29">Wikipedia entry</a>
          </template>
        </ui-card>
      </div>
    </div>

    // TODO
  </div>
</template>
