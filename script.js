const container = document.getElementById("container");
const resetBtn = document.getElementById("reset-btn");
const clearBtn = document.getElementById("clear-btn");
const rainbowBtn = document.getElementById("rainbow-btn");
const eraserBtn = document.getElementById("eraser-btn");

let currentMode = "rainbow";
let isMouseDown = false;

// Track mouse state for better drawing
document.addEventListener("mousedown", () => {
    isMouseDown = true;
});

document.addEventListener("mouseup", () => {
    isMouseDown = false;
});

function createGrid(size) {
    container.innerHTML = "";
    
    // Use CSS Grid for perfect alignment
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.opacity = "0";

        // Draw on hover or click and drag
        square.addEventListener("mouseenter", (e) => {
            if (e.buttons === 1 || isMouseDown) {
                drawSquare(square);
            }
        });

        square.addEventListener("mousedown", () => {
            drawSquare(square);
        });

        container.appendChild(square);
    }
}

function drawSquare(square) {
    if (currentMode === "rainbow") {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        
        // Progressive darkening
        let currentOpacity = Number(square.dataset.opacity);
        if (currentOpacity < 1) {
            square.dataset.opacity = Math.min(currentOpacity + 0.1, 1);
            square.style.filter = `brightness(${1 - currentOpacity})`;
        }
    } else if (currentMode === "eraser") {
        square.style.backgroundColor = "white";
        square.dataset.opacity = "0";
        square.style.filter = "brightness(1)";
    }
}

function setMode(mode) {
    currentMode = mode;
    
    // Update button styles
    [rainbowBtn, eraserBtn].forEach(btn => btn.classList.remove("active"));
    
    if (mode === "rainbow") {
        rainbowBtn.classList.add("active");
    } else if (mode === "eraser") {
        eraserBtn.classList.add("active");
    }
}

resetBtn.addEventListener("click", () => {
    let size = Number(prompt("Enter grid size (max 100):"));

    if (size < 1 || size > 100 || isNaN(size)) {
        alert("Please enter a number between 1 and 100");
        return;
    }

    createGrid(size);
});

clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
        square.dataset.opacity = "0";
        square.style.filter = "brightness(1)";
    });
});

rainbowBtn.addEventListener("click", () => {
    setMode("rainbow");
});

eraserBtn.addEventListener("click", () => {
    setMode("eraser");
});

// Initialize
createGrid(16);
setMode("rainbow");
