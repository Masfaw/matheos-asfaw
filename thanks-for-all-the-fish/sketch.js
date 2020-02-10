let flowfield;
let vehicles = [];
let zoff = 0;
let timer = -501;


let capturer;
let btn;
let counter = 1;
function setup() {

    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    // canvas.position(0, 0);
    flowfield = new FlowField(10);
    for (let i = 0; i < 1000; i++) {
        let randomLocation = createVector(Math.floor(random(0, window.innerWidth)), Math.floor(random(0, window.innerHeight)));
        vehicles.push(new Vehicle(randomLocation.x, randomLocation.y));
    }

    btn = document.createElement('button');
    // btn.position(0, window.innerHeight)
    btn.textContent = "start recording";
    document.body.appendChild(btn);
    btn.onclick = record;


    document.body.style.overflow = "hidden";
}

function draw() {
    background(0, 50);
    vehicles.forEach(vehicle => {
        vehicle.follow(flowfield);
        vehicle.run();
    });

    if (timer < -500) {
        flowfield.nextStep(zoff);
    }
    zoff += 0.01;

    if (timer === 0) {
        flowfield.shootToOrigin();
    }

    if (capturer) {
        capturer.capture(document.getElementById('defaultCanvas0'));
        if (timer === -6000) {
            frameRate(0);
            btn.click();
        }
    }
    timer--;
}


function record() {
    capturer = new CCapture({ format: 'webm', framerate: 30 });
    capturer.start();
    btn.textContent = 'stop recording';

    btn.onclick = e => {
        capturer.stop();
        capturer.save();
        capturer = null;

        btn.textContent = 'start recording';
        btn.onclick = record;
    };
}

function mouseClicked() {
    btn.click();
    // record();
    // timer = 500;
    // let target = createVector(mouseX, mouseY);
    // flowfield.createSpiralField(target);
}
