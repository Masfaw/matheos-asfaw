class Vehicle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.acceleration = createVector(0, 0);
        this.velocity = createVector(0, 0);
    }

    applyForce = force => {
        this.acceleration.add(force);
    };
}
