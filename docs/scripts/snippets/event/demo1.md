```html
<ui-button @click="showMessage">Show message</ui-button>
<ui-button @click="clearMessage">Clear</ui-button>

<p>{{ message }}</p>
```

```js
export default {
  data() {
    return {
      message: 'No message'
    };
  },
  methods: {
    showMessage() {
      this.message = 'Hello BalmUI';
    },
    clearMessage() {
      this.message = '';
    }
  }
};
```
