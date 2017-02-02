```html
<ui-icon-toggle value="X" :model="icons" @change="onIconsChange">X</ui-icon-toggle>
<ui-icon-toggle value="Y" :model="icons" @change="onIconsChange">Y</ui-icon-toggle>
<ui-icon-toggle value="Z" :model="icons" @change="onIconsChange">Z</ui-icon-toggle>
```

```js
export default {
  data() {
    return {
      icons: []
    };
  },
  methods: {
    onIconsChange(val) {
      this.icons = val;
    }
  }
};
```
