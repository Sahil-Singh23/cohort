//object as input
interface Address{
    city: String,
    pin: number
}
interface User{
    name:String,
    age:number,
    address?:Address,
    //greet: () => string,
}

class Manager implements User{
    name: string;
    age: number;
    constructor(name: string,age:number){
        this.name= name;
        this.age = age;
    } 
}
