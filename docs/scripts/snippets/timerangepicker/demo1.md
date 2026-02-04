```html
<ui-timerangepicker v-model="time" outlined :labels="['Start Time', 'End Time']">
  <template #separator>-</template>
</ui-timerangepicker>
```

```js
export default {
  data() {
    return {
      time: ['09:00', '18:00']
    };
  }
};
```
