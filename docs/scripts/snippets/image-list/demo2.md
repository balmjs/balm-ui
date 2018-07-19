```html
<ui-image-list
  masonry
  :withTextProtection="labelsType === 2">
  <ui-image-item v-for="(item, index) in list" :key="index"
    :src="require(`../../../images/photos/${item}.jpg`)">
    <ui-image-label v-if="labelsType">Text label</ui-image-label>
  </ui-image-item>
</ui-image-list>
```

```js
export default {
  data() {
    return {
      labelsType: 1
    };
  }
};
```
