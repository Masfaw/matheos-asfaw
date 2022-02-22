class PointCollection {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.freePointsArray = [];
    this.pointsMap = new Map();
    this.occupiedPointsArray = [];
    this._getGridCellCenterPoints();
  }

  getRandomFreePoint() {
    let idx = Math.floor(Math.random() * this.freePointsArray.length);
    this._swapWithLast(idx);
    let point = this.freePointsArray.pop();
    let key = JSON.stringify(point)
    this.pointsMap.delete(key);
    this.occupiedPointsArray.push(point)
    return point;
  }

  isPointFree(point) { // point : [c, r]
    let key = JSON.stringify(point);
    return this.pointsMap.has(key);
  }

  setPointAsOccupied(point) {
    let key = JSON.stringify(point);
    let idx = this.pointsMap.get(key);
    if (!idx) {
      console.log("THERE WAS NO POINT ", point);
      return
    }
    this.pointsMap.delete(key);
    this._swapWithLast(idx);
    this.freePointsArray.pop();
    this.occupiedPointsArray.push(point);
    return point
  }

  _swapWithLast(idx) {
    let lastIdx = this.freePointsArray.length -1;
    let temp = this.freePointsArray[lastIdx];
    this.freePointsArray[lastIdx] = this.freePointsArray[idx]
    this.freePointsArray[idx] = temp;
    let key = JSON.stringify(temp);
    this.pointsMap.set(key, idx);
  }

  _getGridCellCenterPoints() {
    let idx = 0;
    for (let c = 0; c < this.cols; c++) {
        for(let r = 0; r < this.rows; r++ ) {
            this.freePointsArray.push([c, r]);
            let key = JSON.stringify([c, r]);
            this.pointsMap.set(key, idx);
            idx ++;
        }
    }
  }
}