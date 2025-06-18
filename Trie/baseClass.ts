type Value = string | null;

class Node {
  constructor(
    private _value: Value = null,
    private _children: Record<string, Node> = {},
    public isEndOfWord: boolean = false,
  ) {}

  private getPosition(value: string) {
    return value.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  public hasChild(value: Value): boolean {
    const position = this.getPosition(value);
    return Boolean(this._children[position]);
  }

  public addChild(value: Value): void {
    const position = this.getPosition(value);
    this._children[position] = new Node(value);
  }

  public getChild(value: Value): Node {
    const position = this.getPosition(value);
    return this._children[position];
  }

  public hasChildren(): boolean {
    return Boolean(Object.keys(this._children).length);
  }

  get value(): Value {
    return this._value;
  }

  get children(): Node[] {
    return Object.values(this._children);
  }
}

class Trie {
  root: Node = new Node();

  public insert(word: Value): void {
    let pointer = this.root;

    Array.from(word).forEach((char) => {
      if (!pointer.hasChild(char)) {
        pointer.addChild(char);
      }

      pointer = pointer.getChild(char);
    });

    pointer.isEndOfWord = true;
  }

  public contains(word: Value): boolean {
    let pointer = this.root;

    Array.from(word).forEach((char) => {
      if (!pointer.hasChild(char)) {
        return false;
      }

      pointer = pointer.getChild(char);
    });

    return pointer.isEndOfWord;
  }

  public traversePreOrder(): Node[] {
    return this._traversePreOrder(this.root);
  }

  private _traversePreOrder(node: Node): Node[] {
    const path: Node[] = [];
    if (!node.hasChildren) return [node];
    if (node.value) path.push(node);

    node.children.forEach((child) => {
      path.push(...this._traversePreOrder(child));
    });

    return path;
  }

  public traversePostOrder(): Node[] {
    return this._traversePostOrder(this.root);
  }

  private _traversePostOrder(node: Node): Node[] {
    const path: Node[] = [];
    if (!node.hasChildren()) return [node];

    node.children.forEach((child) => {
      path.push(...this._traversePostOrder(child));
    });

    if (node.value) path.push(node);
    return path;
  }

  public print(): void {
    console.dir(this.root, { depth: null });
  }
}

const trie = new Trie();

trie.insert('cat');
trie.insert('canada');

// console.log(trie.contains('cat'));
// console.log(trie.contains('can'));

console.log(trie.traversePreOrder());
console.log(trie.traversePostOrder());

// trie.print();
