```html
<div>
  <ui-textfield
    v-model="title"
    fullwidth
    placeholder="Subject"
    maxlength="40"
    with-counter
  ></ui-textfield>

  <ui-textfield
    v-model="content"
    input-type="textarea"
    fullwidth
    placeholder="Content"
    maxlength="140"
    rows="8"
  ></ui-textfield>
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
