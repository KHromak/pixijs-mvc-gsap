import Shape from './shape'

class Triangle extends Shape {

    constructor(position) {
        super(position);
    }

    draw() {
        this.figure.moveTo(this.x, this.y);
        this.figure.lineTo(this.x + 50, this.y);
        this.figure.lineTo(this.x, this.y + 70);
        this.figure.lineTo(this.x - 50, this.y);
        this.figure.closePath();
    }
}

export default Triangle;