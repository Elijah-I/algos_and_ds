class stackQueue {
  baseStack: number[] = [];
  reverseStack: number[] = [];

  enqueue(item: number) {
    this.baseStack.push(item);
  }

  dequeue() {
    while (this.baseStack.length) {
      this.reverseStack.push(this.baseStack.shift());
    }

    const nextItem = this.reverseStack.shift();
    while (this.reverseStack.length) {
      this.baseStack.push(this.reverseStack.shift());
    }

    return nextItem;
  }

  print() {
    console.log(this.baseStack);
  }
}

const queue = new stackQueue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

const firstItem = queue.dequeue();
console.log('firstItem', firstItem);
queue.print();

const secondItem = queue.dequeue();
console.log('secondItem', secondItem);
queue.print();
