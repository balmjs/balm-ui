## 1. 事件缩写

```js
$balmUI.onChange(property, value, fn); // property 更新为 `new value`
$balmUI.onOpen(property, fn); / $balmUI.onShow(property, fn); // property 更新为 `true`
$balmUI.onClose(property, fn); / $balmUI.onHide(property, fn); // property 更新为 `false`
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

```js
$bus.on(eventName, callback); // Listen for a custom event on the current vm.
$bus.emit(eventName, ...args); // Trigger an event on the current instance.
```

### Props

| Name        | Type     | Default | Description                                     |
| ----------- | -------- | ------- | ----------------------------------------------- |
| `eventName` | string   |         | Custom event name for the global communication. |
| `args`      | any      |         | The arguments of custom event function.         |
| `callback`  | function |         | Custom event function.                          |

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
// OR
// import { useBus } from 'balm-ui/plugins/event';

const $bus = useBus();
$bus.emit('custom-event', 'Hello BalmUI');
```
