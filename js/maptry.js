const input = [2, 3, 4, 5, 6, 7];
const ans = input.map((i) => {
  return i * 2;
});

console.log(ans);

const ans2 = input.filter((i) => {
  if (i % 2 == 0) return true;
  return false;
});

console.log(ans2);
