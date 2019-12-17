```html
<div>
  <ui-textfield v-model="title" fullwidth placeholder="Subject" maxlength="40">
  </ui-textfield>
  <ui-textfield-counter></ui-textfield-counter>

  <ui-textfield
    inputType="textarea"
    v-model="content"
    fullwidth
    noLabel
    placeholder="Content"
    maxlength="140"
    rows="8"
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
