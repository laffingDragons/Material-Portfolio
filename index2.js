

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

// function clickButton() {
//     var count = 0;
//         document.getElementById("clickMe").addEventListener("click", function (params) {
//         console.log("Marque Clicked", ++count);
//     })
// }

// clickButton();
// Adding event listener ends here


// Trust issues with Settimeout

// console.log("Start");

// setTimeout(() => {
//     console.log("Callback");
// }, 1*1000);

// console.log("end");

// let startDate = new Date().getTime();
// let endDate = startDate;

// while (endDate < startDate + 10000) {
//     endDate = new Date().getTime();
// }

// console.log(">>>>>",startDate);

// Trust issues with Settimeout ends here 



// Array.prototype function, Higher order functions
// let radius  = [2, 3, 4];

// function area(r) {
//     return Math.PI * r * r;
// }

// function circumference(r) {
//     return 2 * Math.PI * r ;
// }

// function diameter(r) {
//     return  2 * r;
// }

// console.log(radius.map(area));
// console.log(radius.map(circumference));
// console.log(radius.map(diameter));

// Array.prototype function, Higher order functions ends here


// Examples of map, filter and reduce 

let nameList = [
    {firstName : "Hritik", lastName: "Roshan", age:30},
    {firstName : "Deepika", lastName: "Padukon", age:26},
    {firstName : "Amir", lastName: "Khan", age:50},
    {firstName : "Salman", lastName: "Khan", age:55},
    {firstName : "Katrina", lastName: "Kaif", age:26},
];


//Map is use to transform an array
console.log(nameList.map(x=> `${x.firstName} ${x.lastName}`));

//Filter is use to filter values form array
console.log(nameList.filter(x=> x.age === 26));

//Chaining 
console.log(nameList.filter(x=> x.age === 26).map(x=> x.firstName));

// reduce

function noOfAge(acc, curr) {
    if(acc[curr.age]){
        acc[curr.age]++
    }else{
        acc[curr.age] = 1
    }
    return acc
}


function ageLessThan30(acc, curr) {
    if(curr.age < 30){
        acc.push(curr.firstName)
    }
    return acc
}

let ageNo = nameList.reduce((acc, curr)=>ageLessThan30(acc, curr),[])

console.log("Reduce Output", ageNo);


// Examples of map, filter and reduce Ends here