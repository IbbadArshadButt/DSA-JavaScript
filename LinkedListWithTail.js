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

    // Time Complexity: O(1)
    prepend(value) {
       
    }

    // Time Complexity: O(n)
    append(value) {
      
    }

    insert(value, index) {
       
    }

    removeFrom(index) {
    }

    removeValue(value) {
      
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
list.insert(20, 1);
list.insert(30, 2);
list.insert(40, 3);
list.print();

list.reverse();
list.print(); // 40 30 20 10