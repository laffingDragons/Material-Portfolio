

// Hoistiong example

// getName()

// var n = 5;

// function getName() {
//     console.log("In Getname function");
// }

// console.log(n);
// console.log(getName);

// Hoisting example ends here


//Closures example 
// function z() {
//     let b = 100;

//     function y() {
//         let a = 23;

//         function x() {
//             console.log(a, b);
//         };

//         x();
//     }
//     y();
// }

// z();


//Closures example  ends here


// Settimeout let block scope explained 
// function settimeooutBlockScope() {

//     // for (var i = 0; i <= 5; i++) {
//         // let has blocked scope 
//         for (let i = 0; i <= 5; i++) {
//        setTimeout(() => {
//         console.log(i);
//        }, i * 1000);
//     }
// };

// settimeooutBlockScope();
// Settimeout let block scope explained  Ends here


// Data hiding or privacy function starts here 

// function counter() {
//     var count = 0;
//     return  function increamentCounter() {
//         count++;
//         console.log(count);
//     }
// }

// let counter1 = counter();
// counter1();
// counter1();
// counter1();

// let counter2 = counter();
// counter2();
// counter2();

// Data hiding or privacy function Ends here 


// Function Constructor in javascript  starts here

// function Counter() {

//     var count = 10;

//     this.increamentCounter = function() {
//         count++;
//         console.log(count);
//     }

//     this.decreamentCounter = function () {
//         count--;
//         console.log(count);
//     }
// }

// let counter1 = new Counter();

// counter1.increamentCounter();
// counter1.increamentCounter();
// counter1.increamentCounter();

// counter1.decreamentCounter();

// Function Constructor in javascript  ends here

// Adding event listener 

function clickButton() {
    var count = 0;
        document.getElementById("clickMe").addEventListener("click", function (params) {
        console.log("Marque Clicked", ++count);
    })
}

clickButton();
// Adding event listener ends here
