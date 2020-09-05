<template>
  <div v-if="html" :class="className" v-html="html"></div>
  <ui-skeleton v-else active></ui-skeleton>
</template>

<script>
export default {
  name: 'UiMarkdown',
  props: {
    // 文档内容
    text: {
      type: String,
      default: ''
    },
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
          this.$prism.highlightAll();
        });
      }
    }
  }
};
</script>
