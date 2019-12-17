```html
<p>
  <ui-switch v-model="loading"></ui-switch>
</p>

<ui-skeleton
  v-model="loading"
  active
  :avatar="{ size: 'large', shape: 'square' }"
>
  <ui-list>
    <ui-item v-for="i in 3" :key="i">Hello BalmJS {{ i }}</ui-item>
  </ui-list>
</ui-skeleton>
```

```js
export default {
  data() {
    return {
      loading: true
    };
  }
};
```
