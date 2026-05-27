// let src={
//     age:12,
//     wt:68,
//     ht:180
// };


// console.log(obj);
// //object is dynamic in nature
// obj.color="white";
// console.log(obj);


//object cloning : 1) spread operator, 2) assign method , 3) iteration 

//spread operator
// let dest={...src};
//  src.age=90;
// console.log("src:",src);
// console.log("dest:",dest);


//assign method
// let dest=Object.assign({},src);
// console.log("src:",src);
// console.log("dest:",dest);


//iteration
// let src={
//     age:12,
//     wt:68,
//     ht:180
// };

// let dest={};

// for(let key in src){
//    let newKey=key;
//    let newValue=src[key];

//    dest[newKey]=newValue;
// }

// src.age=90;

// console.log("src:",src);
// console.log("dest:",dest);



//garbage collector: reduce memory leaks and makes the memory free which is not in use. 
