```html
<ui-button @click="$balmUI.onShow('show')">Show action sheet</ui-button>
<ui-side-sheet v-model="show" closable>
  <template #title>Title</template>
  <ui-list>
    <ui-item v-for="i in 3" :key="i">Action {{ i }}</ui-item>
  </ui-list>
  <template #actions>
    <ui-button raised>Save</ui-button>
    <ui-button outlined>Cancel</ui-button>
  </template>
</ui-side-sheet>
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
