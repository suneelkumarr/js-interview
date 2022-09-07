## What is priority queue?

As queues are widely used in computer programming and in real lives as well, there was a need for some different models of original [queue data structure](https://learnersbucket.com/tutorials/algorithms/queue-implementation-in-javascript) to process the data more efficiently.

A priority queue is one of the variants of the original queue. In this elements are added and removed based on their priorities. It is an abstract data type that captures the idea of a container whose elements have **priorities** attached to them. An element of highest priority always appears at the front of the queue. If that element is removed, the next highest priority element advances to the front.

A real-life example of the priority queue are the patients in the hospitals, the one with at most priority are treated first and then the others.

Another example is people standing in a queue at the boarding line at the airport, first and second class(Business class) peoples passengers get priority over the coach class(Economy).

In India elderly or women get priority over young and men at many places like in railway and bus.

![Priority queue in javascript](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2019/09/ezgif.com-optimize-2.gif?resize=600%2C338&ssl=1)

## Why do we need priority queue?

It is used when we have to choose between the same values who have different priorities or weight.

* **Dijkstra’s Shortest Path Algorithm using priority queue** : When the graph is stored in the form of adjacency list or matrix, priority queue can be used to extract minimum efficiently when implementing Dijkstra’s algorithm.
* **Prim’s algorithm** : to store keys of nodes and extract minimum key node at every step.
* **Data compression** : It is used in **Huffman Codes** which is used to compresses data.
* **Operating system** : It is used by operating systems for [load balancing](https://www.nginx.com/resources/glossary/load-balancing/).

Now I am sure that you have a good idea about priority queue, so let us start implementing it in javascript.

## List of operations performed on priority queue

* **enqueue()** : Adds an item at the tail of the queue.
* **dequeue()** : Removes an item from the head of the queue.
* **front()** : Retruns the first item in the queue.
* **rear()** : Retruns the last item in the queue.
* **size()** : Returns the size of the queue.
* **isEmpty()** : Returns `<span class="kwd">true</span>` if queue is empty, `<span class="kwd">false</span>` otherwise.

There are two ways of implementing a priority queue.

* Add elements at appropriate place based on their priorities.
* Queue elements as they are added and remove them according to their priorities.

We will be using the first approach as we just have to place the elements at the appropriate place and then it can be dequeued normally.

## Implementing a priority queue in javascript

We will use an extra function (container) which will be storing the value and its priority.

functionPriorityQueue(){
  let items =[];

  //Container
  functionQueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }

  //Other methods go here
}

---

### Adding an item in the priority queue.

This is the only major method which will be modifying to store the data based on priorities.

We will iterate each element that is already present in the queue and compare their priority with the new element’s priority. If the new elements priority is greater then will add it at that place.

To add elements at specific index we will need to shift the remaining elements back, But [javascript array](https://learnersbucket.com/tutorials/array/javascript-array-complete-reference) has an inbuilt method for this  which we will be using.

```
//Add a new element in queue
  this.enqueue =function(element, priority){
    let queueElement =newQueueElement(element, priority);
  
    //To check if element is added
    let added =false;
    for(let i =0; i < items.length; i++){
      //We are using giving priority to higher numbers
      //If new element has more priority then add it at that place
      if(queueElement.priority > items[i].priority){
        items.splice(i,0, queueElement);
      
        //Mark the flag true
        added =true;
        break;
      }
    }
  
    //If element is not added
    //Then add it to the end of the queue
    if(!added){
      items.push(queueElement);
    }
  }
```

Copy

---

### Remove an item from the priority queue

```
//Remove element from the queue
this.dequeue =()=>{
  return items.shift();
}
```

Copy

---

### Return the first element from the priority queue

```
//Return the first element from the queue
this.front =()=>{
  return items[0];
}
```

Copy

---

### Return the last element from the priority queue

```
//Return the last element from the queue
this.rear =()=>{
  return items[items.length -1];
}
```

Copy

---

### Check if queue is empty

```
//Check if queue is empty
this.isEmpty =()=>{
  return items.length ==0;
}
```

Copy

---

### Return the size of the queue

```
//Return the size of the queue
this.size =()=>{
  return items.length;
}
```

Copy

---

### Print the queue

```
//Print the queue
  this.print=function(){
    for(let i =0; i < items.length; i++){
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  }
```

Copy

---

## Complete code of the priority queue.

```
functionPriorityQueue(){
  let items =[];
  
  //Container
  functionQueueElement(element, priority){
    this.element = element;
    this.priority = priority;
  }
  
  //Add a new element in queue
  this.enqueue =function(element, priority){
    let queueElement =newQueueElement(element, priority);
  
    //To check if element is added
    let added =false;
    for(let i =0; i < items.length; i++){
      //We are using giving priority to higher numbers
      //If new element has more priority then add it at that place
      if(queueElement.priority > items[i].priority){
        items.splice(i,0, queueElement);
      
        //Mark the flag true
        added =true;
        break;
      }
    }
  
    //If element is not added
    //Then add it to the end of the queue
    if(!added){
      items.push(queueElement);
    }
  }
  
  //Remove element from the queue
  this.dequeue =()=>{
    return items.shift();
  }
  
  //Return the first element from the queue
  this.front =()=>{
    return items[0];
  }
  
  //Return the last element from the queue
  this.rear =()=>{
    return items[items.length -1];
  }
  
  //Check if queue is empty
  this.isEmpty =()=>{
    return items.length ==0;
  }
  
  //Return the size of the queue
  this.size =()=>{
   return items.length;
  }
  
  //Print the queue
  this.print=function(){
    for(let i =0; i < items.length; i++){
      console.log(`${items[i].element} - ${items[i].priority}`);
    }
  }
}
```

Copy

```
Input:
let pQ =newPriorityQueue();
pQ.enqueue(1,3);
pQ.enqueue(5,2);
pQ.enqueue(6,1);
pQ.enqueue(11,1);
pQ.enqueue(13,1);
pQ.enqueue(10,3);
pQ.dequeue();
pQ.print();

Output:
"10 - 3"
"5 - 2"
"6 - 1"
"11 - 1"
"13 - 1"
```

Copy

---

## ES6 class based implementation of priority queue.

```
//Container
classQueueElement{
  constructor(element, priority){
    this.element = element;
    this.priority = priority;
  }
}
 
//PriorityQueue
classPriorityQueue{
   constructor(){
     this.items =[];
   }
   
   //Add a new element in queue
  enqueue =function(element, priority){
    let queueElement =newQueueElement(element, priority);
  
    //To check if element is added
    let added =false;
    for(let i =0; i <this.items.length; i++){
      //We are using giving priority to higher numbers
      //If new element has more priority then add it at that place
      if(queueElement.priority >this.items[i].priority){
        this.items.splice(i,0, queueElement);
      
        //Mark the flag true
        added =true;
        break;
      }
    }
  
    //If element is not added
    //Then add it to the end of the queue
    if(!added){
      this.items.push(queueElement);
    }
  }
  
  //Remove element from the queue
  dequeue =function(){
    returnthis.items.shift();
  }
  
  //Return the first element from the queue
  front =function(){
    returnthis.items[0];
  }
  
  //Return the last element from the queue
  rear =function(){
    returnthis.items[this.items.length -1];
  }
  
  //Check if queue is empty
  isEmpty =function(){
    returnthis.items.length ==0;
  }
  
  //Return the size of the queue
  size =function(){
   returnthis.items.length;
  }
  
  //Print the queue
  print=function(){
    for(let i =0; i <this.items.length; i++){
      console.log(`${this.items[i].element} - ${this.items[i].priority}`);
    }
  }
 }
```

Copy

```
Input:
let pQ =newPriorityQueue();
pQ.enqueue(1,3);
pQ.enqueue(5,2);
pQ.enqueue(6,1);
pQ.enqueue(11,1);
pQ.enqueue(13,1);
pQ.enqueue(10,3);
pQ.dequeue();
pQ.print();

Output:
"10 - 3"
"5 - 2"
"6 - 1"
"11 - 1"
"13 - 1"
```

Copy

---

## Making this class private with closure and IIFE.

```
letPriorityQueue=(function(){
  //Container
  classQueueElement{
    constructor(element, priority){
      this.element = element;
      this.priority = priority;
    }
  }

  //PriorityQueue
  returnclassPriorityQueue{
     constructor(){
       this.items =[];
     }

     //Add a new element in queue
    enqueue =function(element, priority){
      let queueElement =newQueueElement(element, priority);

      //To check if element is added
      let added =false;
      for(let i =0; i <this.items.length; i++){
        //We are using giving priority to higher numbers
        //If new element has more priority then add it at that place
        if(queueElement.priority >this.items[i].priority){
          this.items.splice(i,0, queueElement);

          //Mark the flag true
          added =true;
          break;
        }
      }

      //If element is not added
      //Then add it to the end of the queue
      if(!added){
        this.items.push(queueElement);
      }
    }

    //Remove element from the queue
    dequeue =function(){
      returnthis.items.shift();
    }

    //Return the first element from the queue
    front =function(){
      returnthis.items[0];
    }

    //Return the last element from the queue
    rear =function(){
      returnthis.items[this.items.length -1];
    }

    //Check if queue is empty
    isEmpty =function(){
      returnthis.items.length ==0;
    }

    //Return the size of the queue
    size =function(){
     returnthis.items.length;
    }

    //Print the queue
    print=function(){
      for(let i =0; i <this.items.length; i++){
        console.log(`${this.items[i].element} - ${this.items[i].priority}`);
      }
    }
   }
 }());
```

Copy

#### Time Complexity

| #       | Access | Search | Insert | Delete |
| ------- | ------ | ------ | ------ | ------ |
| Average | Θ(N)  | Θ(N)  | Θ(N)  | Θ(1)  |
| Worst   | O(N)   | O(N)   | O(N)   | O(1)   |

---

#### Space Complexity

| #     | space |
| ----- | ----- |
| Worst | O(N)  |
