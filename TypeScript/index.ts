// //object as input
// interface Address{
//     city: String,
//     pin: number
// }
// interface User{
//     name:String,
//     age:number,
//     address?:Address,
//     isLegal: () => boolean,
// }
// class Manager implements User{

//     //you can add extra fields here, but the interface fiels are compulsory
//     department: string;
//     constructor(public name: string, public age:number, department:string){
//         this.department = department;
//     } 

//     isLegal(){
//         return this.age>18;
//     }
// }
// let person = new Manager("Sahil",20,"accounts"); 
// console.log(person.name);
// console.log(person.isLegal());


// function getMax(nums: number[]): number{
//     let max: number = 0;
//     for(const num of nums){
//         if(num > max) max = num;
//     }
//     return max;
// }

// const max = getMax([10, 20, 40, 60]);
// console.log(max);

type User = {
    firstname: string;
    lastname: string;
    age: number;
}

function isLegal(users: User[]): User[]{
    return users.filter((u)=>u.age>=18);
}

const users: User[] = [{
    firstname:"Sahil",
    lastname:"Singh",
    age:20
},{
    firstname:"Sneha",
    lastname:"Singh",
    age:20
},{
    firstname:"Jagat",
    lastname:"Singh",
    age:40
},{
    firstname:"Mika",
    lastname:"Singh",
    age:14,
}]

console.log(isLegal(users));