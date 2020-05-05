```html
<ui-rangepicker v-model="date">
  <template #separator>-</template>
</ui-rangepicker>
```

```js
export default {
  data() {
    return {
      date: ['2020-02-12', '2020-03-24']
    };
  }
};
```
