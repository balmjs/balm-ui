/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
const detectIE = () => {
  const ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

  // Edge 12 (Spartan)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  // Edge 13
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  // NOTE: 2014
  // const msie = ua.indexOf('MSIE ');
  // if (msie > 0) {
  //   // IE 10 or older => return version number
  //   return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  // }

  // const trident = ua.indexOf('Trident/');
  // if (trident > 0) {
  //   // IE 11 => return version number
  //   const rv = ua.indexOf('rv:');
  //   return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  // }

  // NOTE: 2019
  const ie = /\b(MSIE |Trident.*?rv:)(\d+)/.exec(ua);
  if (ie) {
    return parseInt(ie[2], 10);
  }

  const edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // Other browser
  return false;
};

export default detectIE;
