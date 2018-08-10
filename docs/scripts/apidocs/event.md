```js
$balmUI.onChange(property, value, fn); // update property to `new value`
$balmUI.onOpen(property, fn); / $balmUI.onShow(property, fn); // update property to `true`
$balmUI.onClose(property, fn); / $balmUI.onHide(property, fn); // update property to `false`
```

#### Props

| Name     | Type       | Default | Description                                                                  |
| -------- | ---------- | ------- | ---------------------------------------------------------------------------- |
| property | `String`   | `null`  | Update a specified `vm.$data`.                                               |
| value    | `any`      | `null`  | New value of a specified `vm.$data`. Applicable only for `$balmUI.onChange`. |
| fn       | `Function` | `noop`  | After method to handle.                                                      |

---

#### Optimized Custom Event

- `balmResize` (better than `resize`)

```js
window.addEventListener('balmResize', () => {
  // ...
});
```
