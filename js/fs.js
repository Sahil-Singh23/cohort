const fs = require("fs");

const s = fs.readFileSync("a.txt", "utf-8");
console.log(s);
