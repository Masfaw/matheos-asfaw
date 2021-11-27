

class QuadTreePoint {
    constructor(x, y) {
        this.xLoc = x;
        this.yLoc = y;
    }
}

class QuadTreeRectBoundary {

    constructor(x, y, w, h) {
        this.xLoc = x;
        this.yLoc = y;
        this.width = w;
        this.height = h;
    }

    intersects(other) {
        return !(
            other.xLoc - other.width > this.xLoc + this.width ||
            other.xLoc + other.width < this.xLoc - this.width ||
            other.yLoc - other.height > this.yLoc + this.height ||
            other.yLoc + other.height < this.yLoc - this.height
        );
    }
}

class QuadTree {
    constructor(boundary, capacity) {
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.hasSplit = false;
    }

    insert(point) {

    }

    subdivide() {

    }

    query(range) {

    }

    render() {
        stroke(255);
        noFill();
        strokeWeight(1);
        rectMode(CENTER);
        rect(
            this.boundary.xLoc,
            this.boundary.yLoc,
        )
    }
}