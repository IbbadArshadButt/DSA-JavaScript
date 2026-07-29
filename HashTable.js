class HashTable {
    constructor(size) {
        this.table = new HashTable(size);
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
}


const table = new Hashtable(20);