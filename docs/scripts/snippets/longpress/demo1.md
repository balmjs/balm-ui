```html
<ui-button v-longpress="callback" outlined>Click...</ui-button>
```

```js
export default {
  methods: {
    callback(e) {
      console.log(e.target);
      this.$alert('done');
    }
  }
};
```
