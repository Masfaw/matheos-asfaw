class Vehicle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
        this.maxSpeed = 5;
        this.maxForce = 2;
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
        let steering = p5.Vector.sub(desired, this.velocity);
        steering.limit(this.maxForce);
        this.applyForce(steering);
    }

    display = () => {
        fill(255, 150);
        noStroke();
        // stroke(255);
        ellipse(this.position.x, this.position.y, 24, 24);
    }
}
