```html
<ui-icon-toggle
  :model="icon1.value"
  :on="icon1.on"
  :off="icon1.off"
  @change="balmUI.onChange('icon1.value', $event)">
</ui-icon-toggle>

<ui-icon-toggle
  :model="icon2.value"
  :on="icon2.on"
  :off="icon2.off"
  icon="fa"
  @change="balmUI.onChange('icon2.value', $event)">
  <i class="fa fa-star" aria-hidden="true"></i>
</ui-icon-toggle>

<ui-icon-toggle
  :on="icon1.on"
  :off="icon1.off"
  disabled>
</ui-icon-toggle>
```

```js
export default {
  data() {
    return {
      icon1: {
        value: false,
        on: { content: 'favorite', label: 'Remove From Favorites' },
        off: { content: 'favorite_border', label: 'Add to Favorites' }
      },
      icon2: {
        value: true,
        on: { cssClass: 'fa-star', label: 'Unstar this item' },
        off: { cssClass: 'fa-star-o', label: 'Star this item' }
      }
    };
  }
};
```
