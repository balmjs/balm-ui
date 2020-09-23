import { themes } from '@/config';

export default {
  data() {
    return {
      theme: '',
      themeColors: {}
    };
  },
  created() {
    this.theme = this.getThemeName();
  },
  methods: {
    getThemeName() {
      return localStorage.getItem('theme') || 'light';
    },
    getTheme() {
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
        this.$set(this.themeColors, style, this.$theme.getThemeColor(style));
      });
    },
    setTheme(themeName = this.theme) {
      const themeColors = themes[themeName];

      localStorage.setItem('theme', themeName);
      this.$theme.colors = themeColors;

      this.getTheme();
    },
    switchTheme() {
      const themeName = this.theme === 'dark' ? 'light' : 'dark';

      this.theme = themeName;
      this.setTheme(themeName);
    }
  }
};
