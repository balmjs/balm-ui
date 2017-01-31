```html
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
```
