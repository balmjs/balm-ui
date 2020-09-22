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

---

#### Optimized Custom Event

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
