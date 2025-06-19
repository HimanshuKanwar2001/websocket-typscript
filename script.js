// // I/O bound task
// const fs = require("fs");

// const contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// // CPU bound task
// for (let i = 0; i < 10; i++) {
//   console.log("Hello Kya haal hai");
// }

// // functional arguments
// // passing a function to another function as an arguments

// // Asynchronous code

// function print(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// }

// const contents1 = fs.readFile("a.txt", "utf-8", print); //asynchronously
// console.log(contents1);

// // JS Architecture for async code
// function timeout() {
//   console.log("Click the button !");
// }

// console.log("Hi!");

// setTimeout(timeout, 1000);

// console.log("Welcome to loope");

// let c = 0;
// for (let i = 0; i < 10000000; i++) {
//   c = c + 1;
// }

// console.log("Expernsive operation done");

//setTimeout Sychronous
// function setTimeOutSychronous(timeout) {
//   let startTime = new Date();
//   while (1) {
//     let currentTime = new Date();

//     if (currentTime.getTime() - startTime.getTime() > timeout) {
//       console.log("This is the sychronous setTimeout");
//       break;
//     }
//   }
// }

// // console.log(new Date().getTime());
// setTimeOutSychronous(15000);

// readFile , setTimeout, fetch, database calls

//read through second file

// promises , callbacks

//writing a promise
