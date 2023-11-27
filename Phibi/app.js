function placeDiv(d, x_pos, y_pos) {
    d.style.position = "absolute";
    d.style.left = x_pos + "px";
    d.style.top = y_pos + "px";
}

const mousePosText = document.getElementById("mouse-pos");
let mousePos = { x: undefined, y: undefined };
let shape = document.getElementById("shape");
let delayCounter = 0;

window.addEventListener("mousemove", (event) => {
    delayCounter++;
    if (delayCounter % 5 == 0) {
        mousePos = { x: event.clientX, y: event.clientY };
        placeDiv(shape, mousePos.x, mousePos.y);
    }
});