var walkers = [];
function setup() {
    let walkerSize = 5;
    let width = Math.floor(window.innerWidth / walkerSize) * walkerSize - (walkerSize * 4);
    let height = Math.floor(window.innerHeight / walkerSize) * walkerSize - (walkerSize * 4);
    createCanvas(width, height);
    background(255);
    for (let i = 0; i < 20; i++) {
        let w = new Walker(walkerSize, width, height);
        walkers.push(w);
    }
}

function draw() {

    walkers.forEach(walker => {
        walker.walk();
        walker.drawWalker();
    });
}