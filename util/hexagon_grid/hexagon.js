class Hexagon {
  constructor(center, size){
    this.center = center
    this.size = size
  }

  flatHexCorner(idx) {
    let angleDeg = 60 * idx;
    let angleRad = PI/ 180 * angleDeg;
    return createVector(
      this.center.x + this.size * cos(angleRad),
      this.center.y + this.size * sin(angleRad)
    );

  }

  pointyHexCorner(idx)  {
    let angleDeg = 60 * idx - 30;
    let angleRad = PI / 180 * angleDeg;
    return createVector(
      this.center.x + this.size * cos(angleRad),
      this.center.y + this.size * sin(angleRad)
    )
  }


  renderFlatHex(options){
    noFill();
    beginShape();
    for (let idx = 0; idx < 6; idx ++ ) {
      let corner = this.flatHexCorner(idx)
      vertex(corner.x, corner.y)
    }

    endShape(CLOSE);
  }

  renderPointyHex(options) {
    noFill();
    beginShape();
    for (let idx = 0; idx < 6; idx ++ ) {
      let corner = this.pointyHexCorner(idx)
      vertex(corner.x, corner.y)
    }

    endShape(CLOSE);
  }
}