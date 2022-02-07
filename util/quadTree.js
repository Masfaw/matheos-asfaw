
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
        this.divided = false;
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
        let x = this.boundary.xLoc;
        let y = this.boundary.yLoc;
        let w = this.boundary.width;
        let h = this.boundary.height;
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

    render(options) {
      stroke(options.strokeColor);


      if (options.renderBoundary) {
        noFill();
        strokeWeight(options.boundaryStroke);
        rectMode(CENTER);
        rect(
            this.boundary.xLoc,
            this.boundary.yLoc,
            this.boundary.width * 2,
            this.boundary.height * 2
        );
      }

      if(options.renderPoints) {
        for (let p of this.points) {
          strokeWeight(options.pointsStroke);
          point(p.xLoc, p.yLoc);
        }
      }
      

        if (this.divided && (options.renderPoints || options.renderBoundary)) {
          let childOptions = {
            strokeColor:options.strokeColor,
            boundaryStroke: options.boundaryStroke/options.divisor,
            pointsStroke:options.pointsStroke/options.divisor,
            renderPoints:options.renderPoints,
            renderBoundary:options.renderBoundary,
            divisor:options.divisor,
          }
          this.northeast.render(childOptions);
          this.northwest.render(childOptions);
          this.southeast.render(childOptions);
          this.southwest.render(childOptions);
        }
    }
}