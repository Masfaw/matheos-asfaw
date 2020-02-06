let flowFeild;
let vehicles = [];
let timer = 0;
function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    // vehicle = new Vehicle(320, 180);
    flowFeild = new FlowField(2);
    background(0);
    // flowFeild.displayFlowFeild();

    for (let i = 0; i < 5000; i++) {
        let randomLocation = createVector(Math.floor(random(0, window.innerWidth)), Math.floor(random(0, window.innerHeight)));
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }
    document.body.style.overflow = 'hidden';
    frameRate(30);
}

function draw() {
    if (timer > 400) {
        background(0, 1);
    }
    vehicles.forEach(vehicle => {
        vehicle.follow(flowFeild);
        vehicle.run();
    });
    timer++;
}
