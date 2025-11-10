var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

MyStack.prototype.push = function (x) {
  // while (this.q1.length !== 0) {
  //   this.q2.push(this.q1.shift());
  // }
  //  this.q1.push(x);
  //  while (this.q2.length !== 0) {
  //   this.q1.push(this.q2.shift());
  // }
  this.q1.unshift(x)
};

MyStack.prototype.pop = function (x) {
  return this.q1.shift();
};

MyStack.prototype.top = function (x) {
  return this.q1[0];
};

MyStack.prototype.empty = function (x) {
  return this.q1.length === 0;
};

const stack = new MyStack();
stack.push(3);
stack.push(40);
stack.push(78);
stack.push(69);
stack.pop();
console.log('stack', stack)
console.log("top", stack.top());
