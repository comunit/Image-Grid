var elements = document.getElementsByClassName("column");

var i;

function three() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = "33.3%";
  }
}

function two() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

function one() {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

//Add active class to current button
var header = document.getElementById("myHeader");
var btns = header.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  })
}