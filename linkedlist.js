class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }

    //inserting the value at the beginning of the linked list
    prepend(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.size++;
    }

    //inserting a value at the end of the linked list
    append(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
        }else{
            let prev=this.head;
            while(prev.next){
                prev=prev.next;
            }
            prev.next=newNode;
        }
        this.size++;
    }

    //inserting the value at a specified index
    insert(value,index){
        if(index<0 || index > this.size){
            return;
        }
        if(index===0){
            this.prepend(value);
        }else{
            const newNode=new Node(value);
            let prev=this.head; //previous currently points to head
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            newNode.next=prev.next;
            prev.next=newNode;
            this.size++;
        }
    }

    //removing a value from a specified index
    removeFrom(index){
        if(index <0 || index>this.size){
            return null;
        }
        let removedNode;
        if(index===0){
            removedNode=this.head;
            this.head=this.head.next;
        }else{
            let prev=this.head;
            for(let i=0;i<index-1;i++){
                prev=prev.next;
            }
            removedNode=prev.next;
            prev.next=removedNode.next;
        }
        this.size--;
        return removedNode.value;
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value===value){
            this.head=this.head.next;
            this.size--;
            return value;
        }else{
            let prev=this.head;
            while(prev.next && prev.next.value!==value){
                prev=prev.next;
            }
            if(prev.next){
                const removedNode=prev.next;
                prev.next=removedNode.next;
                this.size--;
                return value;
            }
            return null;
        }
    }

    //Linked List search
    search(value){
        if(this.isEmpty()){
            return -1;
        }
        let i=0;
        let curr=this.head;
        while(curr){
            if(curr.value===value){
                return i;
            }
            curr=curr.next;
            i++;
        }
        return -1;
    }

    //reverse a linked list (Important)
    reverse(){
        let prev=null;
        let curr=this.head;
        while(curr){
            let next=curr.next;
            curr.next=prev;
            prev=curr;
            curr=next;
        }
        this.head=prev;
    }

    //printing the elements in the linked list
    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let curr=this.head;
            let listValues=" ";
            while(curr){
                listValues+=`${curr.value} `;
                curr=curr.next;
            }
            console.log(listValues);
        }
    }
}

const list=new LinkedList();
console.log("List is Empty?",list.isEmpty());
console.log("Size of the list",list.getSize());
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print();
list.append(40);
list.print();
list.insert(50,2);
list.print();
list.removeFrom(2);
list.print();
list.removeFrom(1);
list.print();
list.removeValue(30);
list.print();
console.log(list.search(50));
list.reverse();
list.print();