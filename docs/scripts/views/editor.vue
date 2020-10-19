<template>
  <div>
    <ui-editor v-model="content" :toolbar="toolbar">
      <template #toolbar>
        <div id="toolbar">
          <div class="toolbar">
            <span class="ql-formats">
              <button
                v-tooltip="'Bold (Ctrl + B)'"
                class="ql-bold"
                aria-describedby="bold"
              ></button>
              <button class="ql-italic"></button>
              <button class="ql-underline"></button>

              <span class="ql-color"></span>
              <select class="ql-color"></select>

              <span class="ql-background"></span>
              <select class="ql-background"></select>

              <span class="ql-align"></span>
              <select class="ql-align"></select>

              <span class="ql-header"></span>
              <select class="ql-header">
                <option selected></option>
                <option value="1">Headline 1</option>
                <option value="2">Headline 2</option>
                <option value="3">Headline 3</option>
                <option value="4">Headline 4</option>
                <option value="5">Headline 5</option>
                <option value="6">Headline 6</option>
              </select>

              <span class="ql-font"></span>
              <select class="ql-font"></select>
              <span class="ql-size"></span>
              <select class="ql-size"></select>
            </span>
          </div>
          <div class="toolbar"></div>
          <div class="sub-toolbar">
            <span class="ql-formats">
              <button class="ql-script" value="sub"></button>
              <button class="ql-script" value="super"></button>
            </span>
          </div>
        </div>
      </template>
    </ui-editor>
  </div>
</template>

<script>
import UiEditor from 'balm-ui-editor';

export default {
  components: {
    UiEditor
  },
  data() {
    return {
      content: '',
      toolbar: '#toolbar'
    };
  }
};
</script>

<style></style>
