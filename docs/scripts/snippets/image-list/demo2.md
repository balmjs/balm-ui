```html
<ui-image-list type="masonry" :textProtection="labelsType === 2">
  <ui-image-item
    v-for="(item, index) in list"
    :key="index"
    :image="require(`@/assets/photos/${item}.jpg`)"
  >
    <ui-image-text v-if="labelsType">
      Text label
      <template #action>
        <ui-icon-button icon="favorite_border"></ui-icon-button>
      </template>
    </ui-image-text>
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
