let flowFeild;
let zoff = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    flowFeild = new FlowField(15);
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
