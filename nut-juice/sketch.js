let flowFeild;
let vehicles = [];
let zoff = 0

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    // vehicle = new Vehicle(320, 180);
    flowFeild = new FlowField(10);
    // background(255);

    for (let i = 0; i < 1000; i++) {
        let randomLocation = createVector(Math.floor(random(0, window.innerWidth)), Math.floor(random(0, window.innerHeight)));
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }

}

function draw() {
    background(255, 20);
    vehicles.forEach(vehicle => {
        vehicle.follow(flowFeild);
        vehicle.run();
    })
    // flowFeild.displayFlowFeild();


    flowFeild.nextStep(zoff);
    zoff += 0.01;

}

function mouseClicked() {
    console.log(flowFeild.field);

}
