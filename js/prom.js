// function setTimeoutpromisified(ms) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, ms);
//   });
// }

// async function solve() {
//   await setTimeoutpromisified(1000);
//   console.log("hi");
//   await setTimeoutpromisified(3000);
//   console.log("hello");
//   await setTimeoutpromisified(5000);
//   console.log("hello there");
// }

// solve();

const fs = require("fs");

function readFileAsync(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, "utf-8", function (err, data) {
      if (err) {
        return reject("file not found");
      } else {
        return resolve(data);
      }
    });
  });
}

readFileAsync("b.txt")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (e) {
    console.log(e);
  });
readFileAsync("xyz.txt")
  .then(function (data) {
    console.log(data);
  })
  .catch(function (e) {
    console.log(e);
  });
