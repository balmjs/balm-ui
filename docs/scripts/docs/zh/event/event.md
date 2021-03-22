## 1. 事件缩写

- 更新 Vue 实例的数据对象为 `new value`

  ```ts
  $balmUI.onChange(property: string, value: any, fn?: Function);
  ```

- 更新 Vue 实例的数据对象为 `true`

  ```ts
  $balmUI.onOpen(property: string, fn?: Function);
  $balmUI.onShow(property: string, fn?: Function);
  ```

- 更新 Vue 实例的数据对象为 `false`

  ```ts
  $balmUI.onClose(property: string, fn?: Function);
  $balmUI.onHide(property: string, fn?: Function);
  ```

### Props

| Name       | Type     | Default     | Description                                            |
| ---------- | -------- | ----------- | ------------------------------------------------------ |
| `property` | string   | `''`        | 更新指定的 `vm.$data`                                  |
| `value`    | any      | `undefined` | 指定 `vm.$data` 的新值。仅限 `$balmUI.onChange` 方法。 |
| `fn`       | function | `noop`      | 更新数据后的自定义事件                                 |

## 2. 优化自定义事件

- `balmResize`（优于 `resize`）
- `balmScroll`（优于 `scroll`）

  ```js
  export default {
    mounted() {
      this.init();
      window.addEventListener('balmResize', this.init);
    },
    beforeDestroy() {
      window.removeEventListener('balmResize', this.init);
    },
    methods: {
      init() {
        // ...
      }
    }
  };
  ```

## 3. 全局通信

> New in 8.2.1

```ts
$bus.on(eventName: string | string[], callback: Function); // 监听当前 Vue 实例的自定义事件
$bus.emit(eventName: string, ...args); // 触发当前 Vue 实例的自定义事件
```

### Props

| Name        | Type     | Default | Description                      |
| ----------- | -------- | ------- | -------------------------------- |
| `eventName` | string   |         | 全局通信的自定义事件的名称       |
| `args`      | any      |         | 全局通信的自定义事件的方法的参数 |
| `callback`  | function |         | 全局通信的自定义事件的方法       |

```js
// `/path/to/awesome.vue`

export default {
  mounted() {
    this.$bus.on('custom-event', (msg) => {
      console.log(msg);
    });
  },
  beforeDestroy() {
    this.$bus.off('custom-event');
  }
};
```

### 在非 `.vue` 组件中使用 `$bus`

```js
// `/path/to/awesome.js`

import { useBus } from 'balm-ui';
// 或
// import { useBus } from 'balm-ui/plugins/event';

const $bus = useBus();
$bus.emit('custom-event', 'Hello BalmUI');
```
