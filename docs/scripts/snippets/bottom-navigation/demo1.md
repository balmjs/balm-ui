```html
<div class="container">
  <!-- Content -->

  <ui-bottom-navigation contentSelector=".container">
    <ui-tabs :items="items" v-model="active" @change="onChange"></ui-tabs>
  </ui-bottom-navigation>
</div>
```

```js
export default {
  data() {
    return {
      items: [
        {
          text: 'Nav menu 1',
          icon: 'watch_later'
        },
        {
          text: 'Nav menu 2',
          icon: 'near_me'
        },
        {
          text: 'Nav menu 3',
          icon: 'favorite'
        }
      ],
      active: 0
    };
  },
  methods: {
    onChange(active) {
      console.log(active);
    }
  }
};
```
