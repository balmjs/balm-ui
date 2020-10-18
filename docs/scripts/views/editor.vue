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
              <button class="ql-align"></button>
            </span>
            <span class="ql-formats">
              <button class="ql-table"></button>
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
