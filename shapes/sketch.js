
let resolution = 5;
let cols = Math.floor(window.innerWidth / resolution);
let rows = Math.floor(window.innerHeight / resolution);


function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    background(255);


}



function draw() {
    background(255);
    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            fill((y * x) % 255)
            noStroke();
            square(x * resolution, y * resolution, resolution);
        }
    }

}

function mouseClicked() {
    console.log("Hello there 1 ", width, window.innerWidth)
    console.log("Hello there 2 ", { cols, rows })
}
