class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(front = null) {
    this.front = front;
    this.rear = front;
  }

  // ADD NODE TO BACK OF QUEUE
  // USE DATA TO CREATE A NEW NODE AND ADD IT TO THE QUEUE
  enqueue(data) {
    const node = new Node(data);
    if (this.isEmpty()) {
      this.front = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
  }

  // REMOVE NODE FROM FRONT OF QUEUE AND RETURN IT
  dequeue() {
    const frontNode = this.front;
    if (this.isEmpty()) return null;

    this.front = frontNode.next;
    if (this.isEmpty()) {
      this.rear = null;
    }

    return frontNode;
  }

  // RETURN NODE AT FRONT WITHOUT REMOVING IT
  peek() {
    return this.front;
  }

  // RETURN TRUE IF QUEUE IS EMPTY, OTHERWISE FALSE
  isEmpty() {
    return !this.front;
  }

  // RETURN NUMBER OF NODES IN QUEUE, E.G. 10
  size() {
    let count = 0;
    let node = this.front;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // RETURN INTEGER REPRESENTING HOW FAR TARGET IS FROM FRONT OF QUEUE
  // IF TARGET ISN'T IN QUEUE, RETURN -1
  search(target) {
    let count = 0;
    let node = this.front;
    while (node) {
      if (node.data === target) return count;
      node = node.next;
      count++;
    }
    return -1;
  }
}

if (require.main === module) {
  // add your own tests in here
}

module.exports = {
  Node,
  Queue,
};

// Write your Big O findings here
// enqueue: O(1)
// dequeue: O(1)
// peek: O(1)
// search: O(n)

// Optional: Please add your pseudocode to this file
// Optional: And a written explanation of your solution
