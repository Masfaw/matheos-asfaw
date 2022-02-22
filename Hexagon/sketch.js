
let resolution = 20;
let cols = Math.floor(window.innerWidth / resolution);
let rows = Math.floor(window.innerHeight / resolution);
let threshold = Math.random();

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    background(255);
}



// function draw() {

// }

function mouseClicked() {
    let hexagon = new Hexagon(createVector(mouseX, mouseY), 50);
    // hexagon.renderFlatHex({});
    hexagon.renderPointyHex({});
}
