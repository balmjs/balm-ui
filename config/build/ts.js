function createTSDefinition(mix) {
  mix.copy('src/scripts/*.d.ts', 'dist');
}

module.exports = createTSDefinition;
