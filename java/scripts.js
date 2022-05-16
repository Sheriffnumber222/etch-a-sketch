const container = document.querySelector("#etch-a-sketch-box");

/*This generates an event listener that changes divs to a new class/color. It's like painting! */
function addDrawingToGrid (gridSquares) {
    gridSquares = document.querySelectorAll(".etch-row");
    gridSquares.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.classList.add("etch-row-on");
        });
    });
}

/*This generates a grid of divs*/
function createGrid (width, height) {
    while (container.firstChild) { //deletes previous grid
        container.removeChild(container.firstChild);
    };
    for (i=0; i<width; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("etch-column");
        container.appendChild(newDiv);
        for (z=0; z<height; z++) {
            let newerDiv = document.createElement("div");
            newerDiv.classList.add("etch-row");
            newDiv.appendChild(newerDiv);
        }
    };
    /*Need to regenerate listener to work on new grid*/
    addDrawingToGrid();
}

createGrid (24, 24);

const newGridBtn = document.querySelector("#new-grid");

/* When user presses new canvas button, ask for brush size then caculuate and generate a new grid.*/
newGridBtn.addEventListener("click", () => {
    let brushSize = Number(prompt("Brush Pixel Size? (800px MAX, 8px min)", 100));
    if (isNaN(brushSize) || brushSize > 800 || brushSize < 8) { //reject values that could cause crash
        alert("Invalid Input");
        return; 
    } else {
        console.log(brushSize);
        let gridSize = Math.round(800 / brushSize);
        createGrid (gridSize, gridSize);
    } 
});

