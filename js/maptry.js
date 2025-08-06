const axios = require("axios");

async function ax() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments/2"
  );
  const json = await response.json();
  console.log(json);
}

nex();
ax();
