```js
// gulpfile.js

balm.config = {
  ...
  scripts: {
    ...
    alias: {
      flatpickrCss: 'flatpickr/dist/flatpickr.min.css'
    },
  ...
};
```

```js
// /path/to/your_entry.js
...
import 'flatpickrCss';
```
