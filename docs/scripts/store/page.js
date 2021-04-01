export default {
  data() {
    return {
      serviceWorker: null,
      demos: []
    };
  },
  methods: {
    initSnippet(name, count) {
      this.$store.demos = []; // reset

      if (name !== 'utils' && count) {
        this.$store.demos = [''];

        for (let i = 1; i <= count; i++) {
          // NOTE: Critical dependency: the request of a dependency is an expression
          // 1. 完全使用变量 require(variable)
          // let code = require(`@/snippets/${name}/demo${i}.md`);

          // 2. 部分使用变量 require(prefix + variable + suffix)
          let filename = `${name}/demo${i}`;
          let code = require(`@/snippets/${filename}.md`); // NOTE: just one variable in `require`

          this.$store.demos.push(code);
        }
      }
    }
  }
};
