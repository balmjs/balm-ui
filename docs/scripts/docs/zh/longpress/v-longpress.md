```html
<div v-longpress></div>
```

```ts
type LongpressConfig =
  | Function // New in 10.9.1
  | {
      callback: Function;
      delay?: number;
    };
```
