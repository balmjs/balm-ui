# [BalmUI](https://material.balmjs.com) ChangeLog

- [`balm-ui@8`](https://github.com/balmjs/balm-ui/tree/8.x) for Vue 2

## v10.2.0

### Chore

- `<ui-select>`, `<ui-autocomplete>`: optimize components inside of the `<ui-dialog>`

### BREAKING CHANGES

- `<ui-select>`: remove prop `fixed`

## v10.1.1

### BREAKING CHANGES

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
