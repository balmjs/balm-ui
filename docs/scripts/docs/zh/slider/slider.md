```html
<ui-slider></ui-slider>
```

**`<ui-slider>` 类型**

- `0`: `'continuous'`
- `1`: `'discrete'`

### Props

| Name                | Type           | Default | Description                            |
| ------------------- | -------------- | ------- | -------------------------------------- |
| `type`              | string, number | `0`     | 滑动条类型                             |
| `discrete`          | boolean        | `false` | 将滑动条样式设置为离散滑动条           |
| `withTickMarks`     | boolean        | `false` | 离散滑动条支持轨道上的显示标记         |
| `model` (`v-model`) | number, array  | `0`     | 滑动条值（`array` 值表示为范围滑动条） |
| `min`               | number         | `0`     | 滑动条可以具有的最小值                 |
| `max`               | number         | `100`   | 滑动条可以具有的最大值                 |
| `step`              | number         | `1`     | 设置滑动条值的增量                     |
| `disabled`          | boolean        | `false` | 禁用状态                               |

### Events

| Name     | Type                             | Description                            |
| -------- | -------------------------------- | -------------------------------------- |
| `change` | `function(value: number\|array)` | 当用户停止拖动滑块或滑动条值变化时触发 |

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@change` 监听滑动条值并更新 `model` 属性

- 自动

  ```html
  <ui-slider v-model="value"></ui-slider>
  ```

- 手动

  ```html
  <ui-slider
    :model="value"
    @change="$balmUI.onChange('value', $event)"
  ></ui-slider>
  ```
