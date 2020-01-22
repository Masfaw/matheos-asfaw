let flowFeild;
let zoff = 0

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    flowFeild = new FlowField(50);
}

function draw() {
    background(255, 5);
    vehicles.forEach(vehicle => {
        vehicle.follow(flowFeild);
        vehicle.run();
    })
    flowFeild.displayFlowFeild();
    flowFeild.nextStep(zoff);
    zoff += 0.01;
}


