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

function changeMod() {
    defaultMod *= -1;

    body.classList.toggle('dark');
    if (defaultMod == 1) {
        changeModButton.innerHTML = "🌞";
    } else {
        changeModButton.innerHTML = "🌚";
    }
}

// coursor
(function () {
    var follower, init, mouseX, mouseY, positionElement, timer;

    follower = document.getElementById('follower');

    mouseX = (event) => {
        return event.clientX;
    };

    mouseY = (event) => {
        return event.clientY;
    };

    positionElement = (event) => {
        var mouse;
        mouse = {
            x: mouseX(event),
            y: mouseY(event)
        };
        follower.style.top = mouse.y + 'px';
        return follower.style.left = mouse.x + 'px';
    };

    timer = false;

    window.onmousemove = init = (event) => {
        var _event;
        _event = event;
        return timer = setTimeout(() => {
            return positionElement(_event);
        }, 1);
    };

}).call(this);
