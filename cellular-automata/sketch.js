let flowfield;
let vehicles = [];
let zoff = 0;
let timer = -501;


let capturer;
let btn;
let counter = 1;
function setup() {

    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    // let cell = new Cell(500, 500, 1000, [145, 233, 242]);
    // console.log("Darwing the cells");
    // cell.drawCell();
    // Darw a grid of squares 
    // start with a static set with one element at the center in the first row and do the rest of the rows from that

}

function draw() {
    background(0, 50);
    let cell = new Cell(500, 500, 10, [145, 233, 242]);
    cell.drawCell();
}



function mouseClicked() {
    console.log("Hello there")
}
