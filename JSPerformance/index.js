// //code 1
// const t1 =  performance.now()
// for(let i=1;i<=100;i++){
//     let para=document.createElement('p');
//     para.textContent="this is para" +i;
//     document.body.appendChild(para);
// }
// const t2=performance.now()
// console.log("total time bt code 1" + (t2-t1));



// //standard way in JS to find out how much time my code is taking: performance.now() method. outpit- timesta

// //code2
// const t3 =  performance.now()
// let myDiv=document.createElement('myDiv');

// for(let i=1;i<=100;i++){
//     let para=document.createElement('para');
//     para.textContent="this is para" +i;
//     document.myDiv.appendChild(para);
// }
// document.body.appendChild(myDiv);
// const t4=performance.now()

// console.log("total time bt code 1" + (t4-t3));

//reflow: process of calculating position/ dimensions of element. - computationally intensive task. 

//repaint: process of displaying content and element pixel by pixel. faster than reflow. 

//document fragment: light weight DOC obejct : no reflow and no repaint after append or addition.



//best code

let fragment = document.createDocumentFragment();
for(let i=0;i<=100;i++){
    let para=document.createElement('p');
    para.textContent="this is para" + i;
    //no reflow and no repaint for the below line
    document.fragment.appendChild(para);
}
//the below line takes 1 reflow and 1 repaint. 
document.body.appendChild(fragment);


