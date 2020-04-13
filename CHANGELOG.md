# BalmUI ChangeLog

## v5.6.2 / 2020-04-13

### Bug Fixes

- `<ui-table>`: fix the empty display of the fields

### Chores

- `<ui-table>`: update selected rows for the pagination

## v5.6.1 / 2020-03-19

### Chores

- clean code
- update docs

## v5.6.0 / 2020-03-17

### Features

- `<ui-item>`: add `disabled` prop

### BREAKING CHANGES

- `<ui-item>`: remove `activated` prop
- `<ui-nav>`: remove `selectedClass` slot prop for the default slot

## v5.5.1 / 2020-03-16

### Bug Fixes

- `<ui-dialog>`: conditional rendering bugfix

## v5.5.0 / 2020-03-12

### Features

- `$alert`, `$confirm`: add `raw` option
- `<ui-drawer-backdrop>`: add `@click` event

### Chores

- `$balmUI`: optimize events

### BREAKING CHANGES

- `<ui-a>`, `<ui-icon-a>`: remove <del>`url`</del> prop

## v5.4.1 / 2020-03-09

### Chores

`<ui-drawer>`: optimize permanent drawer

## v5.4.0 / 2020-03-08

### Bug Fixes

- `<ui-textfield>`, `<ui-select>`: fix floating label bug in outlined type

### Features

- docs refactoring: add **theme** navigation (include _color_, _typography_, _shape_, _icons_)
- new docs: `color`, `shape`
- `<ui-top-app-bar>`: update `navIcon` prop type: <del>`String`</del> -> `[String, Boolean]`, if set `false`, nav icon will be hidden.

### Chores

- `<ui-datepicker>`, `<ui-rangepicker>`: update `scss` usage
- `<ui-datepicker>`: add `locale` prop

### BREAKING CHANGES

- `<ui-drawer>`: rename props name: <del>`menuSelector`</del> -> `navId`
- `<ui-textfield>`, `<ui-autocomplete>`, `<ui-datepicker>`, `<ui-rangepicker>`: remove <del>`noLabel`</del> event

## v5.3.0 / 2020-02-29

### Bug Fixes

- `<ui-select>`: fix twice event trigger
- `<ui-tabs>`: fix dynamic state bug

### Features

- partial refactoring: `<ui-checkbox>`, `<ui-switch>`

### BREAKING CHANGES

- `<ui-textfield>`: rename props name: <del>`leadingIcon`</del> -> `withLeadingIcon`, <del>`trailingIcon`</del> -> `withTrailingIcon`
- `<ui-select>`: rename props name: <del>`leadingIcon`</del> -> `withLeadingIcon`
- `<ui-slider>`: remove <del>`@input`</del> event

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
