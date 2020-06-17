import Shape from '../shape'

class Hexagon extends Shape {

    constructor() {
        super();
       
    }

    createHexagon(position) {

        let shape = new PIXI.Graphics();

        let posX = super.xPositionCalulate(position);
        let posY = super.yPositionCalulate(position);
        let bodyColor = super.generateBodyColor();
        let path = [posX + 50, posY + 25, posX, posY + 50, posX - 50, posY + 25, posX - 50, posY - 25, posX, posY - 50, posX + 50, posY - 25];
        shape.lineStyle(4, 0xFFFFFF, 1);
        shape.beginFill(bodyColor, 0.5);
        shape.drawPolygon(path);
        shape.endFill();
        shape.interactive = true;
        shape.hitArea = shape.getBounds();

        return shape;
    }
}

export default Hexagon;