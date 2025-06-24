const express = require("express");
const jwt = require("jsonwebtoken");
const zod = require("zod");
const app = express();
const secret = "helloworldAur";
const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);
function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign({ username }, secret);
  return signature;
}

function decode(token) {
  //true,false
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  } else {
    return false;
  }
}

app.listen(3000, (err) => {
  if (err) {
    console.log("Cannot Connect to prompt", 3000);
  } else {
    console.log("Connected to Server", 3000);
  }
});

const ans = signJwt("hero@gmail.com", "112323");
console.log(ans);
console.log(decode(ans));
