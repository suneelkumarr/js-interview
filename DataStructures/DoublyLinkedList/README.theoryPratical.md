## Creating the doubly linked list class

The doubly linked list is very similar to the singly linked list. The only difference between the two is that a doubly linked list has the `previous` pointer in each node.

First, you need to update the function that creates the node as shown below:

```js
function createNode(value) {
  return {
    value: value,
    next: null,
    previous: null,
  };
}
```

Next, create the `DoublyLinkedList` class as follows:

```js
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

With that, you can start writing code that will insert and print the `DoublyLinkedList` instance content.

## Adding insert method to the doubly linked list

The code for the `insert()` method is as follows:

```js
insert(value) {
  this.length++;
  let newNode = createNode(value);

  if (this.tail) {
    // list is not empty
    this.tail.next = newNode;
    newNode.previous = this.tail;
    this.tail = newNode;
    return newNode;
  }

  this.head = this.tail = newNode;
  return newNode;
}
```

The `insert()` method of the list will accept one parameter: the `value` that will be stored in the node.

Each time a new node is inserted into the list, the `length` property of the list will go up by one and a new node is created using the `createNode()` function.

If the list is not empty, then the list needs to be adjusted with the following steps:

* The current tail `next` reference points to the `newNode`
* The `newNode.previous` refers to the current `this.tail`
* Then `this.tail` will point to the `newNode`

When the list is empty, then the `head` and `tail` reference points to the `newNode`

Next, let’s create a `print()` method to print each node value.

## Doubly linked list print method

The code for the `print()` method is as follows:

```js
print() {
  let current = this.head;
  while (current) {
    console.log(
      `${current.previous?.value}${current.value}${current.next?.value}`
    );
    current = current.next;
  }
}
```

The method above will print the `current` node’s value, along with the value of the `previous` and `next` pointer when they are available.

You can test the list implementation with the following code:

```js
const dLinkedList = new DoublyLinkedList();

dLinkedList.insert(7);
dLinkedList.insert(8);
dLinkedList.insert(9);
dLinkedList.print(); 
```

The console output should be like this:

```sh
undefined 7 8
7 8 9
8 9 undefined
```

It means, the `insert()` and `print()` methods are working correctly. Nice job!

## Doubly linked list remove method

The code for the `remove()` method of the list is as follows:

```js
remove() {
  if (this.tail) {
    this.length--;

    const removedTail = this.tail;

    this.tail = this.tail.previous;
    if(this.tail){
      this.tail.next = null;
    } else {
      this.head = null;
    }

    return removedTail;
  }
  return undefined;
}
```

First, you need to check that the `tail` reference is not `null`. After that, you can start by decrementing the `length` property by one.

Next, keep a reference to the current tail so you can return it later. Then adjust the `this.tail` reference to point to the `previous` node.

Finally, check if the new tail is `null` or not. If the new tail is not `null`, cut off the previous tail by setting the `this.tail.next` property to null.

If the new tail is `null`, then adjust the `this.head` property to refer to `null` as well.

Return the `removedTail` once the execution is completed.

Now you have the `insert()` and `remove()` methods working, you can test to remove a node from the list instance.

## Insert and remove a node from the head

The `insertHead()` method is a method that allows you to insert a node from the head.

The code for the method is as shown below:

```js
insertHead(value) {
  this.length++;
  let newNode = createNode(value);

  if (this.head) {
    this.head.previous = newNode;
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }

  this.head = this.tail = newNode;
  return newNode;
}
```

It’s very similar to the `insert()` method, but instead of adjusting the `tail` reference, you adjust the `head` reference of the list.

The same goes for the `removeHead()` method:

```js
removeHead() {
  if (this.head) {
    this.length--;
    const removedHead = this.head;
    this.head = this.head.next;

    if(this.head){
      this.head.previous = null;
    } else {
      this.tail = null;
    }

    return removedHead;
  }
  return undefined;
}
```

Now your doubly linked list implementation should be able to insert and remove a node from the head.

## Bonus: insert and remove at specific index

One difference between a linked list and an array is that a linked list doesn’t store the index of the nodes.

To insert and remove a node at a specific index, you need to traverse the node until you reach the node at that index.

Here’s the code for inserting and removing a node at a specific index:

```js
insertIndex(value, index) {
  if (index >= this.length) {
    throw new Error("Insert index out of bounds");
  }

  if (index === 0) {
    return this.insertHead(value);
  }

  this.length++;
  let currentNode = this.head;
  for (let i = 0; i < index; i++) {
    currentNode = currentNode.next;
  }
  const previousNode = currentNode.previous;
  const newNode = createNode(value);
  newNode.next = currentNode;
  newNode.previous = previousNode;
  previousNode.next = newNode;
  currentNode.previous = newNode;
  return newNode;
}

// remove at specific index

removeIndex(index) {
  if (index >= this.length) {
    throw new Error("Remove index out of bounds");
  }

  if (index === 0) {
    return this.removeHead();
  }

  this.length--;
  let currentNode = this.head;
  for (let i = 0; i < index; i++) {
    currentNode = currentNode.next;
  }
  const previousNode = currentNode.previous;
  const nextNode = currentNode.next;
  previousNode.next = nextNode;
  nextNode.previous = previousNode;
  return currentNode;
}
```

Here’s the complete code for [the `DoublyLinkedList` class](https://gist.github.com/nsebhastian/60bad5924dbd7cd192952fce8187ddc1) again in case you need it.

## Conclusion

You have just completed a doubly linked list implementation using JavaScript. Nicely done!

A doubly linked list is just a linked list with an extra reference in each node that points to the previous value.

Because each node knows about the previous node, you can remove nodes from the list more efficiently than a singly linked list.
