class Walker {
    constructor() {
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.size = 15;
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
    }

    checkBounds = () => {
        this.x = this.x > window.innerWidth - this.size ? this.size : this.x;
        this.x = this.x < 0 + this.size ? window.innerWidth - this.size : this.x;
        this.y = this.y > window.innerHeight ? this.size : this.y;
        this.y = this.y < 0 + this.size ? window.innerHeight - this.size : this.y;
    }
}

