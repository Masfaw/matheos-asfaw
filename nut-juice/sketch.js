let flowfield;
let vehicles = [];
let zoff = 0;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    flowfield = new FlowField(10);
    for (let i = 0; i < 1000; i++) {
        let randomLocation = createVector(
            Math.floor(random(0, window.innerWidth)),
            Math.floor(random(0, window.innerHeight))
        );
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }
}

function draw() {
    background(255, 20);
    vehicles.forEach(vehicle => {
        vehicle.follow(flowfield);
        vehicle.run();
    });
    flowfield.nextStep(zoff);
    zoff += 0.01;
}

function mouseClicked() {
    console.log(flowfield.field);
}
