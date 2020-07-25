class Grid {
    constructor(resolution) {
        this.resolution = resolution;
        this.numCols = Math.floor(window.innerWidth / this.resolution);
        this.numRows = window.innerHeight / this.resolution;
        this.rows = [];
        for (let i = 0; i < this.numRows; i++) {
            let locY = resolution * i
            this.rows.push(new Row(locY, resolution, this.numCols));
        }
    }

    drawGrid() {

        this.rows.forEach(row => {
            row.drawRow();
        })
    }

    drawRowsOfGrid(index) {
        for (let i = 0; i < maxRowIndexToDrawTo; i++) {
            this.rows[i].drawRow();
        }
    }

    seedGrid() {

        this.rows.forEach(row => {
            row.cells.forEach(cell => {
                if (Math.random() < 0.05) {
                    cell.active = true;
                }
            });
        })
        // this.rows[0].cells[Math.floor(this.rows[0].cells.length / 2)].active = true
        // this.rows[0].cells.forEach(cell => {
        //     if (Math.random() < 0.05) {
        //         cell.active = true;
        //     }
        // });
    }

    populateRule(rule) {
        for (let i = 1; i < this.rows.length; i++) {
            let prevRow = this.rows[i - 1];
            let currRow = this.rows[i];
            this.populateRulePerRow(rule, prevRow, currRow);
        }

    }

    populateRulePerRow(rule, prevRow, currRow) {
        for (let j = 0; j < currRow.cells.length; j++) {
            let nextState;
            if (j == 0) {
                nextState = rule(prevRow.cells[j].active, prevRow.cells[j].active, prevRow.cells[j + 1].active);
            } else if (j == currRow.cells.length - 1) {
                nextState = rule(prevRow.cells[j - 1].active, prevRow.cells[j].active, false);
            } else {
                nextState = rule(prevRow.cells[j - 1].active, prevRow.cells[j].active, prevRow.cells[j + 1].active)
            }
            currRow.cells[j].active = nextState;
        }
    }
}