
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
