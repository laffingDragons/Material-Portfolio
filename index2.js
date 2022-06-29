

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
function z() {
    let b = 100;

    function y() {
        let a = 23;

        function x() {
            console.log(a, b);
        };

        x();
    }
    y();
}

z();


//Closures example  ends here
