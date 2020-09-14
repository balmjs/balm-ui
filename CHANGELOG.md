# [BalmUI](https://material.balmjs.com) ChangeLog

## v8.0.0 / 2020-08-25

> `balm-ui 8.0` is coming up

### Bug Fixes

- `<ui-table>`: fix tbody fields function bug
- `<ui-datepicker>`: fix clear event bug

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
- new components
  - `<ui-banner>`
  - `<ui-tooltip>`
  - `<ui-nav-item>`
- `<ui-menuitem>`: add prop `value`
- `<ui-form>`: add prop `itemMarginBottom`, `labelWidth`, `labelMarginRight`, `labelMarginBottom`
- `<ui-table>`: add slot for thead cell
- `v-anchor`: optimize for dynamic html
- `$theme`: new theme apis
- `v-shape`: new shape apis
- overwrite variables become more concise and clear

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
