# Kill IE

> Please `Copy` + `Paste` or customize yours, if your need

- File: `/path/to/app/scripts/kill-ie.js`

  ```js
  import { detectIE } from 'balm-ui'; // Default Usage
  // OR
  // import detectIE from 'balm-ui/utils/ie'; // Individual Usage

  const IE = detectIE();

  const isIE = IE && IE <= 11;

  const killIE = () => {
    let body = document.getElementsByTagName('body')[0];
    let template = `<div class="kill-ie">
        <h1>Your browser is out-of-date. Please <a href="https://browsehappy.com/">download</a> one of the up-to-date, free and excellent browsers for better security, speed and comfort.</h1>
        <p>Recommended Choice：<a href="https://www.google.com/chrome/">Chrome</a></p>
      </div>`;

    body.innerHTML = template;
  };

  export { isIE, killIE };
  ```

- File: `/path/to/app/scripts/main.js`

  ```js
  import { isIE, killIE } from './kill-ie';

  if (isIE) {
    killIE();
  } else {
    // your code
  }
  ```

- File: `/path/to/app/styles/_kill-ie.scss`

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
