<template>
  <div :class="[$tt('body1'), 'demo--file']">
    <section class="hero component">
      <ui-file></ui-file>
    </section>

    <div :class="$tt('body2')">
      <h4 :class="$tt('headline4')">0. Usage</h4>
      <ui-markdown :text="code[0]"></ui-markdown>

      <h4 :class="$tt('headline4')">1. Example</h4>
      <div class="example">
        <h6 :class="$tt('headline6')">1.1 Default Usage</h6>
        <ui-file
          accept="image/*"
          @change="$balmUI.onChange('files1', $event)"></ui-file>
        <p>Files: {{ files1 }}</p>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[1]"></ui-markdown>
      </ui-accordion>

      <div class="example">
        <h6 :class="$tt('headline6')">1.2 Multiple + Preview</h6>
        <ui-file
          accept="image/*"
          multiple
          preview
          @change="$balmUI.onChange('files2', $event)"></ui-file>
        <transition-group class="preview-list" name="list" tag="ul">
          <li class="item" v-for="(file, index) in files2" :key="file.uuid">
            <div class="inner">
              <span class="preview" :style="setBg(file)"></span>
              <span class="name">{{ file.name }}</span>
            </div>
          </li>
        </transition-group>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[2]"></ui-markdown>
      </ui-accordion>

      <div class="example">
        <h6 :class="$tt('headline6')">1.3 Classics Upload</h6>
        <transition-group class="preview-list" name="list" tag="ul">
          <li v-for="(file, index) in files3" :key="file.uuid" class="item">
            <div class="inner">
              <span class="preview" :style="setBg(file)"></span>
              <span class="actions">
                <ui-fab
                  v-if="!file.uploaded"
                  icon="file_upload"
                  mini
                  @click="upload(file)"></ui-fab>
                <ui-fab
                  icon="delete"
                  mini
                  @click="remove(index)"></ui-fab>
              </span>
            </div>
          </li>
          <li v-if="files3.length < limit" key="add" class="item add-btn">
            <div class="inner">
              <ui-file
                accept="image/*"
                multiple
                preview
                @change="onChange">
                <ui-icon class="add-icon">add</ui-icon>
              </ui-file>
            </div>
          </li>
        </transition-group>
        <p>
          <ui-button raised @click="uploadAllFiles">
            <ui-icon>file_upload</ui-icon>
            全部上传
          </ui-button>
        </p>
      </div>
      <ui-accordion>
        <ui-markdown :code="code[3]"></ui-markdown>
      </ui-accordion>

      <h4 :class="$tt('headline4')">2. APIs</h4>
      <ui-apidocs name="file"></ui-apidocs>
    </div>
  </div>
</template>

<script>
import snippets from '../../mixins/snippets';

export default {
  metaInfo: {
    titleTemplate: '%s - File'
  },
  mixins: [snippets],
  data() {
    return {
      files1: [],
      files2: [],
      files3: [],
      limit: 5,
      postUrl: 'https://jsonplaceholder.typicode.com/posts'
    };
  },
  created() {
    this.showCode('file', 3);
  },
  methods: {
    setBg({ previewSrc }) {
      return previewSrc ? { backgroundImage: `url(${previewSrc})` } : {};
    },
    onChange(files) {
      if (files.length > this.limit - this.files3.length) {
        this.$toast(`Image Limit: ${this.limit}`);
      } else {
        files.forEach(file => {
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
        this.files3.forEach(file => {
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
</script>
