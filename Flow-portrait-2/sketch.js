let flowfield;
let vehicles = [];
let zoff = 0;

let img;
let imagePixArray = []

function preload() {
    img = loadImage('assets/mma_port_1.jpg');
}


function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    extractImageInfo();
    background(255);

    flowfield = new FlowField(10);
    for (let i = 0; i < 750; i++) {
        let randomLocation = createVector(
            Math.floor(random(0, window.innerWidth)),
            Math.floor(random(0, window.innerHeight))
        );
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }
}

function extractImageInfo() {
    const mult = window.innerWidth / img.width
    img.resize(img.width * mult, img.height * mult)
    image(img, 0, 0);
    // filter(INVERT);

    // print(img.width, img.height)


    let pixDensity = pixelDensity();
    let halfImage = 4 * (100 * pixDensity) * (100 * pixDensity);
    loadPixels();
    // console.log(pixels)
    // console.log(pixels.length, pixels.length / 4);
    let pix = [];
    let pixRow = [];

    for (let i = 0; i < pixels.length; i++) {
        if (i != 0 && i % 4 == 0) {
            pixRow.push(pix);
            pix = [];

            if (pixRow.length != 0 && pixRow.length % img.width == 0) {
                imagePixArray.push(pixRow);
                pixRow = [];
            }
        }
        pix.push(pixels[i]);
    }
    pixRow.push(pix)
    pix = []
    imagePixArray.push(pixRow);
    // console.log(imagePixArray);
    // console.log("20 => ", imagePixArray[20]);
    // console.log(imagePixArray[20][100]);
}

function draw() {
    // background(255, 10);
    let deadIdx = [];
    vehicles.forEach((vehicle, idx) => {
        vehicle.follow(flowfield);
        vehicle.run(imagePixArray);
        if (vehicle.isDead) {
            deadIdx.push(idx);
        }
    });

    // Remove dead vehicles 
    deadIdx.reverse();
    deadIdx.forEach(idx => {
        vehicles.splice(idx, 1)
    })

    if (vehicles.length == 0) {
        console.log("Ending draw, all vehicles are dead");
        noLoop();
    }



    flowfield.nextStep(zoff);
    zoff += .01;

    // console.log(imagePixArray[mouseY][mouseX]);
}

function mouseClicked() {
    console.log(flowfield.field);
}
