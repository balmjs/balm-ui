const templates = [
  {
    input: 'index.html',
    output: 'views', // Replace 'views' to your remote project views path
    renameOptions: {
      basename: 'index',
      extname: '.php'
    }
  }
];

module.exports = function publish(mix) {
  if (mix.env.isProd) {
    // Publish assets
    mix.publish();
    // Publish templates
    mix.publish(templates);
  }
};
