class Shape {

    constructor(position) {
        this.position = position;
        this.x = position.x;
        this.y = position.y;
        this.direction = position.direction;

        this.color = this.getColor();
        this.figure = new PIXI.Graphics();
        this.figure.interactive = true;

        this.setLineStyle(this.figure);
        this.beginFill(this.figure);
        this.draw();

        this.figure.hitArea = this.figure.getBounds();
        this.figure.endFill();
    }

    draw() {
    }

    setLineStyle() {
        this.figure.lineStyle(4, 0xFFFFFF, 1);
    }

    beginFill() {
        this.figure.beginFill(this.color, 0.5);
    }

    getColor() {
        return Math.floor(Math.random() * 0xFFFFFF);
    }

    clone() {
        let cloned = new this.constructor(this.position);
        cloned.figure.position = this.figure.position;
        return cloned;
    }

}

export default Shape;