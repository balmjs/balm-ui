function importAll(r) {
  r.keys().forEach(r);
}

importAll(require.context('./components/', true, /\.spec\.js$/));
// importAll(require.context('./plugins/', true, /\.spec\.js$/));

// Standalone
// require('./components/textfield.spec');
