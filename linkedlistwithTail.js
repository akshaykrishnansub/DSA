class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    isEmpty(){
        return this.size===0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.size++;
    }

    append(value){
        const newNode=new Node(value);
        if(this.isEmpty()){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode
        }
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null;
        }
        const value=this.head.value;
        this.head=this.head.next;
        this.size--;
        return value;
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        if(this.size===1){
            this.head=null;
            this.tail=null;
        }else{
            let prev=this.head;
            while(prev.next!==this.tail){
                prev=prev.next;
            }
            prev.next=null;
            this.tail=prev;
        }
        this.size--;
        return value;
    }
}

const list=new LinkedList();
console.log("List is empty?",list.isEmpty());
list.prepend(10);
list.append(20);
console.log(list);