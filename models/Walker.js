class Walker {
    constructor(size, width, height) {
        this.x = Math.floor(width / 2);
        this.y = Math.floor(height / 2);
        this.size = size;
        this.width = width;
        this.height = height;
        this.setRandomStaringLocation();
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
        // if (this.x === Math.floor(this.width / 2)) {
        //     this.settRandomColor();
        // }
    }

    checkBounds = () => {

        if (this.x > this.width || this.x < 0 || this.y > this.height || this.y < 0) {
            this.setRandomStaringLocation();
        }
        // this.x = this.x > this.width ? Math.floor(this.width / 2) : this.x;
        // this.x = this.x < 0 ? Math.floor(this.width / 2) : this.x;
        // this.y = this.y > this.height ? Math.floor(this.height / 2) : this.y;
        // this.y = this.y < 0 ? Math.floor(this.height / 2) : this.y;
    }

    setRandomStaringLocation = () => {
        this.x = (Math.floor(Math.random() * (this.width / this.size))) * this.size;
        this.y = (Math.floor(Math.random() * (this.height / this.size))) * this.size;
    }

    settRandomColor = () => {
        // TODO : Implement this so that a random color is assigned to the object
        console.log("hellos");

    }
}

