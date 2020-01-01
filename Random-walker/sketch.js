var walker;
function setup() {
    let walkerSize = 5;
    let width = Math.floor(window.innerWidth / walkerSize) * walkerSize - 20;
    let height = Math.floor(window.innerHeight / walkerSize) * walkerSize - 20;
    createCanvas(width, height);
    background(255);
    walker = new Walker(walkerSize, width, height);
    console.log(window.innerWidth, window.innerHeight);
}

function draw() {
    walker.walk();
    walker.drawWalker();
}