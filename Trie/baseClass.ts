/**
 * Название: Trie (Prefix Tree) Implementation
 * Условие: Реализовать структуру данных Trie (префиксное дерево), поддерживающую:
 *         - вставку слова (insert)
 *         - проверку наличия слова (contains)
 *         - автодополнение на основе заданного префикса (autoComplete)
 *         - удаление слова (deleteWord)
 * Пример:
 *   Ввод: insert('cat'), insert('canada'), insert('car'), insert('card'), insert('careful')
 *   Вызов: autoComplete('ca')
 *   Вывод: ['cat', 'canada', 'car', 'card', 'careful']
 */

type Word = string;
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

  public deleteChild(value: Value): void {
    const position = this.getPosition(value);
    delete this._children[position];
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

  public insert(word: Word): void {
    let pointer = this.root;

    Array.from(word).forEach((char) => {
      if (!pointer.hasChild(char)) {
        pointer.addChild(char);
      }

      pointer = pointer.getChild(char);
    });

    pointer.isEndOfWord = true;
  }

  public contains(word: Word): boolean {
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

  public deleteWord(word: Word, pointer = this.root) {
    const [char, restWord] = [word.substring(0, 1), word.substring(1)];
    const child = pointer.getChild(char);

    if (!restWord) child.isEndOfWord = false;
    else this.deleteWord(restWord, child);

    if (!child.hasChildren() && !child.isEndOfWord) {
      pointer.deleteChild(char);
    }
  }

  public autoComplete(search: Word): Word[] {
    const words: Word[] = [];
    const pointer = this.findLastNodeOf(search);

    this._autoComplete(search, pointer, words);

    return words;
  }

  public findLastNodeOf(value: Value): Node {
    let node = this.root;

    Array.from(value).forEach((char) => {
      node = node.getChild(char);
    });

    return node;
  }

  private _autoComplete(prefix: Word, pointer: Node, words: Word[]): void {
    if (pointer.isEndOfWord) words.push(prefix);
    pointer.children.forEach((child) => this._autoComplete(prefix + child.value, child, words));
  }

  public print(): void {}
}

const trie = new Trie();

trie.insert('cat');
trie.insert('canada');
trie.insert('car');
trie.insert('card');
trie.insert('careful');

// console.log(trie.contains('cat'));
// console.log(trie.contains('can'));

// console.log(trie.traversePreOrder());
// console.log(trie.traversePostOrder());

// trie.deleteWord('canada');

console.log(trie.autoComplete('ca'));
console.log(trie.autoComplete('car'));

// trie.print();

export {};
