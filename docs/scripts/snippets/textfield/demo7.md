```html
<div>
  <ui-textfield
    v-model="title"
    fullwidth
    placeholder="Subject"
    maxlength="40"
    withCounter
  >
  </ui-textfield>

  <ui-textfield
    inputType="textarea"
    v-model="content"
    fullwidth
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
