const checkLeaf = (item, isLeaf, hasChildren) => item[isLeaf] || !hasChildren;

const getNode = (
  nodeMap,
  { value, children, hasChildren, isLeaf },
  originItem,
  { level, parentKey, checked }
) => {
  let item = Object.assign({}, originItem);

  const nodeKey = item[value];
  const nodeChildren = item[children];
  const nodeHasChildren = item[hasChildren] || nodeChildren;
  const nodeIsLeaf = checkLeaf(item, isLeaf, nodeHasChildren);

  item.level = level;
  item.isRoot = !level;
  item.isLeaf = nodeIsLeaf;
  item.expanded = false;
  item.selected = false;
  item.checked = checked;
  item.parentKey = parentKey;

  if (!nodeChildren) {
    item[children] = [];
  }

  if (!nodeIsLeaf) {
    item.indeterminate = false;
  }

  if (!nodeMap.has(nodeKey)) {
    nodeMap.set(nodeKey, item);
  }

  return item;
};

class MdcTree {
  constructor(treeData) {
    const { dataFormat, maxLevel, nodeMap } = treeData;

    this.dataFormat = dataFormat;
    this.maxLevel = maxLevel;
    this.nodeMap = nodeMap;
  }

  getData(nodes, level = 0, parentKey = '') {
    const list = [];
    const { value, children, hasChildren } = this.dataFormat;

    for (let i = 0, len = nodes.length; i < len; i++) {
      let item = getNode(this.nodeMap, this.dataFormat, nodes[i], {
        level,
        parentKey,
        checked: false
      });

      const nodeChildren = item[children];
      const nodeHasChildren = item[hasChildren] || nodeChildren;

      if (level < this.maxLevel && nodeHasChildren) {
        item[children] = this.getData(nodeChildren, level + 1, item[value]);
      }

      list.push(item);
    }

    return list;
  }

  /** For tree node */
  static addData(treeData, item, nodes) {
    const { dataFormat, nodeMap } = treeData;

    const list = [];
    const { value, children } = dataFormat;
    const level = item.level + 1;
    const parentKey = item[value];
    const checked = item.checked;

    for (let i = 0, len = nodes.length; i < len; i++) {
      let subitem = getNode(nodeMap, dataFormat, nodes[i], {
        level,
        parentKey,
        checked
      });

      if (subitem.checked) {
        this.setMultipleSelectedValue(treeData, subitem[value], checked);
      }

      list.push(subitem);
    }

    item[children] = list;
    item.expanded = true;

    nodeMap.set(parentKey, item);
  }

  static async onExpand(treeData, item) {
    if (treeData.loadData) {
      const { dataFormat } = treeData;
      const hasChildren =
        item[dataFormat.children] && item[dataFormat.children].length;

      if (hasChildren) {
        item.expanded = !item.expanded;
      } else {
        let nodes = await treeData.loadData(item[dataFormat.value]);
        if (Array.isArray(nodes)) {
          this.addData(treeData, item, nodes);
        } else {
          console.warn(`[BalmUI tree]: Invalid data`);
        }
      }
    } else {
      item.expanded = !item.expanded;
    }
  }

  /** For single tree **/

  static setSingleSelectedValue(nodeMap, nodeKey, selected) {
    if (nodeMap.get(nodeKey)) {
      nodeMap.get(nodeKey).selected = selected;
    }
  }

  static onSelect(treeData, item) {
    const { dataFormat, nodeMap, selectedValue } = treeData;
    const nodeKey = item[dataFormat.value];

    if (selectedValue) {
      this.setSingleSelectedValue(nodeMap, selectedValue, false);
    }

    treeData.selectedValue = nodeKey;
    this.setSingleSelectedValue(nodeMap, nodeKey, true);
  }

  /** For multiple tree **/

  static setMultipleSelectedValue(treeData, currentNodeKey, checked) {
    const { indeterminate } = treeData.nodeMap.get(currentNodeKey);

    if (checked && !indeterminate) {
      treeData.selectedValue.push(currentNodeKey);
    } else {
      treeData.selectedValue = treeData.selectedValue.filter(
        (value) => value !== currentNodeKey
      );
    }
  }

