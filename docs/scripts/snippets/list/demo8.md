```html
<ui-list>
  <template v-for="(item, index) in items3">
    <ui-item-divider v-if="item === '-'" :key="index"></ui-item-divider>
    <ui-item v-else :key="index">
      <ui-item-text-content>{{ item.text }}</ui-item-text-content>
      <ui-item-last-content>
        <ui-radio
          v-model="checkedValue"
          :value="item.value"
          @click.native.stop
        ></ui-radio>
      </ui-item-last-content>
    </ui-item>
  </template>
</ui-list>
```

```js
export default {
  data() {
    return {
      checkedValue: 'dog'
    };
  }
};
```
