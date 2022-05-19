function setBalmCore(useSource = false) {
  const BALM_ROOT = '/Users/elf-mouse/www/balmjs/balm';
  const BALM_CORE_SOURCE = `${BALM_ROOT}/packages/balm-core`;
  const BALM_CORE = '/usr/local/node_global/lib/node_modules/balm-core';

  process.env.BALM_CORE = useSource ? BALM_CORE_SOURCE : BALM_CORE;
}

setBalmCore();
