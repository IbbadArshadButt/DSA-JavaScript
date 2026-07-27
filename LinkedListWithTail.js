class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListWithTail {
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
        newNode.next = head;
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
        this.tail = newNode;
       } 
       this.size++;
    }

    removeFromFront(index) {
    }

    removeFromEnd(index) {
      
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

const list = new LinkedListWithTail();
console.log('List is empty:', list.isEmpty()); // true
console.log('List size:', list.getSize()); // 0

list.prepend(10);
list.append(20);
list.append(30);
list.append(40);

list.print(); // 40 30 20 10
list.getSize();
