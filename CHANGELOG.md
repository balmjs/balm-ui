# BalmUI ChangeLog

## v5.0.1 / 2020-02-25

### Bug Fixes

- `<ui-textfield>`, `<ui-select>`: bugfix for the notched outline
- `<ui-dialog>`: bugfix for the Escape key

### Features

- sass code refactoring
- building structure refactoring
- update docs
- update examples

### BREAKING CHANGES

- update `@use` usage for sass code in __BalmUI__

__OLD__

- SASS (Default Usage)
  ```scss
  @use 'balm-ui/src/styles/components/autocomplete/variables' with (
    // Overwrite
  );

  @use 'balm-ui/src/styles/balm-ui.scss';
  ```
- CSS (Standalone Usage)
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/textfield.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/autocomplete.css" />
  <!-- endbuild -->
  ```

__NEW__

- SASS (Standalone Usage)
  ```scss
  @use 'balm-ui/components/autocomplete/variables' with (
    // Overwrite
  );

  @use 'balm-ui/components/core.scss';
  @use 'balm-ui/components/form-field/form-item.scss';
  @use 'balm-ui/components/textfield/textfield.scss';
  @use 'balm-ui/components/autocomplete/autocomplete.scss';
  ```
- CSS (Standalone Usage)
  ```html
  <!-- build:css css/vendors.css -->
  <link rel="stylesheet" href="/node_modules/balm-ui/components/core.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/textfield/textfield.css" />
  <link rel="stylesheet" href="/node_modules/balm-ui/components/autocomplete/autocomplete.css" />
  <!-- endbuild -->
  ```

## <del>v5.0.0</del> / 2020-02-23

> Deprecated, please upgrade `balm@5.0.1`

### Features

- update `balm@2.8.0`
- update [`mdc@5.0.0`](https://github.com/material-components/material-components-web/releases/tag/v5.0.0)
- update docs
- sass code refactoring

> NOTE: `@import` on updated Sass files, use `@use` instead.

---

## [4.x](https://github.com/balmjs/balm-ui/blob/4.x/CHANGELOG.md)

## [3.x](https://github.com/balmjs/balm-ui/blob/3.x/CHANGELOG.md)

## [2.x](https://github.com/balmjs/balm-ui/blob/2.x/CHANGELOG.md)

## [1.x](https://github.com/balmjs/balm-ui/blob/1.x/CHANGELOG.md)

## [0.x](https://github.com/balmjs/balm-ui/blob/0.14.x/CHANGELOG.md)
