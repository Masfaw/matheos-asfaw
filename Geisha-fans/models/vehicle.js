class Vehicle {
    constructor(x, y, maxSpeed, maxForce) {
        this.position = createVector(x, y);
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.maxSpeed = maxSpeed || 2;
        this.maxForce = maxForce || 2;
        this.radius = 10;
    }

    run() {
        this.update();
        this.checkBoarders();
        this.display();
    }
    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }

    follow(flowFeild) {
        let desired = flowFeild.lookup(this.position);
        desired.mult(this.maxSpeed);
        let steer = p5.Vector.sub(desired, this.velocity);
        steer.limit(this.maxForce);
        this.applyForce(steer);
    }

    checkBoarders() {
        if (
            this.position.x > window.innerWidth ||
            this.position.y > window.innerHeight ||
            this.position.x < 0 ||
            this.position.y < 0
        ) {
            // reset the location to some thing random
            let newLocation = createVector(
                Math.floor(random(0, window.innerWidth)),
                Math.floor(random(0, window.innerHeight))
            );
            this.position = newLocation;
        }
    }

    seek(target) {
        // steering = desired - velocity
        let desired = p5.Vector.sub(target, this.position);

        let d = desired.mag();
        if (d < 200) {
            let magnitude = map(d, 0, 100, 0, this.maxSpeed);
            desired.setMag(magnitude);
        } else {
            desired.setMag(this.maxSpeed);
        }
        let steering = p5.Vector.sub(desired, this.velocity);
        steering.limit(this.maxForce);
        this.applyForce(steering);
    }

    display() {
        fill(0, 0, 255, 100);
        noStroke();
        ellipse(this.position.x, this.position.y, 2, 2);
    }
}
