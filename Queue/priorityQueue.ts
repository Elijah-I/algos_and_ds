/**
 * Название: Priority Queue Implementation
 * Условие: Реализовать очередь с приоритетом, где элементы вставляются в порядке возрастания значения,
 *         так чтобы самая маленькая (наименее приоритетная) оставалась первой.
 * Пример:
 *   Ввод: insert(4), insert(1), insert(5), insert(7), insert(2)
 *   Вывод после print(): [1, 2, 4, 5, 7]
 */

class priorityQueue {
  private size: number = 0;
  private queue: number[] = [];

  insert(item: number) {
    for (let i = this.size; i >= 0; i--) {
      if (this.queue[i - 1] > item) {
        this.queue[i] = this.queue[i - 1];
      } else {
        this.queue[i] = item;
        break;
      }
    }

    this.size++;
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new priorityQueue();

queue.insert(4);
queue.insert(1);
queue.insert(5);
queue.insert(7);
queue.insert(2);
queue.print();
