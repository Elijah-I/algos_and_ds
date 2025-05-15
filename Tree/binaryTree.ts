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
}

const tree = new BinaryTree();
tree.insert(7);
tree.insert(10);
tree.insert(6);
tree.insert(4);
tree.insert(5);
tree.insert(12);
tree.insert(11);
tree.delete(6);
tree.print();
// console.log(tree.find(11));
// console.log(tree.find(3));

export {};
