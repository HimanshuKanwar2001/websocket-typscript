// // Classes in JS

// // Primitive types
// // 1.number
// // 2.string
// // 3.boolean

// // Complex types
// /*
// 1.Objects
// 2.Arryas

// Classes
// a way to define blueprints for creating objects(these objects are different freom the objects defined in the last section)

// */
// // class Rectangle {
// //   constructor(width, height, color) {
// //     this.width = width;
// //     this.height = height;
// //     this.color = color;
// //   }
// //   area() {
// //     const area = this.width * this.height;
// //     return area;
// //   }

// //   paint() {
// //     console.log(`Painting with color ${this.color}`);
// //   }
// // }

// // const rect = new Rectangle(2, 5);
// // const area = rect.area();
// // console.log(area);

// // Some mre classes
// // const now = new Date();
// // console.log(now.getFullYear());

// // const map = new Map();
// // map.set("name", "Himanshu");
// // map.set("age", 22);
// // console.log(map.get("name"));

// /*
//  1.Introduced how to create a class and use it -hard
//  2.We used some JS provided classes (Map,Date)
//  3.We are going to introduced the "Promise" class

//  Promise class gives u a promise,that I will return  something in the future

// */

// // Revise callbacks

// // function logName() {
// //   console.log("Himanshu");
// // }

// // setTimeout(logName, 3000);
// //callback based approach
// // promise based approach

// // Callback hell

// /*
// // Promises
// -A promise in javascript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// calling a promise is easy
// defining a promise is hard

// */
// // function main() {}

// //callback version
// //setTimeout(main, 3000); //call back the main function

// //Promiseified version
// // function setTimeoutPromisified(ms) {
// //   return new Promise((resolve) => setTimeout(resolve, ms));
// // }
// // function callback() {
// //   console.log("3 seconds have passed");
// // }

// // let p = setTimeoutPromisified(3000);
// // console.log(p);

// // function random(resolve) {
// //   //resolve is also a function
// //   resolve();
// // }

// // // using the eventual value returned by the promise
// // function callback() {
// //   console.log("promise succeded");
// // }

// // let p = new Promise(random); //supposed to return u something eventually
// // p.then(callback);
// // console.log(p);
// // Async await

// //create  the promisified version of fs.readFile,fs.writeFile,cleanFile
// /* write code that
// 1.logs hi after 1 second
// 2.logs hello 3 seconds after step 1
// 3. logs hello there 5 seconds after step 2*/

// // function writeCode(resolve, timeline) {
// //   setTimeout(resolve, timeline);
// // }

// function writeText(write) {
//   console.log(write);
// }

// // function setTimeoutPromisified(func, time) {
// //   return new Promise((resolve) =>
// //     setTimeout(() => {
// //       func;
// //       resolve();
// //     }, time)
// //   );
// // }

// // setTimeoutPromisified(writeText("hi"), 1000).then(() =>
// //   setTimeoutPromisified(writeText("Hello"), 3000).then(() =>
// //     setTimeoutPromisified(writeText("World"), 5000)
// //   )
// // );

// // const fs = require("fs");

// // // function readTheFile(sendTheFinalValueHere) {
// // //   fs.readFile("a.txt", "utf-8", function (err, data) {
// // //     sendTheFinalValueHere(data);
// // //   });
// // // }

// // function readFile(fileName) {
// //   //read the file and return its value
// //   return new Promise(readTheFile);
// // }

// // const p = readFile();

// // function callback(contents) {
// //   console.log(contents);
// // }

// // p.then(callback);

// /* write a function that
// 1.Reads the contents of a file
// 2.Trims the extra space from the left and right
// 3.Writes it back to the file */

// // function setTimeoutPromisified(fileName) {
// //   return new Promise(readTheFile);
// // // }

// function readTheFile(resolve) {
//   setTimeout(function () {
//     resolve();
//   }, 3000);
// }

// // const p = setTimeoutPromisified();
// // function callback() {
// //   console.log("Timer is done");
// // }

// // p.then(callback);

// class Promise2 {
//   constructor(fn) {
//     function afterdone() {
//       this.resolve();
//     }
//     fn(afterdone);
//   }
//   // constructor(fn) {
//   //   this.fn = fn;
//   //   this.fn(() => {
//   //     this.resolve();
//   //   });
//   // }

//   then(callback) {
//     this.resolve = callback;
//   }
// }

// function setTimeoutPromisified() {
//   return new Promise2(readTheFile);
// }

// function callback() {
//   console.log("callback has been called");
// }
// const p = setTimeoutPromisified();

// p.then(callback);

function doAsyncOp(resolve) {
  setTimeout(resolve, 3000);
}

const p = new Promise(doAsyncOp);

function callback() {
  console.log("3 seconds have passed v");
}

p.then(callback);
