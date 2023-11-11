const canvas = document.querySelector("#canvas");

for(i = 0; i <16; i++){
    const row = document.createElement("div");
    row.setAttribute('class', 'row');
    canvas.appendChild(row);
    for (j = 0; j < 16; j++){
        const block = document.createElement("div");
        block.setAttribute('class', 'block');
        row.appendChild(block);
    };
}
let isMouseDown = false;
document.addEventListener('mousedown', function(e) {
    if (e.button ===0) {
        isMouseDown = true;
    }
});
document.addEventListener('mouseup', function() {
    isMouseDown = false;
});

let boxes = document.querySelectorAll(".block");

boxes.forEach((box) => {

    box.addEventListener('mouseover', function() {
        if (isMouseDown){
            box.style.background = 'blue';
        }
    })

}
);
