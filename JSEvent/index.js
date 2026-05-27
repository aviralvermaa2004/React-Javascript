// function changeText(){
//     let fpara=document.getElementById('fpara');
//     fpara.textContent='aviral';
// }

// let fpara=document.getElementById('fpara');

// fpara.addEventListener('click',changeText);

// fpara.removeEventListener('click',changeText);



// let anchor=document.getElementById('fanchor');

// function anchor(event){
//     event.preventDefault();
//     anchor.addEventListener('click',anchor);
//     anchor.textContent="click done bhai";
    
// }



// let paras=document.querySelectorAll('p');
// for(let i=0;i<paras.length;i++){
//     let para=paras[i];
//     para.addEventListener('click',function(){
//         alert("you have clicked on para: "+ (i+1));
//     })
// }

function alertpara(event){
    alert("you have clicked on para:" + event.target.textContent);
}

let myDiv=document.getElementById('wrapper');

document.addEventListener('click',alertpara);