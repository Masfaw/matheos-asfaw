let flowFeild;
let zoff = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    let largerSide = window.innerWidth > window.innerHeight ? windowWidth : window.innerHeight;
    let gridSizeONLargerAxis = Math.floor(largerSide/ 150); // this is because i want 100 to be the standard grid size
    console.log({gridSizeONLargerAxis});
    flowFeild = new FlowField(gridSizeONLargerAxis);
}

function draw() {
    background(255);
    flowFeild.displayFlowFeild();
    flowFeild.nextStep(zoff);
    zoff += 0.01;
}


function mouseClicked() {
    noLoop();
}
