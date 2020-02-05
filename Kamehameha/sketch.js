let flowfield;
let vehicles = [];
let zoff = 0;
let timer = -1;
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

    if (timer === 0) {
        // TODO : change the  flow feild back to the one before
    }
    timer--;
}

function mouseClicked() {
    timer = 200;
    console.log("Changing the flowfeild to spiral centered arround the mouse");

    // TODO : chage the flow feild and start the timer 

}
