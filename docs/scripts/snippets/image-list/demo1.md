```html
<ui-image-list :textProtection="labelsType === 2">
  <ui-image-item
    v-for="i in 15"
    :key="i"
    :bgImage="`@/assets/photos/3x2/${i}.jpg`"
  >
    <ui-image-text v-if="labelsType">Text label</ui-image-text>
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
