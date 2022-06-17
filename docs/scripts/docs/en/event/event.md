## 1. Event Shortcut

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

  - update the data object of the Vue instance to `new value`

    ```js
    $balmUI.onChange(property, value);
    ```

  - update the data object of the Vue instance to `true`

    ```js
    $balmUI.onOpen(property);
    $balmUI.onShow(property);
    ```

  - update the data object of the Vue instance to `false`

    ```js
    $balmUI.onClose(property);
    $balmUI.onHide(property);
    ```

### Props

| Name       | Type     | Default     | Description                                                                                |
| ---------- | -------- | ----------- | ------------------------------------------------------------------------------------------ |
| `property` | string   | `''`        | Update a specified Vue instance data object.                                               |
| `value`    | any      | `undefined` | New value of a specified Vue instance data object. Applicable only for `$balmUI.onChange`. |
| `fn`       | function | `noop`      | After method to handle.                                                                    |

## 2. Optimized Custom Event

- `balmResize` (better than `resize`)
- `balmScroll` (better than `scroll`)

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

## 3. Global Communication

> New in 8.2.1

- `$bus.on(event, callback)`
- `$bus.once(event, callback)` (New in 8.51.0)
- `$bus.off(event, callback)`
- `$bus.emit(eventName, ...args)`

  ```ts
  interface BalmUIEventBus {
    on(event: string | string[], callback: Function); // Listen for a custom event on the current vm.
    once(event: string, callback: Function); // Listen for a custom event, but only once.
    off(event: string | string[], callback?: Function); // Remove custom event listener(s).
    emit(eventName: string, ...args); // Trigger an event on the current instance.
  }

  interface VueInstance {
    $bus: BalmUIEventBus;
  }
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

### Use `$bus` without `.vue` component

```js
// `/path/to/awesome.js`

import { useBus } from 'balm-ui';
// OR
// import { useBus } from 'balm-ui/plugins/event';

const $bus = useBus();
$bus.emit('custom-event', 'Hello BalmUI');
```
