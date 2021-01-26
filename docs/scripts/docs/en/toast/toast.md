```js
// Usage 1
$toast(message);

// Usage 2
$toast(options);
```

### Options

| Option      | Type   | Default | Description                                                                                                               |
| ----------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------- |
| `className` | string | `''`    | The custom class name for the toast.                                                                                      |
| `timeoutMs` | number | `2000`  | The amount of time in milliseconds to show the toast. Value must be between `2000` and `3500` or an error will be thrown. |
| `message`   | string | `''`    | The text message to display.                                                                                              |

### Use `$toast` without `.vue` component

```js
import { useToast } from 'balm-ui/dist/balm-ui-plus';
// OR
// import { useToast } from 'balm-ui/plugins/toast';

const $toast = useToast();
$toast('Hello BalmUI');
```
