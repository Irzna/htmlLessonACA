const button = document.getElementById("button");

button.addEventListener("click", function () {
  const input = document.getElementById("input");
  const list = document.getElementById("list");

  const newNode = document.createElement("li");
  const newTextContent = document.createTextNode(input.value);
  newNode.appendChild(newTextContent);
  list.appendChild(newNode);
  // list.addEventListener("click", function (e) {
  //  e.stopPropagation();
  input.value = "";

  const li = document.getElementsByTagName("li");
  //console.log(li);
  for (i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
      //   this.style.textDecoration = "line-through";
      //console.log("clik ");
      this.classList.add("line");
    });
  }
});
