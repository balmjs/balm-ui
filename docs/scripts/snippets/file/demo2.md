```html
<ui-file
  accept="image/*"
  multiple
  preview
  @change="$balmUI.onChange('files', $event)"
></ui-file>
<transition-group class="preview-list" name="list" tag="ul">
  <li class="item" v-for="(file, index) in files" :key="file.tmpId">
    <div class="inner">
      <span class="preview" :style="setBg(file)"></span>
      <span class="name">{{ file.name }}</span>
    </div>
  </li>
</transition-group>
```

```js
export default {
  data() {
    return {
      files: []
    };
  },
  methods: {
    setBg({ previewSrc }) {
      return previewSrc ? { backgroundImage: `url(${previewSrc})` } : {};
    }
  }
};
```

```css
/* Sass code */
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(100%);
}
.list-leave-active {
  position: absolute;
}

.preview-list {
  display: flex;
  flex-wrap: wrap;
  padding: 1em 0 0 1em;
  position: relative;
  & > .item {
    width: 12.5%;
    padding-right: 1em;
    margin-bottom: 1em;
    list-style: none;
    transition: all 1s;
    .inner {
      width: 100%;
    }
    .preview {
      display: block;
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      border: 1px solid #ddd;
      border-radius: 3px;
    }
    .name {
      display: block;
      width: 100%;
      line-height: 1.8em;
      text-align: center;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
```
