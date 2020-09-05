```html
<ui-slider v-model="value3" type="discrete" :step="10"></ui-slider>
<ui-slider
  v-model="value4"
  type="discrete"
  :step="10"
  withTickMarks
></ui-slider>
<ui-slider v-model="value5" type="discrete" :step="10"></ui-slider>
```

```js
export default {
  data() {
    return {
      value3: 50,
      value4: 50,
      value5: [20, 50]
    };
  }
};
```
