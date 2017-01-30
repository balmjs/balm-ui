```html
<ui-tabs effect
  icon="fa"
  iconPrefix="fa"
  noIconText
  :active="tab"
  @switched="onChange">
  <ui-panel tab="qrcode">
    <p>QR code</p>
  </ui-panel>
  <ui-panel tab="tv">
    <p>PC</p>
  </ui-panel>
</ui-tabs>
```

```js
export default {
  data() {
    return {
      tab: 0
    };
  },
  methods: {
    onChange(tab) {
      this.tab = tab;
    }
  }
};
```
