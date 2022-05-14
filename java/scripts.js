const container = document.querySelector("#container");

/*This function generates a grid based off of width and height inputed*/
function createGrid (width, height) {
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

createGrid (100, 100);

/* This will listen for when the mouse hovers over any sqaure in the
grid. When it does, it changes the class of the targeted square 
which will make it black, creating a painting effect*/
const gridSquares = document.querySelectorAll(".etch-row");
gridSquares.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.classList.add("etch-row-on");
    });
});