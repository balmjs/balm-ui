# [BalmUI](https://next-material.balmjs.com) ChangeLog

- `balm-ui@next` for Vue 3
- [`balm-ui@8`](https://github.com/balmjs/balm-ui/tree/8.x) for Vue 2

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
