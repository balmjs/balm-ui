const el = document.createElement('div');

export default {
  el,
  template: '<div v-if="false"></div>',
  created() {
    document.body.appendChild(el);
  }
};
