// var ctr = 1;
// function add() {
//   var ele = document.querySelector("input");
//   var val = ele.value;

//   if (val) {
//     var newTodo = document.createElement("div");
//     newTodo.setAttribute("id", ctr);
//     var todoText = document.createElement("span");
//     todoText.innerHTML = val;
//     var delBut = document.createElement("button");
//     delBut.innerHTML = "delete";
//     newTodo.appendChild(todoText);
//     newTodo.appendChild(delBut);
//     document.getElementById("todos").appendChild(newTodo);
//     ele.value = "";
//     ctr = ctr + 1;
//   }
// }
// function del(ide) {
//   var ele = document.getElementById(ide);
//   ele.remove();
//   ctr--;
// }

var todos = [];

function addTodo() {
  var val = document.querySelector("input").value;
  todos.push({ title: val });
  document.querySelector("input").value = "";
  render();
}

function render() {
  document.getElementById("todos").innerHTML = ""; // Clear existing todos
  todos.forEach((element, index) => {
    var ele = document.createElement("div");
    var inner = document.createElement("span");
    inner.innerHTML = element.title;
    var button = document.createElement("button");
    button.innerHTML = "Done";
    button.setAttribute("onclick", "delTodo(" + index + ")");
    ele.appendChild(inner);
    ele.appendChild(button);
    document.getElementById("todos").appendChild(ele);
  });
}
function delTodo(index) {
  todos.splice(index, 1);
  render();
}
