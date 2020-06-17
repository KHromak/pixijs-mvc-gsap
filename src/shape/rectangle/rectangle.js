
import Shape from '../shape'

class Rectangle extends Shape {

  constructor() {
    super();
  }

  createRect(position) {

    let posX = super.xPositionCalulate(position);
    let posY = super.yPositionCalulate(position);
    let bodyColor = super.generateBodyColor();
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawRect(posX - 40, posY, 80, 80);
    figure.interactive = true;
    figure.hitArea = figure.getBounds();

    return figure;
  }

}

export default Rectangle;