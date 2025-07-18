// setInterval(Callback, 1000);
var c = 1;
function Callback() {
  console.clear();
  console.log(c);
  c++;
  setTimeout(Callback, 1000);
}

setTimeout(Callback, 1000);
