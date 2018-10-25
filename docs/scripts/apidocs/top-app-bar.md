```html
<ui-top-app-bar><!-- the application title --></ui-top-app-bar>
```

#### Props

| Name            | Type      | Default    | Description                                                                                                 |
| --------------- | --------- | ---------- | ----------------------------------------------------------------------------------------------------------- |
| contentSelector | `String`  | (required) | Selector used to style the content below the top app bar, to prevent the top app bar from covering it.      |
| navId           | `String`  | `null`     | Control the navigation drawer is opened or closed. (See the `menuSelector` prop of the [drawer](/#/drawer)) |
| navIcon         | `String`  | `'menu'`   | A navigation icon.                                                                                          |
| title           | `String`  | `''`       | Application title.                                                                                          |
| actionItems     | `Array`   | `[]`       | Action items which are placed on the side opposite the navigation icon.                                     |
| fixed           | `Boolean` | `false`    | Fixed top app bars stay at the top of the page and elevate above the content when scrolled.                 |
| prominent       | `Boolean` | `false`    | The prominent top app bar is taller.                                                                        |
| dense           | `Boolean` | `false`    | The dense top app bar is shorter.                                                                           |
| short           | `Boolean` | `false`    | Short top app bars are top app bars that can collapse to the navigation icon side when scrolled.            |
| alwaysClosed    | `Boolean` | `false`    | Short top app bars can be configured to always appear collapsed.                                            |

> Short top app bars should be used with no more than 1 action item.

#### Slots

| Name      | Description                                                        | `slot-scope`               |
| --------- | ------------------------------------------------------------------ | -------------------------- |
| (default) | The default slot holds the application title and can contain HTML. |                            |
| nav-icon  | The default slot holds the navigation icon and can contain HTML.   |                            |
| toolbar   | The default slot holds the action items and can contain HTML.      | `{ iconClass, itemClass }` |

```html
<template slot-scope="{ iconClass, itemClass }">
  <a :class="[iconClass, itemClass]">ICON</a>
  <ui-icon :class="itemClass">ICON</ui-icon>
</template>
```

#### Events

| Name | Type         | Description                                |
| ---- | ------------ | ------------------------------------------ |
| nav  | `Function()` | Emits when the navigation icon is clicked. |

> NOTE: If you are not using `navId` of the top app bar and `menuSelector` of the drawer, you should listen for the top app bar using `@nav` and update the `v-model` prop of the drawer.

```html
// Automatic
<ui-top-app-bar navId="demo-menu"></ui-top-app-bar>
<ui-temporary-drawer menuSelector="#demo-menu"></ui-temporary-drawer>

// Manual
<ui-top-app-bar @nav="$balmUI.onShow('open')"></ui-top-app-bar>
<ui-temporary-drawer v-model="open"></ui-temporary-drawer>
```
