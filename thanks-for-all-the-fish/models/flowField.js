class FlowField {
    constructor(resolution) {
        this.resolution = resolution;
        this.cols = window.innerWidth / this.resolution;
        this.rows = window.innerHeight / this.resolution;
        let util = new Util();
        this.field = util.make2dArray(this.cols);
        this.nextStep(0);
    }

    createSpiralField(center) {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.cols; j++) {
                let transI = i - floor(center.x / this.resolution);
                let transJ = j - floor(center.y / this.resolution);
                this.field[i][j] = createVector(transJ - transI, -transI - transJ);
                this.field[i][j].setMag(1);
            }
        }
    }

    shootToOrigin() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.field[i][j] = createVector(-10, -10);
                this.field[i][j].setMag(1000);
            }
        }
    }

    nextStep(zoff) {
        let xoff = 0;
        for (let i = 0; i < this.cols; i++) {
            let yoff = 0;
            for (let j = 0; j < this.rows; j++) {
                let theta = map(noise(xoff, yoff, zoff), 0, 1, 0, TWO_PI * 3);
                this.field[i][j] = createVector(cos(theta), sin(theta));
                yoff += 0.01;
            }
            xoff += 0.01;
        }
    }

    lookup(lookup) {
        let column = Math.floor(constrain(lookup.x / this.resolution, 0, this.cols - 1));
        let row = Math.floor(constrain(lookup.y / this.resolution, 0, this.rows - 1));
        return this.field[column][row].copy();
    }
    displayFlowFeild() {
        for (let i = 0; i < this.cols; i++) {
            for (let j = 0; j < this.rows; j++) {
                this.drawVector(this.field[i][j], i * this.resolution, j * this.resolution, this.resolution - 2);
            }
        }
    }

    drawVector(v, x, y, scale) {
        push();
        let arrowSize = 4;
        translate(x, y);
        stroke(0, 10, 255, 20);
        rotate(v.heading());
        let len = v.mag() * scale;
        line(0, 0, len, 0);
        pop();
    }
}
