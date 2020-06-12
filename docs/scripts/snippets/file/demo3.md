```html
<transition-group class="preview-list" name="list" tag="ul">
  <li v-for="(file, index) in files" :key="file.tmpId" class="item">
    <div class="inner">
      <span class="preview" :style="setBg(file)"></span>
      <span class="actions">
        <ui-fab
          v-if="!file.uploaded"
          icon="file_upload"
          mini
          @click="upload(file)"
        ></ui-fab>
        <ui-fab icon="delete" mini @click="remove(index)"></ui-fab>
      </span>
    </div>
  </li>
  <li v-if="files.length < limit" key="add" class="item add-btn">
    <div class="inner">
      <ui-file accept="image/*" multiple preview @change="onChange">
        <ui-icon class="add-icon">add</ui-icon>
      </ui-file>
    </div>
  </li>
</transition-group>
<p>
  <ui-button raised @click="uploadAllFiles">
    <ui-icon>file_upload</ui-icon>
    Upload All
  </ui-button>
</p>
```

```js
export default {
  data() {
    return {
      files: [],
      limit: 5,
      postUrl: '/api/upload'
    };
  },
  methods: {
    setBg({ previewSrc }) {
      return previewSrc ? { backgroundImage: `url(${previewSrc})` } : {};
    },
    onChange(files) {
      if (files.length > this.limit - this.files3.length) {
        this.$toast(`Image Limit: ${this.limit}`);
      } else {
        files.forEach((file) => {
          file.uploaded = false;
          this.files3.push(file);
        });
      }
    },
    async upload(file) {
      try {
        let response = await this.$http.post(this.postUrl, {
          file: file.sourceFile
        });
        file.uploaded = true;
        console.log(`${file.name} is uploaded`);
      } catch (e) {
        // your code
      }
    },
    uploadAllFiles() {
      if (this.files3.length) {
        this.files3.forEach((file) => {
          this.upload(file);
        });
      } else {
        this.$toast('No files');
      }
    },
    remove(index) {
      this.files3.splice(index, 1);
    }
  }
};
```

```css
/* extends demo2 */
.preview-list {
  & > .item {
    .actions {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 48px;
    }
    &.add-btn {
      .mdc-file {
        position: relative;
        width: 100%;
        height: 0;
        padding-bottom: 100%;
        border: 1px solid #ddd;
        border-radius: 3px;
        cursor: pointer;
        background-color: #fff;
      }
      .add-icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 48px;
      }
    }
  }
}
```
