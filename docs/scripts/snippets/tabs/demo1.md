```html
<ui-tabs effect :active="tab" @switched="onChange">
  <ui-panel tab="Tab1">
    <p>Panel1</p>
  </ui-panel>
  <ui-panel tab="Tab2">
    <p>Panel2</p>
  </ui-panel>
  <ui-panel tab="Tab3">
    <p>Panel3</p>
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
