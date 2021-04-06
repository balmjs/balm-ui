```html
<ui-textfield v-model="repository.text" outlined :attrs="{ readonly: true }">
  <template #after>
    <ui-textfield-icon v-copy="repository">content_copy</ui-textfield-icon>
  </template>
</ui-textfield>
```

```js
export default {
  data() {
    return {
      repository: {
        text: 'https://github.com/balmjs/balm-ui',
        success: () => {
          this.$toast('Copied!');
        }
      }
    };
  }
};
```
