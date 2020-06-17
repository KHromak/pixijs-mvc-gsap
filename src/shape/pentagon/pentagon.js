import Shape from '../shape'

class Pentagon extends Shape {

      createPentagon(position) {

        let shape = super.createShape();
        let posX = super.xPositionCalulate(position);
        let posY = super.yPositionCalulate(position);
        let bodyColor = super.generateBodyColor();
        let path = [posX + 50, posY, posX + 20, posY + 40, posX - 40, posY + 40, posX - 40, posY - 40, posX + 20, posY - 40];
    
        shape.lineStyle(4, 0xFFFFFF);
        shape.beginFill(bodyColor, 0.5);
        shape.drawPolygon(path);
        shape.endFill();
        shape.interactive = true;
        shape.hitArea = figure.getBounds();
    
        return shape;
      }

    
}

export default Pentagon;