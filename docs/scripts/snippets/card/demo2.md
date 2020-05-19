```html
<ui-card class="demo-card demo-card--photo">
  <ui-card-content class="demo-card__primary-action">
    <ui-card-media square class="demo-card__media">
      <ui-card-media-content class="demo-card__media-content--with-title">
        <div :class="[$tt('subtitle2'), 'demo-card__media-title']">
          Vacation Photos
        </div>
      </ui-card-media-content>
    </ui-card-media>
  </ui-card-content>
  <ui-card-actions>
    <ui-card-icons>
      <ui-icon-button
        actionIcon
        :on="icon1.on"
        :off="icon1.off"
      ></ui-icon-button>
      <ui-icon-button
        actionIcon
        :on="icon2.on"
        :off="icon2.off"
      ></ui-icon-button>
      <ui-icon-button actionIcon>share</ui-icon-button>
    </ui-card-icons>
  </ui-card-actions>
</ui-card>
```

```js
export default {
  data() {
    return {
      icon1: {
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
        on: {
          content: 'bookmark',
          label: 'Remove bookmark'
        },
        off: {
          content: 'bookmark_border',
          label: 'Add bookmark'
        }
      }
    };
  }
};
```

```css
.demo-card {
  width: 350px;
  margin: 48px;
}

.demo-card--photo {
  width: 200px;
}

.demo-card__media {
  background-image: url('../images/1-1.jpg');
}

.demo-card__media-content--with-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.demo-card__media-title {
  padding: 8px 16px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  color: white;
}
```
