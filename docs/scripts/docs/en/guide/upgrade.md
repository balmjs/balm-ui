# Upgrade Guide

- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-8">Upgrading To 8.0 From 7.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-7">Upgrading To 7.0 From 6.x</a>
- <a href="javascript:void(0)" class="v-anchor" data-href="#up-to-6">Upgrading To 6.0 From 5.x</a>

<div id="up-to-8"></div>

## Upgrading To 8.0 From 7.x

### Features

- `$theme`: new theme apis
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
