```html
<ui-button v-longpress="config" outlined>Click...</ui-button>
```

```js
export default {
  data() {
    return {
      config: {
        callback: () => {
          this.$alert('done');
        }
      }
    };
  }
};
```
