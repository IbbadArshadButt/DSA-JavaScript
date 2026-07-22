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

list.append(10);
list.append(20);
list.append(30);
list.print(); // 10 20 30