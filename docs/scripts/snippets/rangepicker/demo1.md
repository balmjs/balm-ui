```html
<ui-rangepicker v-model="date" outlined :labels="['Start Date', 'End Date']">
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
