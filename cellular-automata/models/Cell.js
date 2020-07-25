class Cell {


    constructor(locX, locY, size, active = false) {
        this.size = size;
        this.locX = locX;
        this.locY = locY;
        this.active = active;
        this.colorChoices = [
            [255, 255, 255], // inactive state
            [0, 0, 0] // active state.
        ]
    }

    drawCell() {
        push();
        noStroke();
        // strokeWeight(0.05);
        let colorIndex = this.active ? 1 : 0;
        let color = this.colorChoices[colorIndex];
        fill(color[0], color[1], color[2])
        square(this.locX, this.locY, this.size);
        pop();
    }
}