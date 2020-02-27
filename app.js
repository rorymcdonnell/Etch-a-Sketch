// function createGrid(x) {
//   for (var i = 0; i < x; i++) {
//     for (var j = 0; j < x; j++) {
//       const div = document.createElement("div");
//       div.classList.add('box');
//       let sqrWidth = 1 / x * 600 + "px";
//       let sqrHeight = 1 / x * 600 + "px";
//       div.style.width = sqrWidth;
//       div.style.height = sqrHeight;
//       div.style.background = "white";
//       document.getElementById("container").appendChild(div);
//     }
//     var newLines = document.createElement("br");
//     document.getElementById("container").appendChild(newLines);
//   }
// }
// createGrid(16); // default case
let containerDiv = document.querySelector("#container");



function createGrid(resolution) {
  containerDiv.setAttribute('style',
    `grid-template-rows: repeat(${resolution}, 1fr); grid-template-columns: repeat(${resolution}, 1fr)`);

  for (let i = 0; i < resolution; i++) {
    for (let j = 0; j < resolution; j++) {
      let tempDivItem = document.createElement("div");
      tempDivItem.id = `${i + 1}-${j + 1}`;
      tempDivItem.className = `sketchItem`;
      containerDiv.appendChild(tempDivItem);
    }
  }
  const sketchCells = document.querySelectorAll('.sketchItem');
  sketchCells.forEach(cell => cell.addEventListener("mouseenter", sketchEnter));
  sketchCells.forEach(cell => cell.addEventListener("mouseleave", sketchExit));

  const addColour = document.querySelector('.colour');
  addColour.addEventListener('click', randomColour);
}

function sketchEnter(e) {
  const cell = document.getElementById(`${e.target.id}`);
  if (cell.classList.contains("draw") == false) { cell.classList.add("draw") };
  cell.classList.add("hover");
}

function sketchExit(e) {
  const cell = document.getElementById(`${e.target.id}`);
  cell.classList.remove("hover");
}

function randomColour(e) {
  const sketchCells = document.querySelectorAll('.sketchItem');

  sketchCells.forEach(cell => cell.addEventListener("mouseenter", sketchColourEnter));
  // sketchCells.forEach(cell => cell.addEventListener("mouseleave", sketchColourExit));

  function sketchColourEnter(e) {
    const cell = document.getElementById(`${e.target.id}`);
    if (cell.classList.contains("random-colour") == false) { cell.classList.add("random-colour") };
    cell.classList.add("hover");
    cell.style.background = `rgb(${someNumber1}, ${someNumber2},${someNumber3})`;

  }
}



someNumber1 = Math.floor(Math.random() * 255);
someNumber2 = Math.floor(Math.random() * 255);
someNumber3 = Math.floor(Math.random() * 255);



createGrid(64);

