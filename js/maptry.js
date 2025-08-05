function main() {
  fetch("https://jsonplaceholder.typicode.com/comments/1").then(
    async (response) => {
      const json = await response.json();
      console.log(json);
    }
  );
}

async function ax() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments/2"
  );
  const json = await response.json();
  console.log(json);
}

main();
ax();
