# BalmUI ChangeLog

## v5.3.0 / 2020-02-29

### Features

- partial refactoring: `<ui-checkbox>`, `<ui-switch>`

### Bug Fixes

- `<ui-select>`: fix twice event trigger
- `<ui-tabs>`: fix dynamic state bug

### BREAKING CHANGES

- `<ui-textfield>`: rename props name: <del>`leadingIcon`</del> -> `withLeadingIcon`, <del>`trailingIcon`</del> -> `withTrailingIcon`
- `<ui-select>`: rename props name: <del>`leadingIcon`</del> -> `withLeadingIcon`
- `<ui-slider>`: remove `@input` event

## v5.2.1 / 2020-02-28

### Bug Fixes

- `<ui-select>`: fix manual `@change` event bug

### Chores

- `<ui-list>`: optimize `@action` event

## v5.2.0 / 2020-02-27

### Bug Fixes

- rebuild styles for `fonts` bug

### Features

- docs refactoring

## v5.1.0 / 2020-02-26

### Features

- update [`mdc@5.1.0`](https://github.com/material-components/material-components-web/releases/tag/v5.1.0)
- update docs

## v5.0.4 / 2020-02-25

### Bug Fixes

- `<ui-textfield>`, `<ui-select>`: bugfix for the notched outline
- `<ui-dialog>`: bugfix for the Escape key

### Features

- sass code refactoring
- building structure refactoring
- update docs
- update examples

### BREAKING CHANGES

- update `@use` usage for sass code in **BalmUI**

**OLD**

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
  <link
    rel="stylesheet"
    href="/node_modules/balm-ui/components/textfield.css"
  />
  <link
    rel="stylesheet"
    href="/node_modules/balm-ui/components/autocomplete.css"
  />
  <!-- endbuild -->
  ```

**NEW**

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
  <link
    rel="stylesheet"
    href="/node_modules/balm-ui/components/textfield/textfield.css"
  />
  <link
    rel="stylesheet"
    href="/node_modules/balm-ui/components/autocomplete/autocomplete.css"
  />
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
