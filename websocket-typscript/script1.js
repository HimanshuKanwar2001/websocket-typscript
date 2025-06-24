// function sum(a, b) {
//   return a + b;
// }

// // console.log(sum(3,5));
// // console.log(sum("three","five"));

// // function canVote(age) {
// //   return age > 18;
// // }

// // console.log(canVote(2));

// // function greet(user){
// //     console.log("Hello "+ user.name + "your age is " + user.age);
// // }

// // let user={
// //     name:"himanshu",
// //     age:23
// // }

// // greet(user);

// // function greet(user){
// //     console.log("Hello "+ user.gender?  + user.name + "your age is " + user.age);
// // }

// // let user={
// //         name:"himanshu",
// //         age:23,
// //         gender:"male",
// //     }

// //     greet(user);

// // let name=prompt("Write your name ");
// // let age =prompt("write your age ");

// // function greet(name,age){
// //     console.log("Hello "+ name + "your age is " + age);
// // }

// //Create a function that takes an array of objects as inputs,and returns the users whose age > 18 are male

// const users = [
//   {
//     name: "himanshu",
//     age: 23,
//     gender: "male",
//   },
//   {
//     name: "ritu",
//     age: 44,
//     gender: "female",
//   },
//   {
//     name: "jayesh",
//     age: 11,
//     gender: "male",
//   },
// ];

// function canVote(arr) {
//   //initialise a new array ,push to a new array
//   // let newArry=[];
//   // arr.map((people)=>{
//   //     if(people.age>18 && people.gender == "male"){
//   //         newArry.push(people);
//   //     }
//   // })

//   //you can use the filter function inside an array
//   const newArry = arr.filter(
//     (people) => people.age > 18 && people.gender == "male"
//   );

//   return newArry;
// }

// canVote(users);

// console.log(canVote(users));
// console.log("Hellow world");

var x = 5;(function () {
  console.log(x);
  var x = 10;
  console.log(x);
})();
