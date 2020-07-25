
let resolution = 10;
let grid;
let rowToRenderIndex = 1;

function ruleThirty(a, b, c) {
    if (a && b && c) return false;
    if (a && b && !c) return false;
    if (a && !b && c) return false;
    if (a && !b && !c) return true;
    if (!a && b && c) return true;
    if (!a && b && !c) return true;
    if (!a && !b && c) return true;
    if (!a && !b && !c) return false;
}


function setup() {

    let canvas = createCanvas(window.innerWidth, window.innerHeight);
    canvas.position(0, 0);

    grid = new Grid(resolution);
    grid.seedGrid();

    grid.populateRule(ruleThirty);
}



function draw() {
    grid.drawGrid();
    // grid.drawRowsOfGrid(rowToRenderIndex);
    // let prevRow = grid.rows[rowToRenderIndex - 1];
    // let curRow = grid.rows[rowToRenderIndex];
    // grid.populateRulePerRow(ruleThirty, prevRow, curRow)
    // if (rowToRenderIndex < grid.rows.length) {
    //     rowToRenderIndex++;
    // }
}



function mouseClicked() {
    console.log("Hello there")
}
