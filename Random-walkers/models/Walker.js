class Walker {
    constructor(size, width, height, colors) {
        this.x = Math.floor(width / 2);
        this.y = Math.floor(height / 2);
        this.size = size;
        this.width = width;
        this.height = height;
        this.colors = colors;
        this.setRandomStaringLocation();
        this.colorIndex = this.getRandomColorIndex();
    }

    drawWalker() {
        push();
        noStroke();
        let c = this.colors[this.colorIndex];
        fill(c[0], c[1], c[2], 50);
        ellipse(this.x, this.y, this.size, this.size);
        pop();
    }

    walk() {
        // uncomment this if you want to use only caridnal steps and not diagonal steps
        // let dir = [
        //     [0, this.size], [this.size, 0], [0, -this.size], [-this.size, 0]
        // ];

        /**
         * the following arrows show the arrangment of the array in terms of direction reletive to the walker location
         *  \  |  /
         *   - o -
         *  /  |  \
         */
        let dir = [
            [-this.size, -this.size],
            [0, -this.size],
            [this.size, -this.size],
            [-this.size, 0],
            [this.size, 0],
            [-this.size, this.size],
            [0, this.size],
            [this.size, this.size]
        ];
        let num = Math.floor(Math.random() * dir.length);
        this.x += dir[num][0];
        this.y += dir[num][1];
        this.checkBounds();
    }

    checkBounds() {
        if (this.x > this.width || this.x < 0 || this.y > this.height || this.y < 0) {
            this.setRandomStaringLocation();
            this.colorIndex = this.getRandomColorIndex();
        }
    }

    setRandomStaringLocation() {
        this.x = Math.floor(Math.random() * (this.width / this.size)) * this.size;
        this.y = Math.floor(Math.random() * (this.height / this.size)) * this.size;
    }

    getRandomColorIndex() {
        return Math.floor(Math.random() * this.colors.length);
    }
}
