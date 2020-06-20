import Shape from './shape';

class Hexagon extends Shape {

    constructor(position) {
        super(position);
    }

    draw() {
        this.figure.drawPolygon([
            this.x + 50, this.y + 25,
            this.x, this.y + 50,
            this.x - 50, this.y + 25,
            this.x - 50, this.y - 25,
            this.x, this.y - 50,
            this.x + 50, this.y - 25
        ]);
    }
}

export default Hexagon;