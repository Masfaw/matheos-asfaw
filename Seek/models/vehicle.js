class Vehicle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.maxSpeed = 10;
        this.maxForce = 2;
        this.radius = 5;
    }

    applyForce = force => {
        this.acceleration.add(force);
    };

    update = () => {
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
    }

    seek = (target) => {
        // steering = desired - velocity 
        let desired = p5.Vector.sub(target, this.position);

        let d = desired.mag();
        if (d < 200) {
            let magnitude = map(d, 0, 100, 0, this.maxSpeed);
            desired.setMag(magnitude)
        } else {
            desired.setMag(this.maxSpeed);
        }
        let steering = p5.Vector.sub(desired, this.velocity);
        steering.limit(this.maxForce);
        this.applyForce(steering);
    }

    display = () => {
        let theta = this.velocity.heading() + PI / 2;
        fill(127);
        stroke(200);
        strokeWeight(1);
        push();
        translate(this.position.x, this.position.y);
        rotate(theta);
        beginShape();
        vertex(0, -this.radius * 2);
        vertex(-this.radius, this.radius * 2);
        vertex(this.radius, this.radius * 2);
        endShape(CLOSE);
        pop();
    }
}
