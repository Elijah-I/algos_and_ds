class Node {
  constructor(
    public value: number | null,
    public leftNode: Node | null = null,
    public rightNode: Node | null = null,
  ) {}
}

class BinaryTree {
  private root: Node;

  public insert(value: Node['value']) {
    const newNode = new Node(value);

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
tree.print();

console.log(tree.findMin());

// console.log(tree.nodeHeight());

// tree.preOrder();

// tree.inOrder();

// tree.pastOrder();

export {};
