# fix(@material-components)

- `data-table`:

  - component.js line 70

    ```js
    // _this.foundation.handleRowCheckboxChange(event);
    if (event.target.getAttribute('type') === 'checkbox')
      _this.foundation.handleRowCheckboxChange(event);
    ```

  - component.js line 222

    ```js
    // return _this.rowCheckboxList[rowIndex].checked;
    if (_this.rowCheckboxList) return _this.rowCheckboxList[rowIndex].checked;
    ```

  - component.js line 274, 278

    ```js
    // _this.headerRowCheckbox.checked = checked;
    if (_this.headerRowCheckbox) _this.headerRowCheckbox.checked = checked;
    ```

    ```js
    // _this.headerRowCheckbox.indeterminate = indeterminate;
    if (_this.headerRowCheckbox)
      _this.headerRowCheckbox.indeterminate = indeterminate;
    ```
