class Attractor {
  constructor(x, y, r, s) {
    this.position = createVector(x, y);
    this.radius = r;
    this.strength = s;
    this.boundary = new QuadTreeCircleBoundary(x, y, r);

  }

  
  attract(rainDrop) {
  }



  render(options) {
    
    this.boundary.render({strokeColor: [0,255,0],renderBoundary:true, boundaryStroke: 4 });
    noStroke()
    fill(50, 20)
    let xLoc = this.position.x;
    let yLoc = this.position.y;
    let diameter = this.radius * 2
    ellipse(xLoc, yLoc, diameter)
  }
}