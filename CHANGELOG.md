# [BalmUI](https://next-material.balmjs.com) ChangeLog

- `balm-ui@next` for Vue 3
- [`balm-ui@8`](https://github.com/balmjs/balm-ui/tree/8.x) for Vue 2

## v9.37.0 / 2021-08-26

### Features

- `<ui-switch>`: add `selected` event

### Bug Fixes

- `<ui-chips>`: fix selected value bug

### Code Refactoring

- `<ui-switch>`: update new switch

### BREAKING CHANGES

- `<ui-checkbox>`, `<ui-radio>`, `<ui-switch>`: the `name` prop is deprecated
- `<ui-chip>`: rename prop `hidden` to `selected`
- `<ui-switch>`: remove prop `inputId`, use `id` instead
- `<ui-switch>`: remove prop `attrs`

## v9.36.0 / 2021-08-24

### Features

- update mdc@13.0.0-canary.8de07c02a.0

### Bug Fixes

- `<ui-drawer>`: fix animation bug

## v9.35.0 / 2021-08-04

### Features

- `<ui-tree>`:
  - add `selectedEvent` parameter for `@change` event
  - add `disabled` field for `dataFormat` prop

## v9.34.1 / 2021-08-02

### Bug Fixes

- `<ui-tree>`: fix prop `singleChecked` default value bug

## v9.34.0 / 2021-07-29

### Features

- update [`mdc@12.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1200-2021-07-27)
- update material-icons v94
- `<ui-chips>`, `<ui-select>`: add prop `optionFormat` (`{ label: 'label', value: 'value' }`)
- `<ui-tree>`: add prop `singleChecked`, add event `selected`
- docs: update sass docs for all

### BREAKING CHANGES

- `<ui-chips>`, `<ui-select>`: remove prop `optionLabel` and `optionValue`, use `optionFormat` instead

## v9.33.1 / 2021-07-27

### Chore

- test: update test for vite (vite does not support source code usage)

## v9.32.0 / 2021-07-20

### Features

- `<ui-tree>`: add slot `before`

### BREAKING CHANGES

- `<ui-tree>`: rename slot `action` to `after`

## v9.31.4 / 2021-07-13

### Bug Fixes

- `<ui-pagination>`: update pageSize watcher

### Chore

- `<ui-table>`: optimize fixed table

## v9.31.3 / 2021-07-05

### Bug Fixes

- `<ui-tree>`: fix reset selected value bug
- `<ui-rangepicker>`: update css
- `<ui-badge>`: fix zero count render bug
- `<ui-chips>`: fix dynamic options bug

### Chore

- `<ui-badge>`, `<ui-collapse>`, `<ui-menuitem>`, `<ui-tab>`, `<ui-textfield>`: add click event
- `<ui-tree>`: add `$refs.tree.getNode(nodeKey)` function

## v9.31.2 / 2021-06-18

### Chore

- `<ui-form-field>`: optimize performance

## v9.31.1 / 2021-06-18

### Bug Fixes

- `<ui-form-field>`: fix form-field label bug for form component props
- `<ui-tree>`: fix selected default value for single tree

## v9.31.0 / 2021-06-11

### Features

- `<ui-tree>`: add method `updateNode(type: 'create' | 'update' | 'delete', parentKey: string | number, nodeData: object)` for tree operations

## v9.30.1 / 2021-06-08

### Code Refactoring

- `<ui-editor>`: optimize editor core

### Bug Fixes

- `$theme`: fix some bug for ssr

## v9.29.0 / 2021-05-28

### Features

- update docs for mdc sass usage
- `<ui-collapse>`: add prop `iconEndAligned`

### Bug Fixes

- `<ui-form-field>`: fix css bug for the action label

## v9.28.0 / 2021-05-27

### Features

- add `$theme` init config
- add helpers: `toCamelCase`, `toCapitalize`

## v9.27.0 / 2021-05-25

### Bug Fixes

- fix SSR bug for bundler

### BREAKING CHANGES

- move components: `UiAutocomplete`, `UiDatepicker`, `UiRangepicker` from `balm-ui-plus.js` to `balm-ui.js` library
- move plugins: `$alert`, `$confirm`, `$toast` from `balm-ui-plus.js` to `balm-ui.js` library

## v9.26.0 / 2021-05-20

### Bug Fixes

- `<ui-tree>`: fix init `selectedNodes` bug and `defaultExpandedKeys` bug

### BREAKING CHANGES

- `<ui-tree>`: remove prop `defaultSelectedKeys`

## v9.25.0 / 2021-04-22

### Features

- new components for next:
  - `<ui-bottom-navigation>`
  - `<ui-bottom-sheet>`

### BREAKING CHANGES

- `<ui-drawer-backdrop>`: the component is deprecated, just use `<ui-drawer type="modal">`
- `<ui-dialog>`: the `noBackdrop` prop rename to `noScrim`

## v9.24.1 / 2021-04-16

### Bug Fixes

- `v-button`: individual package

## v9.24.0 / 2021-04-16

### Features

- update [`mdc@11.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1100-2021-04-15)
- update material-icons v85

## v9.23.0 / 2021-04-12

### Features

- update material-icons v83

### Bug Fixes

- `<ui-tooltip>`: fix blur event bug for temporary solution

## v9.22.0 / 2021-04-09

### Features

- new directives:
  - `v-button`

## v9.21.0 / 2021-04-08

### Features

- new directives:
  - `v-copy`
  - `v-debounce`
  - `v-longpress`
- `<ui-snackbar>`: add prop `position`
- `$toast`: add option `position`

### Bug Fixes

- `<ui-tabs>`, `<ui-tab-bar>`, `<ui-tab>`: fix dynamic tab bug

## v9.20.0 / 2021-04-02

### Features

- docs: update material icons demo
- `$toast`: update css for mobile
- update `11.0.0-canary.e7202cb57.0`

### Code Refactoring

- refactor BalmUI source code structure
- `<ui-banner>`: add prop `centered`, `fixed`, `withImage`, `mobileStacked`

### Bug Fixes

- `<ui-textfield>`: fix sync counter bug
- fix disabled bug for all data input components
- fix overwrite components' props bug

### BREAKING CHANGES

- `<ui-banner>`: remove prop message

## v9.19.0 / 2021-03-26

### Features

- `<ui-icon>`: add sass variables `$dark-focused`, `$light-focused`
- optimize warn/error message for all
- docs: update 中文 translation
- update material-icons v82

## v9.18.1 / 2021-03-15

### Bug Fixes

- `v-tooltip`: fix unmount bug

## v9.18.0 / 2021-03-15

### Features

- new components: `<ui-tooltip-anchor>`
- `<ui-tooltip>`: add prop `type`, `rich`
- `v-tooltip`: add tooltip anchor for global

## v9.17.0 / 2021-03-12

### Features

- `<ui-tree>`: add prop `autoExpandParent`, `defaultExpandedKeys`, `defaultSelectedKeys`

## v9.16.2 / 2021-03-12

### Bug Fixes

- `<ui-tree>`: fix selected handler bug

### Features

- `<ui-tree>`: add sass variables

## v9.16.0 / 2021-03-12

### Features

- new components: `<ui-tree>`

## v9.15.0 / 2021-03-11

### Features

- update `mdc@11.0.0-canary.a678806f5.0`
- validator: add `validator.clear`, `validator.get`, `validator.set`

### BREAKING CHANGES

- validator: The `validator.setValidations` has been deprecated. Use the `validator.set` instead.

## v9.14.0 / 2021-03-09

### Bug Fixes

- fix some bug for card actions and list

### Features

- update `mdc@11.0.0-canary.7522dcaca.0`
- add examples and docs for `vite` 2.0
- `<ui-dialog>`: add prop `fullscreen` for mobile

## v9.13.0 / 2021-02-28

### Bug Fixes

- `<ui-table>`: fix table cell properies bug

### Features

- `<ui-dialog>`: add prop `escapeKey`

## v9.12.1 / 2021-02-07

### Bug Fixes

- `v-ripple`: fix theme color bug

## v9.12.0 / 2021-02-07

### Features

- update [`mdc@10.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1000-2021-02-05)
- update material-icons v76

### BREAKING CHANGES

- `<ui-progress>`: remove prop `reversed`

## v9.11.1 / 2021-02-05

### Bug Fixes

- `<ui-textfield-icon>`, `<ui-select-icon>`: fix click handler bug

## v9.11.0 / 2021-02-04

### Bug Fixes

- `<ui-file>`: fix `outlined` prop bug

### Features

- `<ui-pagination>`: add prop `jumperButtonOutlined`

## v9.10.0 / 2021-02-04

### Features

- add `<ui-tree>` component for experimental

### Chore

- `<ui-table>`: update css for fixed table

## v9.9.0 / 2021-01-28

### Features

- `<ui-form>`
  - add prop `labelTopRightAligned`, `actionAlign`
  - add slot prop `itemClass`, `subitemClass`
  - add sass variable `$form-subitem-margin-right`
  - style refactoring

### Bug Fixes

- `<ui-menu>`: fix distance watching bug

## v9.8.0 / 2021-01-27

### Bug Fixes

- `$validator`: fix custom validations bug
- `<ui-select-helper>`: fix `helperTextId` tips bug

### BREAKING CHANGES

- `$validator`: `resetValidations` is deprecated

## v9.7.2 / 2021-01-25

### Bug Fixes

- `<ui-table>`: fix header row checkbox bug

## v9.7.1 / 2021-01-20

### Bug Fixes

- `<ui-editor>`: fix document event bug for ssr, fix emoji blur event for multi editors

## v9.7.0 / 2021-01-18

### Features

- `<ui-table>`: add prop `showProgress`, `fixedHeader`, `defaultColWidth`, `scroll`

### Code Refactoring

- `<ui-table>`: add fixed table

### BREAKING CHANGES

- `<ui-table>`: rename prop `caption`, `colgroup`, `columns`, `noData`

## v9.6.1 / 2021-01-06

### Bug Fixes

- `v-anchor`: fix updated bug in html modifier

## v9.6.0 / 2021-01-04

### Chore

- optimize building

## v9.5.0 / 2020-12-31

### Features

- update [mdc@9.0.0](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#900-2020-12-29)
- new components:
  - `<ui-segmented-buttons>`
  - `<ui-segmented-button>`

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
