class HashTable{
    constructor(size){
        this.table=new Array(size);
        this.size=size;
    }

    //generates an index for different keys
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total=total+key.charCodeAt(i);
        }

        return total % this.size;
    }

    //sets the index
    set(key,value){
        const index=this.hash(key);
        this.table[index]=value;
    }

    get(key){
        const index=this.hash(key);
        return this.table[index];
    }

    remove(key){
        const index=this.hash(key);
        this.table[index]=undefined;
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table=new HashTable(50);
table.set("name","Bruce");
table.display();
table.set("mane","Caroline");
table.display();