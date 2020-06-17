import Shape from '../shape'

class Ellipse extends Shape {

    constructor() {
        super();
    }

    createEllipse(position) {
      let posX = super.xPositionCalulate(position);
      let posY = super.yPositionCalulate(position);
      let bodyColor = super.generateBodyColor();

      let figure = new PIXI.Graphics();
      figure.lineStyle(4, 0xFFFFFF, 1);
      figure.beginFill(bodyColor, 0.5);
      figure.drawEllipse(posX, posY, 80, 30);
      figure.interactive = true;
      figure.hitArea = figure.getBounds();
      figure.endFill();
  
      return figure;
    }

}

export default Ellipse;