class Walker {
    constructor(size, width, height) {
        this.x = Math.floor(width / 2);
        this.y = Math.floor(height / 2);
        this.size = size;
        this.width = width;
        this.height = height;
    }

    drawWalker = () => {
        push();
        noStroke();
        fill(20, 50);
        ellipse(this.x, this.y, this.size, this.size);
        pop();
    }

    walk = () => {
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
            [-this.size, -this.size], [0, -this.size], [this.size, -this.size],
            [-this.size, 0], [this.size, 0],
            [-this.size, this.size], [0, this.size], [this.size, this.size]
        ];
        let num = Math.floor(Math.random() * dir.length);
        this.x += dir[num][0];
        this.y += dir[num][1];
        this.checkBounds();
        if (this.x === Math.floor(this.width / 2)) {
            this.getRandomColor();
        }
    }

    checkBounds = () => {
        this.x = this.x > this.width ? Math.floor(this.width / 2) : this.x;
        this.x = this.x < 0 ? Math.floor(this.width / 2) : this.x;
        this.y = this.y > this.height ? Math.floor(this.height / 2) : this.y;
        this.y = this.y < 0 ? Math.floor(this.height / 2) : this.y;
    }

    getRandomColor = () => {
        console.log("hellos");

    }
}

