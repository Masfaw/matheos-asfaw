class SpiralField {
    constructor(center, resolution) {
        this.resolution = resolution;
        this.center = center.copy();
        this.cols = window.innerWidth / this.resolution + 2;
        this.rows = window.innerHeight / this.resolution + 2;
        this.field = Util.make2dArray(this.cols);
        this.createSpiralField(this.center);
    }

    createSpiralField(target) {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.cols; j++) {
                let transI = i - floor(target.x / this.resolution);
                let transJ = j - floor(target.y / this.resolution);
                this.field[i][j] = createVector(transJ - transI, -transI - transJ);
                this.field[i][j].setMag(1);
            }
        }
    }

    lookup = lookup => {
        let column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols - 1));
        let row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows - 1));
        return this.field[column][row].copy();
    };

    displaySpiralField = () => {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.drawVector(
                    this.field[i][j],
                    i * this.resolution,
                    j * this.resolution,
                    this.resolution - 2
                );
            }
        }
    };

    drawVector = (v, x, y, scale) => {
        push();
        let arrowSize = 4;
        translate(x, y);
        stroke(0, 10, 255, 50);
        rotate(v.heading());
        let len = v.mag() * scale;
        line(0, 0, len, 0);
        pop();
    };
}
