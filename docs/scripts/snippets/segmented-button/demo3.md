```html
<ui-segmented-buttons v-model="checkedValue">
  <ui-segmented-button icon="favorite"></ui-segmented-button>
  <ui-segmented-button>Sample Text</ui-segmented-button>
  <ui-segmented-button>
    Sample Text
    <template #after="{ iconClass }">
      <ui-icon :class="iconClass">favorite</ui-icon>
    </template>
  </ui-segmented-button>
</ui-segmented-buttons>
```

```js
export default {
  data() {
    return {
      checkedValue: []
    };
  }
};
```
