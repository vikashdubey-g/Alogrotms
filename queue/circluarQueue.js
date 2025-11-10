var MyCircularQueue = function (k) {
  this.queue = [];
  this.size = k;
};

MyCircularQueue.prototype.enQueue = function (value) {
  if (this.size === this.queue.length) return false;
  this.queue.push(value);
  return true;
};

MyCircularQueue.prototype.deQueue = function () {
  if (this.queue.length === 0) return false;
  this.queue.shift();
  return true;
};

MyCircularQueue.prototype.Front = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[0];
};

MyCircularQueue.prototype.Rear = function () {
  if (this.queue.length === 0) return -1;
  return this.queue[this.queue.length - 1];
};

MyCircularQueue.prototype.isEmpty = function () {
  return this.queue.length === 0;
};

MyCircularQueue.prototype.Full = function () {
  return this.queue.length === this.size;
};

const myqueue = new MyCircularQueue(2);
myqueue.enQueue(3);
console.log("myqueue", myqueue);
console.log("Front", myqueue.Front());
console.log("Rear", myqueue.Rear());
