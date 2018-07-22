```html
<ui-button @click="$balmUI.onChange('message', 'Hello BalmUI')">Show message</ui-button>
<ui-button @click="$balmUI.onChange('message', '')">Clear</ui-button>

<p>{{ message }}</p>
```

```js
export default {
  data() {
    return {
      message: 'No message'
    };
  }
};
```
