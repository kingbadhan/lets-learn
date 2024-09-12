// lexical scope  --> the place in wihich it was created
const myVar = "value1";

function myApp(){
     
    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}
myApp();