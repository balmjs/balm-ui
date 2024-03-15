```html
<ui-tree></ui-tree>
```

### Props

| Name                        | Type                  | Default | Description                                                  | Version |
| --------------------------- | --------------------- | ------- | ------------------------------------------------------------ | ------- |
| `selectedNodes` (`v-model`) | string, number, array | `''`    | Selected node keys.                                          |         |
| `filterParentNode`          | boolean               | `false` | Selected node keys excludes all parent nodes.                | 8.60.0  |
| `data`                      | array                 | `[]`    | The tree data source.                                        |         |
| `dataFormat`                | object                | `{}`    | Defines the tree data source format.                         |         |
| `maxLevel`                  | number                | `0`     | Set max level for tree nodes.                                |         |
| `multiple`                  | boolean               | `false` | Whether to support selected multiple tree nodes.             |         |
| `singleChecked`             | boolean               | `false` | Set single checked. Applicable only for the `multiple` tree. | 8.42.0  |
| `loadData`                  | function              | `null`  | Load data asynchronously.                                    |         |
| `autoExpandParent`          | boolean               | `false` | Whether to automatically expand root parent(s) treeNode.     | 8.25.0  |
| `defaultExpandedKeys`       | array                 | `[]`    | Specify the node keys of the default expanded treeNodes.     | 8.25.0  |

- Default data format

  ```js
  {
    label: 'label',
    value: 'value', // nodeKey
    children: 'children',
    hasChildren: 'hasChildren',
    isLeaf: 'isLeaf',
    disabled: 'disabled', // New in 8.43.0
    parentKey: 'parentKey' // New in 8.67.0
  }
  ```

- Load data asynchronously

  ```ts
  type TreeNodes = { [key: string]: any }[];

  interface Tree {
    loadData(nodeKey: string | number): TreeNodes;
  }
  ```

- Tree node operations (New in 8.40.0)

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
| `before`           | `data` | The before slot holds the tree node custom info and can contain HTML.   | 8.41.0  |
| `title`            | `data` | The title slot holds the tree node title and can contain HTML.          |         |
| `after`            | `data` | The after slot holds the tree node custom actions and can contain HTML. |         |

> Rename slot <del>`action`</del> to `after` in `8.41.0`

### Events

| Name       | Type                                                              | Description                       | Version |
| ---------- | ----------------------------------------------------------------- | --------------------------------- | ------- |
| `change`   | `function(selectedNodes: string \| array, selectedEvent: object)` | Emits when tree node is changed.  |         |
| `selected` | `function(selectedNodesData: string \| array)`                    | Emits when tree node is selected. | 8.42.0  |

> The `selectedEvent` parameter of `@change` event is new in 8.43.0

> NOTE: If you are not using `v-model`, you should listen for the tree using `@change` and update the `selectedNodes` prop.

- Automatic

  ```html
  <ui-tree v-model="selectedValue"></ui-tree>
  ```

- Manual

  ```html
  <ui-tree
    :selected-nodes="selectedValue"
    @change="$balmUI.onChange('selectedValue', $event)"
  ></ui-tree>
  ```
