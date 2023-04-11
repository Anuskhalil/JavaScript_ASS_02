
// Q no: 01

// function first (num1) {

//     return function(num2){
//        console.log(num1 + num2)
//     }

// } 

// let innerFunction = first(5);

// innerFunction (10);


// Q no: 02

// let arr = [2, 3, 5, 7, 8];

// function searchValue (arr, val) {

//     if(arr.length === 0){
//         return false;
//     }
//     if(arr[0] === val){
//         return true;
//     }

//     return searchValue (arr.slice(1), val)

// }

// let rezult = console.log(searchValue(arr, 7));
// let rezult1 = console.log(searchValue(arr, 1));


// Q no: 06

// function myObj(key, object) {
//     let objectString = JSON.stringify(object);
//     localStorage.setItem(key, objectString);
//   }

// let myObject = { name: "Anus", age: 20 };
// myObj("myObject", myObject);


// Q no: 7


// function getFromLocalStorage(key) {
//     let objString = localStorage.getItem(key);
//     return JSON.parse(objString);
//   }

//   let myObject = getFromLocalStorage("myObject");
//   console.log(myObject);  // {name:"Anus", age: 20}


// Q no: 8

// function saveToLocalStorage(obj) {
//     for (let key in obj) {
//         let value = obj[key];
//         localStorage.setItem(key, JSON.stringify(value));
//     }
//     const newObj = {};
//     for (let key in obj) {
//         let value = JSON.parse(localStorage.getItem(key));
//         newObj[key] = value;
//     }
//     return newObj;
// }

// let myObj = { name: "Anus", age: 20, eyeColor: "Black"};
// let newObj = saveToLocalStorage(myObj);
// console.log(newObj);
// console.log(myObj);


// Q no: 5

// let myColor = document.querySelector("p");
// myColor.innerHTML="<b> Hello Developers </b>";

// let myHead = document.querySelector("h5");
// myHead.innerHTML="<b> How are you? </b>";

// setInterval (function(){

//     myColor.style.backgroundColor = "#000";
//     myColor.style.color = "white";
//     console.log(myColor);

//     myHead.style.backgroundColor = "#000";
// myHead.style.color = "yellow";
// console.log(myHead);

// })

// Q no: 3

// const myButton = document.getElementById("my-button");

// myButton.addEventListener("click", function() {

//   document.write("Hello How are you all? Hope you all are fit and fine.");
// });




























