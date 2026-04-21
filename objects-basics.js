const obj={
    name:"Akshay",
    age:25,
    sayMyName:function(){
        console.log(this.name); //refers to the current object
    }
}

console.log(obj);
console.log(obj['age']);
console.log(obj.age);
obj.sayMyName();
obj.hobby='I love playing cricket'; //Adding property to object
console.log(obj)

delete obj.hobby; //deleting property from object
console.log(obj);