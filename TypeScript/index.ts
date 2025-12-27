//object as input
interface Address{
    city: String,
    pin: number
}
interface User{
    name:String,
    age:number,
    address?:Address,
    isLegal: () => boolean,
}

class Manager implements User{
    name: string;
    age: number;
    //you can add extra fields here
    department: string;
    constructor(name: string,age:number,department:string){
        this.name= name;
        this.age = age;
        this.department = department;
    } 
    isLegal(){
        return this.age>18;
    }
}

let person = new Manager("Sahil",20,"accounts");
console.log(person.name);
