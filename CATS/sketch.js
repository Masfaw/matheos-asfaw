let flowFeild;
let vehicles = [];
let timer = 0;
let img;

function preload() {
    // img = createImg("https://wallpaperplay.com/walls/full/0/b/5/60863.jpg", "cats");
    img = loadImage("./assets/004.jpg");
    img.resize(window.innerWidth, window.innerHeight);

    // img = loadImage("https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR");
    // loadImage(
    //     "https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR",
    //     img => {
    //         console.log("GOT IMAGE");

    //         image(img, 0, 0);
    //     }, err => {
    //         console.log("Failed", err)
    //     })
}
function setup() {
    let resolution = 10;
    // image(img, 0, 0);
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);
    // img = createImg("https://www.humanesociety.org/sites/default/files/styles/768x326/public/2018/08/kitten-440379.jpg?h=f6a7b1af&itok=vU0J0uZR");
    let halfImage = 4 * img.width * img.height / 2;
    let imageWidth = 4 * img.width
    console.log(img);
    img.loadPixels();
    let util = new Util();
    let windowXSampleSize = window.innerWidth / resolution;
    let windowYSampleSize = window.innerHeight / resolution;
    let imageXResolution = Math.floor(img.width / windowXSampleSize);
    let imageYResoultion = Math.floor(img.height / windowYSampleSize);
    console.log({ windowXSampleSize, windowYSampleSize, imageXResolution, imageYResoultion });
    let angles = util.make2dArray(img.width / imageXResolution);
    console.log(angles.length);
    console.log(angles[0].length);
    //image location iis (x + y * width ) * 4 
    for (let row = 0; row < img.height; row += imageYResoultion) {
        for (let col = 0; col < img.width; col += imageXResolution) {
            let index = (col + row * img.width) * 4;

            let sum = img.pixels[index + 0] + img.pixels[index + 1] + img.pixels[index + 2] + img.pixels[index + 3];
            let mapped = map(sum, 0, 1020, 0, 720);
            angles[col / imageXResolution][row / imageYResoultion] = mapped;
            img.pixels[index + 0] = 0;
            img.pixels[index + 1] = 0;
            img.pixels[index + 2] = 0;
            img.pixels[index + 3] = 0;
        }
    }
    console.log(angles);
    img.updatePixels();
    flowFeild = new FlowField(resolution);
    flowFeild.field = util.make2dArray(img.width / imageXResolution);
    flowFeild.initFeildFromAngle(angles)
    document.body.style.overflow = 'hidden';


    for (let i = 0; i < 2000; i++) {
        let randomLocation = createVector(Math.floor(random(0, window.innerWidth)), Math.floor(random(0, window.innerHeight)));
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }
    background(0);

    frameRate(30);
}

function draw() {

    background(0, 2);

    // image(img, 0, 0, img.width, img.height);
    // flowFeild.displayFlowFeild();
    // if (timer > 400) {
    //     background(0, 1);
    // }
    vehicles.forEach(vehicle => {
        vehicle.follow(flowFeild);
        vehicle.run();
    });
    // timer++;
}
