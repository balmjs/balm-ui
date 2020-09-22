import { inject } from 'vue';

export function useHttp() {
  return inject('http');
}

export function useStore(key = '') {
  return key ? inject('store')[key] : inject('store');
}
