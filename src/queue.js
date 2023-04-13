const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    return this.head;
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  dequeue() {
    // throw new NotImplementedError('Not implemented');
    if (!this.head) return undefined;
    const removedNode = this.head;
    this.head = this.head.next;
    removedNode.next = null;
    this.size--;
    if (this.size === 0) this.tail = null;
    return removedNode.value;
  }
}

module.exports = {
  Queue,
};
