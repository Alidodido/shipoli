function placeDiv(d, x_pos, y_pos) {
    d.style.position = "absolute";
    d.style.left = x_pos + "px";
    d.style.top = y_pos + "px";
}

let mousePos = { x: undefined, y: undefined };
let shape = document.getElementById("shape");
let delayCounter = 0;

window.addEventListener("mousemove", (event) => {
    delayCounter++;
    if (delayCounter % 5 == 0) {
        mousePos = { x: event.clientX, y: event.clientY };
        placeDiv(shape, mousePos.x, mousePos.y);
        if (shape.offsetTop < window.innerHeight / 2) {
            shape.classList.add("active");
        } else {
            shape.classList.remove("active");
        }
    }
});

var defaultMod = 1;
var body = document.body;
var changeModButton = document.getElementById("changeModer");

function changeMod(){
    defaultMod *= -1;

    if(defaultMod==1){
        body.style.background= "#efefef";
        changeModButton.innerHTML = "🌞";
    }else{
        body.style.background = "black";
        changeModButton.innerHTML = "🌚";
    }
}