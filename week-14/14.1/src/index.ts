// // // let x: number = 12; //inferencing

// // // console.log(x);

// // // function getName(name: string): void {
// // //   console.log(name);
// // // }

// // // getName("hello world");

// // // function sumOf(a: number, b: number): void {
// // //   console.log(a + b);
// // // }

// // // sumOf(12, 12);

// // // function delayedCall(fn: () => void) {
// // //   setTimeout(fn, 5000);
// // // }

// // // delayedCall(function () {
// // //   console.log("Hello");
// // // });

// // // //Interfaces

// // // // const user = {
// // // //   firstName: "himanshu",
// // // //   lastName: "kanwar",
// // // //   email: "email@gmail.com",
// // // //   age: "21",
// // // // };

// // // //to assign a type to the user object,you can use interfaces

// // // interface UserType {
// // //   firstName: string;
// // //   lastName: string;
// // //   email: string;
// // //   age: number;
// // // }

// // // function greet(user: UserType) {
// // //   console.log("Hello" + user.firstName);
// // // }

// // // let user: UserType = {
// // //   firstName: "himanshu",
// // //   lastName: "kanwar",
// // //   email: "himanshukanwar2001@gmail.com",
// // //   age: 12,
// // // };

// // // greet(user);

// // // interface People {
// // //   name: string;
// // //   age: number;
// // //   // greet:()=>string;
// // // }

// // // class Manager implements People {
// // //   // name: string;
// // //   // age: number;
// // //   // number: number;
// // //   // constructor(name:string,age:number){
// // //   //     this.name=name;
// // //   //     this.age=age;
// // //   //     this.number=12321312  // we can add more variables
// // //   // }

// // //   // OR

// // //   constructor(public name: string, public age: number) {}
// // // }

// // // let userss = new Manager("himanshu", 123);
// // // console.log(userss);

// // // //what is the difference between interfaces and types
// // // //you can implement interfaces as class but not type

// // // abstract class User {
// // //   name: string;
// // //   constructor(name: string) {
// // //     this.name = name;
// // //   }

// // //   abstract greet(): string;

// // //   //you can give default  implementations in it
// // //   hello() {
// // //     console.log("Kya haal hai");
// // //   }
// // // }

// // // class Employee extends User {
// // //   name: string;
// // //   constructor(name: string) {
// // //     super(name);
// // //     this.name = name;
// // //   }

// // //   greet() {
// // //     return "hi" + this.name;
// // //   }
// // // }

// // // // 1.Implementing interfaces (types vs interface)
// // // // 2.Abstract classes vs interfaces

// // // //if a class can implement an interfaces

// // // //what is the point of an abstract class
// // // //ANS     abstract class can have default implementations as well but interface cant

// // // // interface Users {
// // // //   name: string;
// // // //   age: number;
// // // // }

// // // //Type helps you aggregate data together

// // // type Users = {
// // //   name: string;
// // //   age: number;
// // // };

// // // //you cannot do union and intersection in interface but you can do it in type

// // // //unions and intersections
// // // type Employeee = {
// // //   name: string;
// // //   startDaate: Date;
// // // };

// // // type Managers = {
// // //   name: string;
// // //   department: string;
// // // };

// // // type TeamLead = Employeee & Managers;

// // // const teamLead: TeamLead = {
// // //   name: "himanshu",
// // //   startDaate: new Date(),
// // //   department: "Software Developer",
// // // };

// // // type GoodUser = {
// // //   name: string;
// // //   sales: string;
// // // };
// // // type BadUser = {
// // //   name: string;
// // //   ipadress: number;
// // // };

// // // type UserTypes = GoodUser | BadUser;

// // // let ab: UserTypes = {
// // //   name: "Himanshu",
// // //   sales: "asdasdadsad",
// // //   ipadress: 123123123123,
// // // };

// // function getMax(nums: number[]) {
// //   let maxValue = -10000000000000;
// //   for (let i = 0; i < nums.length; i++) {
// //     if (nums[i] > maxValue) {
// //       maxValue = nums[i];
// //     }
// //   }
// //   return maxValue;
// // }

