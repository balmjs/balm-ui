<template>
  <div class="docs-upload">
    <div class="component-title">
      <h3>FileUpload</h3>
    </div>

    <div class="snippet-demo">
      <ui-fileupload @change="onChange"></ui-fileupload>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onChange(files, event) {
      console.log(files, event);
    }
  }
};
</script>
