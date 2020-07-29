
let resolution = 10;
let grid;
let rowToRenderIndex = 1;
let tilesAcross = 20;
let tilesDown = 20;

let rule = 1;

let util = new Util();
let tiles = util.make2dArray(tilesAcross);
function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    background(255);

    generateTiles();
    drawTiles();

}



function draw() {

}

function generateTiles() {
    for (let i = 0; i < tilesAcross; i++) {
        for (let j = 0; j < tilesDown; j++) {
            if (rule == 1) {
                tiles[i][j] = Math.floor(Math.round(Math.random() * 3));
            } else if (rule == 2) {
                tiles[i][j] = (i + j) % 4;
            } else if (rule == 3) {
                tiles[i][j] = (i * j) % 4;
            } else if (rule == 4) {
                tiles[i][j] = Math.round(2 * Math.sin((i + j) * 0.5) + 2);
            } else {
                tiles[i][j] = Math.round((Math.pow(i, j)) / 10 % 40);
            }
        }
    }
}
function drawTiles() {
    let x, y, s;
    s = window.innerWidth / tilesAcross + 1;
    for (let i = 0; i < tilesDown; i++) {
        for (let j = 0; j < tilesAcross; j++) {
            x = window.innerWidth * i / tilesAcross;
            y = window.innerHeight * j / tilesDown;


            fill(255);
            noStroke();
            square(x, y, s);

            stroke(0);
            strokeWeight(100 / tilesAcross);
            if (tiles[i][j] == 0) {
                arc(x, y, s, s, 0, Math.PI / 2);
                arc(x + s, y + s, s, s, Math.PI, 3 * Math.PI / 2);
            } else if (tiles[i][j] == 1) {
                arc(x + s, y, s, s, Math.PI / 2, Math.PI);
                arc(x, y + s, s, s, 3 * Math.PI / 2, Math.PI * 2);
            } else if (tiles[i][j] == 2) {

                line(x, y + s / 2, x + s, y + s / 2);
                line(x + s / 2, y, x + s / 2, y + 6 * s / 20);
                line(x + s / 2, y + 14 * s / 20, x + s / 2, y + s);
            } else {
                line(x + s / 2, y, x + s / 2, y + s);
                line(x, y + s / 2, x + 6 * s / 20, y + s / 2);
                line(x + 14 * s / 20, y + s / 2, x + s, y + s / 2);
            }

        }
    }
}

function mouseClicked() {
    console.log("Hello there")
}
