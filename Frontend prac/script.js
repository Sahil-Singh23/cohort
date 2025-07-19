var stopWatchElement = document.querySelector("#watch");

var c = 1;
function Callback() {
  stopWatchElement.innerHTML = c;
  c++;
}
function del() {
  var todoElements = document.querySelectorAll(".todo1");
  todoElements.forEach((element) => element.remove());
}
setInterval(Callback, 1000);
