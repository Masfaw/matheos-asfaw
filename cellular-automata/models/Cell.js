class Cell {
    constructor(locX, locY, size, color) {
        this.size = size;
        this.color = color;
        this.locX = locX;
        this.locY = locY;
    }

    drawCell() {
        push();
        fill(this.color[0], this.color[1], this.color[2])
        square(this.locX, this.locY, this.size);
        pop();
    }
}