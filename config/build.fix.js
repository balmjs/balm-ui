const fixGridCssOptions = {
  substr: '2*-1',
  replacement: '2 * -1'
};

function fixGridCss(mix) {
  mix.replace('./dist/balm-ui.css', './dist', fixGridCssOptions);
  mix.replace('./components/grid/grid.css', './components/grid', fixGridCssOptions);
}


module.exports = fixGridCss;
