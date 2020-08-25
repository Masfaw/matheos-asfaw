
let resolution = 20;
let cols = Math.floor(window.innerWidth / resolution);
let rows = Math.floor(window.innerHeight / resolution);
let counter = 0;
let spacer = 20;
let newCirclesToAdd = 1


let circles = []

function setup() {
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
}

function draw() {
    frameRate(20)
    background(255)
    if (counter % spacer == 0) {
        for (let i = 0; i < newCirclesToAdd; i++) {
            let newCircle = createCircleOutSideOtherCircles();
            if (newCircle) {
                circles.push(newCircle);
            }
        }
        if (spacer > 1) {
            spacer--;
            newCirclesToAdd++;
        }

    }

    circles.forEach((circle, index) => {
        circle.render();
        circle.grow();
        circles.forEach(other => {
            if (circle != other) {
                circle.checkCollision(other);
            }

        })
    });
    counter++;
}

function mouseClicked() {
    console.log("Circle Packing")
}

function createCircleOutSideOtherCircles() {
    let xLoc = random(window.innerWidth);
    let yLoc = random(window.innerHeight);

    let valid = true;
    circles.forEach(circle => {
        let distance = dist(xLoc, yLoc, circle.xLoc, circle.yLoc);
        if (distance < circle.diameter / 2) {
            valid = false;
            return;
        };
    });

    if (valid) {
        return new Circle(xLoc, yLoc)
    } else {
        return null;
    }

}

