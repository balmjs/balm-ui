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

<figure>
  <ui-progress reversed :progress="0.5"></ui-progress>
  <figcaption>Reversed</figcaption>
</figure>

<figure>
  <ui-progress indeterminate reversed></ui-progress>
  <figcaption>Indeterminate Reversed</figcaption>
</figure>

<figure>
  <ui-progress reversed :progress="0.5" :buffer="0.75"></ui-progress>
  <figcaption>Buffer Reversed</figcaption>
</figure>

<figure>
  <ui-progress
    class="demo-progress--custom"
    :progress="0.5"
    :buffer="0.75"
  ></ui-progress>
  <figcaption>Custom Colors with Buffer</figcaption>
</figure>
```
