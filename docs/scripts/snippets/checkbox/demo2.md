```html
<ui-checkbox id="jack" value="Jack" v-model="checkedNames">Jack</ui-checkbox>
<ui-checkbox id="john" value="John" v-model="checkedNames">John</ui-checkbox>
<ui-checkbox id="mike" value="Mike" v-model="checkedNames">Mike</ui-checkbox>
```

```js
export default {
  data() {
    return {
      checkedNames: []
    };
  }
};
```
