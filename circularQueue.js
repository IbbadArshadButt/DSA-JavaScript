class circularQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.front = -1;
        this.rear = -1;
    }

    isFull() {
        return this.currentLength === this.capacity;
    }

    isEmpty() {
        return this.currentLength === 0;
    }

    enqueue(element) {
        if (!this.isFull()) {
            this.rear = this.items[this.rear + 1] % this.capacity;
            this.items[this.rear] = element;
            this.currentLength += 1;
            if (this.front === -1) {
                this.front = this.rear;
            }
}
}

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1;
        if (this.isEmpty()) {
            this.front = -1;
            this.rear = -1;
        }
        return item;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front];
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return;
        }
        let i;
        let result = "";
        for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
            result += this.items[i] + " ";
        }
        result += this.items[i];
        console.log(result);
    }
}

const queue = new circularQueue();
console.log(queue.isEmpty()); // true

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue.isFull()); // true
queue.print(); // 1 2 3 4 5

console.log(queue.dequeue());
console.log(queue.peek());
queue.print(); // 2 3 4 5
queue.enqueue(6);
queue.print(); // 2 3 4 5 6