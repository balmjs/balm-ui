# [BalmUI](https://v8.material.balmjs.com) ChangeLog

> :tada: [`balm-ui`](https://github.com/balmjs/balm-ui)(v9) supports for Vue 3

## v8.49.0 / 2022-02-15

### Features

- add vetur support

## v8.48.2 / 2022-02-09

### Bug Fixes

- `<ui-table>`: fix sort css bug

### Chore

- `<ui-textfield-helper>`: optimize helper with counter hints

## v8.48.1 / 2022-02-08

:tada: Vue 3 is now the new default version!

## v8.48.0 / 2022-01-29

TL;DR: Vue 3 will become the new default version on **Monday, February 7, 2022**!

### Features

- update material-icons v121

## v8.47.4 / 2022-01-21

### Bug Fixed

- `<ui-list>`, `<ui-nav>`: fix `nonInteractive` prop bug

## v8.47.3 / 2022-01-19

### Bug Fixed

- `<ui-rangepicker>`: fix destroy bug

## v8.47.2 / 2022-01-13

### Reverts

- revert dependencies

## v8.47.1 / 2021-12-24

### Bug Fixes

- `<ui-table>`: fix some bug for `selectedRows` watcher

## v8.47.0 / 2021-12-16

### Features

- `<ui-pagination>`: add prop `ofText`

### Chore

- `v-debounce`: optimize the default delay (`250ms`) for debounce
- `<ui-table>`: optimize the fixed table

## v8.46.6 / 2021-12-10

### Bug Fixes

- `<ui-table>`: fix the table cell checkbox handler bug

## v8.46.5 / 2021-12-09

### Bug Fixes

- `<ui-autocomplete>`: throwing error on pressing enter key

### Chore

- `<ui-table>`: optimize fixed table

## v8.46.4 / 2021-11-23

### Bug Fixes

- `<ui-table>`: fix override variables (`$header-row-text-color`, `$row-text-color`) bug

## v8.46.3 / 2021-11-16

### Chore

- `<ui-list>`: update non-Interactive lists

## v8.46.2 / 2021-08-27

### Bug Fixes

- `<ui-slider>`: fix step bug

## v8.46.1 / 2021-08-26

### Bug Fixes

- `<ui-drawer>`: fix type watcher bug

## v8.46.0 / 2021-08-25

### Features

- `<ui-switch>`: add `selected` event

### Bug Fixes

- `<ui-chips>`: fix selected value bug

### BREAKING CHANGES

- `<ui-switch>`: update prop `model`, just use boolean type
- `<ui-checkbox>`, `<ui-radio>`, `<ui-switch>`: the `name` prop is deprecated
- `<ui-chip>`: rename prop `hidden` to `selected`

## v8.45.0 / 2021-08-24

### Reverts

- `<ui-pagination>`: remove prop `hasPage`, use `pageSpan` instead

## v8.44.1 / 2021-08-24

### Bug Fixes

- `<ui-drawer>`: fix animation bug

## v8.44.0 / 2021-08-11

### Features

- `<ui-pagination>`: add prop `hasPage`

### Chore

- `<ui-tree>`: update css for root and leaf node

## v8.43.1 / 2021-08-03

### Bug Fixes

- `<ui-tree>`: fix selected nodes bug for async data

## v8.43.0 / 2021-08-03

### Features

- `<ui-tree>`:
  - add `selectedEvent` parameter for `@change` event
  - add `disabled` field for `dataFormat` prop

### Bug Fixes

- `<ui-tree>`: fix watch bug for `data`

## v8.42.1 / 2021-07-30

### Bug Fixes

- `<ui-tree>`: fix prop `singleChecked` default value bug

## v8.42.0 / 2021-07-29

### Features

- update [`mdc@12.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1200-2021-07-27)
- update material-icons v94
- `<ui-chips>`, `<ui-select>`: add prop `optionFormat` (`{ label: 'label', value: 'value' }`)
- `<ui-tree>`: add prop `singleChecked`, add event `selected`
- docs: update sass docs for all

### BREAKING CHANGES

- `<ui-chips>`, `<ui-select>`: remove prop `optionLabel` and `optionValue`, use `optionFormat` instead

## v8.41.1 / 2021-07-19

### Bug Fixes

- `<ui-tree>`: fix create node bug

## v8.41.0 / 2021-07-19

### Features

- `<ui-tree>`: add slot `before`

### BREAKING CHANGES

- `<ui-tree>`: rename slot `action` to `after`

## v8.40.9 / 2021-07-13

### Bug Fixes

- `<ui-pagination>`: update pageSize watcher

### Chore

- `<ui-table>`: optimize fixed table

## v8.40.7 / 2021-07-05

### Bug Fixes

- `<ui-tree>`: fix `$refs.tree.getNode` function params bug

## v8.40.6 / 2021-07-05

### Bug Fixes

- `<ui-chips>`: fix dynamic options bug

## v8.40.5 / 2021-07-02

### Chore

- `<ui-badge>`, `<ui-collapse>`, `<ui-menuitem>`, `<ui-tab>`, `<ui-textfield>`: add click event

### Bug Fixes

- `<ui-badge>`: fix zero count render bug

## v8.40.4 / 2021-06-24

### Bug Fixes

- `<ui-tree>`: fix reset selected value bug
- `<ui-rangepicker>`: update css

## v8.40.3 / 2021-06-18

### Chore

- `<ui-form-field>`: optimize performance

## v8.40.1 / 2021-06-16

### Bug Fixes

- `<ui-form-field>`: fix form-field label bug for form component props
- `<ui-tree>`: fix selected default value for single tree

## v8.40.0 / 2021-06-10

### Features

- `<ui-tree>`: add method `updateNode(type: 'create' | 'update' | 'delete', parentKey: string | number, nodeData: object)` for tree operations

## v8.39.0 / 2021-05-28

### Features

- update docs for mdc sass usage
- `<ui-collapse>`: add prop `iconEndAligned`

### Bug Fixes

- `<ui-form-field>`: fix css bug for the action label

## v8.38.0 / 2021-05-27

### Features

- add `$theme` init config
- add helpers: `toCamelCase`, `toCapitalize`

## v8.37.0 / 2021-05-25

### BREAKING CHANGES

- move components: `UiAutocomplete`, `UiDatepicker`, `UiRangepicker` from `balm-ui-plus.js` to `balm-ui.js` library
- move plugins: `$alert`, `$confirm`, `$toast` from `balm-ui-plus.js` to `balm-ui.js` library

## v8.36.0 / 2021-05-20

### Bug Fixes

- `<ui-tree>`: fix init `selectedNodes` bug and `defaultExpandedKeys` bug

### BREAKING CHANGES

- `<ui-tree>`: remove prop `defaultSelectedKeys`

## v8.35.0 / 2021-04-22

### BREAKING CHANGES

- `<ui-drawer-backdrop>`: the component is deprecated, just use `<ui-drawer type="modal">`
- `<ui-dialog>`: the `noBackdrop` prop rename to `noScrim`

## v8.34.0 / 2021-04-21

### Features

- new components for next:
  - `<ui-bottom-navigation>`
  - `<ui-bottom-sheet>`

## v8.33.0 / 2021-04-16

### Features

- update [`mdc@11.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1100-2021-04-15)
- update material-icons v85
- new components: `<ui-tooltip-anchor>`
- `<ui-tooltip>`: add prop `type`, `rich`
- `v-tooltip`: add tooltip anchor for global

### Bug Fixes

- `v-button`: individual package

## v8.32.0 / 2021-04-12

### Features

- update material-icons v83

## v8.31.0 / 2021-04-09

### Features

- new directives:
  - `v-button`

## v8.30.0 / 2021-04-08

### Features

- `<ui-snackbar>`: add prop `position`
- `$toast`: add option `position`

## v8.29.0 / 2021-04-07

### Features

- new directives:
  - `v-copy`
  - `v-debounce`
  - `v-longpress`

## v8.28.3 / 2021-04-06

### Bug Fixes

- `<ui-tabs>`, `<ui-tab-bar>`: fix dynamic tabs bug

## v8.28.0 / 2021-04-01

### Features

- `$toast`: update css for mobile
- docs: update for pwa

## v8.27.1 / 2021-03-31

### Bug Fixes

- fix overwrite components' props bug

## v8.27.0 / 2021-03-31

### Code Refactoring

- refactor BalmUI source code structure
- `<ui-banner>`: add prop `centered`, `fixed`, `withImage`, `mobileStacked`

### Features

- docs: update material icons demo

### Bug Fixes

- `<ui-textfield>`: fix sync counter bug
- fix `disabled` bug for all data input components

### BREAKING CHANGES

- `<ui-banner>`: remove prop `message`
- `$setGrid`: The `$setGrid` has been deprecated. Use the `$grid.set` instead.

## v8.26.0 / 2021-03-24

### Features

- `<ui-icon>`: add sass variables `$dark-focused`, `$light-focused`
- optimize warn/error message for all
- docs: update 中文 translation
- update material-icons v82

## v8.25.0 / 2021-03-11

### Features

- `<ui-tree>`: add prop `autoExpandParent`, `defaultExpandedKeys`, `defaultSelectedKeys`

## v8.24.2 / 2021-03-11

### Bug Fixes

- `<ui-tree>`: fix selected handler bug

### Features

- `<ui-tree>`: add sass variables

## v8.24.0 / 2021-03-11

### Features

- new components: `<ui-tree>`

## v8.23.0 / 2021-03-11

### Features

- validator: add `$validations.clear`, `$validations.get`, `$validations.set`

### BREAKING CHANGES

- validator: The `$setValidations` has been deprecated. Use the `$validations.set` instead.

## v8.22.0 / 2021-02-18

### Bug Fixes

- `<ui-table>`: fix table cell properies bug

### Features

- `<ui-dialog>`: add prop `escapeKey`

## v8.21.1 / 2021-02-07

### Bug Fixes

- `v-ripple`: fix theme color bug

## v8.21.0 / 2021-02-07

### Features

- update [`mdc@10.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1000-2021-02-05)
- update material-icons v76

### BREAKING CHANGES

- `<ui-progress>`: remove prop `reversed`

## v8.20.1 / 2021-02-05

### Bug Fixes

- `<ui-textfield-icon>`, `<ui-select-icon>`: fix click handler bug

## v8.20.0 / 2021-02-04

### Bug Fixes

- `<ui-file>`: fix `outlined` prop bug

### Features

- `<ui-pagination>`: add prop `jumperButtonOutlined`

## v8.19.0 / 2021-02-04

### Features

- `$store`: add `useStore` function
- add `<ui-tree>` component for experimental

## v8.18.1 / 2021-02-02

### Chore

- `<ui-table>`: update css for fixed table

## v8.18.0 / 2021-01-28

### Features

- `<ui-form>`
  - add prop `labelTopRightAligned`, `actionAlign`
  - add slot prop `itemClass`, `subitemClass`
  - add sass variable `$form-subitem-margin-right`
  - style refactoring

### Bug Fixes

- `<ui-menu>`: fix `distance` watching bug

## v8.17.0 / 2021-01-27

### Bug Fixes

- `$validator`: fix custom validations bug

### BREAKING CHANGES

- `$validator`: `resetValidations` is deprecated

## v8.16.2 / 2021-01-25

### Bug Fixes

- `<ui-table>`: fix header row checkbox bug

## v8.16.1 / 2021-01-20

### Bug Fixes

- `<ui-editor>`: fix document event bug for ssr, fix emoji blur event for multi editors

## v8.16.0 / 2021-01-13

### Features

- `<ui-table>`: add prop `showProgress`, `fixedHeader`, `defaultColWidth`, `scroll`

### Code Refactoring

- `<ui-table>`: add fixed table

### BREAKING CHANGES

- `<ui-table>`: rename prop `caption`, `colgroup`, `columns`, `noData`

## v8.15.0 / 2021-01-04

### Chore

- optimize building

## v8.14.0 / 2020-12-30

### Code Refactoring

- `<ui-slider>`

### Features

- update [`mdc@9.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#900-2020-12-29)
- new components:
  - `<ui-segmented-buttons>`
  - `<ui-segmented-button>`

## v8.13.1 / 2020-12-21

### Bug Fixes

- `<ui-file>`: fix tmpId compatibility bug for IE 11

## v8.13.0 / 2020-12-16

### Features

- update material-icons v67

### ss

- ``

- restore sharp theme icons

## v8.12.0 / 2020-12-09

### Features

- `<ui-autocomplete>`: add `highlight` prop
- `<ui-select>`: add `fixed` prop for overflow inside of some component

### Bug Fixes

- `<ui-autocomplete>`: optimize and improve search function

## v8.11.0 / 2020-12-07

### Features

- `<ui-pagination>`: add default slot for custom pagesize area info

### Reverts

- restore `<ui-select>` css for the component inside of `<ui-dialog>`

## v8.10.0 / 2020-12-01

### Features

- `<ui-dialog-title>`: add `closable` prop
- `<ui-autocomplete>`: add `sourceFormat` prop

### Bug Fixes

- `<ui-rangepicker>`: fix second input onChange bug for rangePlugin

## v8.9.2 / 2020-11-27

### Bug Fixes

- `<ui-table>`: textfield onBlur bug in table
- `<ui-button>`: card button class bugfix

## v8.9.1 / 2020-11-25

### Bug Fixes

- `<ui-form>`: change <del>`fieldset`</del> to `div` tag for display bug

## v8.9.0 / 2020-11-24

### Features

- `<ui-editor>`: add `html` format

### Chore

- `<ui-editor>`: update toolbarTips for `align`/`list`/`indent`/`script` formats

## v8.8.0 / 2020-11-23

### Features

- `<ui-editor>`: add prop `toolbarTips`

## v8.7.3 / 2020-11-20

### Chore

- `<ui-dialog>`: update css

### Reverts

- revert floating label tag

## v8.7.2 / 2020-11-06

### Bug Fixes

- `<ui-textfield>`, `<ui-select>`: update the component inside of `<ui-form-field>` css
- `<ui-select>`: update the component inside of `<ui-dialog>` css

### Chore

- `<ui-autocomplete>`, `<ui-dialog>`: update css

### Reverts

- `<ui-select>`: deprecated `v8.7.1`

## <del>v8.7.1</del> / 2020-11-04

### Features

- `<ui-select>`: add prop <del>`fixedWidth`</del> for [mdc select bug](https://github.com/material-components/material-components-web/issues/5590)

## v8.7.0 / 2020-11-03

### Features

- update [`mdc@8.0.0`](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#800-2020-11-02)

### BREAKING CHANGES

> sync code from BalmUI v9

- `<ui-textfield>`, `<ui-autocomplete>`, `<ui-checkbox>`, `<ui-radio>`, `<ui-file>`, `<ui-datepicker>`, `<ui-switch>`: rename prop `id` -> `inputId`

## v8.6.0 / 2020-11-01

### Code Refactoring

- `<ui-editor>`: more built-in quill extensions

### Features

- `<ui-editor>`: add prop `toolbarIcons`, `toolbarOptions`, `withCounter`
- update `mdc@8.0.0-canary.5511c5254.0`

### BREAKING CHANGES

- `<ui-editor>`: rename prop `toolbarCustomHandlers` to `toolbarHandlers`

## v8.5.1 / 2020-10-21

### Bug Fixes

- `<ui-datepicker>`: focus bugfix

### Chore

- optimize `<ui-autocomplete>` css

## v8.5.0 / 2020-10-16

- optimize `<ui-editor>`
- update `mdc@8.0.0-canary.2ab716cbd.0`

## v8.4.1 / 2020-10-14

- update `balm@3.6.0` and `mdc@8.0.0-canary.790ca85fd.0`

## v8.4.0 / 2020-10-10

- rebuild for some plugins bug in runtime mode

## v8.3.3 / 2020-10-09

- rebuild for some components bug in runtime mode

## v8.3.2 / 2020-10-05

### Bug Fixes

- `$store`: bugfix for name

## v8.3.0 / 2020-10-01

### Features

- rebuild all
  - The `Ui` prefix for components
  - The `$` prefix for plugins
  - The `v` prefix for directives
- upgrade: export all plugins for Vue Compiler/Runtime
- `$store`: optimize initialization

### BREAKING CHANGES

- `event` -> `$event`
- `grid` -> `$grid`
- `store` -> `$store`
- `theme` -> `$theme`
- `typography` -> `$typography`
- `validator` -> `$validator`
- `alert` -> `$alert`
- `confirm` ->`$confirm`
- `toast` -> `$toast`

## v8.2.5 / 2020-09-30

### BREAKING CHANGES

- remove Material Icons Sharp (Flagged: GPL-3.0-only)

## v8.2.2 / 2020-09-29

- update store plugins: remove `useStore`, use `$store` in app instance
- optimize validator: support computed `validations`

## v8.2.1 / 2020-09-29

### BREAKING CHANGES

- remove `bus` plugin and migrate to `event` plugin

## v8.2.0 / 2020-09-28

### Features

- `$bus`: update apis
  - `sub` -> `on(eventName, callback)`
  - `pub` -> `emit(eventName, ...args)`

## v8.1.1 / 2020-09-28

### Features

- `<ui-button>`: add prop `nativeType`

## v8.1.0 / 2020-09-27

### Features

- update plugins without `.vue` component:
  - `useBus`
  - `useGrid`
  - `useStore`
  - `useTheme`
  - `useTypography`
  - `useAlert`
  - `useConfirm`
  - `useToast`

## v8.0.0 / 2020-09-25

### Bug Fixes

- `<ui-table>`: fix tbody fields function bug
- `<ui-datepicker>`: fix clear event bug
- fix custom event, typography, card action, anchor and editor for SSR

### Code Refactoring

- `<ui-select>`
- `<ui-slider>`
- `<ui-pagination>`
- `$toast`: optimize option `timeoutMs`
- `$alert`
- `$confirm`
- `<ui-nav>`

### Features

- simplify Sass module usage
- update mdc@8.0.0
- update material-icons v55
- new components:
  - `<ui-banner>`
  - `<ui-tooltip>`
  - `<ui-nav-item>`
- new plugins:
  - `$bus`
  - `$store`
- `<ui-menuitem>`: add prop `value`
- `<ui-form>`: add prop `itemMarginBottom`, `labelWidth`, `labelMarginRight`, `labelMarginBottom`
- `<ui-table>`: add slot for thead cell
- `v-anchor`: optimize for dynamic html
- `$theme`: new theme apis
- `v-shape`: new shape apis
- override variables become more concise and clear

  - Old

    ```scss
    @use '@material/button/variables';
    ```

  - New

    ```scss
    @use '@material/button';
    ```

### BREAKING CHANGES

- `<ui-slider>`: rename prop `displayMarker` to `withTickMarks`
- `<ui-pagination>`: optimize slots
- `<ui-menu>`: optimize selected event
- `$themeColor`, `$setTheme`, `$textColor`, `$setTextTheme`: deprecated. Use `$theme` instead.
- `<ui-nav>`: remove slot prop `itemClass`, `activeClass`

---

## [7.x](https://github.com/balmjs/balm-ui/blob/7.x/CHANGELOG.md)

## [6.x](https://github.com/balmjs/balm-ui/blob/6.x/CHANGELOG.md)

## [5.x](https://github.com/balmjs/balm-ui/blob/5.x/CHANGELOG.md)

## [4.x](https://github.com/balmjs/balm-ui/blob/4.x/CHANGELOG.md)

## [3.x](https://github.com/balmjs/balm-ui/blob/3.x/CHANGELOG.md)

## [2.x](https://github.com/balmjs/balm-ui/blob/2.x/CHANGELOG.md)

## [1.x](https://github.com/balmjs/balm-ui/blob/1.x/CHANGELOG.md)

## [0.x](https://github.com/balmjs/balm-ui/blob/0.14.x/CHANGELOG.md)
