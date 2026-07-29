class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let hash = 0;
        for( let i=0; i<key.length; i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key, value) {
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        return this.table[index];
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display() {
        for(let i=0; i<this.table.length; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}


const table = new HashTable(20);

table.set("name","Ibad");
table.set("age",22);
table.display();

console.log(table.get("name"));

table.remove("name");
table.display();