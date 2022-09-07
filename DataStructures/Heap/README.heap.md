## What is heap data structure?.

Heap is one efficient implementation of an abstract data structure called a [priority queue](https://learnersbucket.com/tutorials/data-structures/priority-queue-implementation-in-javascript).

In a heap, the highest (or lowest) priority element is always stored at the root, thus priority queue is often referred to as heaps irrespective of their implementation.

Heap is the most useful data structure when it is necessary to repeatedly remove the object with the highest (or lowest) priority.

One of the most common implementations of the heap is the binary heap which is basically a binary tree.

A binary heap is basically a binary tree with two additional properties.

1. **Shape property** : It must be a complete binary tree, which means all the levels of the tree, except the deepest (last) one are fully filled. In case the last level of the tree is not complete, the nodes of that level are filled from left to right.
2. **Heap property** : All nodes are either greater than or equal to or less than or equal to each of its children. If the parent nodes are greater than their child nodes, the heap is called a Max-Heap, and if the parent nodes are smaller than their child nodes, the heap is called Min-Heap.

![Max and Min heap](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/max-and-min-heap-1.png?resize=768%2C500&ssl=1)

---

## List of operations performed on binary heap.

* **insert(num)** : Add a new key to the heap.
* **delete(num)** : Removes a key from the heap.
* **heapify** : Create a (min or max) heap from the given array.
* **findMax or (findMin)** : Return the max element from the heap or (min).
* **extractMax or (extractMin)** : Remove and return the max element from the heap or (min).
* **deleteMax or (deleteMin)** : Remove the max element from the heap or (min).
* **size** : Return the size of the heap.
* **isEmpty** : Is heap empty or not?.
* **getList** : Get the heap as an array.

---

## Implementing binary heap data structure in Javascript.

Binary heaps can be represented using an array with certain mathematical calculations.

If the index of any element in the array is `<span class="pln">i</span>`, the element in the index `<span class="lit">2i</span><span class="pun">+</span><span class="lit">1</span>` will become the left child, and the element in the `<span class="lit">2i</span><span class="pun">+</span><span class="lit">2</span>` index will become the right child. Also, the parent of any element at index `<span class="pln">i</span>` is given by the lower bound of `<span class="pun">(</span><span class="pln">i</span><span class="pun">-</span><span class="lit">1</span><span class="pun">)/</span><span class="lit">2</span>`.

Thus we can create the binary heap using an array rather than using a tree.

```
functionBinaryHeap(){
  let list =[];
  
  //other operations will go here.
}
```

Copy

---

### Heapify

The first operation which we will be adding is heapify, because either after inserting or deleting a new element in the heap we will have to heapify it to retain the form.

To build a max-heap from any tree, we can start heapifying each sub-tree from the bottom up and end up with a max-heap. Repeat this for all the elements including the root element.

In the case of a complete tree, the first index of a non-leaf node is given by `<span class="pln">n</span><span class="pun">/</span><span class="lit">2</span><span class="pln"><span> </span></span><span class="pun">-</span><span class="pln"><span> </span></span><span class="lit">1</span>`. All other nodes after that are leaf-nodes and thus don’t need to be heapified.

![Heapify root element](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/how-to-heapify-root-element-1.png?resize=768%2C500&ssl=1)

```
//Heapify
  this.maxHeapify =(arr, n, i)=>{
    let largest = i;
    let l =2* i +1;//left child index
    let r =2* i +2;//right child index

    //If left child is smaller than root
     if(l < n && arr[l]> arr[largest]){
           largest = l; 
     }

     // If right child is smaller than smallest so far 
     if(r < n && arr[r]> arr[largest]){
          largest = r; 
     }

     // If smallest is not root 
     if(largest != i){ 
          let temp = arr[i]; 
          arr[i]= arr[largest]; 
          arr[largest]= temp; 

        // Recursively heapify the affected sub-tree 
        this.maxHeapify(arr, n, largest); 
      } 
  }
```

Copy

---

### Inserting a new element in the heap.

To add a new element, we first check if the list is empty or not. If it is empty then push the element directly, else we will have to heapify the list after addition.

![Adding a new node in the binary heap](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/Adding-a-new-node-in-the-binary-heap-1.png?resize=768%2C500&ssl=1)

```
//Insert Value
  this.insert =(num)=>{
    const size = list.length;
    if(size ===0){
      list.push(num);
    }else{
      list.push(num);
    
     for(let i = parseInt(list.length /2-1); i >=0; i--){
         this.maxHeapify(list, list.length, i); 
     }
    }
  }
```

Copy

---

### Removing an element from the heap.

Removing a node is 4 step process.

1. Find the element in the array.
2. Swap the element with the last element.
3. Remove the last element.
4. Heapify the list.

![Delete a node in binary heap ](https://i0.wp.com/learnersbucket.com/wp-content/uploads/2020/10/Delete-a-node-in-binary-heap-1-1.png?resize=768%2C500&ssl=1)

```
//Remove value
  this.delete=(num)=>{
    const size = list.length;
  
    //Get the index of the number to be removed
    let i;
    for(i =0; i < size; i++){
      if(num === list[i]){
        break;
      }
    }
  
    //Swap the number with last element
    [list[i], list[size -1]]=[list[size -1], list[i]];
  
    //Remove the last element
    list.splice(size -1);
  
    //Heapify the list again
    for(let i = parseInt(list.length /2-1); i >=0; i--){
         this.maxHeapify(list, list.length, i); 
     }
  }
```

Copy

---

### Find max from the heap

As the list is already max heapified, we just need to return the root element because it is the max.

```
//Return max value
  this.findMax =()=> list[0];
```

Copy

---

### Delete max from the heap

Delete the root to remove the max. We can use the exisiting delete method for it.

```
//Remove max val
  this.deleteMax =()=>{
    this.delete(list[0]);
  }
```

Copy

---

### Extract max from the heap

Store the max value in a variable and then delete it from the heap, after that return the value.

```
//Remove and return max value
  this.extractMax =()=>{
    const max = list[0];
    this.delete(max);
    return max;
  }
```

Copy

---

### Size of the heap

```
//Size
  this.size =()=> list.length;
```

Copy

---

### IsEmpty check

```
//IsEmpty
  this.isEmpty =()=> list.length ===0;
```

Copy

---

### Get the heap

```
//Return head
  this.getList =()=> list;
```

Copy

---

## Complete code of binary heap data structure implemented in Javascript.

```
functionBinaryHeap(){
  let list =[];
  
  //Heapify
  this.maxHeapify =(arr, n, i)=>{
    let largest = i;
    let l =2* i +1;//left child index
    let r =2* i +2;//right child index

    //If left child is smaller than root
     if(l < n && arr[l]> arr[largest]){
           largest = l; 
     }

     // If right child is smaller than smallest so far 
     if(r < n && arr[r]> arr[largest]){
          largest = r; 
     }

     // If smallest is not root 
     if(largest != i){ 
          let temp = arr[i]; 
          arr[i]= arr[largest]; 
          arr[largest]= temp; 

        // Recursively heapify the affected sub-tree 
        this.maxHeapify(arr, n, largest); 
      } 
  }
  
  //Insert Value
  this.insert =(num)=>{
    const size = list.length;
  
    if(size ===0){
      list.push(num);
    }else{
      list.push(num);

      //Heapify
      for(let i = parseInt(list.length /2-1); i >=0; i--){
         this.maxHeapify(list, list.length, i); 
      }
    }
  }
  
  //Remove value
  this.delete=(num)=>{
    const size = list.length;
  
    //Get the index of the number to be removed
    let i;
    for(i =0; i < size; i++){
      if(list[i]=== num){
        break;
      }
    }
  
    //Swap the number with last element
    [list[i], list[size -1]]=[list[size -1], list[i]];

    //Remove the last element
    list.splice(size -1);
  
    //Heapify the list again
    for(let i = parseInt(list.length /2-1); i >=0; i--){
         this.maxHeapify(list, list.length, i); 
     }
  }
  
  //Return max value
  this.findMax =()=> list[0];
  
  //Remove max val
  this.deleteMax =()=>{
    this.delete(list[0]);
  }
  
  //Remove and return max value
  this.extractMax =()=>{
    const max = list[0];
    this.delete(max);
    return max;
  }
  
  //Size
  this.size =()=> list.length;
  
  //IsEmpty
  this.isEmpty =()=> list.length ===0;
  
  //Return head
  this.getList =()=> list;
}
```

Copy

```
Input:
const heap =newBinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);
console.log(heap.getList());

heap.delete(9);
console.log(heap.getList());

heap.insert(7);
console.log(heap.getList());

Output:
[9,5,4,3,2]
[5,3,4,2]
[7,5,4,2,3]
```

---

## Binary heap with Min-Heap

```
functionBinaryHeap(){
  let list =[];
  
  //Heapify
  this.minHeapify =(arr, n, i)=>{
    let smallest = i;
    let l =2* i +1;//left child index
    let r =2* i +2;//right child index

    //If left child is smaller than root
     if(l < n && arr[l]< arr[smallest]){
           smallest = l; 
     }

     // If right child is smaller than smallest so far 
     if(r < n && arr[r]< arr[smallest]){
          smallest = r; 
     }

     // If smallest is not root 
     if(smallest != i){ 
          let temp = arr[i]; 
          arr[i]= arr[smallest]; 
          arr[smallest]= temp; 

        // Recursively heapify the affected sub-tree 
        this.minHeapify(arr, n, smallest); 
      } 
  }
  
  //Insert Value
  this.insert =(num)=>{
    const size = list.length;
  
    if(size ===0){
      list.push(num);
    }else{
      list.push(num);
    
      //Heapify
      for(let i = parseInt(list.length /2-1); i >=0; i--){
         this.minHeapify(list, list.length, i); 
      }
    }
  }
  
  //Remove value
  this.delete=(num)=>{
    const size = list.length;
  
    //Get the index of the number to be removed
    let i;
    for(i =0; i < size; i++){
      if(list[i]=== num){
        break;
      }
    }
  
    //Swap the number with last element
    [list[i], list[size -1]]=[list[size -1], list[i]];

    //Remove the last element
    list.splice(size -1);
  
    //Heapify the list again
    for(let i = parseInt(list.length /2-1); i >=0; i--){
         this.minHeapify(list, list.length, i); 
     }
  }
  
  //Return min value
  this.findMin =()=> list[0];
  
  //Remove min val
  this.deleteMin =()=>{
    this.delete(list[0]);
  }
  
  //Remove and return min value
  this.extractMin =()=>{
    const min = list[0];
    this.delete(min);
    return min;
  }
  
  //Size
  this.size =()=> list.length;
  
  //IsEmpty
  this.isEmpty =()=> list.length ===0;
  
  //Return head
  this.getList =()=> list;
}
```

Copy

Input:
const heap =newBinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);

console.log(heap.getList());

heap.delete(9);
console.log(heap.getList());

heap.insert(7);
console.log(heap.getList());

Output:
[2,3,9,5,4]
[2,3,4,5]
[2,3,4,5,7]

---

## Class based implementation of binary heap in javascript.

```
classBinaryHeap{
  constructor(){
    this.list =[];
  }
  
  //Heapify
  maxHeapify =(arr, n, i)=>{
    let largest = i;
    let l =2* i +1;//left child index
    let r =2* i +2;//right child index

    //If left child is smaller than root
     if(l < n && arr[l]> arr[largest]){
           largest = l; 
     }

     // If right child is smaller than smallest so far 
     if(r < n && arr[r]> arr[largest]){
          largest = r; 
     }

     // If smallest is not root 
     if(largest != i){ 
          let temp = arr[i]; 
          arr[i]= arr[largest]; 
          arr[largest]= temp; 

        // Recursively heapify the affected sub-tree 
        this.maxHeapify(arr, n, largest); 
      } 
  }
  
  //Insert Value
  insert =(num)=>{
    const size =this.list.length;
    if(size ===0){
      this.list.push(num);
    }else{
      this.list.push(num);
    
      //Heapify
      for(let i = parseInt(this.list.length /2-1); i >=0; i--){
         this.maxHeapify(this.list,this.list.length, i); 
      }
    }
  }
  
  //Remove value
  delete=(num)=>{
    const size =this.list.length;
  
    //Get the index of the number to be removed
    let i;
    for(i =0; i < size; i++){
      if(num ===this.list[i]){
        break;
      }
    }
  
    //Swap the number with last element
    [this.list[i],this.list[size -1]]=[this.list[size -1],this.list[i]];
  
    //Remove the last element
    this.list.splice(size -1);
  
    //Heapify the list again
    for(let i = parseInt(this.list.length /2-1); i >=0; i--){
         this.maxHeapify(this.list,this.list.length, i); 
     }
  }
  
  //Return max value
  findMax =()=>this.list[0];
  
  //Remove max val
  deleteMax =()=>{
    this.delete(this.list[0]);
  }
  
  //Remove and return max value
  extractMax =()=>{
    const max =this.list[0];
    this.delete(max);
    return max;
  }
  
  //Size
  size =()=>this.list.length;
  
  //IsEmpty
  isEmpty =()=>this.list.length ===0;
  
  //Return head
  getList =()=>this.list;
}
```

### Time complexity of heap data structure

| #       | Access | Search | Insert   | Delete   | FindMax or (Min) | DeleteMax or (Min) |
| ------- | ------ | ------ | -------- | -------- | ---------------- | ------------------ |
| Average | Θ(N)  | Θ(N)  | ΘLog(N) | ΘLog(N) | Θ(1)            | ΘLog(N)           |
| Worst   | O(N)   | O(N)   | OLog(N)  | OLog(N)  | O(1)             | OLog(N)            |

### Space complexity

| #     | space |
| ----- | ----- |
| Worst | O(N)  |

---

### Applications

* Implementing a priority queue.
* Dijkstra’s Algorithm.
* Heap Sort.
