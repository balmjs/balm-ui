```html
<ui-top-app-bar><!-- the application title --></ui-top-app-bar>
```

**`<ui-top-app-bar>` 类型**

- `0`: `'standard'`
- `1`: `'fixed'`
- `2`: `'dense'`
- `3`: `'prominent'`
- `4`: `'prominentDense'`
- `5`: `'short'`
- `6`: `'shortCollapsed'`
- `-1`: `'nonRegular'`

### Props

| Name              | Type            | Default    | Description                                                                  |
| ----------------- | --------------- | ---------- | ---------------------------------------------------------------------------- |
| `contentSelector` | string          | (required) | 选择器用于设置顶部导航下方内容的样式，以防止顶部导航覆盖内容。               |
| `type`            | number          | `0`        | 顶部导航类型                                                                 |
| `fixed`           | boolean         | `false`    | 固定的顶部导航位于页面顶部，并且在滚动时位于内容上方。                       |
| `dense`           | boolean         | `false`    | 密集的顶部导航较短。                                                         |
| `prominent`       | boolean         | `false`    | 突出的顶部导航较高。                                                         |
| `prominentDense`  | boolean         | `false`    | 突出且密集的顶部导航                                                         |
| `short`           | boolean         | `false`    | 顶部短导航，滚动时可以折叠到导航图标的一侧。                                 |
| `shortCollapsed`  | boolean         | `false`    | 设置顶部短导航始终显示折叠状态。                                             |
| `title`           | string          | `''`       | 设置导航标题                                                                 |
| `navIcon`         | string, boolean | `'menu'`   | 设置导航图标                                                                 |
| `navId`           | string          | `null`     | 抽屉式导航的元素 ID（请参考 [drawer](/#/navigation/drawer) 的 `navId` 属性） |

> 顶部短导航应与最多 1 个动作项一起使用。

### Slots

| Name       | Props              | Description                     |
| ---------- | ------------------ | ------------------------------- |
| `default`  |                    | default 插槽包含导航标题及 HTML |
| `nav-icon` | `navIconClass`     | 自定义导航图标                  |
| `toolbar`  | `toolbarItemClass` | toolbar 插槽包含动作项目及 HTML |

```html
<template #toolbar="{ toolbarItemClass }">
  <ui-icon-button :class="toolbarItemClass" icon="ICON"></ui-icon-button>
</template>
```

### Events

| Name    | Type         | Description                                                |
| ------- | ------------ | ---------------------------------------------------------- |
| `nav`   | `function()` | 点击导航默认图标时触发                                     |
| `close` | `function()` | 点击导航关闭图标时触发（仅限 `navIcon` 设置为 `close` 时） |

> 提示：如果你没有联合使用顶部导航和抽屉式导航的 `navId` 属性绑定两者关系，你应该使用 `@nav` 监听顶部导航并更新抽屉式导航的 `v-model` 属性

- 自动

  ```html
  <ui-top-app-bar navId="demo-menu"></ui-top-app-bar>
  <ui-drawer type="modal" navId="demo-menu"></ui-drawer>
  ```

- 手动

  ```html
  <ui-top-app-bar @nav="$balmUI.onShow('open')"></ui-top-app-bar>
  <ui-drawer type="modal" v-model="open"></ui-drawer>
  ```
