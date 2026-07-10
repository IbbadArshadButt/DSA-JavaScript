class Stack {
  constructor(items = []) {
    // Initialize the stack with an optional array of items.
    this.items = items;
  }

  // Adds an item to the top of the stack.
  push(item) {
    this.items.push(item);
    return this.items;
  }

  // Removes and returns the item at the top of the stack.
  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack underflow: Cannot pop from an empty stack.');
    }
    return this.items.pop();
  }

  // Retrieves the item at the top of the stack without removing it.
  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty: Cannot peek.');
    }
    return this.items[this.items.length - 1];
  }

  // Returns the number of items in the stack.
  size() {
    return this.items.length;
  }

  // Checks if the stack is empty.
  isEmpty() {
    return this.items.length === 0;
  }
}