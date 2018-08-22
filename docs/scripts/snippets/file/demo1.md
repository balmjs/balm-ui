```html
<ui-file
  accept="image/*"
  @change="$balmUI.onChange('files', $event)"></ui-file>
<p>Files: {{ files }}</p>
```

```js
export default {
  data() {
    return {
      files: []
    };
  }
};
```
