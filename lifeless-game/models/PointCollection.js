class PointCollection {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.freePointsArray = [];
    this.freePointsMap = new Map();
    this.occupiedPointsArray = [];
    this._getGridCellCenterPoints();
  }

  getRandomFreePoint() {
    if(this.freePointsArray.length === 0 ) {
      return false
    }
    let idx = Math.floor(Math.random() * this.freePointsArray.length);
    this._swapWithLast(idx);
    let point = this.freePointsArray.pop();
    let key = JSON.stringify(point)
    this.freePointsMap.delete(key);
    this.occupiedPointsArray.push(point)
    return point;
  }

  isPointFree(point) { // point : [c, r]
    let key = JSON.stringify(point);
    return this.freePointsMap.has(key);
  }

  setPointAsOccupied(point) {
    let key = JSON.stringify(point);
    let idx = this.freePointsMap.get(key);
    if (idx === undefined) {
      throw ("There was not point ", point);
      return
    }
    this.freePointsMap.delete(key);
    this._swapWithLast(idx);
    this.freePointsArray.pop();
    this.occupiedPointsArray.push(point);
    return point
  }

  _swapWithLast(idx) {
    if (idx == this.freePointsArray.length -1) {
      return
    }
    let lastIdx = this.freePointsArray.length -1;
    let temp = this.freePointsArray[lastIdx];
    this.freePointsArray[lastIdx] = this.freePointsArray[idx]
    this.freePointsArray[idx] = temp;
    let key = JSON.stringify(temp);
    this.freePointsMap.set(key, idx);
  }

  _getGridCellCenterPoints() {
    let idx = 0;
    for (let c = 0; c < this.cols; c++) {
        for(let r = 0; r < this.rows; r++ ) {
            this.freePointsArray.push([c, r]);
            let key = JSON.stringify([c, r]);
            this.freePointsMap.set(key, idx);
            idx ++;
        }
    }
  }
}