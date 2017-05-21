const STYLES = [
  'display4',
  'display3',
  'display2',
  'display1',
  'headline',
  'title',
  'subheading2',
  'subheading1',
  'body2',
  'body1',
  'caption'
];

export default {
  methods: {
    typography(style = '', adjustMargin = false) {
      let result = STYLES.indexOf(style.toLowerCase()) > -1
        ? [`mdc-typography--${style}`]
        : [];
      if (adjustMargin) {
        result.push('mdc-typography--adjust-margin');
      }
      return result.join(' ');
    }
  }
};
