```html
<div v-longpress></div>
```

```ts
type LongpressConfig =
  | Function // New in 8.52.0
  | {
      callback: Function;
      delay?: number;
    };
```
