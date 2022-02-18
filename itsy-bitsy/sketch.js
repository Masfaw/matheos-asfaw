let flowField;
let vehicles = [];
let timer = 0;
let util = new Util();
let quadTree;
let rainPoints = [];
let attractorPoints = []
let looping = false;

let renderOptions = {
    strokeColor: 0,
    renderBoundary: true ,
    boundaryStroke: 2,
    renderPoints: false,
    pointsStroke:10,
    divisor:1.6
};

let dragPoints = [];
let quadTreeBoundary;

function setup() {
    let resolution = 10;

    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);

    let xLoc = (window.innerWidth /2);
    let yLoc = (window.innerHeight /2) ;

    quadTreeBoundary = new QuadTreeRectBoundary(xLoc, yLoc, xLoc-2, yLoc-2);

    

    for(let i = 0 ; i < 10 ; i ++ ) {
        let xLoc = random(window.innerWidth)
        let yLoc = random(window.innerHeight)
        let radius = random(80, 100);
        let strength = random(.1 , .5);
        let newAttractor = new Attractor(xLoc, yLoc, radius, strength);
        attractorPoints.push(newAttractor);
        // let newPoint = new QuadTreePoint(Math.random() * window.innerWidth, Math.random() * window.innerHeight);
        // quadTree.insert(newPoint);

    }

    let numOfRainPoints = 200; // max is 12,000
    // let speed =  createVector(0,random(5))
    for (let i = 0; i < numOfRainPoints; i++) {
        let x = random(window.innerWidth);
        let y = -1 * random(window.innerHeight);
        let speed = createVector(0,1.5)
        let rainPoint = new Rain(x, y,speed)
        rainPoints.push(rainPoint)
    }


    document.body.style.overflow = 'hidden';
}

function draw() {
    background(255, 5);

    quadTree = new QuadTree(quadTreeBoundary, 4);

    // insert points to QT 
    rainPoints.forEach(rainPoint => {
        let xLoc = rainPoint.position.x;
        let yLoc = rainPoint.position.y;

        let qtPoint = new QuadTreePoint(xLoc, yLoc, rainPoint);
        quadTree.insert(qtPoint);
    })
    // quadTree.render(renderOptions);

    // find and apply forces to points from the attractors/repulsors

    attractorPoints.forEach(attractor => {
        // attractor.render();
        let foundPoints =  quadTree.query(attractor.boundary)
        foundPoints.forEach(point => {
            // point.payload.render({size : 3})
            point.payload.seek(attractor.position)
        })
       
    })
    

    
    // for each rainPOint call the run function 
    rainPoints.forEach(rainPoint => {
        rainPoint.run();
        rainPoint.render({});
    })

    // // let queryBoundary = new QuadTreeRectBoundary(mouseX, mouseY, 160, 90); 
    // let circleBoundary = new QuadTreeCircleBoundary(mouseX, mouseY, 200);
    // let queryBoundaryRenderOPtions = {
    //     strokeColor: [255, 0 ,0],
    //     renderBoundary: true ,
    //     boundaryStroke: 2,
    // }

    // // queryBoundary.render(queryBoundaryRenderOPtions);
    // circleBoundary.render(queryBoundaryRenderOPtions);

    // let pointsInBox = quadTree.query(circleBoundary);
    // push();
    // stroke(0,255,0);
    // strokeWeight(8);
    // pointsInBox.forEach(p => {
        
    //     // console.log(p);

    //     point(p.xLoc, p.yLoc);
        
    // });
    // pop();
}