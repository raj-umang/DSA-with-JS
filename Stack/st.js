class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  // Peek - Element present at the top of the stack
  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }

  contains(element) {
    return this.stack.includes(element);
  }

  reverse() {
    this.stack.reverse();
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

let myStack = new Stack();
console.log(myStack.push(7));
console.log(myStack.printStack());
myStack.push(7);
myStack.push(9);
myStack.push(12);
myStack.push(56);
myStack.pop();
console.log(myStack.printStack());

console.log(myStack.peek());
console.log(myStack.size());
console.log(myStack.contains(12));
console.log(myStack.contains(56));
myStack.reverse();
console.log(myStack.printStack());
