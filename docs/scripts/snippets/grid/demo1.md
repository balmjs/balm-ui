```html
<ui-grid>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
  <ui-cell :col="1">1</ui-cell>
</ui-grid>

<ui-grid>
  <ui-cell :col="4">4</ui-cell>
  <ui-cell :col="4">4</ui-cell>
  <ui-cell :col="4">4</ui-cell>
</ui-grid>

<ui-grid>
  <ui-cell :col="6">6</ui-cell>
  <ui-cell :col="4">4</ui-cell>
  <ui-cell :col="2">2</ui-cell>
</ui-grid>

<ui-grid>
  <ui-cell :col="{col:6, tablet:8}">6 (8 tablet)</ui-cell>
  <ui-cell :col="{col:4, tablet:6}">4 (6 tablet)</ui-cell>
  <ui-cell :col="{col:2, phone:4}">2 (4 phone)</ui-cell>
</ui-grid>
```
