const obj = {
    name : 'ibad',
    age : 25,
    'key-three' : true,
    sayMyName : function() {
        console.log(this.name)
    }
}

obj.hobby = 'book-reading'

console.log(obj)
console.log(obj.name)
console.log(obj['key-three'])
obj.sayMyName()