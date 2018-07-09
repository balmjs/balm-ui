```html
<!-- Using Material Icons -->
<ui-icon-button
  v-model="icon1.value"
  :on="icon1.on"
  :off="icon1.off">
</ui-icon-button>

<!-- Using Font Awesome -->
<ui-icon-button
  iconInnerSelector=".fa"
  v-model="icon2.value"
  :on="icon2.on"
  :off="icon2.off">
  <i class="fa fa-star" aria-hidden="true"></i>
</ui-icon-button>

<!-- Disabled Icons -->
<ui-icon-button
  :on="icon1.on"
  :off="icon1.off"
  disabled>
</ui-icon-button>
```

```js
export default {
  data() {
    return {
      icon1: {
        value: false,
        on: {
          content: 'favorite',
          label: 'Remove From Favorites'
        },
        off: {
          content: 'favorite_border',
          label: 'Add to Favorites'
        }
      },
      icon2: {
        value: true,
        on: {
          class: 'fa-star',
          label: 'Unstar this item'
        },
        off: {
          class: 'fa-star-o',
          label: 'Star this item'
        }
      }
    };
  }
};
```
