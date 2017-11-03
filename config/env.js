var balm = require('balm');
var useDefault = !process.argv.includes('--mdc');
var buildComponents = process.argv.includes('--components');
var buildDocs = process.argv.includes('--docs');
var useDocs = !balm.config.production || buildDocs;

module.exports = {
  useDefault,
  buildComponents,
  buildDocs,
  useDocs
};
