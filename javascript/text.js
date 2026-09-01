//console. log will be shown in the console of the browser.

console.log("Hello World.");

// alert("Hello World.") is used to show a pop-up message in the browser. It is not recommended to use alert() for debugging purposes as it interrupts the flow of the program and can be annoying to users. Instead, use console.log() for debugging and testing your code.

//variables cant be started with no. for eg. 55akshay
//var is globally scoped but let is block scoped
//** is exponential
var a =1;
var b=5;
var c= "harry";
console.log(a+b+4)
console.log(typeof a,typeof b,typeof c)
//const a=6
//const cant be incremented or updated
let c = 5;

//primitive data types-base data types
//null//number//string//symbol//boolean
// typeof null is object 
let x = "sakshi";
let y = 23;
let z = 3.76;
const p =true;
let q= undefined;
let r = null;
console.log(x,y,z,p,q,r)
console.log(typeof x,typeof y,typeof z,typeof p,typeof q,typeof r)

// we van use key values and update it
let o = {
    "name":"Harry",
    "job code":"3909"
}
o.salary= "10 lakh"

//if else statement blocks
let age =10;
if(age>18){
    console.log("yoa are eligible");
}
else{
    console.log("you are not eligible");
}
// === check the datatypes
// == check the value
if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You cannot drive");
}


a = 6;
b = 8;
let c = a > b ? (a - b) : (b - a);

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}*/

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

// for (let i = 0; i < 100; i++) { 
//     console.log(a + i); 
// }

// let obj = {
//     name: "Harry",
//     role: "Programmer",
//     company: "CodeWithHarry AI"
// }
 
// for (const key in obj) {  
//         console.log(key)
// }

// for (const c of "Harry") {
//     console.log(c)
// }

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);


///functions
function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

function sum(a, b, c = 3) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1)

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)


const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);

//string tutorial

let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);

console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)

