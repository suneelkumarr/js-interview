## Introduction to the Queue data structure

A queue is an ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue.

A queue works based on the first-in, first-out (FIFO) principle, which is different from a [stack](https://www.javascripttutorial.net/javascript-stack/), which works based on the last-in, first-out (LIFO) principle.

A queue has two main operations:

* Insert a new element at the end of the queue, which is called enqueue.
* Remove an element from the front of the queue, which is called dequeue.

The following picture illustrates a queue:

![JavaScript Queue Illustration](https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Queue-Illustration.png)

Another important operation of a queue is getting the element at the front called  *peek* . Different from the *dequeue* operation, the *peek* operation returns the element at the front without modifying the queue.

The name *queue* comes from the analogy to a queue of customers at a bank. The customer who comes first will be served first, and the one who comes later is queued at the end of the queue and will be served later.

![queue at a bank](https://www.javascripttutorial.net/wp-content/uploads/2019/12/queue-at-a-bank.png)

## Implementing a JavaScript queue using an object

The following shows how to implement the queue data structure using an object:

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

How it works.

First, initialize the object that stores the elements of the queue (`elements`) and two variables for tracking the head and tail in the constructor:

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  //...
}

Second, enqueue an element by adding it to the elements object to the end of the queue:

class Queue {
  //...
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }

  //...
}

Third, remove an element from the front of the queue:

class Queue {

  // ...
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }

  //...
}

Fourth, define the peek() method that accesses the element at the front of the queue:

class Queue {
  //...
  peek() {
    return this.elements[this.head];
  }
  //...
}

Fifth, get the length of the queue:

class Queue {
  //...
  get length() {
    return this.tail - this.head;
  }
  //...
}

The queue is empty when the length is zero.

Finally, define the isEmpty() method that returns true if the queue is empty:

class Queue {
  // ...
  get isEmpty() {
    return this.tail - this.head;
  }
  // ...
}

To create a new queue from the `Queue()` constructor function, you use the new keyword as follows:

let q = new Queue();

To enqueue numbers from 1 to 7, you use the following code.

for (let i = 1; i <= 7; i++) {
    q.enqueue(i);
}

To get the number at the front of the queue, you use the `peek()` method.

console.log(q.peek());

To get the current length of the queue, you use the `length()` method as in the following example.

console.log(q.length); // 7

To remove the element at the front of the queue, you use the `dequeue()` method as follows:

/ dequeue all elements
while (!q.isEmpty()) {
    console.log(q.dequeue());
}

Put it all together:

class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tail = 0;
  }
  enqueue(element) {
    this.elements[this.tail] = element;
    this.tail++;
  }
  dequeue() {
    const item = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return item;
  }
  peek() {
    return this.elements[this.head];
  }
  get length() {
    return this.tail - this.head;
  }
  get isEmpty() {
    return this.length === 0;
  }
}

let q = new Queue();
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}
// get the current item at the front of the queue
console.log(q.peek()); // 1

// get the current length of queue
console.log(q.length); // 7

// dequeue all elements
while (!q.isEmpty) {
  console.log(q.dequeue());
}

## Summary

* A queue is a data structure that works based on the FIFO principle.
