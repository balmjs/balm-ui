const treeData = [];
const treeMap = new Map();

class MdcTree {
  constructor(nodes, maxLevel = 1) {
    this.maxLevel = maxLevel;
    this.getData(nodes);
  }

  get data() {
    return treeData;
  }

  isLeaf(item) {
    return !(item.children && item.children.length);
  }

  setData(item) {
    treeData.push(item);
    treeMap.set(item.key, item);
  }

  getData(nodes, level = 0) {
    for (let i = 0, len = nodes.length; i < len; i++) {
      let item = Object.assign({}, nodes[i]);

      item.level = level;
      item.isRoot = !level;
      item.isExpanded = false;
      item.isLeaf = this.isLeaf(item);

      if (level < this.maxLevel) {
        this.setData(item);
        item.children = this.getData(item.children, level + 1);
      } else {
        this.setData(item);
      }
    }
  }
}

function selectedKeys() {}

export { MdcTree, treeMap };
