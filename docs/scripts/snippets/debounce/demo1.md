```html
<ui-button v-debounce="config" raised>Click</ui-button>
```

```js
export default {
  data() {
    return {
      config: {
        callback: () => {
          this.onClick();
        }
      }
    };
  },
  methods: {
    onClick() {
      console.log('clicked');
    }
  }
};
```
