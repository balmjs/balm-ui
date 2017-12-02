var balm = require('balm');
var updateMDC = process.argv.includes('--mdc');
var useDefault = !updateMDC;
var buildDocs = process.argv.includes('--docs');
var useDocs = !balm.config.production || buildDocs;

module.exports = {
  updateMDC,
  useDefault,
  buildDocs,
  useDocs
};
