```html
<ui-tree></ui-tree>
```

### Props

| Name                     | Type          | Default | Description                                          | Version |
| ------------------------ | ------------- | ------- | ---------------------------------------------------- | ------- |
| `modelValue` (`v-model`) | string, array | `''`    | 选中的树节点键值                                     |         |
| `data`                   | array         | `[]`    | 源数据                                               |         |
| `dataFormat`             | object        | `{}`    | 定义源数据的格式                                     |         |
| `maxLevel`               | number        | `0`     | 设置加载树节点的最大层级                             |         |
| `multiple`               | boolean       | `false` | 是否支持选定的多个树节点                             |         |
| `singleChecked`          | boolean       | `false` | 启用树节点单节点选择。仅针对 `multiple` 树节点有效。 | 9.34.0  |
| `loadData`               | function      | `null`  | 启用异步加载数据                                     |         |
| `autoExpandParent`       | boolean       | `false` | 是否自动展开根父级树节点                             | 9.17.0  |
| `defaultExpandedKeys`    | array         | `[]`    | 指定默认展开的树节点的节点值                         | 9.17.0  |

- 默认数据格式

  ```js
  {
    label: 'label',
    value: 'value', // nodeKey
    children: 'children',
    hasChildren: 'hasChildren',
    isLeaf: 'isLeaf',
    disabled: 'disabled' // New in 8.43.0
  }
  ```

- 异步加载数据

  ```ts
  type TreeNodes = { [key: string]: any }[];

  interface Tree {
    loadData(nodeKey: string | number): TreeNodes;
  }
  ```

- 操作树节点 (New in 9.31.0)

  ```html
  <ui-tree ref="tree"></ui-tree>
  ```

  ```ts
  this.$refs.tree.updateNode(type: 'create' | 'update' | 'delete', parentKey: string | number, nodeData: object)
  ```

### Slots

| Name               | Props  | Description                              | Version |
| ------------------ | ------ | ---------------------------------------- | ------- |
| `default`          |        | default 插槽包含树顶部栏内容及 HTML      |         |
| `expand-more-icon` |        | 自定义展开图标                           |         |
| `expand-less-icon` |        | 自定义收起图标                           |         |
| `before`           | `data` | before 插槽包含树节点的自定义信息及 HTML | 9.32.0  |
| `title`            | `data` | title 插槽包含树节点的标题及 HTML        |         |
| `after`            | `data` | after 插槽包含树节点的自定义动作及 HTML  |         |

> Rename slot <del>`action`</del> to `after` in `9.32.0`

### Events

| Name                | Type                                                              | Description        | Version |
| ------------------- | ----------------------------------------------------------------- | ------------------ | ------- |
| `update:modelValue` | `function(selectedNodes: string \| array, selectedEvent: object)` | 树节点值变化时触发 |         |
| `selected`          | `function(selectedNodesData: string \| array)`                    | 树节点被选中时触发 | 9.34.0  |

> 9.35.0 中 `@change` 事件新增 `selectedEvent` 参数

> 提示：如果你不使用 `v-model` 绑定数据，你应该使用 `@update:modelValue` 监听树节点值并更新 `modelValue` 属性

- 自动

  ```html
  <ui-tree v-model="selectedNodes"></ui-tree>
  ```

- 手动

  ```html
  <ui-tree
    :model-value="selectedNodes"
    @update:modelValue="balmUI.onChange('selectedNodes', $event)"
  ></ui-tree>
  ```
