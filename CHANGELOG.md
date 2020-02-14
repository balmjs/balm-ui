# BalmUI ChangeLog

## 4.3.1

### Chores

`<ui-rangepicker>`: mobile support
update css docs: `<ui-rangepicker>`, `<ui-text-divider>`

### Bug Fixes

`<ui-rangepicker>`: fix the first input autofocus bug

## 4.3.0 (2020.02.14)

### Chores

`<ui-autocomplete>`: fix css bug for filled textfield

### Features

- new component for plus: `<ui-rangepicker>`
- `<ui-autocomplete>`, `<ui-datepicker>`: add `outlined` prop
- update docs: `<ui-autocomplete>`, `<ui-datepicker>`, `<ui-rangepicker>`

## 4.2.0 (2020.02.12)

### Features

- new component for plus: `<ui-datepicker>`

## 4.1.0 (2020.02.11)

### Bug Fixes

- `<ui-select>`: change event bugfix
- all components with `type` prop: `type` prop rewriting bugfix

### Features

- `<ui-select>`: partial refactoring
- new components for next: `<ui-banner>`, `<ui-bottom-navigation>`

### BREAKING CHANGES

- `<ui-select>`: remove `selectedIndex` prop

## 4.0.3 (2020.02.10)

### Features

- update components for accessibility

## 4.0.2 (2019.12.23)

### Features

- restore `.woff` font for IE11

## 4.0.1 (2019.12.21)

### Chores

- Utils
  - update `detectIE()`

### Features

- rebuild all components

## 4.0.0 (2019.12.17)

### Features

- code refactoring
- update `balm@2.x`
- update [`mdc@4.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#400-2019-11-02)
- update docs
- update material icons

### BREAKING CHANGES

- `<ui-drawer>`

OLD

```html
<ui-permanent-drawer><!-- the drawer child components --></ui-permanent-drawer>
<ui-dismissible-drawer>
  <!-- the drawer child components -->
</ui-dismissible-drawer>
<ui-modal-drawer><!-- the drawer child components --></ui-modal-drawer>
```

NEW

```html
<ui-drawer><!-- the drawer child components --></ui-drawer>
<ui-drawer type="dismissible"><!-- the drawer child components --></ui-drawer>
<ui-drawer type="modal"><!-- the drawer child components --></ui-drawer>
```

- `$validate` result

  - <del>`isValid`</del> -> `valid`
  - <del>`valid`</del> -> `validFields`
  - <del>`invalid`</del> -> `invalidFields`
  - <del>`errorMsg`</del> -> `validMsg`

- <del>`<ui-list-nav>`</del> -> `<ui-nav>`
- <del>`<ui-item-a>`

- `<ui-item>` child components

  - <del>`<ui-item-text>`</del>
  - <del>`<ui-item-subtext>`</del>
  - `<ui-item-text-content>`
    - `<ui-item-text1>`
    - `<ui-item-text2>`
  - `<ui-item-first-content>`
  - `<ui-item-last-content>`

- `<ui-image-supporting>` -> `<ui-image-text>`

- Use `<ui-chips>` instead of the old `<ui-chip-set>` all components.

---

## [3.x](https://github.com/balmjs/balm-ui/blob/3.x/CHANGELOG.md)

## [2.x](https://github.com/balmjs/balm-ui/blob/2.x/CHANGELOG.md)

## [1.x](https://github.com/balmjs/balm-ui/blob/1.x/CHANGELOG.md)

## [0.x](https://github.com/balmjs/balm-ui/blob/0.14.x/CHANGELOG.md)
