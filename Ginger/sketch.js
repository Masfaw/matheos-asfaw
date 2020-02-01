let flowFeild;
let vehicles = [];

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    // vehicle = new Vehicle(320, 180);
    flowFeild = new FlowField(5);
    background(255);
    // flowFeild.displayFlowFeild();

    for (let i = 0; i < 5000; i++) {
        let randomLocation = createVector(Math.floor(random(0, window.innerWidth)), Math.floor(random(0, window.innerHeight)));
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }
    document.body.style.overflow = 'hidden';
}

function draw() {
    // background(51);
    vehicles.forEach(vehicle => {
        vehicle.follow(flowFeild);
        vehicle.run();
    })
}
