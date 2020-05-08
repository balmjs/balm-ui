```html
<ui-button raised @click="showConfrim">Show Confrim</ui-button>
```

```js
export default {
  methods: {
    showConfrim() {
      this.$confirm({
        message: 'Do you like BalmJS?',
        icon: 'help',
        acceptText: 'Cool',
        cancelText: 'Good'
      }).then((result) => {
        if (result) {
          this.$alert('Thanks :)');
        }
      });
    }
  }
};
```
