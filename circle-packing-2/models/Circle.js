class Circle {
    constructor(x, y) {
        this.xLoc = x;
        this.yLoc = y;
        this.diameter = 1
        this.hasCollided = false;
    }

    grow() {
        if (!this.hasCollided) {
            this.diameter += 5;
        }
    }

    isCollidingWithEdge() {
        return this.xLoc + this.diameter / 2 > window.innerWidth ||
            this.xLoc - this.diameter / 2 < 0 ||
            this.yLoc + this.diameter / 2 > window.innerHeight ||
            this.yLoc - this.diameter / 2 < 0;
    }

    checkCollision(other) {

        let circleColl = false;
        if (other) {
            circleColl = this.isCollidingWithOtherCircle(other);
            if (circleColl) {
                other.hasCollided = true;
            }
        }
        let edgeColl = false;
        // let edgeColl = this.isCollidingWithEdge();
        // console.log({ edgeColl, circleColl });
        this.hasCollided = circleColl || edgeColl;
    }


    isCollidingWithOtherCircle(other) {
        let buffer = 4;

        let distance = dist(this.xLoc, this.yLoc, other.xLoc, other.yLoc);
        if (distance < this.diameter / 2 + other.diameter / 2 + 4) {
            return true;
        }
        return false;
    }

    render() {
        strokeWeight(4);
        // noFill();
        fill(0)
        circle(this.xLoc, this.yLoc, this.diameter)
    }
}