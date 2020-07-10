import { detectIE } from 'balm-ui'; // Default Usage

const IE = detectIE();

window.IE = IE; // For disabling UiTocAffix

const isIE = IE && IE < 11; // Browser support IE11

const killIE = () => {
  let body = document.getElementsByTagName('body')[0];
  // <!--[if lte IE 9]>
  let template = `<div class="kill-ie">
      <h1>Your browser is out-of-date. Please <a href="https://browsehappy.com/">download</a> one of the up-to-date, free and excellent browsers for better security, speed and comfort.</h1>
      <p>Recommended Choice：<a href="https://www.google.cn/intl/zh-CN/chrome/">Chrome</a></p>
    </div>`;
  // <![endif]-->

  body.innerHTML = template;
};

export { isIE, killIE };
