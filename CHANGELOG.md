# [BalmUI](https://material.balmjs.com) ChangeLog

- [`balm-ui@8`](https://github.com/balmjs/balm-ui/tree/8.x) for Vue 2

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
        message: string | (fieldValue: any, formData: { [fieldName: string]: any }): string;
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
        message: string | (fieldValue: any, formData: { [fieldName: string]: any }): string;
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
