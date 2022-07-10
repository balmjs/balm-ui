## 1. 事件缩写

- `$balmUI`

  ```ts
  interface BalmUIEvent {
    onChange(property: string, value: any, fn?: Function);

    onOpen(property: string, fn?: Function);
    onShow(property: string, fn?: Function);

    onClose(property: string, fn?: Function);
    onHide(property: string, fn?: Function);
  }

  interface VueInstance {
    $balmUI: BalmUIEvent;
  }
  ```

  - 更新 Vue 实例的数据对象为 `new value`

    ```js
    $balmUI.onChange(property, value);
    ```

  - 更新 Vue 实例的数据对象为 `true`

    ```js
    $balmUI.onOpen(property);
    $balmUI.onShow(property);
    ```

  - 更新 Vue 实例的数据对象为 `false`

    ```js
    $balmUI.onClose(property);
    $balmUI.onHide(property);
    ```

### Props

| Name       | Type     | Default     | Description                                                 |
| ---------- | -------- | ----------- | ----------------------------------------------------------- |
| `property` | string   | `''`        | 更新指定的 Vue 实例对象数据                                 |
| `value`    | any      | `undefined` | 指定 Vue 实例对象数据的新值。仅限 `$balmUI.onChange` 方法。 |
| `fn`       | function | `noop`      | 更新数据后的自定义事件                                      |

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

- `$bus.on(event, callback)`
- `$bus.once(event, callback)` (New in 8.51.0)
- `$bus.off(event, callback)`
- `$bus.emit(eventName, ...args)`

  ```ts
  interface BalmUIEventBus {
    on(event: string | string[], callback: Function); // 监听当前实例上的自定义事件。
    once(event: string, callback: Function); // 监听一个自定义事件，但是只触发一次。
    off(event: string | string[], callback?: Function); // 移除自定义事件监听器。
    emit(eventName: string, ...args); // 触发当前实例上的事件。附加参数都会传给监听器回调。
  }

  interface VueInstance {
    $bus: BalmUIEventBus;
  }
  ```

### Props

| Name                 | Type     | Default | Description                      |
| -------------------- | -------- | ------- | -------------------------------- |
| `event`, `eventName` | string   |         | 全局通信的自定义事件的名称       |
| `args`               | any      |         | 全局通信的自定义事件的方法的参数 |
| `callback`           | function |         | 全局通信的自定义事件的方法       |

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
