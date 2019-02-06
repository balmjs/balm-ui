```html
<div>
  <ui-textfield v-model="title" fullwidth placeholder="Subject" maxlength="40">
  </ui-textfield>
  <ui-textfield-counter></ui-textfield-counter>

  <ui-textfield
    type="textarea"
    v-model="content"
    fullwidth
    rows="8"
    placeholder="Content"
    maxlength="140"
  >
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
