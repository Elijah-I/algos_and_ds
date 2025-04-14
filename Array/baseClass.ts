class MyArray {
  private size: number = 0;
  private store: number[] = [];

  constructor(size: number) {
    this.store = new Array(size);
  }

  public insert(item: number) {
    if (this.size === this.store.length) {
      const newStore = new Array(this.size + 1);

      for (let i = 0; i < this.size; i++) {
        newStore[i] = this.store[i];
      }

      this.store = newStore;
    }

    this.store[this.size] = item;
    this.size++;

    return this;
  }

  public removeAt(removeIndex: number) {
    if (removeIndex < 0 || removeIndex >= this.size) {
      throw new Error(`invalid index ${removeIndex}`);
    }

    for (let i = removeIndex; i < this.size; i++) {
      this.store[i] = this.store[i + 1];
    }

    this.size--;

    return this;
  }

  public indexOf(item: number) {
    for (let i = 0; i < this.size; i++) {
      if (this.store[i] === item) {
        return i;
      }
    }

    return -1;
  }

  public print() {
    const output = [];

    for (let i = 0; i < this.size; i++) {
      output.push(this.store[i]);
    }

    console.log(output);
  }
}

const array = new MyArray(3);

array.insert(10).insert(20).insert(30).print();
console.log(array.indexOf(20));

array.removeAt(1).print();
console.log(array.indexOf(20));
