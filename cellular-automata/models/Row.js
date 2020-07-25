class Row {
    constructor(locY, cellSize, cellCount) {
        this.cells = [];
        for (let i = 0; i < cellCount; i++) {
            let locX = cellSize * i
            this.cells[i] = new Cell(locX, locY, cellSize);
        }
    }

    drawRow() {
        this.cells.forEach(cell => {
            cell.drawCell();
        })
    }
}