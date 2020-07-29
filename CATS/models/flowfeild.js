class FlowField {
    constructor(resolution) {
        this.resolution = resolution;
        this.cols = window.innerWidth / this.resolution;
        this.rows = window.innerHeight / this.resolution;
        let util = new Util();
        this.field = util.make2dArray(this.cols);
        // this.initFeild();
    }

    initFeild() {
        let mult = random(1.5, 3);
        console.log("MULT", mult);
        let seed = Math.floor(random(10000));
        console.log("seed", seed)
        noiseSeed(seed);
        let xoff = 0;
        for (let i = 0; i < this.cols; i++) {
            let yoff = 0;
            for (let j = 0; j < this.rows; j++) {
                let theta = map(noise(xoff, yoff), 0, 1, 0, TWO_PI * mult);
                this.field[i][j] = createVector(cos(theta), sin(theta));
                yoff += 0.01;
            }
            xoff += 0.01;
        }
    }

    initFeildFromAngle(angles) {
        for (let i = 0; i < angles.length; i++) {
            for (let j = 0; j < angles[0].length; j++) {
                if (angles[i][j]) {
                    this.field[i][j] = p5.Vector.fromAngle(radians(angles[i][j]))
                } else {
                    this.field[i][j] = p5.Vector.fromAngle(radians(0))
                }
            }
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
                if (this.field[i] && this.field[i][j]) {
                    this.drawVector(
                        this.field[i][j],
                        i * this.resolution,
                        j * this.resolution,
                        this.resolution
                    );
                }

            }
        }
    }

    drawVector(v, x, y, scale) {
        if (v) {
            push();
            let arrowSize = 4;
            translate(x, y);
            stroke(0);
            rotate(v.heading());
            let len = v.mag() * scale;
            line(0, 0, len, 0);
            pop();
        }

    }
}
