```html
<ui-tree></ui-tree>
```

### Props

| Name                        | Type          | Default | Description                                              | Version |
| --------------------------- | ------------- | ------- | -------------------------------------------------------- | ------- |
| `selectedNodes` (`v-model`) | string, array | `''`    | Selected node keys.                                      |         |
| `data`                      | array         | `[]`    | The tree data source.                                    |         |
| `dataFormat`                | object        | `{}`    | Defines the tree data source format.                     |         |
| `maxLevel`                  | number        | `0`     | Set max level for tree nodes.                            |         |
| `multiple`                  | boolean       | `false` | Whether to support selected multiple tree nodes.         |         |
| `loadData`                  | function      | `null`  | Load data asynchronously.                                |         |
| `autoExpandParent`          | boolean       | `false` | Whether to automatically expand root parent(s) treeNode. | 8.25.0  |
| `defaultExpandedKeys`       | array         | `[]`    | Specify the node keys of the default expanded treeNodes. | 8.25.0  |

- Default data format:

  ```js
  {
    label: 'label',
    value: 'value', // nodeKey
    children: 'children',
    hasChildren: 'hasChildren',
    isLeaf: 'isLeaf'
  }
  ```

- Load data asynchronously:

  ```ts
  type TreeNodes = { [key: string]: any }[];

  interface Tree {
    loadData(nodeKey: string | number): TreeNodes;
  }
  ```

### Slots

| Name               | Props  | Description                                                           |
| ------------------ | ------ | --------------------------------------------------------------------- |
| `default`          |        | The default slot holds the tree top bar content and can contain HTML. |
| `expand-more-icon` |        | The custom expand more icon.                                          |
| `expand-less-icon` |        | The custom expand less icon.                                          |
| `title`            | `data` | The title slot holds the tree node title and can contain HTML.        |
| `action`           | `data` | The action slot holds the tree node actions and can contain HTML.     |

### Events

| Name     | Type                                       | Description                      |
| -------- | ------------------------------------------ | -------------------------------- |
| `change` | `function(selectedNodes: string \| array)` | Emits when tree node is changed. |

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
