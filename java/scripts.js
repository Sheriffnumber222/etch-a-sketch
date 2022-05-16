const container = document.querySelector("#etch-a-sketch-box");

/*This function generates a grid based off of width and height inputed*/
function createGrid (width, height) {
    while (container.firstChild) {
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
}

createGrid (24, 24);

const newGridBtn = document.querySelector("#new-grid");

/* When New Canvas button is pressed. Ask for brush width and caculuate and generate a grid based off that number.*/
newGridBtn.addEventListener("click", () => {
    let brushSize = Number(prompt("Brush Pixel Size? (800px MAX, 8px min)", 100));
    let brushCheck = brushSize;
    console.log(brushCheck);
    if (isNaN(brushCheck) || brushCheck > 800 || brushCheck < 8) {
        alert("Invalid Input");
        return; 
    } else {
        console.log(brushSize);
        let gridSize = Math.round(800 / brushSize);
        createGrid (gridSize, gridSize);
        
    /* This code is so the drawing event listener is applied to new grid*/
        const gridSquares = document.querySelectorAll(".etch-row");
        gridSquares.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.classList.add("etch-row-on");
            });
        });
    }
});


/* This will listen for when the mouse hovers over any sqaure in the
grid. When it does, it changes the class of the targeted square 
which will make it black, creating a painting effect*/
const gridSquares = document.querySelectorAll(".etch-row");
gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("etch-row-on");
    });
});