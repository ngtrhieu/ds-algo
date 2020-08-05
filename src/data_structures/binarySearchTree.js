import _ from 'lodash';

export class BinarySearchNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor(comparer) {
    this.root = null;
    this.comparer = comparer || ((a, b) => a - b);
  }

  insert(...elems) {
    const insertOnce = elem => {
      if (this.root === null) {
        this.root = new BinarySearchNode(elem);
        return;
      }

      let node = new BinarySearchNode(elem);
      let curr = this.root;
      while (curr !== node) {
        const compare = this.comparer(elem, curr.value);
        if (compare <= 0) {
          curr = curr.left = curr.left || node;
        } else {
          curr = curr.right = curr.right || node;
        }
      }
    };

    _.each(elems, insertOnce);
  }

  delete(...elems) {
    const deleteInTree = (elem, node) => {
      if (node === null) return;

      const { value, left, right } = node;
      const compare = this.comparer(elem, value);

      if (compare < 0) {
        node.left = deleteInTree(elem, node.left);
        return node;
      } else if (compare > 0) {
        node.right = deleteInTree(elem, node.right);
        return node;
      }

      if (!left && !right) {
        return null;
      }

      if (!left) {
        return right;
      }

      if (!right) {
        return left;
      }

      const minRight = this._getMinimum(right);
      node.value = minRight;
      node.right = deleteInTree(minRight, node.right);

      return node;
    };

    _.each(elems, elem => (this.root = deleteInTree(elem, this.root)));
  }

  search(target) {
    const searchAt = curr => {
      if (!curr) return false;
      const compare = this.comparer(curr.value, target);
      return compare === 0
        ? true
        : compare < 0
        ? searchAt(curr.right)
        : searchAt(curr.left);
    };

    return searchAt(this.root);
  }

  getMinimum() {
    return this._getMinimum(this.root);
  }

  _getMinimum(root) {
    if (!root) return null;

    let curr = root;
    while (curr.left) {
      curr = curr.left;
    }

    return curr.value;
  }

  getMaximum() {
    return this._getMaximum(this.root);
  }

  _getMaximum(root) {
    if (!root) return null;

    let curr = root;
    while (curr.right) {
      curr = curr.right;
    }

    return curr.value;
  }

  inOrder() {
    const res = [];

    const traverse = node => {
      if (!node) return;
      traverse(node.left);
      res.push(node.value);
      traverse(node.right);
    };

    traverse(this.root);
    return res;
  }
}