// // interface User {
// //   firstName: string;
// //   lastName: string;
// //   age: number;
// // }
// // function isLegal(user: User): boolean {
// //   if (user.age > 18) {
// //     return true;
// //   } else {
// //     return false;
// //   }
// // }

// // let user: User = {
// //   firstName: "himanshu",
// //   lastName: "kanwar",
// //   age: 24,
// // };

// // console.log(isLegal(user));

// // function filterUser(user: User[]) {
// //   let ans = [];
// //   for (let i = 0; i < user.length; i++) {
// //     if (user[i].age > 18) {
// //       ans.push(user[i]);
// //     }
// //   }
// //   return ans;
// // }

// // const filteredUsers = filterUser([
// //   {
// //     firstName: "Himanshu1",
// //     lastName: "kanwar1",
// //     age: 11,
// //   },
// //   {
// //     firstName: "Himanshu1",
// //     lastName: "kanwar1",
// //     age: 21,
// //   },
// // ]);

// // console.log(filteredUsers);

// // interface User {
// //   id: string;
// //   name: string;
// //   age: number;
// //   email: string;
// //   password: string;
// // }
// // //Pick
// // type UpdateProps = Pick<User, "name" | "age" | "email">;

// // //Partial
// // type UpdatePropsOptional = Partial<UpdateProps>;

// // function updateUser(updatedProps: UpdatePropsOptional) {}

// //readonly

// // type User = {
// //   readonly name: string;
// //   readonly age: number;
// // };

// // const user: User = {
// //   name: "himanshu",
// //   age: 23,
// // };

// // OR

// // type User = {
// //   name: string;
// //   age: number;
// // };

// // const user: Readonly<User> = {
// //   name: "himanshu",
// //   age: 23,
// // };

// // user.name="jahdosjhd"  //cannot assing cause its a readonly property

// // interface Config {
// //   readonly endpoint: string;
// //   readonly apiKey: string;
// // }

// // const config: Readonly<Config> = {
// //   endpoint: "http:/api.com",
// //   apiKey: "random-Key",
// // };

// // type User = {
// //   id: string;
// //   username: string;
// // };

// // // type Users = {
// // //   [key: string]: User;
// // // };
// // type Users = Record<string, { id: string; username: string }>;

// // const users: Users = {
// //   key1: {
// //     id: "123",
// //     username: "hero1",
// //   },
// //   key2: {
// //     id: "12334",
// //     username: "hero1123",
// //   },
// // };

// // type Userss = Record<string, number>;

// // const userss: Userss = {
// //   "ras@123": 123,
// //   "ras@1212": 123,
// // };

// //records and maps

// const users = new Map();

// users.set("ras@123", { id: "hero", age: 12, email: "him@gmail.com" });
// users.set("ras@122", { id: "zero", age: 1242, email: "him@gmail.com" });
// users.set("ras@124", { id: "giro", age: 123, email: "him@gmail.com" });

// const val = users.get("ras@122");

// console.log(val);

// type User = {
//   name: string;
//   age: number;
//   email: string;
// };

// const users = new Map<string, User>();

// users.set("ras@123", { name: "hero", age: 12, email: "him@gmail.com" });
// users.set("ras@122", { name: "zero", age: 1242, email: "him@gmail.com" });
// users.set("ras@124", { name: "giro", age: 123, email: "him@gmail.com" });

// //Exclude - it lets you ignore literals

// type EventType = "click" | "scroll" | "mousemove";
// type ExcludeEvent = Exclude<EventType, "scroll">; // 'click' | 'mousemove'

// const handleEvent = (event: ExcludeEvent) => {
//   console.log(`Handling event: ${event}`);
// };

// handleEvent("click");

import z from "zod";

const userProfileSchema=z.object({
  name:z.string().min(1,{"Name field cannot be empty"}),
  email:z.string().email({"Enter a valid email"}),
  age:z.number().min(18,{"age cannot be less than 18"}).optional()
});


export type FinalUserSchema=z.infer<typeof userProfileSchema>;



