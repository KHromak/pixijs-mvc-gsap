import Shape from '../shape'

class Hexagon extends Shape {

    constructor() {
        super();
       
    }

    createHexagon(position) {

        let figure = new PIXI.Graphics();

        let posX = super.xPositionCalulate(position);
        let posY = super.yPositionCalulate(position);
        let bodyColor = super.generateBodyColor();
        let path = [posX + 50, posY + 25, posX, posY + 50, posX - 50, posY + 25, posX - 50, posY - 25, posX, posY - 50, posX + 50, posY - 25];
        figure.lineStyle(4, 0xFFFFFF, 1);
        figure.beginFill(bodyColor, 0.5);
        figure.drawPolygon(path);
        figure.endFill();
        figure.interactive = true;
        figure.hitArea = figure.getBounds();

        return figure;
    }
    
}

export default Hexagon;