
const CAPACITY = 4;

class QuadTreePoint {
    constructor(x, y) {
        this.xLoc = x;
        this.yLoc = y;
    }
}

class QuadTreeRectBoundary { // this is for boundary boxes drawn from the center

    constructor(x, y, w, h) {
        this.xLoc = x; // x location of the center of the box
        this.yLoc = y; // y location of the center of the box
        this.width = w; // this is actually the distance form center to side of the boundary
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

    contains(point) {
        return point.xLoc <= this.xLoc + this.width && 
                point.xLoc >= this.xLoc - this.width && 
                point.yLoc <= this.yLoc + this.height && 
                point.yLoc >= this.yLoc - this.height;
    }
}

class QuadTree {
    constructor(boundary, capacity) {
        this.boundary = boundary;
        this.capacity = capacity;
        this.points = [];
        this.hasSplit = false;
        this.northWest
    }

    insert(point) {
        if (!this.boundary.contains(point)) {
            return false;
          }
      
          if (this.points.length < this.capacity) {
            this.points.push(point);
            return true;
          } else {
            if (!this.divided) {
              this.subdivide();
            }
            if (this.northeast.insert(point)) {
              return true;
            } else if (this.northwest.insert(point)) {
              return true;
            } else if (this.southeast.insert(point)) {
              return true;
            } else if (this.southwest.insert(point)) {
              return true;
            }
          }
    }

    subdivide() {
        let x = this.boundary.x;
        let y = this.boundary.y;
        let w = this.boundary.w;
        let h = this.boundary.h;
        let ne = new QuadTreeRectBoundary(x + w / 2, y - h / 2, w / 2, h / 2);
        this.northeast = new QuadTree(ne, this.capacity);
        let nw = new QuadTreeRectBoundary(x - w / 2, y - h / 2, w / 2, h / 2);
        this.northwest = new QuadTree(nw, this.capacity);
        let se = new QuadTreeRectBoundary(x + w / 2, y + h / 2, w / 2, h / 2);
        this.southeast = new QuadTree(se, this.capacity);
        let sw = new QuadTreeRectBoundary(x - w / 2, y + h / 2, w / 2, h / 2);
        this.southwest = new QuadTree(sw, this.capacity);
        this.divided = true
    }

    query(range,found) {
        if (!found) {
            found = [];
          }
          if (!this.boundary.intersects(range)) {
            return;
          } else {
            for (let p of this.points) {
              if (range.contains(p)) {
                found.push(p);
              }
            }
            if (this.divided) {
              this.northwest.query(range, found);
              this.northeast.query(range, found);
              this.southwest.query(range, found);
              this.southeast.query(range, found);
            }
          }
          return found;
    }

    render() {
        stroke(255);
        noFill();
        strokeWeight(1);
        rectMode(CENTER);
        rect(
            this.boundary.xLoc,
            this.boundary.yLoc,
            this.boundary.w * 2,
            this.boundary.h * 2
        )
        for (let p of this.points) {
            strokeWeight(2);
            point(p.x, p.y);
          }

        if (this.divided) {
        this.northeast.show();
        this.northwest.show();
        this.southeast.show();
        this.southwest.show();
        }
    }
}