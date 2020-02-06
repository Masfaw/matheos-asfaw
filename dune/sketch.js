let flowFeild;
let vehicles = [];
function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    // vehicle = new Vehicle(320, 180);
    flowFeild = new FlowField(7);
    background(0);
    // flowFeild.displayFlowFeild();

    for (let i = 0; i < 5000; i++) {
        let randomLocation = createVector(Math.floor(random(0, window.innerWidth)), Math.floor(random(0, 1)));
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }
    document.body.style.overflow = 'hidden';
    frameRate(30);
}

function draw() {
    vehicles.forEach(vehicle => {
        vehicle.follow(flowFeild);
        vehicle.run();
    });
}
