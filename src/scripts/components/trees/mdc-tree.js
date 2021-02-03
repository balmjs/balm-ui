const checkLeaf = (item, { isLeaf, children }) =>
  item[isLeaf] || !item[children];

class MdcTree {
  constructor(originData, treeData) {
    const { dataFormat, maxLevel, nodeMap } = treeData;

    this.dataFormat = dataFormat;
    this.nodeKey = dataFormat.value;
    this.nodeChildren = dataFormat.children;

    this.maxLevel = maxLevel;
    this.nodeMap = nodeMap;

    return this.getData(originData);
  }

  getData(nodes, level = 0, parentKey = '') {
    const list = [];

    for (let i = 0, len = nodes.length; i < len; i++) {
      let item = Object.assign({}, nodes[i]);
      const isLeaf = checkLeaf(item, this.dataFormat);
      const key = item[this.nodeKey];
      const children = item[this.nodeChildren];

      item.level = level;
      item.isRoot = !level;
      item.isLeaf = isLeaf;
      item.expanded = false;
      item.selected = false;
      item.checked = false;
      item.parentKey = parentKey;

      if (!isLeaf) {
        item.indeterminate = false;
      }

      if (!this.nodeMap.has(key)) {
        this.nodeMap.set(key, item);
      }

      if (level < this.maxLevel && children) {
        item[this.nodeChildren] = this.getData(children, level + 1, key);
      }

      list.push(item);
    }

    return list;
  }

  static getNodeKey({ dataFormat }) {
    return dataFormat.value;
  }

  static getNodeChildren({ dataFormat }) {
    return dataFormat.children;
  }

  static addData(treeData, item, nodes) {
    const { dataFormat, nodeMap } = treeData;
    const parentKey = item[this.getNodeKey(treeData)];

    const list = [];
    const level = item.level + 1;

    for (let i = 0, len = nodes.length; i < len; i++) {
      let subitem = Object.assign({}, nodes[i]);
      const isLeaf = checkLeaf(subitem, dataFormat);
      const key = subitem[this.getNodeKey(treeData)];

      subitem.level = level;
      subitem.isRoot = !level;
      subitem.isLeaf = isLeaf;
      subitem.expanded = false;
      subitem.selected = false;
      subitem.checked = item.checked;
      subitem.parentKey = parentKey;

      if (!isLeaf) {
        subitem.indeterminate = false;
      }

      if (!nodeMap.has(key)) {
        nodeMap.set(key, subitem);
      }

      if (subitem.checked) {
        this.setMultipleSelectedValue(treeData, key, true);
      }

      list.push(subitem);
    }

    item.expanded = !item.expanded;
    item.children = list;
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

  static setMultipleSelectedValue(treeData, currentValue, checked) {
    if (checked) {
      treeData.selectedValue.push(currentValue);
    } else {
      treeData.selectedValue = treeData.selectedValue.filter(
        (value) => value !== currentValue
      );
    }
  }

  static setChildrenCheckedValue(treeData, nodes, checked) {
    const { nodeMap } = treeData;

    for (let i = 0, len = nodes.length; i < len; i++) {
      let item = Object.assign({}, nodes[i]);
      const key = item[this.getNodeKey(treeData)];
      const children = item[this.getNodeChildren(treeData)];

      if (nodeMap.get(key)) {
        nodeMap.get(key).indeterminate = false;
        nodeMap.get(key).checked = checked;
        this.setMultipleSelectedValue(treeData, key, checked);
      }

      if (!item.isLeaf && children.length) {
        this.setChildrenCheckedValue(treeData, children, checked);
      }
    }
  }

  static setParentCheckedValue(treeData, item) {
    const { nodeMap } = treeData;
    const key = item[this.getNodeKey(treeData)];
    const children = item[this.getNodeChildren(treeData)];
    const checkedList = children.filter(
      (subitem) => subitem.checked || subitem.indeterminate
    );

    if (checkedList.length) {
      const checkedAllList = checkedList.filter((subitem) => subitem.checked)
        .length;
      const checkedAll = checkedAllList === children.length;

      nodeMap.get(key).checked = checkedAll;
      nodeMap.get(key).indeterminate = !checkedAll;
      this.setMultipleSelectedValue(treeData, key, checkedAll);
    } else {
      nodeMap.get(key).checked = false;
      nodeMap.get(key).indeterminate = false;
    }

    if (!item.isRoot && treeData.nodeMap.get(item.parentKey)) {
      this.setParentCheckedValue(
        treeData,
        treeData.nodeMap.get(item.parentKey)
      );
    }
  }

  static onCheck(treeData, item) {
    let checked = !item.checked;
    const key = item[this.getNodeKey(treeData)];
    const children = item[this.getNodeChildren(treeData)];

    if (item.isLeaf) {
      item.checked = checked;
      this.setMultipleSelectedValue(treeData, key, checked);
    } else {
      if (item.indeterminate) {
        item.indeterminate = false;
        checked = true;
      }

      item.checked = checked;
      this.setMultipleSelectedValue(treeData, key, checked);
      this.setChildrenCheckedValue(treeData, children, checked);
    }

    if (!item.isRoot && treeData.nodeMap.get(item.parentKey)) {
      this.setParentCheckedValue(
        treeData,
        treeData.nodeMap.get(item.parentKey)
      );
    }
  }
}

export { MdcTree };
