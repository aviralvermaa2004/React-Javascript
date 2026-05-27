
//object
// let obj={
//     name:"Aviral",
//     age:25,
//     weight:85,
//     height:"6ft 1inch",
//     greet: function(){
//         console.log("hello jee kaise ho saare");
//     }
// };
// console.log(obj);
// obj.greet();



//array 

// let brr=new Array('love',1,true);
// console.log(brr[0]);

//built in methods in array : push pop shift slice map filter reduce sort indexof find. 
// brr.push('babbar');
// brr.pop('');

// brr.shift();
// brr.unshift(1);

// brr.push(20);
// brr.push(40);
// brr.push(70);
// // console.log(brr.slice(2,4));

// brr.splice(1,0,'kunal');
// console.log(brr);


// let ansArray=arr.map((number)=>{
//     return number*number;
// })
// console.log(ansArray);


// let arr=[10,20,30];

//     let length=arr.length;
//     console.log('length:',length);
//  for(let i=0;i<length;i++){
//     console.log(arr[i]);
//  }


// arr.forEach((value,index)=>{
//     console.log("Number:",value, "Index:",index);
// });

let arr=[10,20,30,40,50];

function getSum(arr){
    let len=arr.length;
    let sum=0
    for(let i=0;i<len;i++){
        sum=sum+arr[i];
    }
    return sum;
}

let totalSum=getSum(arr);
console.log(totalSum);
