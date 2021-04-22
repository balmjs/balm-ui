```html
<div class="container">
  <!-- Content -->

  <ui-bottom-navigation content-selector=".container" stacked>
    <ui-tabs
      v-model="active"
      type="textWithIcon"
      :items="items"
      stacked
      @change="onChange"
    ></ui-tabs>
  </ui-bottom-navigation>
</div>
```

```js
export default {
  data() {
    return {
      items: [
        {
          text: 'Favorites',
          icon: 'favorite',
          url: 'url 1'
        },
        {
          text: 'Music',
          icon: 'music_note',
          url: 'url 2'
        },
        {
          text: 'Places',
          icon: 'place'
        },
        {
          text: 'News',
          icon: 'fiber_new'
        }
      ],
      active: 1
    };
  },
  methods: {
    onChange(active) {
      console.log(active);
    }
  }
};
```
