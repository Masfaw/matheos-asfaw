class Walker {
    constructor(startLoc, cols, rows, res, color) {
        this.currentLoc = startLoc;
        this.path = [startLoc]
        this.cols = cols;
        this.rows = rows;
        this.color = color;
        this.resolution = res;
    }

    render() {
        let diff = .15 * this.resolution
        let size = this.resolution - diff;
        push();

        noFill();
        stroke(this.color);
        strokeWeight(size)
        beginShape();
        this.path.forEach(point => {

            let xLoc = (point[0] * resolution) + resolution / 2;
            let yLoc = (point[1] * resolution) + resolution / 2;
            vertex(xLoc, yLoc);
        });
        endShape();
        if (this.path) {
            let lastPoint = this.path[this.path.length -1]
            fill(this.color);
            noStroke()
            let xLoc = (lastPoint[0] * resolution) + resolution / 2;
            let yLoc = (lastPoint[1] * resolution) + resolution / 2;
            ellipse(xLoc,yLoc, size)
        }

        pop()
    }

    walk(pointCollection) {
        let neighbors = this.getValidNeighbors(pointCollection);
        if (neighbors.length === 0) {
            return false // was not able to walk
        }
        let idx = Math.floor(Math.random() * neighbors.length);
        this.currentLoc = neighbors[idx];
        this.path.push([...this.currentLoc]);
        pointCollection.setPointAsOccupied(this.currentLoc);
        return true // was able to walk
    }

    getValidNeighbors(pointCollection) {
        let valid = [];
        let directions = this.getDirections();
        directions.forEach(dir => {
            let nextPoint = [dir[0] + this.currentLoc[0], dir[1] + this.currentLoc[1]];
            if (this.isPointInBounds(nextPoint) && pointCollection.isPointFree(nextPoint)) {
                valid.push(nextPoint);
            }
        })
        return valid;
    }

    getDirections() {
        // caridnal steps and not diagonal steps
        return [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0]
        ];

        /**
         * the following arrows show the arrangment of the array in terms of direction reletive to the walker location
         *  \  |  /
         *   - o -
         *  /  |  \
         */
        // return [
        //     [-1, -1],
        //     [ 0, -1],
        //     [ 1, -1],
        //     [-1,  0],
        //     [ 1,  0],
        //     [-1,  1],
        //     [ 0,  1],
        //     [ 1,  1]
        // ];
    }

    isPointInBounds(nextPoint) {
        return !(nextPoint[0] >= this.cols || nextPoint[0] < 0 || nextPoint[1] >= this.rows || nextPoint[1] < 0);
    }
}
