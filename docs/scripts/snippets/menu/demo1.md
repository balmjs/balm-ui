```html
<div class="demo-content">
  <ui-button @click="$balmUI.onOpen('open')">Open Menu</ui-button>
  <ui-menu
    v-model="open"
    :items="[
      'Back',
      'Forward',
      'Reload',
      '-',
      'Help &amp; Feedback',
      'Settings'
    ]"
  ></ui-menu>
</div>
```

```js
export default {
  data() {
    return {
      open: false
    };
  }
};
```

```css
.demo-content {
  position: relative;
}
```
