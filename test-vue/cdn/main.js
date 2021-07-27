const app = Vue.createApp({
  setup() {
    let content = 'Hello BalmUI';

    return {
      content
    };
  }
});

app.use(BalmUI);
app.use(BalmUIPlus);

app.mount('#app');
