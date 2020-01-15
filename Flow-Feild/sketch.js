let flowFeild;
let vehicles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    // vehicle = new Vehicle(320, 180);
    flowFeild = new FlowField(5);
    background(255);
    // flowFeild.displayFlowFeild();

    for (let i = 0; i < 100; i++) {
        let randomLocation = createVector(Math.floor(random(0, window.innerWidth)), Math.floor(random(0, window.innerHeight)));
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }

}

function draw() {
    // background(51);
    vehicles.forEach(vehicle => {
        vehicle.follow(flowFeild);
        vehicle.run();
    })
}
