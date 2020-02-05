let flowfield;
let vehicles = [];
let zoff = 0;
let timer = -501;
function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    flowfield = new FlowField(10);
    for (let i = 0; i < 1000; i++) {
        let randomLocation = createVector(Math.floor(random(0, window.innerWidth)), Math.floor(random(0, window.innerHeight)));
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }
    document.body.style.overflow = "hidden";
}

function draw() {
    background(0, 50);
    vehicles.forEach(vehicle => {
        vehicle.follow(flowfield);
        vehicle.run();
    });

    if (timer < -500) {
        flowfield.nextStep(zoff);
    }
    zoff += 0.01;

    if (timer === 0) {
        flowfield.shootToOrigin();
    }
    timer--;
}

function mouseClicked() {
    timer = 500;
    let target = createVector(mouseX, mouseY);
    flowfield.createSpiralField(target);
}
