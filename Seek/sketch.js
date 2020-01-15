let vehicle;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    vehicle = new Vehicle(320, 180);
}

function draw() {
    background(51);

    let target = createVector(mouseX, mouseY);

    vehicle.seek(target);


    vehicle.update();
    vehicle.display();
}
