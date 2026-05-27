


 let name="manish";
function outerFunction(){
    {
        let name="vedaant";
    }
    // let name="Aviral";//let=->lock scope
//nested function
    function innerFunction(){
    //    let name="verma";
        console.log(name);
    }
    innerFunction();
}
outerFunction();