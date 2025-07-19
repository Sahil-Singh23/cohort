var ctr = 1;
function add() {
  var ele = document.querySelector("input");
  var val = ele.value;

  if (val) {
    var newTodo = document.createElement("div");
    newTodo.setAttribute("id", ctr);
    var todoText = document.createElement("span");
    todoText.innerHTML = val;
    var delBut = document.createElement("button");
    delBut.innerHTML = "delete";
    newTodo.appendChild(todoText);
    newTodo.appendChild(delBut);
    document.getElementById("todos").appendChild(newTodo);
    ele.value = "";
    ctr = ctr + 1;
  }
}
function del(ide) {
  var ele = document.getElementById(ide);
  ele.remove();
  ctr--;
}
