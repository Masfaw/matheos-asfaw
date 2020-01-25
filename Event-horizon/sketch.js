let spiralField;
let vehicles = [];
let zoff = 0;

function setup() {
    console.log("Mobile fix 1");

    createCanvas(window.innerWidth, window.innerHeight);
    let center = createVector(width / 2, height / 2);
    spiralField = new SpiralField(center, 5);
    for (let i = 0; i < 1000; i++) {
        let randomLocation = createVector(
            Math.floor(random(0, window.innerWidth)),
            Math.floor(random(0, window.innerHeight))
        );
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }
    console.log(spiralField.center);
    // spiralField.displaySpiralField();
}

function draw() {
    let target = createVector(mouseX, mouseY);
    background(255, 20);
    vehicles.forEach(vehicle => {
        vehicle.follow(spiralField);
        vehicle.run();
    });

    spiralField.createSpiralField(target);
}

function mouseClicked() {
    // console.log(flowField.field);
}
