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

  /** For single tree **/

  static setSingleSelectedValue(nodeMap, key, selected) {
    if (nodeMap.get(key)) {
      nodeMap.get(key).selected = selected;
    }
  }

  static onSelect(treeData, value) {
    const { nodeMap, selectedValue } = treeData;

    if (selectedValue) {
      this.setSingleSelectedValue(nodeMap, selectedValue, false);
    }

    treeData.selectedValue = value;
    this.setSingleSelectedValue(nodeMap, value, true);
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
}

export { MdcTree };
