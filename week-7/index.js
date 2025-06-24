const bcrypt = require("bcrypt");
const express = require("express");
const db = require("./db.js"); // Corrected the path
const dotenv = require("dotenv");
const User = require("./user_model.js");
const Todos = require("./todo_model.js");
const jwt = require("jsonwebtoken");
const { z } = require("zod");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Fallback to 3000 if PORT is not defined

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

async function auth(req, res, next) {
  try {
    const token = req.headers.token;
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.json({
        message: "Invalid Token",
      });
    }
    const user = await User.findById(decodedToken.id);
    if (!user) {
      return res.json({
        message: "User is not Signup ",
      });
    }
    req.user = user;
    next();
  } catch (err) {
    console.log("Error Message in auth", err.message);
  }
}

app.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(403).json({
        message: "Incorrect Credentials",
      });
    }

    // Compare provided password with hashed password in the database
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(403).json({
        message: "Incorrect Credentials",
      });
    }

    // Generate a JWT token
    const token = jwt.sign(
      {
        id: user._id.toString(),
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" } // Set token expiration time
    );

    console.log(user);

    res.json({
      message: "User is Signed In",
      token: token,
    });
  } catch (error) {
    console.error("Error during sign-in:", error);
    res.status(500).json({
      message: "An error occurred during sign-in",
    });
  }
});

app.post("/signup", async (req, res) => {
  const requiredBody = z.object({
    email: z.string().min(3).max(100).email(),
    name: z.string().min(3).max(100),
    password: z.string().min(3).max(30),
  });
  // const parsedData = requiredBody.parse(req.body);
  const parsedDataWithSuccess = requiredBody.safeParse(req.body);
  if (!parsedDataWithSuccess.success) {
    res.json({
      message: "Incorrect format",
      error: parsedDataWithSuccess.error,
    });
  }
  try {
    const { name, email, password } = req.body;
    console.log("I am inside signup function", name, email, password);

    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    console.log(existingUser);

    if (existingUser) {
      return res.status(400).json({
        message: "User already has an account",
      });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    await User.create({
      name: name,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Account created successfully",
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({
      message: "An error occurred during signup",
    });
  }
});

app.post("/todo", auth, async (req, res) => {
  try {
    const { title } = req.body;
    await Todos.create({
      title: title,
      done: false,
      userId: req.user._id,
    });
    res.json({
      message: "todo Created",
    });
  } catch (err) {
    console.log("Error code :", err.message);
    res.json({
      message: "Error is in /todo controller",
    });
  }
});

app.put("/todo", auth, async (req, res) => {
  const { done, todoId, title } = req.body; // Assuming `todoId` is passed in the body to identify the todo
  try {
    if (!todoId) {
      return res.status(400).json({ message: "Todo ID is required" });
    }

    const updatedTodo = await Todos.findOneAndUpdate(
      { _id: todoId, userId: req.user._id }, // Match the todo by its ID and the user's ID
      { $set: { title: title, done: done } }, // Update the `done` field
      { new: true } // Return the updated document
    );

    if (!updatedTodo) {
      return res
        .status(404)
        .json({ message: "Todo not found or unauthorized" });
    }

    res.json({
      message: "Todo updated successfully",
      todo: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating todo",
      error: error.message,
    });
  }
});

app.get("/todos", auth, async (req, res) => {
  try {
    // Fetch todos for the authenticated user
    const todos = await Todos.find({ userId: req.user._id });

    res.json({
      message: "All todos retrieved successfully",
      todos,
    });
  } catch (error) {
    // Handle potential errors
    res.status(500).json({
      message: "Error retrieving todos",
      error: error.message,
    });
  }
});

// Start the server
app.listen(PORT, (err) => {
  if (err) {
    console.error("Cannot start the server:", err);
  } else {
    console.log("Server is running on port", PORT);
    // console.log("MongoDB URI:", process.env.MONGO_URI);
  }
  db(); // Ensure db() is implemented to connect to the database
});
