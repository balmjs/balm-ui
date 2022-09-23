# Upgrade Guide

> 🎉 `balm-ui`(v9+) for Vue 3, see [material.balmjs.com](https://material.balmjs.com/)

- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-8_55">Upgrading To 8.55.0 From 8.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-8_54">Upgrading To 8.54.0 From 8.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-8_50">Upgrading To 8.50.0 From 8.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-8_37">Upgrading To 8.37.0 From 8.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-8">Upgrading To 8.0 From 7.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-7">Upgrading To 7.0 From 6.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-6">Upgrading To 6.0 From 5.x</a>

<div id="up-to-8_55"></div>

## Upgrading To 8.55.0 From 8.x

### BREAKING CHANGES

- `balm-ui-next.js` is deprecated
- move components:
  - `UiCollapse` from `balm-ui-plus.js` to `balm-ui.js` library
  - `UiBottomNavigation` from `balm-ui-next.js` to `balm-ui-plus.js` library
  - `UiBottomSheet` from `balm-ui-next.js` to `balm-ui-plus.js` library
- move directives: `vDebounce` from `balm-ui-plus.js` to `balm-ui.js` library

<div id="up-to-8_54"></div>

## Upgrading To 8.54.0 From 8.x

### BREAKING CHANGES

- move components: `UiAlert` from `balm-ui-plus.js` to `balm-ui.js` library

<div id="up-to-8_50"></div>

## Upgrading To 8.50.0 From 8.x

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

<div id="up-to-8_37"></div>

## Upgrading To 8.37.0 From 8.x

### BREAKING CHANGES

- move components: `UiAutocomplete`, `UiDatepicker`, `UiRangepicker` from `balm-ui-plus.js` to `balm-ui.js` library
- move plugins: `$alert`, `$confirm`, `$toast` from `balm-ui-plus.js` to `balm-ui.js` library

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
