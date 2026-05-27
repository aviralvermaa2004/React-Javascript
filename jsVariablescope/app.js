//variable scoping 

// var age=15;//global scope
// {
// console.log(age);
// }

// if(true){
//     console.log(age);
// }

// for(let i=0;i<=2;i++){
//     console.log(age);
// }

// function sayHello(){
//     console.log("hw",age);
// }
// sayHello();



//function scope
// function sayHello(){
//       var fullName="earth";
//     console.log("hello duniya",name);
 
// }
// console.log(fullName);
// sayHello();


//block scope
// console.log(height);
// {
//  const height=180;
// }

// console.log(height);




//temporal dead zone: variable is created udsing let and const keyword
console.log(marks);
console.log("aviral");
console.log("verma");
let marks=100;
//line 1-4 temporal dead zone:cannot access the value of marks. 
console.log(marks);