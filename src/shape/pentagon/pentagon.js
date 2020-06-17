import Shape from '../shape'

class Pentagon extends Shape {

  createPentagon(position) {

    let posX = super.xPositionCalulate(position);
    let posY = super.yPositionCalulate(position);
    let bodyColor = super.generateBodyColor();
    let path = [posX + 50, posY, posX + 20, posY + 40, posX - 40, posY + 40, posX - 40, posY - 40, posX + 20, posY - 40];

    let figure = new PIXI.Graphics();
    figure.lineStyle(4, 0xFFFFFF);
    figure.beginFill(bodyColor, 0.5);
    figure.drawPolygon(path);
    figure.endFill();
    figure.interactive = true;
    figure.hitArea = figure.getBounds();

    return figure;
  }

}

export default Pentagon;