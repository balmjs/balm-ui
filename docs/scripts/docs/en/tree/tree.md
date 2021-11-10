```html
<ui-tree></ui-tree>
```

### Props

| Name                     | Type          | Default | Description                                                  | Version |
| ------------------------ | ------------- | ------- | ------------------------------------------------------------ | ------- |
| `modelValue` (`v-model`) | string, array | `''`    | Selected node keys.                                          |         |
| `data`                   | array         | `[]`    | The tree data source.                                        |         |
| `dataFormat`             | object        | `{}`    | Defines the tree data source format.                         |         |
| `maxLevel`               | number        | `0`     | Set max level for tree nodes.                                |         |
| `multiple`               | boolean       | `false` | Whether to support selected multiple tree nodes.             |         |
| `singleChecked`          | boolean       | `false` | Set single checked. Applicable only for the `multiple` tree. | 9.34.0  |
| `loadData`               | function      | `null`  | Load data asynchronously.                                    |         |
| `autoExpandParent`       | boolean       | `false` | Whether to automatically expand root parent(s) treeNode.     | 9.17.0  |
| `defaultExpandedKeys`    | array         | `[]`    | Specify the node keys of the default expanded treeNodes.     | 9.17.0  |

- Default data format

  ```js
  {
    label: 'label',
    value: 'value', // nodeKey
    children: 'children',
    hasChildren: 'hasChildren',
    isLeaf: 'isLeaf',
    disabled: 'disabled' // New in 9.35.0
  }
  ```

- Load data asynchronously

  ```ts
  type TreeNodes = { [key: string]: any }[];

  interface Tree {
    loadData(nodeKey: string | number): TreeNodes;
  }
  ```

- Tree node operations (New in 9.31.0)

  ```html
  <ui-tree ref="tree"></ui-tree>
  ```

  ```ts
  this.$refs.tree.updateNode(type: 'create' | 'update' | 'delete', parentKey: string | number, nodeData: object)
  ```

### Slots

| Name               | Props  | Description                                                             | Version |
| ------------------ | ------ | ----------------------------------------------------------------------- | ------- |
| `default`          |        | The default slot holds the tree top bar content and can contain HTML.   |         |
| `expand-more-icon` |        | The custom expand more icon.                                            |         |
| `expand-less-icon` |        | The custom expand less icon.                                            |         |
| `before`           | `data` | The before slot holds the tree node custom info and can contain HTML.   | 9.32.0  |
| `title`            | `data` | The title slot holds the tree node title and can contain HTML.          |         |
| `after`            | `data` | The after slot holds the tree node custom actions and can contain HTML. |         |

> Rename slot <del>`action`</del> to `after` in `9.32.0`

### Events

| Name                | Type                                                              | Description                       | Version |
| ------------------- | ----------------------------------------------------------------- | --------------------------------- | ------- |
| `update:modelValue` | `function(selectedNodes: string \| array, selectedEvent: object)` | Emits when tree node is changed.  |         |
| `selected`          | `function(selectedNodesData: string \| array)`                    | Emits when tree node is selected. | 9.34.0  |

> The `selectedEvent` parameter of `@change` event is new in 9.35.0

> NOTE: If you are not using `v-model`, you should listen for the tree using `@update:modelValue` and update the `modelValue` prop.

- Automatic

  ```html
  <ui-tree v-model="selectedNodes"></ui-tree>
  ```

- Manual

  ```html
  <ui-tree
    :model-value="selectedNodes"
    @update:modelValue="balmUI.onChange('selectedNodes', $event)"
  ></ui-tree>
  ```
