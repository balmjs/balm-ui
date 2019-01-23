const balm = require('balm');
const updateMDC = process.argv.includes('--mdc');
const useDefault = !updateMDC;
const buildDocs = process.argv.includes('--docs');
const useDocs = !balm.config.isProd || buildDocs;

module.exports = {
  updateMDC,
  useDefault,
  buildDocs,
  useDocs
};
