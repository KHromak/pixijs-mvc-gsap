import Shape from '../shape'

class Star extends Shape {

  constructor() {
    super();
  }

  createStar(position) {
    let posX = super.xPositionCalulate(position);
    let posY = super.yPositionCalulate(position);
    let bodyColor = super.generateBodyColor();
    let figure = new PIXI.Graphics();

    figure.lineStyle(4, 0xFFFFFF, 1);
    figure.beginFill(bodyColor, 0.5);
    figure.drawStar(posX, posY, 5, 50);
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();

    return figure;
  }

}

export default Star;