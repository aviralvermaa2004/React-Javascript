// class human{
// //properties
// age;//public
// #wt=80;//private
// ht=180;

// constructor(newAge,newHeight){
//     this.age=newAge;
//     this.height=newHeight;
//     // this.#wt=newWeight;
// }
// //behaviour
// walking(){
//     console.log("i am walking",this.#wt);
// }

// running(){
//     console.log("i am running");
// }
// }

// let obj=new human(25,185,101);
// // console.log(obj.age);
// console.log(obj.ht);
// obj.walking();



//default parameter in function. 
// function sayName(fname="uday", lname="singh"){
//     console.log("my name:",fname, '',lname);
// }
// sayName();

//one parameter is dependent on other parameter
// function sayName(fname="uday",lname=fname.toUpperCase()){
//     console.log("my name is:",fname,"",lname);
// }

// sayName();

function solve(value={age:15,wt:90,ht:190}){
    //we can add object in the default parameter. 
    console.log("hello ji",value);
}
solve();