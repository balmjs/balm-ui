process.env.PUBLIC_URL = 'https://material.balmjs.com';

process.env.BALM_GIT_FLOW_MAIN = 'main';
process.env.BALM_GIT_FLOW_RELEASE = 'docs-vue3';
process.env.BALM_GIT_FLOW_RELEASES = ['docs-vue3'];
process.env.BALM_GIT_FLOW_SCRIPTS = ['docs'];
process.env.BALM_GIT_FLOW_BUILD_DIR = 'dist';
process.env.BALM_GIT_FLOW_REPOSITORIES = [
  'git@github.com:balmjs/material.balmjs.com.git'
];
process.env.BALM_GIT_FLOW_SITE = 'gh-pages';

function setBalmCore(useSource = false) {
  const BALM_ROOT = '/Users/elf-mouse/www/balmjs/balm';
  const BALM_CORE_SOURCE = `${BALM_ROOT}/packages/balm-core`;
  const BALM_CORE = '/usr/local/node_global/lib/node_modules/balm-core';

  process.env.BALM_CORE = useSource ? BALM_CORE_SOURCE : BALM_CORE;
}

setBalmCore(true);
