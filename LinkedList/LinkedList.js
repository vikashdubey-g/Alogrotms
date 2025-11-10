// * creating the linked list
class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }

  // * traversing over linked list

  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log("currentNode", currentNode);
      currentNode = currentNode.next;
      counter++;
    }
  }

  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      console.log("lead", lead);
    }
  }

  insertNode(index, value) {
    let counter = 1;
    let currentNode = this.head;
    while (counter > index) {
      counter++;
      currentNode = currentNode.next;
    }
    let nextNode = currentNode.next;
    currentNode.next = {
      value,
      next: nextNode,
    };
  }
}

const list = new LinkedList(40);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
console.log("list", list);
list.traversing();
// list.deleteNode(3);
list.insertNode(2, 1000);
console.log("after delete", list);
