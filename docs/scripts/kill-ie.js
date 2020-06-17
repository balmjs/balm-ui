import { detectIE } from '../../src/scripts/plus'; // Default Usage

const IE = detectIE();

window.IE = IE; // For disabling UiTocAffix

const isIE = IE && IE < 11; // Browser support IE11

const killIE = () => {
  let body = document.getElementsByTagName('body')[0];
  let template = `<div class="kill-ie">
      <div class="container">
        <div class="content">
          <h1>您的浏览器版本过低，请点击<a href="https://browsehappy.com/">链接</a>升级您的浏览器</h1>
          <p>
            PS：推荐使用<a href="https://www.google.cn/intl/zh-CN/chrome/">谷歌浏览器</a>；如果是双核浏览器，请切换至<b>急速模式</b>
          </p>
        </div>
      </div>
    </div>`;

  document.getElementsByTagName('html')[0].style.height = '100%';
  body.style.height = '100%';

  body.innerHTML = template;
};

export { isIE, killIE };
