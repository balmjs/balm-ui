```html
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
</ui-card>
```
