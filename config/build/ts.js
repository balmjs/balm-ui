function createTSDefinition(mix) {
  mix.copy('src/scripts/typings/*', 'dist/typings');
  mix.copy('src/scripts/*.d.ts', 'dist');
}

module.exports = createTSDefinition;
