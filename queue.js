class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error('Queue underflow: Cannot dequeue from an empty queue.');
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Queue is empty: Cannot peek.');
        }
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek());
queue.print();
queue.dequeue();
console.log(queue.peek());
queue.print();