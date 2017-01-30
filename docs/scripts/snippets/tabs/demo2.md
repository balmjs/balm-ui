```html
<ui-tabs effect
  icon="material-icons"
  :active="tab"
  @switched="onChange">
  <ui-panel tab="edit">
    <p>Material icon1</p>
  </ui-panel>
  <ui-panel tab="delete">
    <p>Material icon2</p>
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
