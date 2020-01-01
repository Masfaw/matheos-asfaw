var walkers = [];
function setup() {
    let walkerSize = 5;
    //Vangoh colors
    let walkerColors = [
        [3, 57, 116],
        [2, 40, 115],
        [121, 196, 242],
        [145, 233, 242],
        [242, 233, 109]
    ];

    // RGB and white colors
    // let walkerColors = [
    //     [255, 0, 0],
    //     [0, 255, 0],
    //     [0, 0, 255],
    //     [255, 255, 255]
    // ];

    let width = Math.floor(window.innerWidth / walkerSize) * walkerSize - (walkerSize * 4);
    let height = Math.floor(window.innerHeight / walkerSize) * walkerSize - (walkerSize * 4);
    createCanvas(width, height);
    background(255);
    for (let i = 0; i < 20; i++) {
        let w = new Walker(walkerSize, width, height, walkerColors);
        walkers.push(w);
    }
}

function draw() {

    walkers.forEach(walker => {
        walker.walk();
        walker.drawWalker();
    });
}