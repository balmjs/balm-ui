import { reactive, toRefs } from 'vue';
import { useTheme } from 'balm-ui';
import { themes } from '@/config';

const theme = useTheme();

const state = reactive({
  theme: '',
  themeColors: {}
});

function getThemeName() {
  return localStorage.getItem('theme') || 'light';
}

function getTheme() {
  [
    'background',
    'primary',
    'on-primary',
    'secondary',
    'on-secondary',
    'surface',
    'on-surface',
    'error',
    'on-error'
  ].forEach((style) => {
    state.themeColors[style] = theme.getThemeColor(style);
  });
}

function setTheme(themeName = state.theme) {
  const themeColors = themes[themeName];

  localStorage.setItem('theme', themeName);
  theme.colors = themeColors;

  getTheme();
}

function switchTheme() {
  const themeName = state.theme === 'dark' ? 'light' : 'dark';

  state.theme = themeName;
  setTheme(themeName);
}

state.theme = getThemeName();
setTheme();

const useThemeStore = () => {
  return {
    ...toRefs(state),
    getThemeName,
    switchTheme
  };
};

export default useThemeStore;
