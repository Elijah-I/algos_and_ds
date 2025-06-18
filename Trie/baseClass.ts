class Node {
  constructor(
    private value: string | null = null,
    private children: Record<string, Node> = {},
    public isEndOfWord: boolean = false,
  ) {}

  private getPosition(value: string) {
    return value.charCodeAt(0) - 'a'.charCodeAt(0);
  }

  public hasChild(value: Node['value']): boolean {
    const position = this.getPosition(value);
    return Boolean(this.children[position]);
  }

  public addChild(value: Node['value']): void {
    const position = this.getPosition(value);
    this.children[position] = new Node(value);
  }

  public getChild(value: Node['value']): Node {
    const position = this.getPosition(value);
    return this.children[position];
  }
}

class Trie {
  root: Node = new Node();

  public insert(word: Node['value']) {
    let pointer = this.root;

    Array.from(word).forEach((value) => {
      if (!pointer.hasChild(value)) {
        pointer.addChild(value);
      }

      pointer = pointer.getChild(value);
    });

    pointer.isEndOfWord = true;
  }

  public print() {
    console.dir(this.root, { depth: null });
  }
}

const trie = new Trie();

trie.insert('cat');
trie.insert('can');
trie.print();
