```html
<ui-top-app-bar><!-- the application title --></ui-top-app-bar>
```

#### Props

| Name              | Type    | Default    | Description                                                                                                             |
| ----------------- | ------- | ---------- | ----------------------------------------------------------------------------------------------------------------------- |
| `contentSelector` | string  | (required) | Selector used to style the content below the top app bar, to prevent the top app bar from covering it.                  |
| `type`            | number  | `0`        | Mandatory. Top app bar types.                                                                                           |
| `fixed`           | boolean | `false`    | Fixed top app bars stay at the top of the page and elevate above the content when scrolled.                             |
| `dense`           | boolean | `false`    | The dense top app bar is shorter.                                                                                       |
| `prominent`       | boolean | `false`    | The prominent top app bar is taller.                                                                                    |
| `prominentDense`  | boolean | `false`    | The prominent top app bar with dense.                                                                                   |
| `short`           | boolean | `false`    | Short top app bars are top app bars that can collapse to the navigation icon side when scrolled.                        |
| `shortCollapsed`  | boolean | `false`    | Short top app bars can be configured to always appear collapsed.                                                        |
| `title`           | string  | `''`       | Application title.                                                                                                      |
| `navId`           | string  | `null`     | Control the navigation drawer is opened or closed. (Please refer to the `menuSelector` prop of the [drawer](/#/drawer)) |

- **Types:** `0: 'standard'`, `1: 'fixed'`, `2: 'dense'`, `3: 'prominent'`, `4: 'prominentDense'`, `5: 'short'`, `6: 'shortCollapsed'`, `-1: 'nonRegular'`

> Short top app bars should be used with no more than 1 action item.

#### Slots

| Name       | Slots           | Description                                                        |
| ---------- | --------------- | ------------------------------------------------------------------ |
| `default`  |                 | The default slot holds the application title and can contain HTML. |
| `nav-icon` |                 | The nav-icon slot holds the navigation icon and can contain HTML.  |
| `toolbar`  | `{ itemClass }` | The toolbar slot holds the action items and can contain HTML.      |

```html
<template #toolbar="{ itemClass }">
  <ui-icon-button :class="itemClass" icon="ICON"></ui-icon-button>
</template>
```

#### Events

| Name    | Type         | Description                                                                           |
| ------- | ------------ | ------------------------------------------------------------------------------------- |
| `nav`   | `function()` | Emits when the navigation icon is clicked.                                            |
| `close` | `function()` | Emits when the navigation icon is clicked. Applicable only for Contextual action bar. |

> NOTE: If you are not using `navId` of the top app bar and `menuSelector` of the drawer, you should listen for the top app bar using `@nav` and update the `v-model` prop of the drawer.

```html
// Automatic
<ui-top-app-bar navId="demo-menu"></ui-top-app-bar>
<ui-temporary-drawer menuSelector="#demo-menu"></ui-temporary-drawer>

// Manual
<ui-top-app-bar @nav="$balmUI.onShow('open')"></ui-top-app-bar>
<ui-temporary-drawer v-model="open"></ui-temporary-drawer>
```
