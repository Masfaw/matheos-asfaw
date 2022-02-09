let flowField;
let vehicles = [];
let timer = 0;
let util = new Util();
let quadTree;
let allPoints = []
let looping = false;

// let util = new Util();

let renderOptions = {
    strokeColor: 0,
    renderBoundary: true ,
    boundaryStroke: .5,
    renderPoints: false,
    pointsStroke: 0,
    divisor: 1.3
};

let img; 

function preload() {
    img = loadImage("./assets/006.jpg");
    let mult; 

    // img.resize(window.innerWidth, window.innerHeight);
}

function setup() {
    // Create Canvas
    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);


    // set up the  image 
    let xOffset = 0;
    let yOffset = 0;
    let mult = 1;
    if (img.height >= img.width) {
        // scale the image to fit height if the window
        mult = window.innerHeight / img.height;
        xOffset = Math.floor((window.innerWidth - img.width)/2);
    } else {
        // scale the image to fit the width of the window
        mult = window.innerWidth/ img.width;
        yOffset = Math.floor((window.innerHeight - img.height)/2);
        console.log((window.innerHeight - img.height)/2);
    }

    img.resize(img.width * mult, img.height * mult);
    console.log({xOffset, yOffset, mult});
    // image(img, xOffset, yOffset);

    img.loadPixels();


    // set up the quad tree
    let xLoc = (window.innerWidth /2);
    let yLoc = (window.innerHeight /2) ;
    let quadTreeBoundary = new QuadTreeRectBoundary(xLoc, yLoc, xLoc-2, yLoc-2);
    quadTree = new QuadTree(quadTreeBoundary, 1);
    

    let resolution = 5;

    let windowXSampleSize = window.innerWidth / resolution;
    let windowYSampleSize = window.innerHeight / resolution;
    let imageXResolution = Math.floor(img.width / windowXSampleSize);
    let imageYResoultion = Math.floor(img.height / windowYSampleSize);
    stroke(255, 0, 0 );
    for (let row = 0; row < img.height; row += imageYResoultion) {
        for (let col = 0; col < img.width; col += imageXResolution) {
            let index = (col + row * img.width) * 4;
            let sum = img.pixels[index + 0] + img.pixels[index + 1] + img.pixels[index + 2];

            if (sum <= 50) {
                // point(col, row);
                for (let i = 0; i< 1 ; i++) {
                    let newPoint = new QuadTreePoint(col + xOffset, row + yOffset);
                    quadTree.insert(newPoint);
                    allPoints.push(newPoint);
                }
            }

        }
    }

    // let xLoc = (window.innerWidth /2);
    // let yLoc = (window.innerHeight /2) ;


    quadTree.render(renderOptions);
    document.body.style.overflow = 'hidden';
}


// function draw() {
//     // let index = (Math.floor(mouseX) + Math.floor(mouseY) * img.width) * 4;
//     // let red =   img.pixels[index + 0];
//     // let green = img.pixels[index + 1];
//     // let blue =  img.pixels[index + 2];
//     // let alpha = img.pixels[index + 3];

//     // console.log({red, green, blue, alpha});

    
//     // image(img, 0, 0, window.innerWidth, window.innerHeight)
// }


// function mouseDragged() {
//         let newPoint = new QuadTreePoint(mouseX, mouseY);
//         allPoints.push(newPoint);
//         quadTree.insert(newPoint);
//     return false;
// }

