```html
<figure class="linear-progress-demo">
  <ui-linear-progress :progress="progress"></ui-linear-progress>
  <figcaption>Determinate (Progress: {{progress }})</figcaption>
</figure>

<figure class="linear-progress-demo">
  <ui-linear-progress indeterminate></ui-linear-progress>
  <figcaption>Indeterminate</figcaption>
</figure>

<figure class="linear-progress-demo">
  <ui-linear-progress :progress="0.5" :buffer="0.75"></ui-linear-progress>
  <figcaption>Buffer</figcaption>
</figure>

<figure class="linear-progress-demo">
  <ui-linear-progress reversed :progress="0.5"></ui-linear-progress>
  <figcaption>Reversed</figcaption>
</figure>

<figure class="linear-progress-demo">
  <ui-linear-progress indeterminate reversed></ui-linear-progress>
  <figcaption>Indeterminate Reversed</figcaption>
</figure>

<figure class="linear-progress-demo">
  <ui-linear-progress
    reversed
    :progress="0.5"
    :buffer="0.75"
  ></ui-linear-progress>
  <figcaption>Buffer Reversed</figcaption>
</figure>

<figure class="linear-progress-demo">
  <ui-linear-progress
    class="demo-linear-progress--custom"
    :progress="0.5"
    :buffer="0.75"
  ></ui-linear-progress>
  <figcaption>Custom Colors with Buffer</figcaption>
</figure>
```
