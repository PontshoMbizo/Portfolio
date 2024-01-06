
// the typewriter animation

const firstDiv = document.querySelector(".first-line");
const secondDiv = document.querySelector(".second-line");
const textOne = " Hello, I'm Pontsho Mbizo."
const textTwo = " I'm an ECE student at UCT."

function firstLine(firstDiv, textOne, i = 0){
    if (i == textOne.length){
        secondLine(secondDiv, textTwo);
        return;
    }
    firstDiv.textContent += textOne[i];
    setTimeout(() => firstLine(firstDiv, textOne, i + 1), 80);
}
function secondLine(secondDiv, textTwo, i = 0){
    if (i == textTwo.length){return;}
    secondDiv.textContent += textTwo[i];
    setTimeout(() => secondLine(secondDiv, textTwo, i + 1), 80);
}

firstLine(firstDiv, textOne);

// the hamburger menu

const menu = document.getElementById("menu-list");

function openMenu(){
    menu.style.display = "flex";
}

function closeMenu(){
    menu.style.display = "none";
}

// for the portfolio filter


// idea from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements code samples


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}