```html
<ui-image-list
  :withTextProtection="labelsType === 2">
  <ui-image-item v-for="i in 15" :key="i"
    :src="require(`../../../images/photos/3x2/${i}.jpg`)">
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
