# fix(@material-components-web)

- `data-table`: component.js line 70

  ```js
  // _this.foundation.handleRowCheckboxChange(event);
  if (event.target.getAttribute('type') === 'checkbox') {
    _this.foundation.handleRowCheckboxChange(event);
  }
  ```
