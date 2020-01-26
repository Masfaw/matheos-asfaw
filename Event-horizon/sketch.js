let spiralField;
let vehicles = [];
let zoff = 0;
let center;

function setup() {
    console.log("Mobile fix 3");

    createCanvas(window.innerWidth, window.innerHeight);
    center = createVector(window.innerWidth / 2, window.innerHeight / 2);
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
    let target;
    if (mouseX > 0 && mouseY > 0) {
        target = createVector(mouseX, mouseY);
    } else {
        target = center;
    }
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
