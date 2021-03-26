```html
<ui-top-app-bar><!-- the application title --></ui-top-app-bar>
```

**`<ui-top-app-bar>` Types**

- `0`: `'standard'`
- `1`: `'fixed'`
- `2`: `'dense'`
- `3`: `'prominent'`
- `4`: `'prominentDense'`
- `5`: `'short'`
- `6`: `'shortCollapsed'`
- `-1`: `'nonRegular'`

### Props

| Name              | Type            | Default    | Description                                                                                                                 |
| ----------------- | --------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------- |
| `contentSelector` | string          | (required) | Selector used to style the content below the top app bar, to prevent the top app bar from covering it.                      |
| `type`            | number          | `0`        | Mandatory. Top app bar types.                                                                                               |
| `fixed`           | boolean         | `false`    | Fixed top app bars stay at the top of the page and elevate above the content when scrolled.                                 |
| `dense`           | boolean         | `false`    | The dense top app bar is shorter.                                                                                           |
| `prominent`       | boolean         | `false`    | The prominent top app bar is taller.                                                                                        |
| `prominentDense`  | boolean         | `false`    | The prominent top app bar with dense.                                                                                       |
| `short`           | boolean         | `false`    | Short top app bars are top app bars that can collapse to the navigation icon side when scrolled.                            |
| `shortCollapsed`  | boolean         | `false`    | Short top app bars can be configured to always appear collapsed.                                                            |
| `title`           | string          | `''`       | Application title.                                                                                                          |
| `navIcon`         | string, boolean | `'menu'`   | A navigation icon. (Set `'close'` for the contextual action bar)                                                            |
| `navId`           | string          | `null`     | Control the navigation drawer is opened or closed. (Please refer to the `navId` prop of the [drawer](/#/navigation/drawer)) |

> Short top app bars should be used with no more than 1 action item.

### Slots

| Name       | Props              | Description                                                        |
| ---------- | ------------------ | ------------------------------------------------------------------ |
| `default`  |                    | The default slot holds the application title and can contain HTML. |
| `nav-icon` | `navIconClass`     | The nav-icon slot holds the navigation icon and can contain HTML.  |
| `toolbar`  | `toolbarItemClass` | The toolbar slot holds the action items and can contain HTML.      |

```html
<template #toolbar="{ toolbarItemClass }">
  <ui-icon-button :class="toolbarItemClass" icon="ICON"></ui-icon-button>
</template>
```

### Events

| Name    | Type         | Description                                                                           |
| ------- | ------------ | ------------------------------------------------------------------------------------- |
| `nav`   | `function()` | Emits when the navigation icon is clicked.                                            |
| `close` | `function()` | Emits when the navigation icon is clicked. Applicable only for Contextual action bar. |

> NOTE: If you are not using `navId` of the top app bar and `navId` of the drawer, you should listen for the top app bar using `@nav` and update the `v-model` prop of the drawer.

- Automatic

  ```html
  <ui-top-app-bar nav-id="demo-menu"></ui-top-app-bar>
  <ui-drawer nav-id="demo-menu" type="modal"></ui-drawer>
  ```

- Manual

  ```html
  <ui-top-app-bar @nav="balmUI.onShow('open')"></ui-top-app-bar>
  <ui-drawer v-model="open" type="modal"></ui-drawer>
  ```
