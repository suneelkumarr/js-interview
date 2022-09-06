//https://sebhastian.com/doubly-linked-list-javascript/

const createNode = (value) =>{
    return {
        value: value,
        next: null,
        previous:null
    };
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insert(value){
        this.length++;
        let newNode = createNode(value);
        console.log(newNode);
        if(this.tail){
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
            return newNode;
        }
        this.head = this.tail = newNode;
        console.log(newNode); 
        return newNode;
    }

    remove(){
        if(this.tail){
            this.length--;
            const removeTail = this.tail;
            const beforeTail = this.tail.previous;
            this.tail = beforeTail;
            if(this.tail){
                this.tail.next =  null;
            }else{
                this.head = null;
            }

            return removeTail;
        }
        return undefined;
    }

    print() {
        let current  = this.head;
        while(current){
            console.log(
                `${current.previous?.value} ${current.value} ${current.next?.value}`
              );
              current = current.next;
        }
    }

      // Insert node from the head instead of the tail

      insertHead(value){
        this.length++;
        let newNode = createNode(value);

        if(this.head){
            this.head.previous = newNode;
            newNode.next =  this.head;
            this.head = newNode;
            return newNode;
        }

        this.head =  this.tail = newNode;
        return newNode;
      }

      removeHead(){
        if(this.head){
            this.length--;
            const removeHead = this.head;
            this.head = this.head.next;
            if(this.head){
                this.head.previous = null
            }else{
                this.tail = null;
            }
            return removeHead;
        }
        return undefined;
      }

      insertIndex(value, index){
        if(index >= this.length){
            throw new Error("Insert index out of bounds")
        }
        if(index === 0){
            return this.insertIndex(value)
        }

        this.length++;
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
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


}


const dLinkedList = new DoublyLinkedList();

dLinkedList.insert(7);
dLinkedList.insert(8);
dLinkedList.insert(9);
dLinkedList.remove();
dLinkedList.print();