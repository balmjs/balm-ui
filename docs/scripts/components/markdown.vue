<template>
  <div :class="className" v-html="html"></div>
</template>

<script>
export default {
  name: 'ui-markdown',
  props: {
    // 文档内容
    text: String,
    // 代码片段
    code: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      html: this.text
    };
  },
  computed: {
    className() {
      return this.code ? 'snippet-code' : 'markdown-body';
    }
  },
  watch: {
    text(val) {
      this.html = val;
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.html) {
        this.$nextTick(() => {
          // Supported languages:
          // https://prismjs.com/#languages-list
          this.$prism.highlightAll();
        });
      }
    }
  }
};
</script>
