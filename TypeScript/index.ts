

function delayedCall(fn : ()=> void){
    setTimeout(fn,2000);
}
delayedCall(()=>{
    console.log('Hello after 2 seconds');
})