## 1. Event Shortcut

```js
import { useEvent } from 'balm-ui';
// OR
// import { useEvent } from 'balm-ui/plugins/event';

const balmUI = useEvent();
```

```js
balmUI.onChange(property, value, fn); // update property to `new value`
balmUI.onOpen(property, fn); / balmUI.onShow(property, fn); // update property to `true`
balmUI.onClose(property, fn); / balmUI.onHide(property, fn); // update property to `false`
```

### Props

| Name       | Type     | Default     | Description                                                                               |
| ---------- | -------- | ----------- | ----------------------------------------------------------------------------------------- |
| `property` | string   | `''`        | Update a specified `data` or `setup` states.                                              |
| `value`    | any      | `undefined` | New value of a specified `data` or `setup` states. Applicable only for `balmUI.onChange`. |
| `fn`       | function | `noop`      | After method to handle.                                                                   |

## 2. Optimized Custom Event

- `balmResize` (better than `resize`)
- `balmScroll` (better than `scroll`)

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

## 3. Global Communication

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

### Use `$bus` without `.vue` component

```js
// `/path/to/awesome.js`

import { useBus } from 'balm-ui';
// OR
// import { useBus } from 'balm-ui/plugins/event';

const bus = useBus();
bus.emit('custom-event', 'Hello BalmUI');
```

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
