```html
<ui-chips v-model="selectedValue" type="choice" :options="options"></ui-chips>
```

```js
export default {
  data() {
    return {
      selectedValue: 3,
      options: [
        {
          label: 'Extra Small',
          value: 1
        },
        {
          label: 'Small',
          value: 2
        },
        {
          label: 'Medium',
          value: 3
        },
        {
          label: 'Large',
          value: 4
        },
        {
          label: 'Extra Large',
          value: 5
        }
      ]
    };
  }
};
```
