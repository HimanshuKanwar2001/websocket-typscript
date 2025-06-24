const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "bhaimerekyahaalhai123kahd";

const app = express();

app.use(express.json());

const users = [];

function generateToken() {
  return Math.floor(Math.random() * 10000000000000000);
}

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  res.json({ message: "You have Signed Up" });
  console.log(users);
});

app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  let foundUser = null;
  users.map((u) => {
    if (u.username == username && u.password == password) {
      foundUser = u;
    }
  });

  console.log(foundUser);
  if (foundUser) {
    const token = jwt.sign(
      {
        username: foundUser.username,
      },
      JWT_SECRET
    );
    // foundUser.token = token;
    res.json({
      msg: "i am inside foundUser condition",
      token: token,
    });
  } else {
    res.json({ message: "Invalid username or password" });
  }

  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, JWT_SECRET);

  const username = decodedInformation.username;

  foundUser = null;
  users.map((user) => {
    if (user.username == username) {
      foundUser = user;
    }
  });

  console.log(foundUser);
  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
    });
  } else {
    res.json({
      message: "Token invalid",
    });
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Cannot connect to server");
  }
  console.log("Connected to server 3000");
});
