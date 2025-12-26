
const greet = (user :String) =>{
    console.log('hello '+user);
}
greet("Sahil");

const sum = (a:number,b:number):number=>{
    return a+b;
}
const isLegal= (age: number)=>{
    return age>=18?true:false;
}

let ans = sum(1,2);
console.log(ans);
console.log(isLegal(18));
//number,string,any

function delayedCall(fn: any){

}