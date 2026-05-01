import LinkedList from './linkedlistwithTail.js';

class LinkedListStack{
    constructor(){
        this.list=new LinkedList();
    }
    push(value){
        this.list.prepend(value);
    }
    pop(){
        return this.list.removeFromFront();
    }

    peek(){
        return this.head.value;
    }

    isEmpty(){
        return this.list.isEmpty();
    }

    getSize(){
        return this.list.getSize();
    }

    print(){
        return this.list.print();
    }
}

const stack=new LinkedListStack();
stack.push(10);
stack.push(20);
stack.print();
stack.pop();
stack.print();