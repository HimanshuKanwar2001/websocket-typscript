function setTimeoutPromisified(duration) {
  return new Promise(function (resolve) {
    setTimeout(resolve, duration);
  });
}

// Promise Chaning
// setTimeoutPromisified(1000).then(function () {
//   console.log("Hi");
//   return setTimeoutPromisified(3000).then(function () {
//     console.log("Hello");
//     return setTimeoutPromisified(5000).then(function () {
//       console.log("hi There");
//     });
//   });
// });

// Async await syntax

// async function solve() {
//   await setTimeoutPromisified(1000);
//   console.log("hi");
//   await setTimeoutPromisified(3000);
//   console.log("hello");
//   await setTimeoutPromisified(5000);
//   console.log("Hi There");
// }

// solve();
// console.log("After solve function  ");

const fs = require("fs");

function readFileAsync() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) {
        reject("File Not Found!!");
      }
      resolve(data);
    });
  });
}

readFileAsync()
  .then(function (x) {
    console.log("Files has been read");
  })
  .catch(function (e) {
    console.log(e);
  });
// syantatical sugar
// async function solve() {
//   await readFileAsync();
// }

// solve();
