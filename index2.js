

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
function settimeooutBlockScope() {
    
    // for (var i = 0; i <= 5; i++) {
        // let has blocked scope 
        for (let i = 0; i <= 5; i++) {
       setTimeout(() => {
        console.log(i);
       }, i * 1000);
    }
};

settimeooutBlockScope();
// Settimeout let block scope explained  Ends here
