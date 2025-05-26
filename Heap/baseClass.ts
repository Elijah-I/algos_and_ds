class Heap {
  private heap: number[] = [];
  private size: number = 0;

  private getLeftChildIndex(index: number) {
    return index * 2 + 1;
  }

  private getRightChildIndex(index: number) {
    return index * 2 + 2;
  }

  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private getLeftChild(index: number) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  private getRightChild(index: number) {
    return this.heap[this.getRightChildIndex(index)];
  }

  private getParent(index: number) {
    return this.heap[this.getParentIndex(index)];
  }

  private swap(indexFrom: number, indexTo: number) {
    [this.heap[indexFrom], this.heap[indexTo]] = [this.heap[indexTo], this.heap[indexFrom]];
  }

  private bubbleUp(index: number, value: number) {
    let currentIndex = index;

    while (currentIndex > 0 && this.getParent(currentIndex) < value) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(index);
    }
  }

  private getMaxChildIndex(index: number) {
    if (!this.getLeftChildIndex(index)) {
      return index;
    }

    if (!this.getRightChildIndex(index)) {
      return this.getLeftChildIndex(index);
    }

    if (this.getLeftChild(index) > this.getRightChild(index)) {
      return this.getLeftChildIndex(index);
    }

    return this.getRightChildIndex(index);
  }

  private isValidParent(index: number, value: number) {
    if (!this.getLeftChild(index)) {
      return true;
    }

    if (!this.getRightChild) {
      return this.getLeftChild(index) <= value;
    }

    return this.getLeftChild(index) <= value && this.getRightChild(index) <= value;
  }

  private bubbleDown(index: number, value: number) {
    let currentIndex = index;

    while (currentIndex <= this.size && !this.isValidParent(currentIndex, value)) {
      const indexTo = this.getMaxChildIndex(currentIndex);

      this.swap(currentIndex, indexTo);
      currentIndex = indexTo;
    }
  }

  public insert(value: number) {
    this.heap[this.size] = value;
    this.bubbleUp(this.size, value);

    this.size++;
  }

  public remove() {
    this.size--;

    this.heap[0] = this.heap[this.size];
    this.bubbleDown(0, this.heap[0]);
  }

  public print() {
    console.log(this.heap.slice(0, this.size));
  }
}

const heap = new Heap();

heap.insert(10);
heap.insert(5);
heap.insert(17);
heap.insert(4);
heap.insert(22);

heap.print();

heap.remove();

heap.print();
