let flowField;
let vehicles = [];
let timer = 0;
let util = new Util();
let quadTree;
let allPoints = []
let looping = false;

let renderOptions = {
    strokeColor: 0,
    renderBoundary: true ,
    boundaryStroke: 2,
    renderPoints: false,
    pointsStroke: 0,
    divisor:1.6
};

let dragPoints = [];

function setup() {
    let resolution = 10;

    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);

    let xLoc = (window.innerWidth /2);
    let yLoc = (window.innerHeight /2) ;

    let quadTreeBoundary = new QuadTreeRectBoundary(xLoc, yLoc, xLoc-2, yLoc-2);
    quadTree = new QuadTree(quadTreeBoundary, 1);

    document.body.style.overflow = 'hidden';
}

function draw() {
    console.log("Drawing");
    background(255);
    quadTree.render(renderOptions);
}


function mouseDragged() {
        let newPoint = new QuadTreePoint(mouseX, mouseY);
        allPoints.push(newPoint);
        quadTree.insert(newPoint);
    return false;
}

