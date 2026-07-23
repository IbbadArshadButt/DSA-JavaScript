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

    // Time Complexity: O(1)
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

    // Time Complexity: O(n)
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let prev = this.head;
            while(prev.next) {
                prev = prev.next;
            }
            prev.next = newNode;
        }
        this.size++;
    }

    insert(value, index) {
        if(index < 0 || index > this.size) {
            return;
        } else if(index === 0) {
            this.prepend(value);
        } else {
            const newNode = new Node(value);
            let prev = this.head;
            for(let i=0; i<index-1; i++) {
                prev = prev.next;
            }
            newNode.next = prev.next;
            prev.next = newNode;
            this.size++;
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty');
        } else {
            let current = this.head;
            let listvalues = '';
            while(current) {
                listvalues += current.value + ' ';
                current = current.next;
            }
            console.log(listvalues);
        }
    }
}

const list = new LinkedList();
console.log('List is empty:', list.isEmpty()); // true
console.log('List size:', list.getSize()); // 0

list.insert(10, 0);
list.print();
list.insert(20, 1);
list.print();
list.insert(30, 2);
list.print();

console.log(list.getSize()); // 3