  static setChildrenCheckedValue(treeData, nodes, checked) {
    const { dataFormat, nodeMap } = treeData;
    const { value, children, isLeaf } = dataFormat;

    for (let i = 0, len = nodes.length; i < len; i++) {
      let item = Object.assign({}, nodes[i]);

      const nodeKey = item[value];
      const nodeChildren = item[children];

      if (nodeMap.get(nodeKey)) {
        nodeMap.get(nodeKey).indeterminate = false;
        nodeMap.get(nodeKey).checked = checked;
        this.setMultipleSelectedValue(treeData, nodeKey, checked);
      }

      if (!item[isLeaf] && nodeChildren.length) {
        this.setChildrenCheckedValue(treeData, nodeChildren, checked);
      }
    }
  }

  static setParentCheckedValue(treeData, item) {
    const { dataFormat, nodeMap } = treeData;
    const { value, children } = dataFormat;

    const nodeKey = item[value];
    const nodeChildren = item[children];
    const nodeCheckedList = nodeChildren.filter(
      (subitem) => subitem.checked || subitem.indeterminate
    );

    if (nodeCheckedList.length) {
      const checkedAllList = nodeCheckedList.filter(
        (subitem) => subitem.checked
      ).length;
      const checkedAll = checkedAllList === nodeChildren.length;

      nodeMap.get(nodeKey).checked = checkedAll;
      nodeMap.get(nodeKey).indeterminate = !checkedAll;
      this.setMultipleSelectedValue(treeData, nodeKey, checkedAll);
    } else {
      nodeMap.get(nodeKey).checked = false;
      nodeMap.get(nodeKey).indeterminate = false;
    }

    if (!item.isRoot && nodeMap.get(item.parentKey)) {
      this.setParentCheckedValue(treeData, nodeMap.get(item.parentKey));
    }
  }

  static onCheck(treeData, item) {
    let checked = !item.checked;

    const { dataFormat, nodeMap } = treeData;
    const { value, children, isLeaf } = dataFormat;
    const nodeKey = item[value];
    const nodeChildren = item[children];

    if (item[isLeaf]) {
      item.checked = checked;
      this.setMultipleSelectedValue(treeData, nodeKey, checked);
    } else {
      if (item.indeterminate) {
        item.indeterminate = false;
        checked = true;
      }

      item.checked = checked;
      this.setMultipleSelectedValue(treeData, nodeKey, checked);
      this.setChildrenCheckedValue(treeData, nodeChildren, checked);
    }

    if (!item.isRoot && nodeMap.get(item.parentKey)) {
      this.setParentCheckedValue(treeData, nodeMap.get(item.parentKey));
    }
  }

  /** For init tree **/
  static async setExpanded(
    treeData,
    nodeList,
    { autoExpandParent, defaultExpandedKeys, defaultSelectedKeys }
  ) {
    const { dataFormat, nodeMap } = treeData;

    if (autoExpandParent) {
      const nodes = defaultExpandedKeys.length
        ? nodeList.filter((node) =>
            defaultExpandedKeys.includes(node[dataFormat.value])
          )
        : nodeList;

      for await (let node of nodes) {
        const nodeKey = node[dataFormat.value];
        const item = nodeMap.get(nodeKey);

        if (item[dataFormat.hasChildren]) {
          this.onExpand(treeData, item);
        }
      }
    }

    this.setSelected(treeData, defaultSelectedKeys);
  }

  static setSelected(treeData, defaultSelectedKeys) {
    const { nodeMap, multiple } = treeData;

    for (let i = 0, len = defaultSelectedKeys.length; i < len; i++) {
      const nodeKey = defaultSelectedKeys[i];
      const item = nodeMap.get(nodeKey);
      console.log(nodeKey, item);
      multiple ? this.onCheck(treeData, item) : this.onSelect(treeData, item);
    }
  }
}

export { MdcTree };
