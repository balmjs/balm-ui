import Vue from 'vue';

const ScriptError = 'script error';

// NOTE: 可疑区域需自行增加 try...catch
function registerGlobalErrorHandler(logToServer) {
  // 全局监控JS异常
  // window.onerror = function (message, source, lineno, colno, error) {
  //   const msg = message.toLowerCase();

  //   if (msg.indexOf(ScriptError) === -1) {
  //     logToServer('window.onerror', {
  //       message,
  //       url: source,
  //       error: JSON.stringify(error)
  //     });
  //   }

  //   return false;
  // };

  // 全局监控静态资源异常
  window.addEventListener('error', (event) => {
    const tagName = event.target.tagName;

    if (tagName && (tagName.includes('LINK') || tagName.includes('SCRIPT'))) {
      const { message, source, error } = event;

      logToServer('window@error', {
        message,
        url: source,
        error: JSON.stringify(error)
      });
    }
  });

  // 全局捕获没有 catch 的 promise 异常
  window.addEventListener('unhandledrejection', (event) => {
    logToServer('window@unhandledrejection', {
      message: event.reason
    });

    event.preventDefault();
  });

  // iframe 异常

  // Vue 错误处理
  // Vue.config.errorHandler = (err, vm, info) => {
  //   const { message, stack } = err;
  //   logToServer('vue', { message, stack, vm, info });
  // };

  // 监控网页崩溃
  // window.addEventListener('load', function () {
  //   sessionStorage.setItem('good_exit', 'pending');
  //   setInterval(function () {
  //     sessionStorage.setItem('time_before_crash', new Date().toString());
  //   }, 1000);
  // });

  // window.addEventListener('beforeunload', function () {
  //   sessionStorage.setItem('good_exit', 'true');
  // });

  // if (
  //   sessionStorage.getItem('good_exit') &&
  //   sessionStorage.getItem('good_exit') !== 'true'
  // ) {
  //   /*
  //       insert crash logging code here
  //   */
  //   alert(
  //     'Hey, welcome back from your crash, looks like you crashed on: ' +
  //       sessionStorage.getItem('time_before_crash')
  //   );
  // }
}

const $errorHandler = {
  install(Vue, logToServer = console.log) {
    registerGlobalErrorHandler(logToServer);
  }
};

export default $errorHandler;
