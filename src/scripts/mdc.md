# fix(@material-components-web)

- `data-table`: component.js line 60

  ```js
  // _this.foundation.handleRowCheckboxChange(event);
  if (event.target.getAttribute('type') === 'checkbox') {
    _this.foundation.handleRowCheckboxChange(event);
  }
  ```

- `tooltip`: foundation.js line 400

  ```js
  this.handleTransitionEnd();
  ```
