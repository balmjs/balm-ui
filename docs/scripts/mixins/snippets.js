export default {
  data() {
    return {
      demo: {
        name: '',
        count: 0
      },
      code: []
    };
  },
  methods: {
    showCode(name, count = 1) {
      this.demo = {
        name,
        count
      };

      if (this.demo.name && this.demo.count) {
        for (let i = 1; i <= this.demo.count; i++) {
          let code = require(`../snippets/${this.demo.name}/demo${i}.md`);
          this.code.push(code);
        }
      } else {
        console.warn('The snippet name is required. You can run `showCode(snippetName, snippetCount)` for it.');
      }
    }
  }
};
