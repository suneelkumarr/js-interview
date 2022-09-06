## Implementing a linked list using JavaScript

The linked list that you’re going to implement in this tutorial will have the ability to insert and remove nodes both from the head and the tail pointer.

It will also store the current `length` of the linked list so that you can easily check the size of the list like an array.

To implement a linked list using JavaScript, you can follow these 5 easy steps:

* Create a function for creating a new Node object
* Create the `LinkedList` class with the proper constructor
* Create the `insert()` and `print()` methods
* Create the `remove()` method to remove nodes
* Create the methods to remove and insert from the head

Alright, let’s start with the first step and create a function for creating a new node object.

## Creating the list node with a function

A linked list node can be implemented in JavaScript by using a function that returns an object as follows:

```js
function createNode(value) {
  return {
    value: value,
    next: null,
  };
}
```

Now each time you need to create a node object, you just call the `createNode()` function above and pass the desired `value` as its argument:

```js
let newNode = createNode("Hello");

console.log(newNode);
// { value: 'Hello', next: null }
```

You can also implement the node as a JavaScript class as follows:

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let newNode = new Node("World");
console.log(newNode);
// Node { value: 'World', next: null }
```

But I personally prefer to use a function over a class, so I’ll use the function implementation for the rest of this tutorial. You are free to use class if you want to though.

## Writing the LinkedList class

Next, let’s start writing the `LinkedList` class implementation with the following constructor:

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

A new instance of the `LinkedList` object will have the `head` and `tail` pointers refer to the `null` value, while the `length` property will start at `0`.

<iframe frameborder="0" src="https://0a4f244d03f2d35951b451f4f412ebb3.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" id="google_ads_iframe_/1254144,22284635885/sebhastian_com-large-mobile-banner-2_0" title="3rd party ad content" name="" scrolling="no" marginwidth="0" marginheight="0" width="336" height="280" data-is-safeframe="true" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" role="region" aria-label="Advertisement" tabindex="0" data-google-container-id="9" data-load-complete="true"></iframe>

These values will be updated as you insert and remove nodes from the instance.

## Creating the insert() and print() methods

With the `LinkedList` class ready, let’s add a method to insert a new node into the class.

First, create an `insert()` method that accepts a single parameter:

* The `value` of the new node

The syntax of the function is as shown below:

```js
insert(value) {}
```

First, you need to increment the `length` property by one. Then, you need to create a new node that will be inserted into the list.

```js
insert(value) {
  this.length++;
  let newNode = createNode(value); // or use new Node(value);
}
```

After that, check on the value of the `tail` property. If the value is not `null`, then you need to do the following:

* Point the `tail.next` property to the `newNode` object
* Point the `tail` property to the `newNode` object
* Return the `newNode` object to the caller

When the value of `tail` is `null`, it means that the linked list is still empty, so you need to assign the `newNode` object to the `head` and `tail` pointers.

The full code for the `insert()` method is as follows:

<iframe id="google_ads_iframe_/1254144,22284635885/sebhastian_com-leader-2_0" name="google_ads_iframe_/1254144,22284635885/sebhastian_com-leader-2_0" title="3rd party ad content" width="1" height="1" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" role="region" aria-label="Advertisement" tabindex="0" data-load-complete="true" data-google-container-id="a"></iframe>

```js
insert(value) {
  this.length++;
  let newNode = createNode(value);

  if (this.tail) {
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  this.head = this.tail = newNode;
  return newNode;
}
```

Now that you can insert new values into the class instance, let’s add a `print()` method to see what’s inside the instance.

To print the linked list, you need to create a loop using a `while` statement from the `head` node.

If the `current` node is not `null`, then print the `value` property and assign the `current.next` property to `current`:

```js
print() {
  let current = this.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}
```

Now you can try inserting and printing your linked list:

```js
const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(true);
linkedList.insert(20);
linkedList.print(); // 7 true 20
```

You have both the `insert()` and `print()` methods work. Great job!

## Removing nodes from the linked list

Now it’s time to add the `remove()` method to the `LinkedList` class.

First, the `remove()` methods needs to check if the `tail` pointer is not `null`.

When the `tail` pointer is `null`, you can simply return undefined to the methods caller:

```js
remove() {
  if (this.tail) {
    // code omitted ...
  }
  return undefined;
}
```

When the `tail` pointer refers to a valid node, then it’s time to execute the code that will remove the node.

The steps to remove the last node is as follows:

* Decrement the `length` property
* Search for the node that has the `next` property points to the `tail` node
* Set the `tail` to point to the previous node
* Set the `tail.next` value to `null`

Here’s the complete code for the `remove()` methods:

```js
remove() {
  if (this.tail) {
    this.length--;

    const tailNode = this.tail;

    // search for the node before tail
    let currentNode = this.head;

    // The while loop stops when the node next to tail node is found
    while (currentNode.next != tailNode) {
      currentNode = currentNode.next;
    }


    const beforeTail = currentNode;
    this.tail = beforeTail;
    this.tail.next = null;

    return tailNode;
  }
  return undefined;
}
```

Now you should be able to remove nodes from a linked list object.

You can stop for a break here, and let’s learn how to insert and remove nodes from the `head` next when you’re ready.

## Creating methodss to insert and remove from the head

To make your linked list implementation more sophisticated, you can add methodss that will insert and remove nodes from the head instead of the tail.

Let’s write a new methods named `insertHead()` to insert a new node from the head.

The `insertHead()` methods works just like the `insert()` methods, but instead of changing the `tail` and `tail.next` pointer, you change the `newNode.next` property to point to the current `this.head` node and point `this.head` to the `newNode`

The code will be as follows:

```js
insertHead(value) {
  this.length++;
  let newNode = createNode(value);

  if (this.head) {
    newNode.next = this.head;
    this.head = newNode;
    return newNode;
  }

  this.head = this.tail = newNode;
  return newNode;
}
```

Next, you need to create the `removeHead()` methods that removes a node from the `head` pointer.

To remove a node from the head, you just need to point `this.head` pointer to the `head.next` node:

```js
removeHead() {
  if (this.head) {
    this.length--;
    const removedNode = this.head;
    this.head = this.head.next;
    return removedNode;
  }
  return undefined;
}
```

And with that, you can remove nodes from the head index. Nice work!

## Bonus: Add methods to insert and remove a node at a specific index

While there’s nothing wrong with the linked list implementation we’ve created so far, you can still extend the functionalities of your linked list implementation by adding two more methods.

These methods are called `insertIndex()` and `removeIndex()` methods, and they allow you to insert and remove a node at a specific index inside your linked list data structure.

Let’s start with the `insertIndex()` function. This method needs to have two parameters:

* The `value` parameter for the new node’s value
* The `index` parameter for the index where the node will be inserted

Write the method syntax as follows:

```js
insertIndex(value, index) {}
```

First, you need to make sure that the value of the `index` parameter is smaller than the `length` value of the linked list.

This is required because the method won’t be able to work properly when the value of `index` is equal to or higher than the `length`.

You need to throw an error and stop the method execution inside the `if` block as shown below:

```js
if (index >= this.length) {
  throw new Error("Insert index out of bounds");
}
```

If you need to learn more about JavaScript `throw` statement, then you can check out another tutorial I’ve written here:

[JavaScript throw statement guide](https://sebhastian.com/javascript-throw/)

Next, if the `index` value is actually zero, then you can call the `insertHead()` method instead:

```js
if (index === 0) {
  return this.insertHead(value);
}
```

Finally, when the `index` is not `0`, it’s time to start writing the actual code to change your linked list instance.

To insert a new node at a specific index, JavaScript needs to scan the list from the first index and find two nodes:

* The current node at the specified index
* The node located the previous index

The code to find the `currentNode` and the `previousNode` looks as follows:

```js
let previousNode = null;
let currentNode = this.head;
for (let i = 0; i < index; i++) {
  previousNode = currentNode;
  currentNode = currentNode.next;
}
```

A `for` statement is used in the code above to quickly traverse the list and grab the desired nodes. This is made possible because we have checked the `index` value at the beginning of the method.

Without checking if the `index` value is smaller than the `length` value, the `for` loop will cause both `previousNode` and `currentNode` value to be `null` and you won’t be able to add the new node in the right place.

Next, you need to call the `createNode()` method to create a `newNode` out of the `value` argument passed into the method.

```js
const newNode = createNode(value);
```

Point the `newNode.next` property to the `currentNode` and `previousNode.next` to the `newNode`:

```js
newNode.next = currentNode;
previousNode.next = newNode;
```

Finally, increment the `length` property and return the `newNode` to the method caller as follows:

```js
this.length++;
return newNode;
```

Now your `insertIndex()` method is finished. Try add a new node on a specific index and print the list. You’ll see the new node added to the right index:

```js
const linkedList = new LinkedList();

linkedList.insert(6);
linkedList.insert(7);
linkedList.insert(8);
linkedList.insertIndex(20, 1);

console.log(linkedList.length); // 4
linkedList.print(); // 6 20 7 8
```

From the output above, you can see that the node with value `20` is added right at index `1`. Great!

## Remove a node at a specific index

Now that you’ve learned how to add a new node at a specific index, removing a node at a specific index will be easy.

First, you need to write the `removeIndex()` method that accepts one parameter:

* The `index` value to remove the node

The method syntax will be like this:

```js
removeIndex(index) {}
```

Just like with `insertIndex()`, you need to start with making sure the value of the `index` parameter is smaller than the `length` value:

```js
if (index >= this.length) {
  throw new Error("Remove index out of bounds");
}
```

Next, check if the `index` is equal to zero, and call the `removeHead()` method if it is:

```js
if (index === 0) {
  return this.removeHead();
}
```

Then, find the `previousNode` and the `currentNode` values using a `for` statement as follows:

```js
let previousNode = null;
let currentNode = this.head;
for (let i = 0; i < index; i++) {
  previousNode = currentNode;
  currentNode = currentNode.next;
}
```

Once you find the values, assign the `currentNode.next` property as the value of the `previousNode.next` property, decrement the `length` value, and return the removed node to the method caller:

```js
previousNode.next = currentNode.next;
this.length--;
return currentNode;
```

And now the `removeIndex()` method is finished. You can test the method using the following snippets:

```js
const linkedList = new LinkedList();

linkedList.insert(7);
linkedList.insert(8);
linkedList.insert(9);
linkedList.insert(10);
linkedList.removeIndex(2); // remove 9
console.log(linkedList.length); // 3
linkedList.print(); // 7 8 10
```

The node at index `2` above is removed, reducing the length and re-arranging the stored data.

You have just added two advanced methods to your linked list implementation. Well done! 👍

Here’s the [GitHub Gist link](https://gist.github.com/nsebhastian/add27ebf952516e266584390509a6cf7) again in case you need to compare it with your code.

## Conclusion

 **With this tutorial** , you’ve learned how the linked list data structure works and how to implement one using JavaScript.

You’ve also learned how to create a node object using both JavaScript `class` and `function` keywords.

**The traditional way to** create a node is by creating a new instance of the `Node` class, but I’d recommend you use the `createNode()` methods instead because methods are cleaner and simpler.

Next, you can learn about doubly linked list her
