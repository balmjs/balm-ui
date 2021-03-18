# 万恶的 IE

> 如果需要请直接 **复制粘贴** 或 _自定义_

- 文件：`/path/to/app/scripts/kill-ie.js`

```js
import { detectIE } from 'balm-ui'; // 默认用法
// 或
// import detectIE from 'balm-ui/utils/ie'; // 独立用法

const IE = detectIE();

const isIE = IE && IE < 11; // Browser support IE 11+

const killIE = () => {
  let body = document.getElementsByTagName('body')[0];
  let template = `<div class="kill-ie">
      <h1>您当前使用的浏览器版本过低，可能存在安全风险，请点击<a href="https://browsehappy.com/">这里</a>选择一款新版浏览器。</h1>
      <p>建议升级：<a href="https://www.google.cn/intl/zh-CN/chrome/">谷歌浏览器</a></p>
    </div>`;

  body.innerHTML = template;
};

export { isIE, killIE };
```

- 文件：`/path/to/app/scripts/main.js`

```js
import { isIE, killIE } from './kill-ie';

if (isIE) {
  killIE();
} else {
  // your code
}
```

- 文件：`/path/to/app/styles/_kill-ie.scss`

```scss
.kill-ie {
  position: absolute;
  text-align: center;
  background-color: #bdbdbd;

  h1 {
    font-size: 36px;
  }

  p {
    font-size: 24px;
  }

  a {
    text-decoration: underline;
    color: red;
    font-weight: bold;
  }
}
```
