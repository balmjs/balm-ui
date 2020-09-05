# [BalmUI](https://material.balmjs.com) ChangeLog

## v7.6.3 / 2020-09-05

### Bug Fixes

- fix material icons css

## v7.6.2 / 2020-08-28

### Bug Fixes

- `<ui-datepicker>`: bugfix for clear event

## v7.6.1 / 2020-08-15

### Bug Fixes

- `<ui-table>`: bugfix for tbody fields function

## v7.6.0 / 2020-07-30

> build by `balm@next`, [`balm@3`](https://balm.js.org/) is coming up!

### Bug Fixes

- `<ui-tab-bar>`: fix set value bug

## v7.5.2 / 2020-07-20

### Bug Fixes

- `<ui-textfield>`: event `blur` bugfix

## v7.5.1 / 2020-07-10

### Bug Fixes

- `<ui-textfield>`, `<ui-textfield-helper>`: show `validMsg` bugfix

### Chores

- `<ui-divider>`: update sass variables
- update docs for IE

## v7.5.0 / 2020-07-08

### Chores

- `<ui-pagination>`: update sass variables

### BREAKING CHANGES

- `<ui-text-divider>`: rename to `<ui-divider>`
- ⚠️ migrate from `balm-ui/dist/balm-ui-plus.js` to `balm-ui/dist/balm-ui.js`
  - `<ui-divider>`

## v7.4.3 / 2020-07-06

### Bug Fixes

- `<ui-menu>`: init menu items bugfix

### Chores

- material icons: update fonts for IE11

### Features

- `<ui-datepicker>`: add `month` select mode, add `monthOptions` prop

## v7.4.0 / 2020-07-06

### Bug Fixes

- `<ui-autocomplete>`: search static data bugfix
- `<ui-menu>`: selected item bugfix

### Features

- material icons: up to date @`v53`
- validator: add `$resetValidations`
- `<ui-menu>`, `<ui-select>`, `<ui-autocomplete>`: add new sass variables for selected state
- update docs

### BREAKING CHANGES

- `<ui-linear-progress>`: rename to `<ui-progress>`
- `<ui-circular-progress>`: rename to `<ui-spinner>`
- ⚠️ migrate from `balm-ui/dist/balm-ui-plus.js` to `balm-ui/dist/balm-ui.js`
  - `<ui-pagination>`
  - `<ui-file>`
  - `$validate`, `$resetValidations`, `$setValidations`
  - `<ui-badge>`
  - `types`, `helpers`, `detectIE` utils

## v7.3.1 / 2020-07-02

### Chores

- `<ui-textfield-helper>`, `<ui-select-helper>`: optimize `validMsg` prop

## v7.3.0 / 2020-07-02

### Bug Fixes

- `<ui-textfield-helper>`, `<ui-select-helper>`: some bugfix

### Features

- `<ui-textfield>`, `<ui-select>`: optimize no-label, `noLabel` prop is deprecated

### Chores

- clean code for data display components
- update data display api docs

## v7.2.2 / 2020-07-01

### Bug Fixes

- `<ui-rangepicker>`: init focus bugfix

### Features

- `<ui-file>`: add `disabled` prop
- `<ui-editor>`: add `readonly` prop

## v7.2.1 / 2020-06-30

### Bug Fixes

- `<ui-switch>`: fix trigger bug

### Chores

- `<ui-chips>`: optimize `options` and update docs

## v7.2.0 / 2020-06-29

### Bug Fixes

- `<ui-datepicker>`: bugfix for locale in `range` mode
- `<ui-rangepicker>`: bugfix fro empty date value (`[]`)
- `<ui-top-app-bar>`: fix `createFixedAdjustElement` bug

### Features

- `<ui-chips>`: add prop `options`, `optionLabel`, `optionValue` for choice or filter chips

### BREAKING CHANGES

- `<ui-editor>`: rename `content` prop to `model`
- `<ui-chips>`: rename `options` prop to `chips`

## v7.1.0 / 2020-06-28

### Bug Fixes

- `<ui-table>`: fix table container css bug

### Features

- `<ui-table>`: update sort

## v7.0.0 / 2020-06-27

### Bug Fixes

- `<ui-select>`: fix `helperTextId` bug

### Code Refactoring

- restructure DOM: `<ui-table>`, `<ui-textfield>`, `<ui-select>`

### Features

- update [mdc@7.0.0](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#700-2020-06-23)

### Chores

- `<ui-textfield-helper>`, `<ui-select-helper>`: optimize `validMsg`

### BREAKING CHANGES

- `<ui-table>`: thead custom item `by` field rename to `columnId`

---

## [6.x](https://github.com/balmjs/balm-ui/blob/6.x/CHANGELOG.md)

## [5.x](https://github.com/balmjs/balm-ui/blob/5.x/CHANGELOG.md)

## [4.x](https://github.com/balmjs/balm-ui/blob/4.x/CHANGELOG.md)

## [3.x](https://github.com/balmjs/balm-ui/blob/3.x/CHANGELOG.md)

## [2.x](https://github.com/balmjs/balm-ui/blob/2.x/CHANGELOG.md)

## [1.x](https://github.com/balmjs/balm-ui/blob/1.x/CHANGELOG.md)

## [0.x](https://github.com/balmjs/balm-ui/blob/0.14.x/CHANGELOG.md)
