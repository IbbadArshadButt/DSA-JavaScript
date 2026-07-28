class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
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
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if(this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    removeFromFront() {
        this.head = this.head.next;
        this.size--;
    }

    removeFromEnd() {
        if(this.size === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
        this.size--;
    }

    printForward() {
        if(this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let curr = this.head;
            let listValues = '';
            for(let i=0; i<this.size; i++) {
                listValues+= curr.value + ' ';
                curr = curr.next;
            }
            console.log(listValues);
        }

    }

    printReverse() {
        if(this.isEmpty()) {
            console.log('List is Empty');
        } else {
            let curr = this.tail;
            let listValues = '';
            for(let i=this.size; i>0; i--) {
                listValues+= curr.value + ' ';
                curr = curr.prev;
            }
            console.log(listValues);
        }

}
}

const list = new DoublyLinkedList();
console.log('List is empty:', list.isEmpty()); // true
console.log('List size:', list.getSize()); // 0

list.append(10);
list.append(20);
list.append(30);
list.prepend(40);

list.printForward();
list.printReverse();

list.removeFromFront();
list.printForward();
list.removeFromEnd();

list.printForward();
