class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }   

    getSize() {
        return this.size;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
}

const list = new LinkedList();
console.log('List is empty:', list.isEmpty()); // true
console.log('List size:', list.getSize()); // 0