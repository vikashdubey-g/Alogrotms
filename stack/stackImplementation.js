class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack.pop();
  }
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty.";
    }
    return this.stack[this.size() - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.stack.length;
  }
  printStack() {
    return this.stack.toString();
  }
}

const stack = new Stack();
stack.push(10);
stack.push(40);
stack.push(65);
stack.push(43);

// console.log("stack", stack.peek());
// console.log("pop", stack.pop());
// console.log("isEmpty", stack.isEmpty());
// console.log("size", stack.size());
// console.log("pop", stack.pop());
// console.log("pop", stack.pop());
// console.log("pop", stack.pop());
// console.log("stack", stack.peek());
// console.log("isEmpty", stack.isEmpty());
console.log("printStack", stack.printStack());
