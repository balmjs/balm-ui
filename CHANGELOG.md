## 0.1.25

__`<ui-select>`__

- update css: Workaround to IE's overflow auto and position relative bug

__`<ui-datepicker>`__

- bugfix: change event

---

## 0.1.24

### Update components

__`<ui-pagination>`__

- update css

__`<ui-table>`__

- add `url` for `props.tbody`
- update custom demo

### Update docs

- __`<ui-layout>`__
- __`<ui-pagination>`__
- __`<ui-table>`__

---

## 0.1.23

### Update components

__`<ui-select>`__

- update css for the long options list
- bugfix: auto submit form
- bugfix: select the some option

__`<ui-tabs>`__

- dynamic tab name

__`<ui-table>`__

- clean code
- bugfix: table footer css

- __`<ui-pagination>`__

- bugfix: detect ie

---

## 0.1.22

### Update components

__`<ui-select>`__

- bugfix: init selected

---

## 0.1.21

### Update components

__`<ui-datepicker>`__

- remove `plus` props & slot
- add `toggle` props & slot
- add `clear` props & slot
- rename event `input` to `change`
- update css

__`<ui-autocomplete>`__

- update event `enter` return `{ key, value }`

__`<ui-select>`__

- rename props `value` to `options`
- fix placeholder bug

### Update docs & snippets

- __`<ui-divider>`__
- __`<ui-datepicker>`__
- __`<ui-select>`__

---

## 0.1.20

### Update components

__`<ui-table>`__

- fix detailView colspan bug
- fix isSelected bug

### Update docs & snippets

- __`<ui-dialog>`__
- __`<ui-alert>`__
- __`<ui-confirm>`__
- __`<ui-select>`__

---

## 0.1.19

### Update components

__`<ui-table>`__

- add custom class & align for action cell

__`<ui-textfield>`__

- update props `model` to `null`

---

## 0.1.18

### Update components

__`<ui-menu>`__

- fix css for `<ui-select>` support

__`<ui-textfield>`__

- bugfix
- the props `labelLeft` is deprecated
- add event `change` & `enter`
- test IE9+

__`<ui-pagination>`__

- IE bugfix
- test IE9+

__`<ui-panel>`__

- update for vue@2.1.10

### Update docs & snippets

- __`<ui-chip>`__

### Update dependencies

- use balm@0.6.0-beta
- update flatpickr@2.3.7

---

## 0.1.17

### Update components

__`<ui-datepicker>`__

- fix css

__`<ui-pagination>`__

- add props `mini`

### Update docs & snippets

---

## 0.1.16

### Update components

__`<ui-snackbar>`__

- add props `mini`

__`<ui-textfield>`__

- add a `data-input` attribute of the input for the datepicker

### New components

[x] __`<ui-autocomplete>`__
[x] __`<ui-datepicker>`__
[x] __`<ui-pagination>`__

---

## 0.1.15

### Update components

__`<ui-table>`__

- add text-align right class
- fix checkbox rowspan bug

__`<ui-menuitem>`__

- rename `item.name` to `item.label`
- support `<ui-select>`

__`<ui-textfield>`__

- add `expand` prop & slot
- add `focus` & `blur` & `keydown` event
- add `<ui-autocomplete>` component demo

__`<ui-checkbox>`__

- rename props `squared` to `filled`

__`<ui-loading>`__

__`<ui-table>`__

- add props `selectKeyField`
- detailView bugfix
- rename props `detailView` to `hasDetailView`

__`<ui-snackbar>`__

- action handler bugfix

__`<ui-icon-toggle>` & __`<ui-switch>`__

- bugfix

### New components

[x] __`<ui-select>`__
[x] __`<ui-card>`__
[x] __`<ui-list>`__
[x] __`<ui-item>`__

### Update docs

- __`<ui-select>`__
- __`<ui-textfield>`__
- __`<ui-card>`__
- __`<ui-list>`__
- __`<ui-snackbar>`__

---

## 0.1.14

### Update components

__`<ui-tooltip>`__

- optimize name

__`<ui-alert>`__

- fix slot bug

__`<ui-radio>`__

- fix checked bug

### Update docs

- __`<ui-menu>`__
- __`<ui-tooltip>`__

### Update test

