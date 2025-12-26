

function delayedCall(fn : ()=> void){
    setTimeout(fn,2000);
}
delayedCall(()=>{
    console.log('Hello after 2 seconds');
})

//object as input

function greet(user: {name:String,age:number}) :void{
    console.log(user.name);
    console.log(user.age);
}
greet({name:'Sahil',
    age:20
})