```html
<ui-card outlined class="demo-card">
  <div :class="[$tt('subtitle2'), 'demo-card-article-group-heading']">
    Headlines
  </div>
  <ui-list-divider></ui-list-divider>

  <template v-for="(item, index) in list">
    <a v-ripple :key="`item${index}`" class="demo-card-article">
      <h2 :class="[$tt('headline5'), 'demo-card-article__title']">
        {{ item.title }}
      </h2>
      <p class="demo-card-article__snippet">{{ item.content }}</p>
    </a>
    <ui-list-divider :key="`divider${index}`"></ui-list-divider>
  </template>

  <ui-card-actions full-bleed>
    <ui-button class="demo-card-action">
      All Business Headlines
      <template #after>
        <ui-icon>arrow_forward</ui-icon>
      </template>
    </ui-button>
  </ui-card-actions>
</ui-card>
```

```js
export default {
  data() {
    return {
      list: [
        {
          title: 'Copper on the rise',
          content:
            'Copper price soars amid global market optimism and increased demand.'
        },
        {
          title: 'U.S. tech startups rebound',
          content:
            'Favorable business conditions have allowed startups to secure more fundraising deals compared to last year.'
        },
        {
          title: `Asia's clean energy ambitions`,
          content:
            'China plans to invest billions of dollars for the development of over 300 clean energy projects in Southeast Asia.'
        }
      ]
    };
  }
};
```

```scss
.demo-card {
  width: 320px;
}

.demo-card-article-group-heading {
  padding: 8px 16px;
}

.demo-card-article {
  padding: 16px;
  text-decoration: none;
  color: inherit;
}

.demo-card-article__title {
  margin: 0 0 4px 0;
}

.demo-card-article__snippet {
  margin: 0;
}
```
