import Shape from '../shape'

class Hexagon extends Shape {

    constructor() {
        super();
       
    }

    createHexagon(position) {
        
        let blankShape = super.createBlankShape(position);
        let posX = blankShape.posX;
        let posY = blankShape.posY;
        let shapeWithoutPath = blankShape.shape;
        let path = [posX + 50, posY + 25, posX, posY + 50, posX - 50, posY + 25, posX - 50, posY - 25, posX, posY - 50, posX + 50, posY - 25];

        let hexagon = shapeWithoutPath.drawPolygon(path);
        return hexagon;
    }
}

export default Hexagon;