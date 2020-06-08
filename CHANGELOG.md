# BalmUI ChangeLog

## v6.8.0 / 2020-06-08

### Bug Fixes

- `<ui-table>`: fix colgroup and custom field slot bug

### Features

- `<ui-rangepicker>`: add prop `labels`, `placeholders`, update css

### BREAKING CHANGES

- `<ui-rangepicker>`
  - remove prop <del>`startId`</del> and <del>`endId`</del>
  - remove prop <del>`startLabel`</del> and <del>`endLabel`</del>, use `labels` instead
  - remove prop <del>`startPlaceholder`</del> and <del>`endPlaceholder`</del>, use `placeholders` instead

## v6.7.1 / 2020-06-01

### Features

- `<ui-editor>`
  - update css and optimize `insert` function
  - update docs and demos

## v6.7.0 / 2020-05-31

### Features

- new component: `<ui-editor>`
- utils: add `merge` function for deep merge

### Chores

- `<ui-file>`: optimize `change` file event

## v6.6.5 / 2020-05-19

### Features

- `<ui-card-content>`, `<ui-menu>`: update ripple effect
- docs: fix affix css, update theme color demos

### Chores

- `<ui-nav>`: optimize active class for custom theme
- `<ui-menu>`: update css for custom ripple

## v6.6.4 / 2020-05-19

### Bug Fixes

- `<ui-top-app-bar>`: getFixedAdjustElement bugfix

## v6.6.3 / 2020-05-18

### Chores

- `<ui-top-app-bar>`: optimize fixed adjust element for `<ui-drawer>` layout
- `<ui-drawer>`: update demos

## v6.6.2 / 2020-05-17

### Bug Fixes

- fix individual components fonts for CDN css

### Chores

- `<ui-grid>`: optimize grid inner css
- update examples

## v6.6.1 / 2020-05-13

### Bug Fixes

- `<ui-select>`: fix floating label bug when the value is empty

## v6.6.0 / 2020-05-13

### Bug Fixes

- `<ui-collapse>`: bugfix for handleToggle event
- `<ui-table>`: bugfix for bodyData with actions
- `<ui-pagination>`: fix css for inner `<ui-select>`

### Features

- `<ui-menu>`: add `distance` prop
- `<ui-menu-anchor>`: add `absolute` prop

### Chores

- clean code for docs
- `<ui-collapse>`: update css
- `v-anchor`: optimize global offset

### BREAKING CHANGES

- `<ui-menu>`: deprecate `margin` prop. Replaced it with `distance` prop
- `<ui-menu-anchor>`: deprecate `middleValue` prop

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
