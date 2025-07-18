const fs = require("fs");

function done(err, data) {
  console.log(data);
}
fs.readFile("a.txt", "utf-8", done);

for (var i = 0; i < 1000000; i++) {
  console.clear();
  console.log(i);
}
