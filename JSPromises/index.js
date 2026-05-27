//promise: represents the completion of an asynchronous operation and its returning value 
//three states: pending, fulfilled,rejected

// let firstPromise=new Promise((resolve,reject)=>{
//     setTimeout(function sayMyName(){
//     console.log("Love babbar");
// },15000);
// resolve (1);
// });


//if i want to perform a task after completion of fulfilled promise state then i have a method called then(); 

// in failure/rejected state then we use catch() method; 

// let promise1= new Promise((resolve,reject)=>{
//     let sucess=true;
//     if(sucess){
//         resolve("promise fulfilled");
//     }
//     else{
//         reject("promise rejected");
//     }
// })

// promise1.then((message)=>{
//     console.log("the message:" + message);
// }).catch((error)=>{
//     console.log("error:" + error);
// })

let promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"first");
})
let promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"second");
})
let promise3=new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"third");
})
Promise.all([promise1,promise2,promise3])
.then((value)=>{
    console.log(value);
})
.catch((error)=>{
    console.error(error);
})