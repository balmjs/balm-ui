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

## 0.1.12

### Update components

__`<ui-layout>`__

- replace `<main>` to `<div>`

__`<ui-textfield>`__

- adjust html for IE9

### test IE9-10 compatibility

## 0.1.11 beta

### Fix `package.json`
> `0.1.9` & `0.1.10` deprecated

## 0.1.10 beta

### restore dist

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
