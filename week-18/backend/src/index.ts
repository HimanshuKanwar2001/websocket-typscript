import { PrismaClient } from "@prisma/client";



const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "himanshu",
      email: "himanshu2001@gmail.com",
      password: "1234",
      age: 23,
      city: "delhi",
    },
  });
}

createUser();

console.log("hi there");
