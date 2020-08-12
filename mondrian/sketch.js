
let resolution = 50;
let cols = Math.floor(window.innerWidth / resolution);
let rows = Math.floor(window.innerHeight / resolution);
let scaler = .3;
let rectangles = [];
let divideWidth = true;
class Rectangle {
    constructor(x, y, w, h) {
        this.width = w;
        this.height = h;
        this.xLoc = x;
        this.yLoc = y;
        this.area = this.width * this.height;
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        if (Math.random() < .1) {
            this.color = [red, green, blue];
        } else {
            this.color = [255, 255, 255]
        }


    }

    render() {

        fill(this.color[0], this.color[1], this.color[2]);
        strokeWeight(4)
        rect(this.xLoc, this.yLoc, this.width, this.height);
    }
}

function setup() {
    fill(0);
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    background(255);
    rectangles.push(new Rectangle(0, 0, window.innerWidth - 2, window.innerHeight - 2));
}

function subdivideWidth() {
    // pick a random rectangle 
    // let index = Math.floor(Math.random() * rectangles.length);
    // let rectangle = rectangles[index];

    // sort the list and pick the largest one.
    rectangles.sort(function (a, b) {
        return b.area - a.area;
    });
    let index = 0;
    let rectangle = rectangles[index];

    // add the left rectangle 
    rectangles.push(new Rectangle(rectangle.xLoc, rectangle.yLoc, rectangle.width * scaler, rectangle.height))
    // add the right rectangle
    let removedSize = rectangle.width * scaler
    rectangles.push(new Rectangle(rectangle.xLoc + removedSize, rectangle.yLoc, rectangle.width - removedSize, rectangle.height));
    rectangles.splice(index, 1);
    divideWidth = false;
}

function subdivideHeight() {
    // pick a random rectangle 
    // let index = Math.floor(Math.random() * rectangles.length);
    // let rectangle = rectangles[index];

    // sort the list and pick the largest one.
    rectangles.sort(function (a, b) {
        return b.area - a.area;
    });
    let index = 0;
    let rectangle = rectangles[index];

    // add the top rectangle
    rectangles.push(new Rectangle(rectangle.xLoc, rectangle.yLoc, rectangle.width, rectangle.height * scaler));

    // add the bottom rectangle 
    let removedSize = rectangle.height * scaler;
    rectangles.push(new Rectangle(rectangle.xLoc, rectangle.yLoc + removedSize, rectangle.width, rectangle.height - removedSize))

    rectangles.splice(index, 1);
    divideWidth = true;
}


function draw() {
    background(255);
    rectangles.forEach(rectangle => {
        rectangle.render();
    });
}

function mouseClicked() {
    scaler = Math.random();

    if (divideWidth) {
        subdivideWidth();
    } else {
        subdivideHeight();
    }
}



