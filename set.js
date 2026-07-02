const set = new Set([1, 2, 3, 4, 5])
set.add(6)
set.delete(3)
console.log(set.has(3))
console.log(set.size)

set.clear()

for (const item of set) {
    console.log(item)
}