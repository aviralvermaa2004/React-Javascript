//function hoisting 
// myName("aviral");

// function myName(finalName){
//     console.log(finalName);
// }


//variable hoisting 
// console.log(age);
// var age=5;

//variavle hoisting using let and const keyword
// console.log(age); 
// let age=25;
// const age=35;

// sayName();
// let sayName=function(finalName){
//     console.log(finalName);
// }

//class hoisting
// const object1=new Human(); 
// class Human{

// }




//function call stack: it is a container: LIFO(last in first out)
//why function is called as first class citizens : assign to variable
                                                    //as argument
                                                    //return function 
                                                    //use function in DS
                                                    //as property


// function greetMe(greet,fullName){
//     console.log("hello",fullName);
//     greet();
// }
// function greet(){
//     console.log("greeting fot the day");
// }
// greetMe(greet,"aviral");
// greet();

// function solve(num){
//     return function(num){
//         return num*num;
//     }
// }
// let ans=solve(5);

// let finalAns=ans(10);
// console.log(finalAns);

// const arr=[
//     function(a,b){
//         return a+b;
//     },
//        function(a,b){
//         return a-b;
//     },
//        function(a,b){
//         return a*b;
//     },
// ];
// let first=arr[2];
// let ans=first(5,10);
// console.log(ans);


// let greet=function(){
//     console.log("namaste duniya");
// }
// greet();
