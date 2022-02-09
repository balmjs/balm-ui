<template>
  <docs-page type="directive" name="copy" demo-count="1" without-css>
    <template #hero>
      <h1 :class="$tt('headline1')">Copy</h1>
    </template>

    <!-- Content -->
    <section class="demo-wrapper">
      <div class="demos">
        <ui-textfield
          v-model="repository.text"
          outlined
          :attrs="{ readonly: true }"
        >
          <template #after>
            <ui-textfield-icon v-copy="repository">
              content_copy
            </ui-textfield-icon>
          </template>
        </ui-textfield>
      </div>
      <ui-snippet :code="$store.demos[1]"></ui-snippet>
    </section>
  </docs-page>
</template>

<script>
export default {
  metaInfo() {
    return {
      subtitle: 'Copy'
    };
  },
  data() {
    return {
      repository: {
        text: 'https://github.com/balmjs/balm-ui',
        success: () => {
          this.$toast('Copied!');
        }
      }
    };
  }
};
</script>
