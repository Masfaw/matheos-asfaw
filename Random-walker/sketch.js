var walker;
function setup() {
    let reduce = 20;
    createCanvas(window.innerWidth - reduce, window.innerHeight - reduce);
    walker = new Walker();
    console.log(window.innerWidth, window.innerHeight);
}

function draw() {
    walker.walk();
    walker.drawWalker();
}