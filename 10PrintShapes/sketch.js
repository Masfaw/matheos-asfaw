
let resolution = 50;
let cols = Math.floor(window.innerWidth / resolution);
let rows = Math.floor(window.innerHeight / resolution);
let threshold = Math.random();

function setup() {
    console.log({ threshold: threshold });
    // noStroke();
    fill(0);

    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    background(255);
    // drawCorners();
    // drawKites();
    drawArcs();



    let testX = 200;
    let testY = 200;
}



function draw() {

}

function mouseClicked() {
    console.log("Hello there 1 ", width, window.innerWidth)
    console.log("Hello there 2 ", { cols, rows })
}

function drawArcs() {
    noFill();

    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            let locX = x * resolution;
            let locY = y * resolution;
            let size = resolution;
            if (random(1) < threshold) {
                arc(locX, locY, size, size, 0, HALF_PI, OPEN);
                arc(locX + resolution, locY + resolution, size, size, PI, PI + HALF_PI, OPEN);
            } else {
                arc(locX + resolution, locY, size, size, HALF_PI, PI, OPEN);

                arc(locX, locY + resolution, size, size, PI + HALF_PI, 0, OPEN);
            }
        }
    }
}

function drawKites() {
    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            let locX = x * resolution;
            let locY = y * resolution;
            if (random(1) < threshold) {
                fill(0)
                triangle(locX, locY,
                    locX, locY + (resolution / 2),
                    locX + (resolution / 2), locY);
                triangle(locX + resolution, locY + resolution,
                    locX, locY + (resolution / 2),
                    locX + (resolution / 2), locY);
            } else {
                line(locX, locY + resolution, locX + resolution, locY);
            }
        }
    }
}


function drawCorners() {


    for (let x = 0; x < cols; x++) {
        for (let y = 0; y < rows; y++) {
            noFill();
            let locX = x * resolution;
            let locY = y * resolution;
            let rand = random(1);
            if (rand < 0.9) {
                fill(0);
            }
            if (rand > 0.6) {
                if (rand < threshold) {
                    triangle(locX, locY,
                        locX, locY + (resolution / 2),
                        locX + (resolution / 2), locY);

                    triangle(locX + resolution, locY + resolution,
                        locX + resolution, locY + (resolution / 2),
                        locX + (resolution / 2), locY + resolution);
                } else {

                    triangle(locX + resolution, locY,
                        locX + resolution, locY + (resolution / 2),
                        locX + (resolution / 2), locY);

                    triangle(locX, locY + resolution,
                        locX, locY + (resolution / 2),
                        locX + (resolution / 2), locY + resolution);

                }
            }
            noFill();
        }
    }
}