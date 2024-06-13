class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

let myQueue = new Queue();

myQueue.enqueue(5);
myQueue.enqueue(7);
myQueue.enqueue(21);
console.log(myQueue.printQueue());
console.log(myQueue.isEmpty());
console.log(myQueue.peek());
console.log(myQueue.size())
