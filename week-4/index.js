//fs is already available with nodejs npm  files
//path and http as well

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "a.txt");
fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log(__dirname);

console.log(path.join(__dirname, "index.js"));
