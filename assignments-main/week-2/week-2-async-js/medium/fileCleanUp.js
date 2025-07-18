const fs = require("fs");

var str = fs.readFileSync("a.txt", "utf-8");

var toWrite = str.trim().split(/\s+/).join(" ");

fs.writeFile("a.txt", toWrite, function () {
  console.log("done ");
});
