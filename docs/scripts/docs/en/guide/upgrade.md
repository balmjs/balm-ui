# Upgrade Guide

- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-10">Upgrading To 10.0 From 9.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-9_27">Upgrading To 9.27.0+ From 9.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-9">Upgrading To 9.0 From 8.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-8">Upgrading To 8.0 From 7.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-7">Upgrading To 7.0 From 6.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-6">Upgrading To 6.0 From 5.x</a>

<div id="up-to-10"></div>

## Upgrading To 10.0 From 9.x

### BREAKING CHANGES

#### Props

- `<ui-chips>`: rename prop `chips` -> `items`
- `<ui-nav>`: remove prop `modelValue`, `singleSelection` and events

<div id="up-to-9_27"></div>

## Upgrading To 9.27.0+ From 9.x

### BREAKING CHANGES

- move components: `UiAutocomplete`, `UiDatepicker`, `UiRangepicker` from `balm-ui-plus.js` to `balm-ui.js` library
- move plugins: `$alert`, `$confirm`, `$toast` from `balm-ui-plus.js` to `balm-ui.js` library

<div id="up-to-9"></div>

## Upgrading To 9.0 From 8.x

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

<div id="up-to-8"></div>

## Upgrading To 8.0 From 7.x

### Features

- new components:
  - `<ui-banner>`
  - `<ui-tooltip>`
  - `<ui-nav-item>`
- new plugins:
  - `$bus`
  - `$store`
- `$theme`: new theme apis
- `v-shape`: new shape apis
- `<ui-menuitem>`: add prop `value`
- `<ui-form>`: add prop `itemMarginBottom`, `labelWidth`, `labelMarginRight`, `labelMarginBottom`
- Sass: overwrite variables become more concise and clear

  - Old

    ```scss
    @use '@material/button/variables';
    ```

  - New

    ```scss
    @use '@material/button';
    ```

### BREAKING CHANGES

- `$themeColor`, `$setTheme`, `$textColor`, `$setTextTheme`: deprecated. Use `$theme` instead
- `<ui-slider>`: rename prop `displayMarker` to `withTickMarks`
- `<ui-pagination>`:
  - remove slot prop `before`, `before-jumper` and `after-jumper`
  - add slot prop `first` and `last`
- `<ui-nav>`: remove slot prop `itemClass`, `activeClass`. Use `<ui-nav-item>` for new

<div id="up-to-7"></div>

## Upgrading To 7.0 From 6.x

### BREAKING CHANGES

- `<ui-table>`: thead custom item `by` field rename to `columnId`

<div id="up-to-6"></div>

## Upgrading To 6.0 From 5.x

### Features

- `<ui-drawer>`: add prop `viewportHeight`
- `<ui-menu>`, `<ui-select>`: both add prop `fullwidth`
- `<ui-textfield>`: add prop `prefixText`, `suffixText`, `endAligned`, `withCounter`
- `v-anchor`: add modifier `bodyElement`

### BREAKING CHANGES

- Deprecated:
  - `<ui-a>`
  - `<ui-icon-a>`
- `<ui-nav>`: rename slot prop `activatedClass` to `activeClass`
- `<ui-textfield>`: remove prop `dense`
- `<ui-textfield-helper>`: rename prop `counter` to `withCounter`
- `<ui-textfield-counter>`: removed. It has been replaced with `<ui-textfield-helper withCounter>` or `<ui-textfield withCounter>`
