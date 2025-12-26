//object as input
interface userType{
    name:String,
    age:number
}
function greet(user: userType) :void{
    console.log(user.name);
    console.log(user.age);
}
let user:userType = {
    name:'Sahil',
    age:20
}
greet(user);