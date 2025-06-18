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

  public insert(word: Node['value']): void {
    let pointer = this.root;

    Array.from(word).forEach((char) => {
      if (!pointer.hasChild(char)) {
        pointer.addChild(char);
      }

      pointer = pointer.getChild(char);
    });

    pointer.isEndOfWord = true;
  }

  public contains(word: Node['value']): boolean {
    let pointer = this.root;

    Array.from(word).forEach((char) => {
      if (!pointer.hasChild(char)) {
        return false;
      }

      pointer = pointer.getChild(char);
    });

    return pointer.isEndOfWord;
  }

  public print(): void {
    console.dir(this.root, { depth: null });
  }
}

const trie = new Trie();

trie.insert('cat');
trie.insert('canada');

console.log(trie.contains('cat'));
console.log(trie.contains('can'));

// trie.print();
