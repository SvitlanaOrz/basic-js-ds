const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this._root;
  }

  add(data) {
    // throw new NotImplementedError('Not implemented');
    const newNode = new Node(data);
    if (!this._root) {
      this._root = newNode;
    } else {
      this._insertNode(this._root, newNode);
    }
  }

  has(data) {
    // throw new NotImplementedError('Not implemented');
    return this.find(data) !== null;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    return this._findNode(this._root, data);
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this._root = this._removeNode(this._root, data);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    if (!this._root) {
      return null;
    }
    let node = this._root;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    if (!this._root) {
      return null;
    }
    let node = this._root;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  _findNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  _removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data === node.data) {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        const successor = this._findMinNode(node.right);
        node.data = successor.data;
        node.right = this._removeNode(node.right, successor.data);
        return node;
      }
    } else if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else {
      node.right = this._removeNode(node.right, data);
      return node;
    }
  }

  _findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree,
};
