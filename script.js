const ask = document.querySelector("#ask");

sizeButton = document.querySelector('#resize');
clearButton = document.querySelector('#clear');

let canvasSize = 16;

sizeButton.addEventListener('click', () => {
    canvasSize = prompt("Enter the size of the canvas");

    drawCanvas(canvasSize);
});

clearButton.addEventListener('click', () => {
    let boxes = document.querySelectorAll(".block");
    boxes.forEach((box) => {
        box.style.background = 'white';
    });
})



function drawCanvas(size) {
    const canvas = document.querySelector("#canvas");

    //remove all elements
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }

    //draw the canvas using the size
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.setAttribute('class', 'row');
        canvas.appendChild(row);
        for (let j = 0; j < size; j++) {
            const block = document.createElement("div");
            block.setAttribute('class', 'block');
            block.style.background = 'hsl(240, 100%, 100%)';
            block.dataset.lightness = 100;
            row.appendChild(block);
        };
    }

    //color the canvas
    let boxes = document.querySelectorAll(".block");
    boxes.forEach((box) => {

        box.addEventListener('mouseover', function () {
            if (isMouseDown) {
                let lightness = parseInt(box.dataset.lightness);
                lightness = Math.max(lightness - 10, 50);
                box.dataset.lightness = lightness;
                box.style.background = `hsl(240, 100%, ${lightness}%)`;
            }
        })
    }
    );
}
drawCanvas(16);

let isMouseDown = false;

document.addEventListener('mousedown', function (e) {
    if (e.button === 0) {
        isMouseDown = true;
    }
});

document.addEventListener('mouseup', function () {
    isMouseDown = false;
});