- __`<ui-checkbox>`__
- __`<ui-radio>`__

---

## 0.1.13

### Update utils

- `helper.js`

### Update components

__`<ui-menu>`__

- refactor
- fix effect for item

__`<ui-dialog>`__

- optimize viewport

### New components

[x] __`<ui-menuitem>`__

### Update docs

- __`<ui-menu>`__

---

## 0.1.12

### Update components

__`<ui-layout>`__

- replace `<main>` to `<div>`

__`<ui-textfield>`__

- adjust html for IE9

### test IE9-10 compatibility

---

## 0.1.11 beta

### Fix `package.json`
> `0.1.9` & `0.1.10` deprecated

---

## 0.1.10 beta

### restore dist

---

## 0.1.9 beta

### Update docs

- readme
- __`<ui-badge>`__
- __`<ui-button>`__
- __`<ui-grid>`__
- __`<ui-tabs>`__
- __`<ui-textfield>`__
- __`<ui-snackbar>`__

### Update components

__`<ui-table>`__

- remove props `col`

__`<ui-grid>` && `<ui-cell>`__

- fix props `mode` & `align`

__`<ui-textfield>`__

- add props `disabled`
- add props `readonly`

- __`<ui-menu>`__

- add default slot

---

## 0.1.8 beta

### Update material ripple init

### Update components

__`<ui-table>`__

- add tbody options `raw` for render HTML
- update tbody options `fn(data, index)`
- CheckboxList values: from `id` to `index`

---

## 0.1.7 beta

### Update components

__`<ui-textfield>`__

- rename props `plus` to `expandable`
- add props `plus`
- add props `maxlength`

__`<ui-table>`__

- fix selected in detail view
- add row selected class
- add detail view class

### Update docs

- __`<ui-textfield>`__

---

## 0.1.6 beta

### Update components

__`<ui-table>`__

- update event `view-detail`, callback row data
- fix sort for detailView
- fix action bug for `vue2.x` compatibility :(

---

## 0.1.5 beta

### Update `material-design-lite@1.3.0`

### Update components

__`<ui-textfield>`__

- fix css for error in left label

__`<ui-table>`__

- add props `detailView` & `detailViewData`
- add event `view-detail`
- update css

### Update docs

- `<ui-table>`
- `<ui-tabs>`

---

## 0.1.4 beta

### Update components

__`<ui-tabs>` & `<ui-tab>`__

- add props `noIconText`

__`<ui-table>`__

- update tbody cell render: from _text_ to _html_

__`<ui-menu>`__

- fix container css

### Fix material components init

---

## 0.1.3 beta

### Update components

__`<ui-layout>`__

- fix `noDrawerButton` template
- add slot `footer-inner` & `footer-outer`

__`<ui-tabs>` & `<ui-tab>`__

- add props `icon` & `iconPrefix`

__`<ui-dialog>`__

- fix some bug

---

## 0.1.2 beta

### Update components

__rename `<ui-splitter>` to `<ui-divider>`__

__`<ui-table>`__

- fix checkbox event
- rename props `checkList` to `checkboxList`
- add tbody attributes
- add no data show

### Update docs

- `<ui-radio>`
- `<ui-table>`

---

## 0.1.1 beta

### Add change log

### Add docs from demo

### Update components

__`<ui-navigation>`__

- Applying Active Class to Outer Element

---

## 0.1.0 beta

### Components

__Layout__

- `<ui-layout>`
- `<ui-navigation>`
- `<ui-grid>` & `<ui-cell>`
- `<ui-tabs>` & `<ui-panel>`
- `<ui-footer>` & `<ui-mini-footer>`

__Common__

- `<ui-loading>`
- `<ui-button>`
- `<ui-menu>`
- `<ui-badge>`
- `<ui-card>`
- `<ui-chip>`
- `<ui-tooltip>`
- `<ui-splitter>`

__Form__

- `<ui-textfield>`
- `<ui-checkbox>`
- `<ui-radio>`
- `<ui-icon-toggle>`
- `<ui-switch>`
- `<ui-slider>`

__Data Show__

- `<ui-list>`
- `<ui-table>`

__Popup__

- `<ui-dialog>`
- `<ui-confirm>`
- `<ui-alert>`
- `<ui-snackbar>`
