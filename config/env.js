const balm = require('balm');
const updateMDC = process.argv.includes('--mdc');
const updateMDI = process.argv.includes('--mdi');
const updateMDIJson = process.argv.includes('--mdi-json');
const useDefault = !(updateMDC || updateMDI || updateMDIJson);
const buildDocs = process.argv.includes('--docs');
const useDocs = !balm.config.env.isProd || buildDocs;

module.exports = {
  updateMDC,
  updateMDI,
  updateMDIJson,
  useDefault,
  buildDocs,
  useDocs
};
