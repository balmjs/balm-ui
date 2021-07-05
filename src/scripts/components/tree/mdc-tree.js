const checkLeaf = (item, isLeaf, hasChildren) => item[isLeaf] || !hasChildren;

const getNode = (
  nodeMap,
  { value, children, hasChildren, isLeaf },
  originNodeData,
  { level, parentKey, checked }
) => {
  let item = Object.assign({}, originNodeData);

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
          console.warn('[UiTree]', 'Invalid data');
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
      if (!treeData.selectedValue.includes(currentNodeKey)) {
        treeData.selectedValue.push(currentNodeKey);
      }
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

  static onCheck(treeData, item, forceChecked = null) {
    let checked = !item.checked;
    if (typeof forceChecked === 'boolean') {
      checked = forceChecked;
    }

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
    { autoExpandParent, defaultExpandedKeys }
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

        this.onExpand(treeData, item);
      }
    }
  }

  static resetSelected(treeData, oldSelectedKeys) {
    const { nodeMap } = treeData;

    for (let i = 0, len = oldSelectedKeys.length; i < len; i++) {
      const nodeKey = oldSelectedKeys[i];
      const item = nodeMap.get(nodeKey);
      if (item) {
        this.onCheck(treeData, item, false);
      }
    }
  }

  static setSelected(treeData, newSelectedKeys) {
    const { nodeMap, multiple } = treeData;

    const selectedKeys = Array.isArray(newSelectedKeys)
      ? newSelectedKeys
      : [newSelectedKeys];
    for (let i = 0, len = selectedKeys.length; i < len; i++) {
      const nodeKey = selectedKeys[i];
      const item = nodeMap.get(nodeKey);
      if (item) {
        multiple
          ? this.onCheck(treeData, item, true)
          : this.onSelect(treeData, item);
      }
    }
  }

  /** For tree operation **/
  static createNode(treeData, parentKey, originNodeData) {
    const { dataFormat, nodeMap } = treeData;
    const { value, children } = dataFormat;

    const parentItem = nodeMap.get(parentKey);
    const nodeKey = originNodeData[value];

    let item = getNode(nodeMap, dataFormat, originNodeData, {
      level: parentItem.level + 1,
      parentKey,
      checked: false
    });
    parentItem[children].unshift(item);

    nodeMap.set(parentKey, parentItem);
    nodeMap.set(nodeKey, item);
  }

  static updateNode(treeData, parentKey, originNodeData) {
    const { dataFormat, nodeMap } = treeData;
    const { value, children } = dataFormat;

    const nodeKey = originNodeData[value];
    const item = nodeMap.get(nodeKey);
    Object.keys(item).forEach((key) => {
      if (typeof originNodeData[key] !== 'undefined') {
        item[key] = originNodeData[key];
      }
    });

    const parentItem = nodeMap.get(parentKey);
    const parentChildren = parentItem[children];
    const index = parentChildren.findIndex((item) => item[value] === nodeKey);
    parentItem[children][index] = item;

    nodeMap.set(parentKey, parentItem);
    nodeMap.set(nodeKey, item);
  }

  static deleteNode(treeData, parentKey, originNodeData) {
    const { dataFormat, nodeMap } = treeData;
    const { value, children, hasChildren } = dataFormat;

    const nodeKey = originNodeData[value];
    if (nodeMap.has(nodeKey)) {
      const parentItem = nodeMap.get(parentKey);
      const parentChildren = parentItem[children];

      parentChildren.splice(
        parentChildren.findIndex((item) => item[value] === nodeKey),
        1
      );
      parentItem[hasChildren] = parentChildren.length;
      if (!parentItem[hasChildren]) {
        parentItem.isLeaf = true;
        parentItem.expanded = false;
      }

      nodeMap.set(parentKey, parentItem);
      nodeMap.delete(nodeKey);
    }
  }
}

export { MdcTree };
