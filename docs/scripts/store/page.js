export default {
  data() {
    return {
      docs: {
        intro: '',
        usage: '',
        demos: [],
        apis: [],
        css: ''
      }
    };
  },
  computed: {
    demos() {
      return this.docs.demos;
    }
  },
  methods: {
    showSnippet(name, count) {
      if (name) {
        this.docs.demos = [''];

        for (let i = 1; i <= count; i++) {
          // NOTE: Critical dependency: the request of a dependency is an expression
          // 1. 完全使用变量 require(variable)
          // let code = require(`@/snippets/${name}/demo${i}.md`);

          // 2. 部分使用变量 require(prefix + variable + suffix)
          let filename = `${name}/demo${i}`;
          let code = require(`@/snippets/${filename}.md`);

          this.docs.demos.push(code);
        }
      } else {
        console.warn('The snippet `name` is required.');
      }
    },
    showDocs(name, key, isAPI = false) {
      let filename = `${name}/${key}`;
      let docs = require(`@/docs/${filename}.md`);
      if (isAPI) {
        this.docs.apis.push(docs);
      } else {
        this.docs[key] = docs;
      }
    },
    initDocs(
      name,
      options = {
        demoCount: 0,
        apis: [],
        css: false
      }
    ) {
      // reset
      this.docs = {
        intro: '',
        usage: '',
        demos: [],
        apis: [],
        css: ''
      };

      // init
      this.showDocs(name, 'intro');

      if (name !== 'utils') {
        this.showDocs(name, 'usage');

        if (options.demoCount) {
          this.showSnippet(name, options.demoCount);
        }

        if (options.apis) {
          const apidocs = options.apis.length ? options.apis : [name];
          apidocs.forEach((apidoc) => {
            this.showDocs(name, apidoc, true);
          });
        }

        if (options.css) {
          this.showDocs(name, 'css');
        }
      }
    }
  }
};
