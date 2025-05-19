class Node {
  constructor(
    public value: number | null,
    public leftNode: Node | null = null,
    public rightNode: Node | null = null,
  ) {}
}

class BinaryTree {
  private _root: Node;

  public get root() {
    return this._root;
  }

  private set root(node: Node | null) {
    this._root = node;
  }

  public insert(value: Node['value'], fakeValue?: Node['value']) {
    const newNode = new Node(fakeValue || value);

    if (!this.root) {
      this.root = newNode;
    }

    let pointer = this.root;
    while (pointer) {
      if (value === pointer.value) {
        return;
      }

      if (value > pointer.value) {
        if (pointer.rightNode) {
          pointer = pointer.rightNode;
        } else {
          pointer.rightNode = newNode;
          return;
        }
      }

      if (value < pointer.value) {
        if (pointer.leftNode) {
          pointer = pointer.leftNode;
        } else {
          pointer.leftNode = newNode;
          return;
        }
      }
    }
  }

  public find(value: Node['value']) {
    let pointer = this.root;

    while (pointer) {
      if (value === pointer.value) {
        return pointer;
      }

      if (value > pointer.value) {
        pointer = pointer.rightNode;
      }

      if (value < pointer.value) {
        pointer = pointer.leftNode;
      }
    }

    return pointer;
  }

  private findWithParent(value: Node['value']) {
    let parent = null;
    let current = this.root;
    let direction: 'leftNode' | 'rightNode' | null = null;

    while (current) {
      if (value === current.value) {
        return { parent, current, direction };
      }

      parent = current;
      if (value < current.value) {
        current = current.leftNode;
        direction = 'leftNode';
      } else {
        current = current.rightNode;
        direction = 'rightNode';
      }
    }

    return { parent: null, current: null, direction: null };
  }

  public delete(value: Node['value']) {
    const { parent, current, direction } = this.findWithParent(value);

    if (!current) {
      return;
    }

    // list
    if (!current.leftNode && !current.rightNode) {
      if (!parent) this.root = null;
      else parent[direction] = null;

      return;
    }

    // one child
    if (!current.leftNode || !current.rightNode) {
      const child = current.leftNode || current.rightNode;

      if (!parent) this.root = child;
      else parent[direction] = child;

      return;
    }

    // TODO: two children
    // find lowest child in right subtree
    // store lowest child value
    // call this.delete(<lowest child>.value)
    // paste lowest child value to currentNode
  }

  public print() {
    console.dir(this.root, { depth: null });
  }

  private traverse(node: Node, order: 'pre-order' | 'in-order' | 'past-order') {
    if (!node) return;

    if (order === 'pre-order') console.log(node.value);
    this.traverse(node.leftNode, order);
    if (order === 'in-order') console.log(node.value);
    this.traverse(node.rightNode, order);
    if (order === 'past-order') console.log(node.value);
  }

  public preOrder() {
    console.log('-------- pre-order --------');
    this.traverse(this.root, 'pre-order');
  }

  public inOrder() {
    console.log('-------- in-order --------');
    this.traverse(this.root, 'in-order');
  }

  public pastOrder() {
    console.log('-------- past-order --------');
    this.traverse(this.root, 'past-order');
  }

  private isLeaf(node: Node) {
    return !node.leftNode && !node.rightNode;
  }

  public nodeHeight(node?: Node): number {
    const pointer = node || this.root;

    if (node === null || this.isLeaf(pointer)) return 0;

    return 1 + Math.max(this.nodeHeight(pointer.leftNode), this.nodeHeight(pointer.rightNode));
  }

  public findMin(node?: Node): number {
    const pointer = node || this.root;

    if (node === null || this.isLeaf(pointer)) return pointer.value;

    return Math.min(pointer.value, this.findMin(pointer.leftNode), this.findMin(pointer.rightNode));
  }

  public equals(tree: BinaryTree) {
    return this.checkNodeEquals(this.root, tree.root);
  }

  private checkNodeEquals(firstTree: Node, secondTree: Node) {
    if (!firstTree && !secondTree) {
      return true;
    }

    if (firstTree.value !== secondTree.value) {
      return false;
    }

    if (!this.checkNodeEquals(firstTree.leftNode, secondTree.leftNode)) {
      return false;
    }

    if (!this.checkNodeEquals(firstTree.rightNode, secondTree.rightNode)) {
      return false;
    }

    return true;
  }

  public isSearchTree(node?: Node, min?: number, max?: number): boolean {
    if (node === undefined) node = this.root;

    if (min && node.value <= min) {
      return false;
    }

    if (max && node.value >= max) {
      return false;
    }

    if (node.leftNode && !this.isSearchTree(node.leftNode, min, node.value)) {
      return false;
    }

    if (node.rightNode && !this.isSearchTree(node.rightNode, node.value, max)) {
      return false;
    }

    return true;
  }

  public printKNode(distance: number, went: number = 0, node: Node = this.root) {
    if (distance === went) {
      console.log(node.value);
      return;
    }

    if (node.leftNode) this.printKNode(distance, went + 1, node.leftNode);
    if (node.rightNode) this.printKNode(distance, went + 1, node.rightNode);
  }
}

const tree = new BinaryTree();
tree.insert(20);
tree.insert(30);
tree.insert(24);
tree.insert(10);
tree.insert(6);
tree.insert(11);
tree.insert(3);
tree.insert(8);
// tree.print();
tree.printKNode(0);

// console.log(tree.isSearchTree());

// console.log(tree.findMin());

// console.log(tree.nodeHeight());

// tree.preOrder();

// tree.inOrder();

// tree.pastOrder();

// const firstTree = new BinaryTree();
// firstTree.insert(20);
// firstTree.insert(30);
// firstTree.insert(40);
// firstTree.insert(10);
// firstTree.insert(5);
// firstTree.insert(1);

// const secondTree = new BinaryTree();
// secondTree.insert(20);
// secondTree.insert(30);
// secondTree.insert(40);
// secondTree.insert(10);
// secondTree.insert(5);
// secondTree.insert(1);

// console.log(firstTree.equals(secondTree));

export {};
