const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();
const JWT_SECRET = "123215324343432";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(cors());

const users = [];
function auth(req, res, next) {
  const token = req.headers["token"];
  console.log("TOKEN IS PRESENT", req.headers["token"]);
  const decodedData = jwt.verify(token, JWT_SECRET);
  if (decodedData.username) {
    req.username = decodedData.username;
    next();
  } else {
    res.json({
      message: "You are not logged in",
    });
  }
}
app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/public/index.html");
});
app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  users.push({
    username: username,
    password: password,
  });
  console.log(users);
  console.log("User added to DB");
  res.json({
    message: "User added to DB",
    users: users,
  });
});

// app.use((req, res, next) => {
//   const token = req.header.token;
//   const { username, password } = req.body;
//   const decodedToken = jwt.verify(token, JWT_SECRET);
//   if (decodedToken.username) {
//     const user = users.find(
//       (user) => user.username == username && user.password == password
//     );
//   } else {
//     return res.json({
//       message: "Invalid Token",
//     });
//   }
//   next();
// });

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username == username);
  console.log(user);
  if (!user) {
    res.json({
      message: "The user is not present in database",
    });
  }

  users.map((user) => {
    if (user.username == username && user.password == password) {
      const token = jwt.sign(
        {
          username: username,
        },
        JWT_SECRET
      );
      // res.header("jwt", token);
      // res.header("username", username);
      res.json({
        token: token,
      });
    }
  });
});
app.post("/me", auth, (req, res) => {
  //   const token = req.headers.token;
  //   const decode = jwt.verify(token, JWT_SECRET);

  //   const username = decode.username;
  const user = users.find((user) => {
    if (user.username == req.username) {
      return user;
    }
  });
  if (!user) {
    res.json({
      message: "Invalid Token",
    });
  } else {
    res.json(user);
  }
});

app.listen(3000, (err) => {
  if (err) {
    console.log("Cannot connect to Port", 3000);
  } else {
    console.log("Connected to Port", 3000);
  }
});
