```html
<figure>
  <ui-progress :progress="progress"></ui-progress>
  <figcaption>Determinate (Progress: {{progress }})</figcaption>
</figure>

<figure>
  <ui-progress indeterminate></ui-progress>
  <figcaption>Indeterminate</figcaption>
</figure>

<figure>
  <ui-progress :progress="0.5" :buffer="0.75"></ui-progress>
  <figcaption>Buffer</figcaption>
</figure>
```
