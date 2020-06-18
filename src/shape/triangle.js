
import Shape from '../shape'

class Triangle extends Shape {

    constructor() {
        super();
    }

    createTriangle(position) {
      let posX = super.xPositionCalulate(position);
      let posY = super.yPositionCalulate(position);
      let bodyColor = super.generateBodyColor();
      let figure = new PIXI.Graphics();
  
      figure.beginFill(bodyColor, 0.5);
      figure.lineStyle(4, 0xFFFFFF, 1);
      figure.moveTo(posX, posY);
      figure.lineTo(posX + 50, posY);
      figure.lineTo(posX, posY + 70);
      figure.lineTo(posX - 50, posY);
      figure.closePath();
      figure.endFill();
      figure.interactive = true;
      figure.hitArea = figure.getBounds();
  
      return figure;
    }

}

export default Triangle;