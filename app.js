const moveRandom = document.querySelector("#move-random");

function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 80 + 10) + "%";
    elm.style.left = Math.floor(Math.random() * 80 + 10) + "%";
}

// On no3.html, make the "No" button move on hover
moveRandom.addEventListener("mouseenter", function () {
    moveRandomEl(moveRandom);
});

