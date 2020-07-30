const updateMDC = process.argv.includes('--mdc');
const updateMDI = process.argv.includes('--mdi');
const updateMDIJson = process.argv.includes('--mdi-json');
const useDefaults = !(updateMDC || updateMDI || updateMDIJson);
const buildDocs = process.argv.includes('--docs');

module.exports = {
  updateMDC,
  updateMDI,
  updateMDIJson,
  useDefaults,
  buildDocs
};
