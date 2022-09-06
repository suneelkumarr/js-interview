# Implementing Javascript Stack Using an Array

 **Summary** : this tutorial introduces you to the JavaScript stack data structure and shows you how to use an array as a stack.

## Introduction to the stack data structure

A stack is a data structure that holds a list of elements. A stack works based on the LIFO principle i.e., Last In, First out, meaning that the most recently added element is the first one to remove.

A stack has two main operations that occur only at the top of the stack: push and pop. The push operation places an element at the top of stack whereas the pop operation removes an element from the top of the stack.

The name *stack* comes from the analogy to a set of physical items e.g., DVD disc, books, stacked on top each other.![JavaScript Stack: A Stack of books analogy](https://www.javascripttutorial.net/wp-content/uploads/2016/08/stack-of-books.jpg "JavaScript Stack: A Stack of books analogy")

A stack has many applications. For example, the simplest one is to reverse a word. To do it, you push a word into the stack, letter by letter, and pop the letters from the stack.

The other applications of the stack are “undo” mechanism in text editors, syntax parsing, [function](https://www.javascripttutorial.net/javascript-function/) call, and expression conversion (infix to postfix, infix to prefix, postfix to infix, and prefix to infix).

JavaScript [Array](https://www.javascripttutorial.net/javascript-array/) type provides the `push()` and `pop()` methods that allow you to use an array as a stack.

## push() method

The `push()` method allows you to add one or more elements to the end of the array. The `push()` method returns the value of the `length` property that specifies the number of elements in the array.

If you consider an array as a stack, the `push()` method adds one or more element at the top of the stack. The following example creates an empty array named `stack` and adds five numbers, one by one, at the end of the `stack` array. It is like to push each number into the top of the stack.

let stack = [];

stack.push(1);
console.log(stack); // [1]

stack.push(2);
console.log(stack); // [1,2]

stack.push(3);
console.log(stack); // [1,2,3]

stack.push(4);
console.log(stack); // [1,2,3,4]

stack.push(5);
console.log(stack); // [1,2,3,4,5]

The following figure illustrates each step in the script above.

![JavaScript Stack Push Operations](https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScript-Stack-Push-Operations.png "JavaScript Stack Push Operations")

Initially, the stack is empty. Each time, we call the `push()` method to add a number to the stack. After 5 calls, the stack has 5 elements.

Note that the `push()` method also allows you to add multiple items to the end of the array at a time.

## pop() method

The `pop()` method removes the element at the end of the array and returns the element to the caller. If the array is empty, the `pop()` method returns [undefined](https://www.javascripttutorial.net/javascript-data-types/#undefined).

The following example shows how to pop elements from the top of the stack using the `pop()` method.

console.log(stack.pop()); //  5
console.log(stack); // [1,2,3,4];

console.log(stack.pop()); //  4
console.log(stack); // [1,2,3];

console.log(stack.pop()); //  3
console.log(stack); // [1,2];

console.log(stack.pop()); //  2
console.log(stack); // [1];

console.log(stack.pop()); //  1
console.log(stack); // []; -> empty

console.log(stack.pop()); //  undefined

The figure below illustrates each step in the script.

![JavaScrippt Stack Pop](https://www.javascripttutorial.net/wp-content/uploads/2016/08/JavaScrippt-Stack-Pop.png)

Initially, the stack has 5 elements. The `pop()` method removes the element at the end of the array i.e., at the top of the stack one at a time. After five operations, the stack is empty.

## Reverse a string using a JavaScript stack

The following example shows you how to reverse a string using a stack.

function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ

How the script works.

The `reverse()` function accepts a string argument and returns its reversed version with the following logic:

1. First, loop through the `str` and push each letter into the `stack` array.
2. Second, pop each letter from the stack and construct the reversed string.

In this tutorial, we have shown you how to use an array as a JavaScript stack data structure that has two main operations: push and pop.
