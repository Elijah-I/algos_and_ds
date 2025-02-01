type Value = number | null;
type Left = Node | null;
type Right = Node | null;

abstract class AbstractNode {
  abstract value: Value;
  abstract left: Left;
  abstract right: Right;
}

class Node implements AbstractNode {
  value: Value;
  left: Left;
  right: Right;

  constructor(value: Value = null, left: Left = null, right: Right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

abstract class AbstractBinaryTree {
  abstract root: Node;
  abstract add(value: Value): Node;
  abstract find(value: Value): Node;
  abstract print(node: Node): void;
}

class BinaryTree implements AbstractBinaryTree {
  root: Node;

  constructor(value: Value) {
    this.root = new Node(value);
  }

  find(value: Value): Node {
    let pointer = this.root;

    while (pointer) {
      if (pointer.value === value) {
        return pointer;
      }

      if (value > pointer.value) {
        pointer = pointer.right;
      } else {
        pointer = pointer.left;
      }
    }

    return null;
  }

  add(value: Value): Node {
    let pointer = this.root;

    while (pointer) {
      if (value === pointer.value) {
        return pointer;
      }

      if (value > pointer.value) {
        if (!pointer.right) {
          pointer.right = new Node(value);
          return pointer;
        }

        pointer = pointer.right;
      }

      if (value < pointer.value) {
        if (!pointer.left) {
          pointer.left = new Node(value);
          return pointer;
        }

        pointer = pointer.left;
      }
    }
  }

  print(node: Node = this.root): void {
    if (!node) {
      return;
    }

    console.log(node.value);

    this.print(node.left);
    this.print(node.right);
  }
}

const tree = new BinaryTree(5);

tree.add(3);
tree.add(7);
tree.add(1);
tree.add(2);
tree.add(4);
tree.add(9);
tree.add(11);
tree.add(8);

console.log("TREE:", JSON.stringify(tree.root, null, 4));

console.log("FIND 4:", tree.find(4));
console.log("FIND 17:", tree.find(17));
