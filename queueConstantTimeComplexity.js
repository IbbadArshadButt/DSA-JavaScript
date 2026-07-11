// This is the implementation of a Queue data structure with Constant time-complexity for enqueue and dequeue operations.

class queueConstantTimeComplexity {
  constructor() {
    this.items = {};
    this.rear = 0; // Points to the next position to enqueue
    this.front = 0; // Points to the current position to dequeue
  }

    enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
    }

    dequeue() {
      if (this.isEmpty()) {
        throw new Error('Queue underflow: Cannot dequeue from an empty queue.');
      }
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
    }

    isEmpty() {
      return this.rear - this.front === 0;
    }

    peek() {
      if (this.isEmpty()) {
        throw new Error('Queue is empty: Cannot peek.');
      }
      return this.items[this.front];
    }

    size() {
      return this.rear - this.front;
    }

    print() {
      console.log(this.items);
    }
}