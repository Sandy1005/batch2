//function expression
let x=function(){
    console.log("anonymous is not executiong");
}
// console.log(x);
x();

//IIFE
(
    function(){
        console.log("anonymous");
    }
)
();

//Arror function
let y=(a,b)=>console.log(a,b);
y(3,4);

//implicit returns and explicit returns

function test1(a,b){
    return a+b;
}
console.log(test1(5,5));

let z=(a,b)=>{return a*b};
console.log(z(5,5));

let c=(a,b)=> a+b;
console.log(c(100,200));