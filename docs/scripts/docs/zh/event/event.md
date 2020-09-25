### 1. Event Shortcut

```js
$balmUI.onChange(property, value, fn); // update property to `new value`
$balmUI.onOpen(property, fn); / $balmUI.onShow(property, fn); // update property to `true`
$balmUI.onClose(property, fn); / $balmUI.onHide(property, fn); // update property to `false`
```

#### Props

| Name       | Type     | Default     | Description                                                                  |
| ---------- | -------- | ----------- | ---------------------------------------------------------------------------- |
| `property` | string   | `''`        | Update a specified `vm.$data`.                                               |
| `value`    | any      | `undefined` | New value of a specified `vm.$data`. Applicable only for `$balmUI.onChange`. |
| `fn`       | function | `noop`      | After method to handle.                                                      |

### 2. Global Communication

```js
$bus.sub(eventName, callback); // Listen for a custom event on the current vm.
$bus.pub(eventName, ...args); // Trigger an event on the current instance.
```

#### Props

| Name        | Type     | Default | Description                                     |
| ----------- | -------- | ------- | ----------------------------------------------- |
| `eventName` | string   |         | Custom event name for the global communication. |
| `args`      | any      |         | The arguments of custom event function.         |
| `callback`  | function |         | Custom event function.                          |

### 3. Optimized Custom Event

- `balmResize` (better than `resize`)
- `balmScroll` (better than `scroll`)

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
