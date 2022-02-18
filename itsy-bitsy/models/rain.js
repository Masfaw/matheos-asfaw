class Rain {
  constructor(x, y, speed, color) {
    this.position = createVector(x, y);
    this.acceleration = createVector(0,0);
    this.velocity = speed;
    this.radius = 2;
    this.color = color || [0,0,0];
    this.maxSpeed = 2;
    this.maxForce = .3;
  }


  run() {
    this.update();
    this.checkBoarders();
  }

  update() {
    this.acceleration.add(createVector(0,1.5))
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.position.add(this.velocity);
    this.acceleration.set(0);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  checkBoarders() {
    if (
        this.position.x > window.innerWidth ||
        this.position.y > window.innerHeight ||
        this.position.x < 0
    ) {
        // reset the location to some thing random
        let newLocation = createVector(
            Math.floor(random(0, window.innerWidth)),
          - 1 * Math.floor(random(0, window.innerHeight))
        );
        this.position = newLocation;
    }
}

  avoid(target) {
    let desired = p5.Vector.sub(target, this.position);

    let d = desired.mag();

  }

  seek(target) {
    let desired = p5.Vector.sub(target, this.position);
    desired.setMag(this.maxSpeed);

    let steering = p5.Vector.sub(desired, this.velocity);
    steering.limit(this.maxForce);
    this.applyForce(steering);

  }

  render(options) {

    let size = options.size || this.radius;
    let color = options.color || this.color;
    
    // console.log("rendering");
    let ellipseSize = size || this.radius;
    fill(color[0], color[1], color[2]);
    noStroke();
    ellipse(this.position.x, this.position.y, ellipseSize, ellipseSize);
  }

}