class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Can't perform the dequeue operation";
    }
    return this.queue.shift();
  }
  isEmpty() {
    return this.size() === 0;
  }
  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }

    return this.queue[0];
  }
  size() {
    return this.queue.length;
  }

  printQueue() {
    return this.queue.toString();
  }
}

const queue = new Queue();

queue.enqueue(5);
queue.enqueue(15);
queue.enqueue(35);
console.log("queue", queue);
queue.dequeue();
console.log("dqueue", queue);
console.log("size", queue.size());
console.log("isEmpty", queue.isEmpty());
console.log("front", queue.front());
console.log("printQueue", queue.printQueue());
