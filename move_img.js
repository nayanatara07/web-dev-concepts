var flower;
var timer;

function initimg() {
    flower = document.getElementById("flower");
    moveImg();
}

function moveImg() {
    var currentTop = parseInt(flower.style.top);
    var currentLeft = parseInt(flower.style.left);

    if (!currentTop) {
        currentTop = 0;
    }
    if (!currentLeft) {
        currentLeft = 0;
    }

    var targetTop = window.innerHeight - flower.clientHeight; // Bottom of the screen
    var targetLeft = (window.innerWidth - flower.clientWidth) / 2; // Middle of the screen
    var speed = 2;

    if (currentTop < targetTop || currentLeft < targetLeft) {
        // Move towards the target position
        if (currentTop < targetTop) {
            flower.style.top = currentTop + speed + "px";
        }
        if (currentLeft < targetLeft) {
            flower.style.left = currentLeft + speed + "px";
        }
        timer = setTimeout(moveImg, 20);
    } else {
        // Stop the movement when the target position is reached
        clearTimeout(timer);
    }
}