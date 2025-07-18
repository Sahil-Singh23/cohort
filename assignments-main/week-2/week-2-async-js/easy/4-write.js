const fs = require("fs");

fs.writeFile("a.txt", "Hello from Sahil", function () {
  console.log("written to file");
});
