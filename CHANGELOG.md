# BalmUI ChangeLog

## 0.10.0 (2018.11.01)

### Features

- update `mdc@0.41.0`

---

## 0.9.0 (2018.11.01)

### Code Refactoring

- `<ui-switch>`
- `<ui-fab>`

### Features

- `<ui-fab>`: add `before` and `after` slots for the extended FAB
- `<ui-top-app-bar>`: add `navIcon` props and `close` event
- `<ui-list>`: add `type` props

### BREAKING CHANGES

- `<ui-link>`: is deprecated. Use `<ui-a>` instead.
- `<ui-icon-link>`: is deprecated. Use `<ui-icon-a>` instead.
- `<ui-fab>`: remove `label` props
- `<ui-chip-leading-icon>`: is deprecated. Use `<ui-chip-thumbnail>` instead.
- `<ui-chip-trailing-icon>`: is deprecated. Use `<ui-chip-remove-icon>` instead.
- `<ui-dialog-header>`: is deprecated. Use `<ui-dialog-title>` instead.
- `<ui-dialog-body>`: is deprecated. Use `<ui-dialog-content>` instead.
- `<ui-dialog-footer>`: is deprecated. Use `<ui-dialog-actions>` instead.
- `<ui-image-label>`: is deprecated. Use `<ui-image-supporting>` instead.
- `<ui-item-link>`: is deprecated. Use `<ui-item-a>` instead.
- `<ui-list-divider>`: is deprecated. Use `<ui-divider>` instead.
- `<ui-list>`: remove `twoLine` props

---

## 0.8.1 (2018.10.10)

### Features

- update `mdc@0.40.1`

---

## 0.8.0 (2018.09.28)

### Bug Fixes

- `<ui-icon-button>`: fix initialization assignment bug
- `<ui-list>`: fix initialization assignment bug

### Chores

- `material-icons`: add `font-display`
- `<ui-autocomplete>`: update css

### Code Refactoring

- `<ui-dialog>`

### Features

- update `mdc@0.40.0`
- `<ui-dialog>`: add `scrollable` and `stacked` props
- `<ui-radio>`: add `noLabel` props

### BREAKING CHANGES

- `v-shape`: deprecated
- `<ui-dialog-body>`: remove `scrollable` and `maxHeight` props
- `<ui-list>`: remove `withCheckbox` props

---

## 0.7.1 (2018.09.25)

### Chores

- `<ui-fab>`: code cleanup
- `<ui-icon-button>`: code cleanup

### Features

- update snackbar docs for sass

### Tests

- components test:
  - add `<ui-fab>` test
  - add `<ui-icon-button>` test

---

## 0.7.0 (2018.09.12)

### Features

- update `balm@0.24` base on `babel@7`
- update `mdc@0.39.3`

### Tests

- components test:
  - add `<ui-button>` test
  - add `<ui-icon>` test

---

## 0.6.2 (2018.09.01)

### Bug Fixes

- `<ui-dialog>:` fix focusable element bug
- `<ui-modal-drawer>:` fix focusable element bug

---

## 0.6.1 (ignore)

---

## 0.6.0 (2018.09.01)

:tada: BalmUI released, base on `mdc@0.39.1`

### Components

- Layouts
  - Layout Grid
  - Toolbar (:skull:)
  - Top App Bar (migrate from Toolbar)
  - Drawer
  - Tabs
- Buttons
  - Button
  - Floating Action
  - <del>Icon Toggle</del> (:skull:)
  - Icon Button (migrate from Icon Toggle)
- Icon
- Data View
  - List
  - Grid List (:skull:)
  - Image List (migrate from Grid List)
  - Card
  - Chips
  - Pagination (:bulb:)
- Linear Progress
- Inputs and Controls
  - Text Field
  - Checkbox
  - Radio
  - Select
  - Switch
  - Slider
  - Dropdown (:bulb:)
  - Autocomplete (:bulb:)
  - File (:bulb:)
- Modal
  - Dialog
  - Snackbar
- Menu

### Plugins

- Event
- Grid (TODO)
- Typography
- Theme
- Validator (:bulb:)
- Alert (:bulb:)
- Confirm (:bulb:)
- Toast (:bulb:)

### Directives

- Ripple
- Elevation
- Shape
- Anchor (:bulb:)

### Utilities

- Type Detections
- Helper Functions
- IE Detection

> :bulb:: Plus UI, :skull:: Deprecated

---

## 0.5.0 (Deprecated)

> Modular and customizable Material Design UI components for the web

Coming Up

- New components
- New plugins
- New helpers

## Deprecated [0.1.x](https://github.com/balmjs/ui-vue-lite/blob/0.1.x/CHANGELOG.md)
