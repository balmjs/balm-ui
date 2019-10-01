const balm = require('balm');
const updateMDC = process.argv.includes('--mdc');
const updateMDI = process.argv.includes('--mdi');
const useDefault = !(updateMDC || updateMDI);
const buildDocs = process.argv.includes('--docs');
const useDocs = !balm.config.env.isProd || buildDocs;

module.exports = {
  updateMDC,
  updateMDI,
  useDefault,
  buildDocs,
  useDocs
};
