```html
<div>
  <ui-textfield
    v-model="title"
    fullwidth
    placeholder="Subject">
  </ui-textfield>
  <ui-textfield type="textarea"
    v-model="content"
    fullwidth
    rows="8">
    Textarea Label
  </ui-textfield>
</div>
```

```js
export default {
  data() {
    return {
      title: '',
      content: ''
    };
  }
};
```
