## 1. 事件缩写

```ts
interface BalmUIEvent {
  onChange(property: string, value: any, fn?: Function);

  onOpen(property: string, fn?: Function);
  onShow(property: string, fn?: Function);

  onClose(property: string, fn?: Function);
  onHide(property: string, fn?: Function);
}
```

### Props

| Name       | Type     | Default     | Description                                                                     |
| ---------- | -------- | ----------- | ------------------------------------------------------------------------------- |
| `property` | string   | `''`        | 更新指定的 Vue 实例对象数据（`data` or `setup`）                                |
| `value`    | any      | `undefined` | 指定 Vue 实例对象数据（`data` or `setup`）的新值。仅限 `balmUI.onChange` 方法。 |
| `fn`       | function | `noop`      | 更新数据后的自定义事件                                                          |

```js
import { useEvent } from 'balm-ui';
// 或
// import { useEvent } from 'balm-ui/plugins/event';

const balmUI = useEvent();
```

- 更新 Vue 实例的数据对象为 `new value`

  ```js
  balmUI.onChange(property, value);
  ```

- 更新 Vue 实例的数据对象为 `true`

  ```js
  balmUI.onOpen(property);
  balmUI.onShow(property);
  ```

- 更新 Vue 实例的数据对象为 `false`

  ```js
  balmUI.onClose(property);
  balmUI.onHide(property);
  ```

## 2. 优化自定义事件

- `balmResize`（优于 `resize`）
- `balmScroll`（优于 `scroll`）

  - using Composable API

    ```js
    import { onMounted, onBeforeUnmount } from 'vue';

    function init() {
      // ...
    }

    export default {
      setup() {
        onMounted(() => {
          init();
          window.addEventListener('balmResize', init);
        });

        onBeforeUnmount(() => {
          window.removeEventListener('balmResize', init);
        });
      }
    };
    ```

  - using Legacy API

    ```js
    export default {
      mounted() {
        this.init();
        window.addEventListener('balmResize', this.init);
      },
      beforeUnmount() {
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

- `$bus.on(eventName, callback)`
- `$bus.emit(eventName, ...args)`

  ```ts
  interface BalmUIEventBus {
    on(eventName: string | string[], callback: Function); // 监听当前 Vue 实例的自定义事件
    emit(eventName: string, ...args); // 触发当前 Vue 实例的自定义事件
  }

  interface VueInstance {
    $bus: BalmUIEventBus;
  }
  ```

### Props

| Name        | Type     | Default | Description                      |
| ----------- | -------- | ------- | -------------------------------- |
| `eventName` | string   |         | 全局通信的自定义事件的名称       |
| `args`      | any      |         | 全局通信的自定义事件的方法的参数 |
| `callback`  | function |         | 全局通信的自定义事件的方法       |

### 3.1 在 `.vue` 组件中使用 `$bus`

- using Composable API

  ```js
  // `/path/to/awesome.vue`
  import { onMounted, onBeforeUnmount } from 'vue';
  import { useBus } from 'balm-ui';

  export default {
    setup() {
      const bus = useBus();

      onMounted(() => {
        bus.on('custom-event', (msg) => {
          console.log(msg);
        });
      });

      onBeforeUnmount(() => {
        bus.off('custom-event');
      });
    }
  };
  ```

- using Legacy API

  ```js
  // `/path/to/awesome.vue`
  export default {
    mounted() {
      this.$bus.on('custom-event', (msg) => {
        console.log(msg);
      });
    },
    beforeUnmount() {
      this.$bus.off('custom-event');
    }
  };
  ```

### 3.2 在非 `.vue` 组件中使用 `$bus`

```js
// `/path/to/awesome.js`

import { useBus } from 'balm-ui';
// 或
// import { useBus } from 'balm-ui/plugins/event';

const bus = useBus();
bus.emit('custom-event', 'Hello BalmUI');
```
