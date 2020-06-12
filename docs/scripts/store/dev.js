const el = document.createElement('div');

export default {
  el,
  created() {
    document.body.appendChild(el);
  },
  template: '<div v-if="false"></div>'
};
