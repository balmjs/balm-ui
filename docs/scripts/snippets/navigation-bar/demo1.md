```html
<div class="container">
  <!-- Content -->

  <ui-navigation-bar content-selector=".container" stacked>
    <ui-tabs
      v-model="active"
      type="textWithIcon"
      :items="items"
      stacked
      @update:model-value="onChange"
    ></ui-tabs>
  </ui-navigation-bar>
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
