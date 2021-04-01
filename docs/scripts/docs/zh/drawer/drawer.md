```html
<ui-drawer><!-- the drawer child components --></ui-drawer>
```

**`<ui-drawer>` 类型**

- `0`: `'permanent'`
- `1`: `'dismissible'`
- `2`: `'modal'`

**提示：**

- 默认的 `<ui-drawer>` (`type="permanent"`) 没有属性和事件
- `<ui-drawer type="dismissible">` 和 `<ui-drawer type="modal">` 必须包含一个 `<ui-nav>`。而且导航中的第一个 `<ui-nav-item>` 默认必须为激活状态。

### Props

| Name               | Type           | Default | Description                                                                       |
| ------------------ | -------------- | ------- | --------------------------------------------------------------------------------- |
| `type`             | string, number | `0`     | 侧边导航栏类型                                                                    |
| `navId`            | string         | `null`  | 外部菜单按钮选择器（请参考 [top app bar](/#/layout/top-app-bar) 的 `navId` 属性） |
| `open` (`v-model`) | boolean        | `false` | 导航切换的状态                                                                    |
| `viewportHeight`   | boolean        | `false` | 设置视窗全高度（`100vh`）                                                         |

### Slots

| Name      | Props | Description                  |
| --------- | ----- | ---------------------------- |
| `default` |       | default 插槽包含导航的子组件 |

**子组件：**

- `<ui-drawer-header>`
- `<ui-drawer-content>`

### Events

| Name  | Type                      | Description    |
| ----- | ------------------------- | -------------- |
| `nav` | `function(open: boolean)` | 导航开关时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@nav` 监听侧边导航栏切换状态并更新 `open` 属性

- 自动

  ```html
  <ui-drawer type="modal" v-model="open"></ui-drawer>
  ```

- 手动

  ```html
  <ui-drawer
    type="modal"
    :open="open"
    @nav="$balmUI.onChange('open', $event)"
  ></ui-drawer>
  ```
