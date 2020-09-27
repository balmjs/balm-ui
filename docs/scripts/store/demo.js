export default {
  data() {
    return {
      demoMenu: []
    };
  },
  methods: {
    async getDemoMenu() {
      this.demoMenu = await this.$http.get('/data/table.json');
    }
  }
};
