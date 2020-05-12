# BalmUI ChangeLog

## v6.5.0 / 2020-05-12

### Features

- update material icons to latest

## v6.4.1 / 2020-05-12

### Features

- new component: `<ui-badge>`, `<ui-skeleton>`
- `<ui-grid>`: update docs for the plugin usage

> rebuild: `<ui-badge>`, `<ui-skeleton>`

### BREAKING CHANGES

- `$alert`, `$confirm`: rename option <del>`icon`</del> to `state`, <del>`iconOutlined`</del> to `stateOutlined`
- `<ui-alert>`: rename prop <del>`icon`</del> to `state`, <del>`iconOutlined`</del> to `stateOutlined`

## v6.3.2 / 2020-05-11

### Chores

- `<ui-collapse>`: rename sass variable <del>`$content-padding-left`</del> to `$icon-width`

## v6.3.1 / 2020-05-11

### Features

- `<ui-collapse>`: add prop `ripple`, add sass variables, update demos

### Chores

- `v-ripple`: optimize ripple value

## v6.3.0 / 2020-05-09

### Features

- new component: `<ui-collapse>`

## v6.2.1 / 2020-05-08

### Features

- new component: `<ui-alert>`

## v6.1.0 / 2020-05-08

### Features

- `<ui-icon>`: add new sass variables
- `$alert`, `$confirm`: add option `icon`, `iconOutlined`, update css

## v6.0.0 / 2020-05-05

### Bug Fixes

- `$balmUI.onChange`: some bugfix
- `<ui-list>`: fix `type` prop bug
- `<ui-table>`: fix init selected rows for static data

### Code Refactoring

- restructure DOM: `<ui-chip>`, `<ui-linear-progress>`, `<ui-select>`, `<ui-switch>`

### Features

- update [mdc@6.0.0](https://github.com/material-components/material-components-web/blob/master/CHANGELOG.md#600-2020-04-22)
- new components: `<ui-circular-progress>`
- `<ui-drawer>`: add prop `viewportHeight`
- `<ui-menu>`, `<ui-select>`: both add prop `fullwidth`
- `<ui-textfield>`: add prop `prefixText`, `suffixText`, `endAligned`, `withCounter`
- refactor docs
- `v-anchor`: add modifier `bodyElement`

### Chores

- `<ui-checkbox>`: optimize `indeterminate`
- `v-anchor`: optimize for `html` DOM

### Reverts

- `<ui-item>`: revert prop `activated`

### BREAKING CHANGES

- `<ui-a>`, `<ui-icon-a>`: deprecated
- `<ui-nav>`: rename slot <del>`activatedClass`</del> to `activeClass`
- `<ui-textfield>`: remove prop `dense`
- `<ui-textfield-helper>`: rename prop <del>`counter`</del> to `withCounter`
- `<ui-textfield-counter>`: removed. It has been replaced with `<ui-textfield-helper withCounter>` or `<ui-textfield withCounter>`

---

## [5.x](https://github.com/balmjs/balm-ui/blob/5.x/CHANGELOG.md)

## [4.x](https://github.com/balmjs/balm-ui/blob/4.x/CHANGELOG.md)

## [3.x](https://github.com/balmjs/balm-ui/blob/3.x/CHANGELOG.md)

## [2.x](https://github.com/balmjs/balm-ui/blob/2.x/CHANGELOG.md)

## [1.x](https://github.com/balmjs/balm-ui/blob/1.x/CHANGELOG.md)

## [0.x](https://github.com/balmjs/balm-ui/blob/0.14.x/CHANGELOG.md)
