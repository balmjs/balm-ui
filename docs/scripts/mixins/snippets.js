export default {
  data() {
    return {
      demo: {
        name: '',
        count: 0
      },
      code: [],
      docs: {}
    };
  },
  methods: {
    showCode(name, count = 1) {
      this.demo = {
        name,
        count
      };

      if (this.demo.name) {
        for (let i = 0; i <= this.demo.count; i++) {
          // NOTE: Critical dependency: the request of a dependency is an expression
          // 1. 完全使用变量 require(variable)
          // let code = require(`@/snippets/${this.demo.name}/demo${i}.md`);

          // 2. 部分使用变量 require(prefix + variable + suffix)
          let filename = `${this.demo.name}/demo${i}`;
          let code = require(`@/snippets/${filename}.md`);

          this.code.push(code);
        }
      } else {
        console.warn(
          'The snippet name is required. You can run `showCode(snippetName, snippetCount)` for it.'
        );
      }
    },
    showDocs(name, css = false) {
      if (css) {
        this.docs.css = require(`@/docs/cssdocs/${name}.md`);
      } else {
        this.docs[name] = require(`@/docs/apidocs/${name}.md`);
      }
    },
    initDocs(
      name,
      options = {
        code: 0,
        apis: [],
        css: false
      }
    ) {
      this.showCode(name, options.code);

      const apis = options.apis;
      let componentName = '';
      for (let i = 0, len = apis.length; i < len; i++) {
        if (i === 0) {
          componentName = apis[i];
        }
        this.showDocs(apis[i]);
      }

      if (options.css && componentName) {
        this.showDocs(name, componentName);
      }
    }
  }
};
