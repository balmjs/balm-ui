<template>
  <ui-page name="editor" demoCount="2" withoutCss>
    <template #hero>
      <h1 :class="$tt('headline1')">WYSIWYG</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.1 Snow</h6>
      <ui-editor v-model="content1" theme="snow"></ui-editor>
    </section>

    <section class="demo-wrapper">
      <h6 :class="$tt('headline6')">1.2 Bubble</h6>
      <ui-editor v-model="content2" theme="bubble"></ui-editor>
    </section>
  </ui-page>
</template>

<script>
export default {
  metaInfo: {
    titleTemplate: '%s - Editor'
  },
  data() {
    return {
      content1: '',
      content2: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.content1 = '<p>Hello BalmUI</p>';
      this.content2 = '<p>Hello BalmJS</p>';
    }, 1e3);
  }
};
</script>
