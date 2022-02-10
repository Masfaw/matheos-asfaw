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
    renderPoints: true,
    pointsStroke:4,
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

    for(let i = 0 ; i < 2000 ; i ++ ) {
        let newPoint = new QuadTreePoint(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        allPoints.push(newPoint);
        quadTree.insert(newPoint);

    }

    document.body.style.overflow = 'hidden';
}

function draw() {
    background(255);
    quadTree.render(renderOptions);

    // let queryBoundary = new QuadTreeRectBoundary(mouseX, mouseY, 160, 90); 
    let circleBoundary = new QuadTreeCircleBoundary(mouseX, mouseY, 200);
    let queryBoundaryRenderOPtions = {
        strokeColor: [255, 0 ,0],
        renderBoundary: true ,
        boundaryStroke: 2,
    }

    // queryBoundary.render(queryBoundaryRenderOPtions);
    circleBoundary.render(queryBoundaryRenderOPtions);

    let pointsInBox = quadTree.query(circleBoundary);
    push();
    stroke(0,255,0);
    strokeWeight(8);
    pointsInBox.forEach(p => {
        
        // console.log(p);

        point(p.xLoc, p.yLoc);
        
    });
    pop();
}


// function mouseDragged() {
//         let newPoint = new QuadTreePoint(mouseX, mouseY);
//         allPoints.push(newPoint);
//         quadTree.insert(newPoint);
//     return false;
// }

