let walkers = [];
let currentWalker;
let resolution = 15;
let cols = Math.floor(window.innerWidth / resolution);
let rows = Math.floor(window.innerHeight / resolution);
let pointCollection = new PointCollection(rows, cols);
let allPoints = [...pointCollection.freePointsArray]

//Vangoh colors
// let walkerColors = [
//     [2, 40, 115],// dark blue
//     [3, 57, 116], // less dark blue
//     [121, 196, 242], // sky blue
//     [145, 233, 242], // baby blue
//     [242, 233, 109] // yellow
// ];


// RGB and white colors
// let walkerColors = [
//     [255, 0, 0],
//     [0, 255, 0],
//     [0, 0, 255],
//     [255, 255, 255]
// ];

// nord colors
let walkerColors = [
    [216, 222, 233],
    [229, 233, 240],
    [143, 188, 187],
    [136, 192, 208],
    [129, 161, 193],
    [191, 97, 106],
    [208, 135, 112],
    [235, 203, 139],
    [163, 190, 140],
    [180, 142, 173]
];


function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    let backgroundColors = [
        [46, 52, 64],
        [59, 66, 82],
        [67, 76, 94],
    ];
    background([46, 52, 64]);
    currentWalker = creatNewWalker();
    walkers.push(currentWalker);
    // frameRate(1)

}

function draw() {
    // background([46, 52, 64]);
    if (pointCollection.freePointsArray.length >  0) {
        if (!currentWalker.walk(pointCollection)) {
            currentWalker = creatNewWalker();
            if (currentWalker) {
                walkers.push(currentWalker)
            }
        }
    }
    // drawGrid(allPoints);
    walkers.forEach(walker => {
        walker.render()

    })
}

function mousePressed() {
    loop();
}

function creatNewWalker() {
    let startLoc = pointCollection.getRandomFreePoint();
    if (!startLoc) {
        return false
    }
    let colorIdx = Math.floor(Math.random() * walkerColors.length);
    return new Walker(startLoc,cols, rows, resolution, walkerColors[colorIdx]);
}

function drawGrid(points) {
    push();
    noFill();
    // noStroke();
    points.forEach(ele => {
        let point  = ele;
        let xLoc =( point[0] * resolution) + resolution /2;
        let yLoc =(point[1] * resolution) + resolution/ 2;
        rectMode(CENTER)
        rect(xLoc, yLoc, resolution, resolution);
        ellipse(xLoc, yLoc, 5);
        
    });
    pop();
}

