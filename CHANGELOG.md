# [BalmUI](https://next-material.balmjs.com) ChangeLog

- `balm-ui@next` for Vue 3
- [`balm-ui@8`](https://github.com/balmjs/balm-ui/tree/8.x) for Vue 2

## v9.4.1 / 2020-12-21

### Bug Fixes

- `<ui-file>`: fix tmpId compatibility bug for IE 11

## v9.4.0 / 2020-12-16

### Features

- update material-icons v67

### Reverts

- restore sharp theme icons

## v9.3.1 / 2020-12-09

### Bug Fixes

- `<ui-select>`: fix select menu fixed bug

### Reverts

- `<ui-dialog-content>`: remove auto fixed internal select

## v9.3.0 / 2020-12-08

### Features

- `<ui-dialog-title>`: add `closable` prop
- `<ui-autocomplete>`: add `sourceFormat`, `highlight` prop
- `<ui-select>`: add `fixed` prop for overflow inside of the scrollable component
- `<ui-pagination>`: add default slot for custom pagesize area
- update `mdc@9.0.0-canary.832668d33.0`

### Bug Fixes

- `<ui-rangepicker>`: fix second input onChange bug for rangePlugin
- `<ui-autocomplete>`: optimize and improve search function

## v9.2.1 / 2020-11-27

### Bug Fixes

- `<ui-table>`: textfield onBlur bug in table
- `<ui-button>`: card button class bugfix

## v9.2.0 / 2020-11-25

### Features

- `<ui-editor>`: add prop `toolbarTips`, add `html` format

### Bug Fixes

- `<ui-select>`: overflow inside of dialog, set an explicit width by `data-width` attribute

## v9.1.0 / 2020-11-20

### Features

- add esModule build: `balm-ui.esm.js` and `balm-ui-plus.esm.js` for `vite`
- update `mdc@9.0.0-canary.99cfb6bd5.0`

### Chore

- `<ui-dialog>`: update css

## v9.0.2 / 2020-11-06

### Bug Fixes

- `<ui-textfield>`, `<ui-select>`: update the component inside of `<ui-form-field>` css
- `<ui-select>`: update the component inside of `<ui-dialog>` css

### Chore

- `<ui-autocomplete>`, `<ui-dialog>`: update css

### Reverts

- `<ui-select>`: deprecated v9.0.1

## <del>v9.0.1</del> / 2020-11-04

### Features

- `<ui-select>`: add prop <del>`fixedWidth`</del> for [mdc select bug](https://github.com/material-components/material-components-web/issues/5590)

## v9.0.0 / 2020-11-03

### Features

- update [`mdc@8.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#800-2020-11-02)

### BREAKING CHANGES

#### Props

- `<ui-icon-button>`, `<ui-textfield>`, `<ui-autocomplete>`, `<ui-editor>`, `<ui-select>`, `<ui-checkbox>`, `<ui-radio>`, `<ui-chips>`, `<ui-datepicker>`, `<ui-rangepicker>`, `<ui-switch>`, `<ui-slider>`: rename prop `model` -> `modelValue`
- `<ui-drawer>`, `<ui-menu>`, `<ui-dialog>`, `<ui-snackbar>`, `<ui-banner>`: rename prop `open` -> `modelValue`
- `<ui-tab-bar>`, `<ui-tabs>`: rename prop `active` -> `modelValue`
- `<ui-pagination>`: rename prop `page` -> `modelValue`
- `<ui-list>`: rename prop `selectedIndex` -> `modelValue`
- `<ui-table>`: rename prop `selectedRows` -> `modelValue`
- `<ui-textfield>`, `<ui-autocomplete>`, `<ui-checkbox>`, `<ui-radio>`, `<ui-file>`, `<ui-datepicker>`, `<ui-switch>`: rename prop `id` -> `inputId`

#### Events

- `<ui-icon-button>`, `<ui-drawer>`, `<ui-tab-bar>`, `<ui-tabs>`, `<ui-menu>`, `<ui-pagination>`, `<ui-editor>`, `<ui-select>`, `<ui-checkbox>`, `<ui-radio>`, `<ui-chips>`, `<ui-datepicker>`, `<ui-rangepicker>`, `<ui-switch>`, `<ui-slider>`, `<ui-dialog>`, `<ui-snackbar>`, `<ui-banner>`: rename event `@change` -> `@update:modelValue`
- `<ui-textfield>`, `<ui-autocomplete>`: rename event `@input` -> `@update:modelValue`
- `<ui-list>`: rename event `@action` -> `@update:modelValue`
- `<ui-table>`: rename event `@selected` -> `@update:modelValue`
