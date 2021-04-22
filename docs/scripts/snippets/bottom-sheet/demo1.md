```html
<ui-button @click="show = true">Show action sheet</ui-button>
<ui-bottom-sheet v-model="show">
  <ui-list>
    <ui-item v-for="i in 3" :key="i">Action {{ i }}</ui-item>
  </ui-list>
</ui-bottom-sheet>
```

```js
export default {
  data() {
    return {
      show: false
    };
  }
};
```
