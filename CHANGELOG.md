# [BalmUI](https://material.balmjs.com) ChangeLog

- [`balm-ui@8`](https://github.com/balmjs/balm-ui/tree/8.x) for Vue 2

## v10.23.3 / 2023-11-07

### Chore

- `<ui-form>`, `<ui-form-field>`: optimize initialization

## v10.23.1 / 2023-09-21

### Bug Fixes

- `<ui-tree>`: fix prevent click for custom label

## v10.23.0 / 2023-09-15

### Features

- utils: ban debugger

## v10.22.3 / 2023-07-21

### Bug Fixes

- `<ui-table>`: fix tbodyRowData bug

## v10.22.2 / 2023-07-05

### Bug Fixes

- `<ui-editor>`: fix `placeholder` bug in readonly mode

## v10.22.1 / 2023-06-16

### Bug Fixes

- `<ui-editor>`: fix `readonly` bug

## v10.22.0 / 2023-06-15

### Reverts

- revert deps `mdc@14.0.0` for SSR

## v10.21.3 / 2023-06-14

### Chore

- `<ui-tree>`: optimize tree node data for children

## v10.21.2 / 2023-06-06

### Bug Fixes

- `<ui-pagination>`: fix `total` watcher bug

## v10.21.0 / 2023-06-05

### Features

- `<ui-tree>`: add prop `autoExpandSelected` and `autoExpandAll` (thanks @guxuerui)

## v10.20.0 / 2023-06-01

### Features

- update `mdc@15.0.0-canary.446734f27.0`

### Bug Fixes

- `<ui-editor>`: fix emoji module bug for bubble theme

## v10.19.0 / 2023-04-23

### Features

- new component for plus: `<ui-side-sheet>`

### Chore

- update vetur

## v10.18.2 / 2023-04-18

### Bug Fixes

- `<ui-tree>`: fix prevent click for custom label

## v10.18.0 / 2023-04-12

### Features

- `<ui-tree>`: add prop `filterParentNode`

### BREAKING CHANGES

- `<ui-tree>`: remove prop `selectedNodesWithParent`

## v10.17.0 / 2023-04-06

### Features

- update `mdc@15.0.0-canary.55093ee1e.0`
- `<ui-tree>`: add prop `selectedNodesWithParent`

## v10.16.0 / 2023-02-16

### Features

- update `mdc@15.0.0-canary.066d9439b.0`
- `<ui-table>`: add event `sorted`
- `<ui-rangepicker>`: add prop `disableRangePlugin`

## v10.15.0 / 2023-02-03

### Features

- update `mdc@15.0.0-canary.d9f821042.0`

### Bug Fixes

- `<ui-pagination>`: fix `jumpPage` reset bug

## v10.14.0 / 2023-01-20

> Happy Chinese New Year

### Chore

- optimize build

## v10.13.4 / 2023-01-03

### Bug Fixes

- `<ui-tree>`: fix expand all keys with props `defaultExpandedKeys` (thanks @guxuerui)
- `vCopy`: fix textarea `readOnly` for boolean value (thanks @JiatLn)

## v10.13.3 / 2022-12-14

### Bug Fixes

- `<ui-tree>`: fix: tree single select bug for manual mode

## v10.13.2 / 2022-12-09

### Bug Fixes

- `<ui-tree>`: fix createNode bug

## v10.13.1 / 2022-12-05

### Reverts

- revert deps `mdc@14.0.0`

## v10.13.0 / 2022-12-01

### Features

- update `mdc@15.0.0-canary.3a1f46c66.0`

## v10.12.0 / 2022-09-26

### Chore

- update vetur

### BREAKING CHANGES

- `balm-ui-next.js` is deprecated
- move components:
  - `UiCollapse` from `balm-ui-plus.js` to `balm-ui.js` library
  - `UiBottomNavigation` from `balm-ui-next.js` to `balm-ui-plus.js` library
  - `UiBottomSheet` from `balm-ui-next.js` to `balm-ui-plus.js` library
- move directives: `vDebounce` from `balm-ui-plus.js` to `balm-ui.js` library

## v10.11.0 / 2022-08-23

### Features

- `<ui-pagination>`: add `unitText` prop
- `<ui-autocomplete>`: add `filterKeywords` prop

### Bug Fixes

- `<ui-form>`: fix center css bug for action area
- `<ui-pagination>`: update `jumpPage` value when the `currentPage` is changed (thanks @guxuerui)

### BREAKING CHANGES

- move components: `UiAlert` from `balm-ui-plus.js` to `balm-ui.js` library

## v10.10.0 / 2022-07-28

### Features

- `<ui-autocomplete>`, `<ui-select>`: add `inside` prop for overflow inside component

## v10.9.3 / 2022-07-10

### Bug Fixes

- `<ui-chips>`: fix filter chips bug in watching
- `<ui-dialog>`: fix ui-dialog-actions won't emit events bug (thanks @lnkkerst)

## v10.9.2 / 2022-07-10

### Bug Fixes

- `<ui-table>`: fix css for the inner data input components of the fixed table
- `v-longpress`: fix error message for new api type

## v10.9.1 / 2022-07-09

### Chore

- `v-longpress`: optimize config and fix missing event bug
- `types`: update `isFunction` for async function

## v10.9.0 / 2022-07-08

### Features

- `$event`: add `once` bus event
- `<ui-table>`: add `rowCheckboxDisabled` prop

### Bug Fixes

- `<ui-select>`: prevent small menu-in-dialogs h100% (thanks @hiddehs)

## v10.8.3 / 2022-06-13

### Bug Fixes

- `<ui-chips>`: fix choice and filter chips event bug
- `<ui-rangepicker>`: fix focus bug, fix start input value bug
- `<ui-textfield>`: reset counter bug
- `<ui-select>`: fix select css in dialog

## v10.8.1 / 2022-06-07

### Bug Fixes

- `validator`: fix local validation rule bug

## v10.8.0 / 2022-06-05

### Features

- `validator`: add `globalProperties.$validator` and provide `validator`

## v10.7.0 / 2022-06-04

### Features

- `$validator`: optimize validations

### BREAKING CHANGES

- `$validator`: update validations

  - Old

    ```ts
    interface BalmUIValidationRule {
      label?: string;
      validator: string; // 'customRule1, customRule2, ...'
      ...customRule?: {
        validate(fieldValue: any, formData: { [fieldName: string]: any }): boolean;
        message: string | (fieldValue: any, formData: { [fieldName: string]: any }) => string;
      };
    }

    type BalmUIValidations = {
      [key: string]: BalmUIValidationRule;
    }
    ```

  - New

    ```ts
    interface BalmUIValidationRule {
      key: string; // field name
      label?: string;
      validator: string; // 'customRule1, customRule2, ...'
      ...customRule?: {
        validate(fieldValue: any, formData: { [fieldName: string]: any }): boolean;
        message: string | (fieldValue: any, formData: { [fieldName: string]: any }) => string;
      };
    }

    type BalmUIValidations = BalmUIValidationRule[]
    ```

## v10.6.1 / 2022-06-01

### Bug Fixes

- `<ui-chips>`: fix filter chips values bug
- `<ui-datepicker>`: fix clear event bug

## v10.6.0 / 2022-05-15

### Features

- update [mdc@14.0.0](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#1400-2022-04-27)

## v10.5.0 / 2022-04-26

### Features

- update `mdc@14.0.0-canary.3ab956515.0`
- `<ui-dialog>`: add prop `sheet`, `noContentPadding`

### Bug Fixes

- `<segmented-buttons>`: fix init model value bug
- `<ui-list>`, `<ui-item>`: fix role attr bug

## v10.4.1 / 2022-04-23

### Bug Fixes

- `$store`: update options default value `false` for Vuex compatibility

> Use BalmUI built-in `$store` with Vuex `$store`, you need config like this:

- store.js

  ```js
  import useDemoStore from './modules/demo';

  export default {
    name: 'myStore', // Set new custom store name (all lowercase): `$mystore` (Defaults: `$store`)
    ...useDemoStore()
  };
  ```

- main.js

  ```js
  import BalmUI from 'balm-ui';
  import myStore from './store';

  // `app`: Vue app
  app.use(BalmUI, {
    $store: myStore
  });
  ```

## v10.4.0 / 2022-04-06

### Features

- `<ui-editor>`: add method `$refs.editor.useEditor()`
- `<ui-pagination>`: add event `update:pageSize`

### Bug Fixes

- `<ui-datepicker>`: fix month mode event bug

## v10.3.1 / 2022-03-25

### Bug Fixes

- `$toast`: fix some bug for message

## v10.3.0 / 2022-03-21

### Features

- update `mdc@14.0.0-canary.cbd9358a6.0`
- `<ui-editor>`: add prop `fullwidth`

### Chore

- `<ui-textfield>`, `<ui-select>`, `<ui-autocomplete>`,`<ui-editor>`: optimize fullwidth css

### Bug Fixes

- `<ui-editor>`: fix counter bug
- `<ui-slider>`: fix width css bug

## v10.2.1 / 2022-03-19

### Chore

- `<ui-select>`, `<ui-autocomplete>`: optimize components inside of the `<ui-table>`

## v10.2.0 / 2022-03-18

### Chore

- `<ui-select>`, `<ui-autocomplete>`: optimize components inside of the `<ui-dialog>`

### BREAKING CHANGES

- `<ui-select>`: remove prop `fixed`
- `<ui-dialog>`: remove prop `scrollable` and `stacked`

## v10.1.0 / 2022-03-07

### Features

- `<ui-chip>`: new prop `deletable` for input and filter chips

### BREAKING CHANGES

- `<ui-chip>`: rename prop `removable` -> `deletable`
- `<ui-bottom-navigation>`: deprecated. Use `<ui-navigation-bar>` instead

## v10.0.3 / 2022-03-03

### Bug Fixes

- `<ui-textfield>`, `<ui-textfield-helper>`: fix textfield invalid class bug on blur

## v10.0.2 / 2022-03-03

### Reverts

- restore `<ui-menuitem-divider>` component

## v10.0.1 / 2022-03-02

### Features

- `$store`: support multiple stores

### Chore

- `$event`, `$validator`: optimize state order

## v10.0.0 / 2022-03-01

### Features

- update material-icons v125

### Code Refactoring

- All components and plugins: migrate over to Vue 3 Composition API

### BREAKING CHANGES

- `<ui-chips>`: rename prop `chips` -> `items`
- `<ui-nav>`: remove prop `modelValue`, `singleSelection` and events

---

## [9.x](https://github.com/balmjs/balm-ui/blob/9.x/CHANGELOG.md)
